---
title: 'Sitemap in TYPO3 leicht gemacht'
date: '2018-10-10T17:28:00.000Z'
description: 'Eine Sitemap hat viele Vorteile, vor allem im Bereich der Suchmaschinenoptimierung (SEO). Sie ist hilfreich um eine Seite schnell von einem Crawler indexieren zu lassen und auf neue Seiten hinzuweisen.'
author: 'Markus Sommer'
image: '/images/blog/2018-10-10-sitemap-fuer-typo3-leicht-gemacht-full.jpg'
thumbnail: '/images/blog/2018-10-10-sitemap-fuer-typo3-leicht-gemacht-thumbnail.jpg'
---

Ebenfalls werden Seiten, die aktualisiert werden, schneller in den Index der Suchmaschinen (z.b. Google, Yahoo, DuckDuckGo, usw.) aufgenommen.

TYPO3 gibt dem Programmierer oder Integrator viele Möglichkeiten zur Hand um diverse Seitentypen zu erstellen (z.B. dynamische Seiten über Extensions wie news), was aber leider die Erstellung einer Sitemap erschwert.

Dafür gibt es jetzt eine Abhilfe. Mit meiner Extension, dem Sitemap Generator für TYPO3, war es noch nie einfacher eine Sitemap zu erstellen. Einfach die Extension aus dem TER oder via Composer laden und aktivieren [https://extensions.typo3.org/extension/sitemap_generator](https://extensions.typo3.org/extension/sitemap_generator/) Danach steht ein neues Template zur Verfügung, welches über den Template Editor eingebunden werden kann.

Mit einem einfachen TypoScript kann anschließend jeder Datensatztyp eingebunden werden.

Siehe: <https://docs.typo3.org/>

Die Sitemap ist danach über die URL deiner Website aufrufbar. https://www.deine.domain/index.php?id=1&type=1449874941.

Man kann sich die URL auch von RealURL bauen lassen. Dann ist sie auch für Suchmaschinen sehr schön lesbar.
