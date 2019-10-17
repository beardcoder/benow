---
title: Deploy nuxt.js static mit gitlab-ci
datePublished: 27.09.2019
author: Markus Sommer
description: In diesem Artikel zeige ich euch wie ihr eine Nuxt Application mit der Gitlab-CI bauen und auf dem Server ausrollen könne. 
---

## Vorbereitung

### Die App

Zuerst brauchen wir eine nuxt Applikation, die wir ausliefern möchten.
Diese können wir relativ einfach über einen Terminal Befehl erstellen.

```bash
npx create-nuxt-app my-website
```

### Das Repository 

Um den CI Prozess von Gitlab zu nutzen, reicht ein Kostenloser Account, in dem man ein Neues Repository anlegt oder ein bestehendes benutzt.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/3j0m2pr0yn2wf6x6qt8x.jpg)

Wie man ein neues Anlegt kann man auf der Seite https://docs.gitlab.com/ee/user/project/repository/#create-a-repository nachlesen

Nachdem man dies erledigt hat, muss man einen Private Key hinterlegen. Die CI braucht diesen um Daten via rsync ausliefern zu können.

Wie man ein Key Paar erstellt findet ihr hier. https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key

In meinem Fall wird die Variable SSH_PRIVATE_KEY genannt. Diese Bezeichnung brauchen wir später in unserer Konfiguration

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/ix24yyppgtjru8gq3bj9.jpg)

Den Public Key müsst ihr dann auf Euerem Server hinterlegen. **Wichtig** ist hier das der **Key** auch dem **Benutzer zugeordnet** wird der später auch von nginx benutzt wird, um die Seite auszuliefern. Meistens ist dies der www-data Benutzer.


### Abschluss der Vorbereitung

So mehr müsst ich auch schon nicht machen denn ab jetzt kommt es nur noch auf die Konfiguration an.

## Gitlab CI

Um die Gitlab CI anzusprechen brauchen wir eine Datei im root unseres Projektes.

Diese Datei trägt den Namen .gitlab-ci.yaml.

Sobald Gitlab diese Datei erkennt, wird der CI Runner Aktiv und führt die Darin enthaltenen Befehle aus.

### Image

Das Image, dass wir definieren wird für alle Befehle verwendet die nicht ein Explizites image besitzen. Wir verwenden des Node image da dies alles hat was wir zum Bauen unserer Applikation benötigen.

```yaml
image: node
```

### Variablen

Hier Definieren wir weitere Variablen um sie nicht immer wieder eingeben zu müssen und unsere Datei auch in anderen Projekten verwenden zu können.

```yaml
variables:
    RSYNC: rsync -rtqx --links --safe-links --chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r --delete

    PROD_URL: https://creativeworkspace.de/
    PROD_USER: web_www
    PROD_SERVER: 159.69.21.63
    PROD_PATH: /var/www/clients/client1/web1/web
    PROD_PORT: '22'
```

### Cache

Damit gitlab zwischen den Stages die Daten nicht immer neu herunterladen muss und auch ein erneutes Ausführen schneller geht. Lassen wir gitlab den node_modules Ordner speichern. Dies spart uns sehr viel zeit, wenn wir mehrere Builds in kurzen abständen machen.

```yaml
cache:
    paths:
        - node_modules/
```

### Die Stages

Damit wir eine Kontrolle haben welcher Prozess von Gitlab in welcher Reihenfolge ausgeführt wird erstellen wir 2 Stages.
Diese Referenzieren wir in unseren Aufgaben die, die Gitlab CI Ausführen soll

```yaml
stages:
    - build
    - deploy
```

### Die Aufgaben

Die erste Aufgabe die Gitlab für uns erledigen soll ist das Bauen der Application. Wir speichern uns danach den ordner *dist* als Artefakt damit wir diesen dann im 2. Schritt deployen können.

```yaml
build:
    stage: build
    before_script:
        - npm install
    script:
        - NODE_ENV=production npm run build
        - NODE_ENV=production npm run generate
    environment:
        name: production
    artifacts:
        expire_in: 1 hour
        name: '${CI_COMMIT_REF_NAME}'
        paths:
            - dist/
```

Als nächstes soll Gitlab für uns die Code Ausliefern.
Für diesen Schritt benutze ich nun ein anderes Image das eine RSYNC Kompenente besitzt.

Hier passiert jetzt sehr viel auf einmal. Zuerst Fügen wir unseren generierten SSH Key zum Image hinzu. Anschließend führen wir einen RSYNC auf unseren Server aus. Somit haben wir dann den Inhalt des **dist* Ordners auf unserem server in dem Pfad den wir in den Variablen angegeben haben.

```yaml
deploy:prod:
    stage: deploy
    image: 1drop/php-73-docker-utils
    environment:
        name: production
        url: https://creativeworkspace.de
    before_script:
        - eval $(ssh-agent -s)
        - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
        - mkdir -p ~/.ssh
        - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
        - cd dist/
    script:
        - $RSYNC -e "ssh -p $PROD_PORT" . $PROD_USER@$PROD_SERVER:$PROD_PATH
    only:
        - master

```

## Abschluss

Ab jetzt brauchen wir unserem nginx nur noch sagen, dass er die Daten aus diesem Verzeichnis ausliefern soll und fertig :)
