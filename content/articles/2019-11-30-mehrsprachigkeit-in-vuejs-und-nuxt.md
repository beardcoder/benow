---
title: 'Mehrsprachigkeit in VueJS und Nuxt'
createdAt: '2019-11-30T20:22:19.227Z'
description: 'Wenn man eine Neue seite erstellt oder eine Bestehende Seite Neu aufbaut stellt man sich zu beginn der Arbeit meist die Frage: „Ist die Zielgruppe meiner Webseite National oder International“. Wenn die Antwort „International“ lautet oder du von beginn an Flexibel bleiben Willst dann habe ich hier genau den Richtigen Artikel für dich. Denn das Projekt vue-i18n von Kazuya Kawaguchi hat hat mittlerweile über 120 Contributors und wird stetig weiter Entwickelt.'
author: 'Markus Sommer'
image: '/images/articles/mehrsprachigkeit-in-vuejs-und-nuxt.jpg'
type: Tutorial
---

Das VueJS Plugin vue-i18n könnt ihr euch auf GitHub ansehen https://github.com/kazupon/vue-i18n.
Dort findest du schon mal die Dokumentation http://kazupon.github.io/vue-i18n/ und erste Informationen zu dem Projekt. Diese Sind im Repo selbst leider sehr Spärlich aber, sobald man auf die Dokumentation geht, merkt man das Hier sehr viel Zeit und Liebe hineingeflossen ist.

## Installation

Die Installation des Plugins gestaltet sich erst einmal sehr einfach. Man kann es mittels Paketmanager yarn oder npm installieren.

```bash
yarn add vue-i18n # für VueJS
# oder
npm install vue-i18n # für VueJS

yarn add nuxt-i18n # für Nuxt
# oder
npm i nuxt-i18n # für Nuxt
```

Wenn man die vue-cli verwendet dann kann man das Plugin auch hier recht einfach Integrieren.

```bash
vue add vue-i18n
```

## Integration in VueJS

In einer normalen VueJS Applikation geht das sehr einfach.

Du brauchst lediglich ein Plugin anzulegen mit diesem Inhalt

```js
// plugins/vue-i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
```

Danach einfach das Plugin in Vue laden.

```js
// ./main.js
import '~/plugins/vue-i18n';

new Vue({
    render: h => h(App),
}).$mount('#app');
```

## Integration in Nuxt

Hier geht das um einige einfacher denn ein Entwickler hat schon ein fertiges Modul bereitgestellt das wir nach der Installation einfach in der Datei nuxt.config.js integrieren können. https://github.com/nuxt-community/nuxt-i18n

```js
export default {
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/nuxt-i18n
        'nuxt-i18n',
    ],
};
```

## Konfiguration

Jetzt gehts ans Eingemachte 😀. Da ich sehr gerne die Übersetzungen in eigenen Dateien vorhalte, damit ich sie einfach von Projekt zu Projekt übernehmen kann, oder zu den Übersetzern schicken kann, habe ich hier in diesem Artikel auf diese Option gewählt.

### Konfiguration Datei

Zuerst erstellen wir uns eine Konfiguration für unser Projekt damit wir definieren können welche Sprachen wir verwenden und wie sich vue-i18n verhalten soll.

```js
// ./i18n/index.js
export default {
    locales: [
        {
            code: 'de',
            iso: 'de-DE',
            name: 'Deutsch',
            file: 'de.js', // hier wird definiert wie die datei heißt aus der er die sprache importieren soll
        },
        {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en.js', // hier wird definiert wie die datei heißt aus der er die sprache importieren soll
        },
    ],
    defaultLocale: 'de',
    langDir: 'i18n/', // hier liegen unsere Sprachen
    lazy: true,
    vuex: {
        moduleName: 'i18n',
        mutations: {
            setLocale: false,
            setMessages: false,
        },
        preserveState: false,
    },
    vueI18n: {
        fallbackLocale: 'de',
    },
};
```

Diese Konfigurationsdatei wird nun einfach in die Integration unseres Plugins importiert. Dies sieht bei VueJS etwas anders aus als bei Nuxt.

```js
// plugins/vue-i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18n from '~/i18n';

Vue.use(VueI18n, i18n);
```

```js
import i18n from '~/i18n';
export default {
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        ['nuxt-i18n', i18n],
    ],
};
```

## Benutzung

Die Benutzung des Plugins unterscheidet sich nicht zwischen VueJS und Nuxt solange es nur um die Lokalisierung geht.

```html
<p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
```

### VueJS

Wenn es aber jetzt um den Switch der Sprache geht, sieht das schon anders aus. In einer normalen VueJS Anwendung geht das über die globale Variable `$i18n.locale`
Wichtig ist zu wissen das, wenn man sich in einer Komponente befindet man `$root` aufrufen muss da ansonsten nur die Komponente in der Sprache gewechselt wird.

```js
$root.$i18n.locale = 'de';
```

### Nuxt

In einer Nuxt Anwendung stehen uns für das Ändern der Sprache hier 2 Möglichkeiten zur Verfügung

Einmal das Wechseln der Sprache über einen Nuxt Link

```html
<nuxt-link
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
>
    {{ locale.name }}
</nuxt-link>
```

```js
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
        },
    },
};
```

Die andere Variante ist das Wechseln der Sprache über die Routen. Denn das Nuxt Module erweitert die Routen um einen Sprachparameter.

```js
[
    {
        path: '/',
        component: _3237362a,
        name: 'index___de',
    },
    {
        path: '/en/',
        component: _3237362a,
        name: 'index___en',
    },
    {
        path: '/about',
        component: _71a6ebb4,
        name: 'about___de',
    },
    {
        path: '/en/about',
        component: _71a6ebb4,
        name: 'about___en',
    },
];
```
