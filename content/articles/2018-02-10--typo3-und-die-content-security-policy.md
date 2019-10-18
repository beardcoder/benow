---
title: TYPO3 und die Content Security Policy
datePublished: 2018-02-10
author: Markus Sommer
description: Was ist eigentlich die Content Security Policy und warum sollte ich sie einsetzen? Eine integration in TYPO3 
---

Wikipedia bescheib das Problem folgendermaßen:

Webseiten können aktive Inhalte beispielsweise in Form von JavaScript-Code enthalten. Wenn die Webbrowser diesen Code ausführen, erzwingen sie die Einhaltung der Same-Origin-Policy. Dies bedeutet, dass Code von einer Quelle nicht auf Inhalte einer anderen Quelle zugreifen darf. So darf beispielsweise der Code in der Webseite eines Angreifers nicht auf die Elemente einer Onlinebanking-Webseite zugreifen.

In der Praxis sind jedoch Cross-Site-Scripting-Schwachstellen sehr verbreitet, wodurch die Same-Origin-Policy ausgehebelt wird. Eine Cross-Site-Scripting-Schwachstelle entsteht, wenn sich eine Webseite durch fehlerhafte Maskierung Code unterschieben lässt. Aus Sicht des Browsers kommt dieser untergeschobene Code aus der gleichen Quelle wie die angegriffene Webseite.

##Die Lösung

Mittels Header Variable wird der Browser dazu veranlasst Scripte und Anweisungen im Quelltext zu Prüfen und gegebenenfalls nicht auszuführen.

Dies Bedeutet aber auch das viele Funktionen die eine Website benutzt wie z.b. Google Fonts oder Externe Bibliotheken oder CDN's in Ausnahmen definiert werden müssen. Um das Ganze zu vereinfachen gibt es die Webseite <a href="https://www.cspisawesome.com/">https://www.cspisawesome.com/</a>. Diese ermöglicht uns für unsere Seite die Passende Content Security Policy zu generieren.

## Einbindung

Als erstes kommt uns natürlich in den Sinn das ganze über unseren Webserver einzubinden. Z.b. über den Apache (.htaccess)

```
Header set Content-Security-Policy "default-src 'none'"
```

Es gibt dabei leider das Problem das es bei jedem Request eingebunden wird. Also auch bei jedem Bild oder aber auch im Backend. Was es danach leider unmöglich macht das Backend zu bedienen außer man gibt alles wieder Frei. Was ja auch nicht der Sinn der Sache ist.

TypoScript: die bessere alternative
TypoScript erlaubt uns das ganze sehr einfach zu erstellen. Hier können wir nämlich nur unsere TYPO3 Frontendausgabe mit der Content Security Policy versehen. Ohne das unser TYPO3 Backend oder die Assets beeinflusst werden.

```
config.additionalHeaders {
    10.header = Content-Security-Policy: default-src 'none'
}
```

Sobald wir das ergänzt haben wird ab jetzt im Frontend immer dieser Header mit ausgegeben.
