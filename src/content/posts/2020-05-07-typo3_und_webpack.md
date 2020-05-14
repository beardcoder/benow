---
title: 'TYPO3 mit webpack und Code Splitting'
date: '2020-05-07T23:10:00.000Z'
description: 'Webpack Integration in TYPO3 mit Code Splitting und PostCSS. Dieser Beitrag ist vor allem für Frontend Spezialisten gedacht die selbst ein Webpack setup aufbauen möchten. Damit lassen sich viele verschiedene Setups Realisieren. React und Vue.js lassen sich einfach Integrieren und sogar AngularJS kann mit etwas aufwand zum laufen gebracht werden. In diesem Beispiel benütze ich React und TypeScript um auf die Eigenheiten von verschiedenen Technologien einzugehen.'
author: 'Markus Sommer'
image: '/images/blog/typo3_und_webpack.jpg'
thumbnail: '/images/blog/typo3_und_webpack-thumbnail.jpg'
---

## TL;DR

Hier ist das git Repo in dem ihr den Kompletten Code Findet der in diesem Blog Verwendet wird.
https://github.com/beardcoder/webpack_typo3

## Vorbereitung

Als aller erstes Brachen wir eine lauffähige TYPO3 Instanz. Viele von euch haben vielleicht schon ein Vorhanden Projekt das sie Umbauen möchten. Auch dies kann einfach realisiert werden.

Ich verwende für diesen Blog Artikel Composer und Docker um schnell eine kleine TYPO3 Instanz zu erstellen

### TYPO3 installieren

Mit diesem Befehl installieren wir uns TYPO3
`composer create-project typo3/cms-base-distribution webpack_typo3`

Nach der Ausführung dieses Befehls finden wir im Ordner `webpack_typo3` unsere installation.

Jetzt brauchen wir nur noch eine Datenbank die wir uns entweder Local aufsetzen können oder mittels Docker starten.
Ich verwende hier an dieser Stelle Docker um schnell ein Ergebnis zu erhalten. Wer mehr wissen möchte über Docker und TYPO3 wird bei https://typo3worx.eu/ fündig.

Mit diesem Befehl starten wir unsere Datenbank
`docker run --name typo3_db -e MYSQL_DATABASE=dev -e MYSQL_USER=dev -e MYSQL_PASSWORD=dev -e MYSQL_RANDOM_ROOT_PASSWORD=1 -p 13306:3306 -d mariadb --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci`

### TYPO3 Starten

mit dem in PHP Integrierten Webserver Starten wir unsere Instanz um eine Extension zu entwickeln

Der Befehl `php -S localhost:8080` wird im Verzeichnis `public` von TYPO3 Ausgeführt.

Danach Steht unsere TYPO3 Instanz unter http://localhost:8080 zur Verfügung. Weiter gehe ich hier nicht auf die Installation von TYPO3 ein. Wenn ihr dazu Mehr erfahren Wollt schreibt mich einfach an.

### Erstellen einer Design und Frontend Extension

Um Unser Webpack Setup zu erstellen und mit TYPO3 zu verbinden brauchen wir in erster Linie eine kleine Extension um das nötige TypoScript zu laden.

Ich nenne sie der Einfachheit halber `design`.
Dazu erstellen wir einen Ordner im Root unseres Projektes names `packages`.
in diesem erstellen wir eine Ordner mit dem Namen der Extension. In unserem fall `design`.

Das Setup der Extension basiert auf dem Setup von Helmut Hummel https://github.com/helhum/ext_scaffold. Ich werde die hier erstellte Extension Euch am ende des Beitrags verlinken.

### Setup der Seite.

Diesen Bereich halte ich sehr kurz. Es geht lediglich darum das wir danach eine Möglichkeit haben unsere Daten einzubinden. Darum an dieser Stelle nur ein Minimal Setup im TypoScript

```
page = PAGE
page {
    typeNum = 0

    100 = CONTENT
    100 {
        table = tt_content
        select {
            orderBy = sorting
            where = {#colPos}=0
        }
    }
}
```

Danach sollten wir die Möglichkeit haben unser Frontend aufzurufen und auch schon mal Content anzulegen.

## Setup Webpack

Um jetzt unser Frontend zu bauen brauchen wir natürlich erst einmal einen Platz wo wir anfangen.
Hierfür erstellen wir in unserer Extension einen Order. `Resources/Private/Frontend`

Wir verwenden hierfür den Private Ordner da dieser normalerweise geschützt ist und wir unser Setup natürlich nicht im Browser aufrufen müssen.

### Initialisieren von Yarn

Über den Befehl `Yarn init` in unserem neuen Ordner erstellen wir eine `package.json` die alle Abhängigkeiten enthält die wir später für unser Frontend und zum Bauen des Frontends benötigen.

Die `package.json` sollte dann in etwa so aussehen.

##### package.json

```
{
    "name": "frontend",
    "version": "1.0.0",
    "private": true
}
```

### Installieren von Webpack und Webpack CLI

Mit dem Befehl `Yarn add -D webpack webpack-cli cross-env` fügen wir unseren Abhängigkeiten Webpack hinzu.
Ich teile meine Abhängigkeiten immer auf in Dev `-D` für den Build Prozess und Normal für Abhängigkeiten die ich im Frontend benötige.

Nach der Installation fügen wir einen `scripts` Bereich in der `package.json` ein um webpack staten zu können.

Danach sollte die `package.json` in etwa so aussehen

##### package.json

```
{
    "name": "frontend",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "private": true,
    "scripts": {
        "build": "cross-env NODE_ENV=production webpack",
        "dev": "cross-env NODE_ENV=development webpack --colors --watch"
    },
    "devDependencies": {
        "webpack": "^4.43.0",
        "webpack-cli": "^3.3.11"
    }
}
```

### Webpack Config

Für Webpack brachen wir jetzt eine Konfigurationsdatei um anschließend alle Einstellungen vorzunehmen.

Hierfür erstellen wir eine Datei namens `webpack.config.js` im Ordner `Resources/Private/Frontend`.
Die Konfiguration beinhaltet weitere Pakete die wir benötigen.

-   Das _clean-webpack-plugin_ das dafür sorgt das unser „Output“ Ordner immer sauber ist.
-   Das _mini-css-extract-plugin_ das wir dazu benützen unser CSS in eine Seperate Datei zu extrahieren.
-   Den _css-loader_ der dafür sorgt das wir innerhalb unser JS Dateien CSS importieren können
-   Den _PostCSS-loader_ den wir dazu benützen um unser CSS z.b. zu minimieren und zu Optieren
-   Den _babel-loader_ der dafür sorgt das wir TypeScript in JavaScript umwandeln können und anschließend unser JavaScript für mehrere Browser Optimieren können.
-   Das _terser-webpack-plugin_ um unser JavaScript zu minimieren.

Die Abhängigkeiten dafür installieren wir wieder über Yarn als Packetmanager

`‌Yarn add -D mini-css-extract-plugin clean-webpack-plugin terser-webpack-plugin css-loader PostCSS-loader`

Die vollständige Konfiguration sieht dann im Ende so aus

##### webpack.config.js

```
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isDev ? 'source-map' : 'cheap-source-map',
    entry: {
        main: './src/main.ts',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { sourceMap: isDev },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            import: false,
                            importLoaders: 1,
                            sourceMap: isDev,
                        },
                    },
                    { loader: 'PostCSS-loader', options: { sourceMap: isDev } },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            extends: './.babelrc',
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../../Public/Frontend/'),
        filename: 'Scripts/[name].js',
        chunkFilename: 'Scripts/[name].[contenthash].js',
        publicPath: '/typo3conf/ext/design/Resources/Public/Frontend/',
    },
    optimization: {
        minimize: !isDev,
        minimizer: [new TerserJSPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'Styles/[name].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'Scripts/'),
            '~': path.resolve(__dirname, 'Scripts/'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    },
};
```

Wir haben Webpack an dieser stelle Ebenfalls gesagt wo wir unsere JavaScript und CSS Daten haben möchten. Nämlich unter `Resources/Public/Frontend`. Diesen Pfad müssen wir anschließend in Unser TYPO3 Setup integrieren.

### PostCSS für CSS

Um PostCSS betreiben und Konfigurieren zu können brauchen wir diese Datei `packages/design/Resources/Private/Frontend/postcss.config.js`.

Ich habe in meinem Beispiel schon einige Praktische Plugins für PostCSS. Diese werden ebenfalls über Yarn installiert.
Was die Plugins im Einzelnen machen kann an auf der Seite der Plugins Nachlesen.

##### postcss.config.js

```
const config = {
    plugins: [
        require('PostCSS-import'),
        require('precss'),
        require('PostCSS-preset-env'),
        require('cssnano'),
    ],
};

export default config;
```

### TypeScript und Babel

Jetzt brauchen wir nur noch 2 Sachen einrichten und zwar Babel und TypeScript.
Ich verwende hier absichtlich Babel um TypeScript zu Kompilieren da wir dadurch auch Zugriff auf viele Babel Funktionen haben.

#### TypeScript Konfiguration

Hier passiert nicht viel 🙂.
wir erstellen eine Datei `packages/design/Resources/Private/Frontend/tsconfig.json` die für TypeScript eine art Konfigurationsdatei ist. Was die einzelnen Settings machen kann man auf der Seite https://www.TypeScriptlang.org/docs/handbook/tsconfig-json.html nachlesen.

##### tsconfig.json

```
{
    "compilerOptions": {
        "allowJs": true,
        "alwaysStrict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "isolatedModules": true,
        "lib": ["dom", "es2017"],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "strict": true,
        "jsx": "preserve",
        "target": "esnext",
        "baseUrl": ".",
        "paths": {
            "~/*": ["./src/*"],
            "@/*": ["./src/*"]
        }
    },
    "exclude": ["node_modules"],
    "include": ["**/*.ts", "**/*.tsx"]
}
```

#### Bable config

In dieser Datei Konfigurieren wir das Verhalten von Babel. dafür benötigen wir ein par Abhängigkeiten.

Diese Abhängigkeiten fügen wie wieder mit Yarn hinzu `Yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-TypeScript`

Konfiguration Datei `Resources/Private/Frontend/.babelrc`

##### .babelrc

```
{
    "presets": ["@babel/env", "@babel/react", "@babel/TypeScript"]
}
```

### Entrypoint und erste Funktionen

Nachdem wir alles eingerichtet haben können wir unsere erste kleine Application Schreiben um sie anschließen in TYPO3 Einzubinden.
Erstellen wir die Datei `packages/design/Resources/Private/Frontend/src/main.ts` mit Folgendem Inhalt

##### main.ts

```
import React from 'react';
import ReactDOM from 'react-dom';

const helloElement = document.getElementById('hello');

// Webpack lädt diese Daten asynchron wenn das Element vorhanden ist. Damit kann man sicherstellen das die JS Dateien immer so klein wie möglich gehalten werden
if (helloElement) {
    import(/* webpackChunkName: "hello" */ './components/Hello').then(
        ({ default: Hello }) => {
            ReactDOM.render(React.createElement(Hello), helloElement);
        }
    );
}

```

### Erste React App

In der Datei `packages/design/Resources/Private/Frontend/src/components/Hello.tsx` erstellen wir nun unsere Kleine React App die wir später über TYPO3 Einbinden wollen.
Ich habe hier einfach mal die Ausgabe eines kleinen Strings gebaut. Natürlich kann man hier sehr viel einbinden und erstellen. Ich habe im Laufe dieses Blogs auch Tests gemacht wie man Slider oder andere Elemente umsetzen kann.

##### Hello.tsx

```
import React from 'react';

export default function Hello() {
    return <div>TYPO3 + Webpack + ☕️ = ❤️</div>;
}
```

### TypoScript erweitern für React App

Jetzt müssen wir natürlich nur noch um das Element auch ausgeben zu können unser TypoScript erweitern.

Ich habe dies einfach in der setup.txt gemacht.

```
page = PAGE
page {
    typeNum = 0

		# Einbinden der Hauptdatei alle weiteren werden asynchron geladen
    includeJSFooter {
        main = EXT:design/Resources/Public/Frontend/Scripts/main.js
    }

		# Hier wird die React App geladen
    10 = TEXT
    10.value = <div id='hello'>React App</div>

    100 = CONTENT
    100 {
        table = tt_content
        select {
            orderBy = sorting
            where = {#colPos}=0
        }
    }
}
```

## Ideen

Mit dieser Technik kann man ohne Problem alle Elemente abbilden die man bei einem Modernen Frontend Braucht.
Ich habe mir im laufe des Blogs ein Contentelement mit einem Slider gebaut. Die Bilder werden über das FAL ans Frontend als JSON übergeben und anschließend von React als Slider gerendert.
