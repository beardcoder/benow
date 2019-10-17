---
title: Eigene Inhaltselemente im TYPO3 CMS 6.2.x und 7.x
datePublished: 09.05.2017
author: Markus Sommer
description: Einfach und schnell eigene Inhaltselemente im TYPO3 CMS erstellen. 
---

Wer hat nicht schon mal das Problem gehabt das ein Kunde oder man selbst ein youtube Video oder einen Button gebraucht hat. Dafür aber gleich eine Extension einbauen? Sein TYPO3 CMS mit zusätzlichen Features belasten, obwohl man diese vielleicht gar nicht braucht?

Was wir als Erstes brauchen ist eine eigene Extension als Grundlage. Diese muss nicht viel enthalten. Es reicht, wenn sie lediglich aus folgender Struktur besteht.

```text
eigene_inhaltselemente
    Configuration
        TypoScript
            setup.txt
    TCA
        Overrides
            tt_content.php
    Resources
        Private
            Templates
                NameDesContentEmementes.html
    ext_tables.php
    ext_emconf.php
```
Ich beziehe mich hier auf die Extbase Struktur. Jedem ist aber selbst überlassen wie er seine Extensions aufbaut. Falls man an größeren Projekten arbeitet sollte man sich auf alle Fälle auf eine Struktur festlegen. Diese erleichtert das Arbeiten im Team ungemein. Weitere Dateien die angelegt werden können sind z.b. ext_icon.png|gif|svg und ext_tables.sql. Alle weiteren Optionen findet ihr imhttp://wiki.typo3.org/Extension_Developers_GuideTYPO3 Wiki Developer Guide.

## ext_emconf.php
Als erstes befassen wir uns kurz mit der ext_emconf.php. Diese dient alleine dazu das wir später die Extension auch im TYPO3 Extensionmanager finden und aktivieren können. Ohne diese Aktivierung greifen unsere Einstellungen und Programmierungen nicht.

```php
$EM_CONF[$_EXTKEY] = array(
	'title' => 'Inhaltselemente',
	'description' => 'Eigene Inhaltselemente für meine Webseite',
	'category' => 'misc',
	'version' => '0.0.1',
	'dependencies' => 'cms,extbase,fluid',
	'state' => 'beta',
	'author' => 'Markus Sommer',
);
```

Genaue Details zu dieser Datei findet man im TYPO3 Wiki.

## ext_tables.php
Als nächstes kommt die wichtigste Datei. Hier wird die Extension konfiguriert und damit natürlich auch unser Inhaltselement.

Wir binden dazu 2 Codeblöcke ein die je nach Bedarf natürlich erweitert werden können.

## TypoScript
PageTS einbinden für den »Content Wizzard«

### 1. TypoScript einbinden

Das Einbinden des TypoScripts in dem wir die Konfiguration für das Inhaltselement angeben.

```php
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Eigene Inhaltselemente');
```

### 2. Zum Content Wizzard hinzufügen

Damit unser neues Element auch im »Content Wizzard« verfügbar ist müssen wir das PageTS erweitern um folgende Zeilen. Damit wir keine zusätzliche TypoScript Datei benötigen können wir eine Function des TYPO3 CORE's benutzen um unser PageTS einzubinden. Zudem Registrieren wir uns gleich einen Eigenen Tap namens OnePage um unsere Eigenen Elemente einfacher zu finden.

```php
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
mod {
	wizards.newContentElement.wizardItems.extra {
		header = OnePage
		elements {
			video_content {
				icon = ../typo3conf/ext/eigene_inhaltselemente/Resources/Public/Images/Backend/ContentElements/VideoContent.png
				title = Video Content Element 
				description = Ein Element für Youtube Videos
				tt_content_defValues {
					CType = video_content
				}
			}
		}
		show = *
	}
}
');
```

## tt_content erweitern »meine_extension/ Configuration/ TCA/ Overrides/ tt_content.php«

Dieser Teil definiert und registriert unser Inhaltselement im TCA. Im array »showitem« legen wir fest welche Felder unser Inhaltselement bekommen soll. Hier haben wir die freie Auswahl aus den Standartfeldern der Inhaltselemente die das TYPO3 CMS mit bringt.

Natürlich können wir hier auch eigene Felder erstellen. Diese kann man dann in der ext_tables.sql eintragen. Diese Datei enthält das SQL-Statement das die Tabellen erzeugt oder aktualisiert.

In meinem Beispiel benutze ich die Felder »bodytext« um die URL zum Video abzuspeichern. Im Feld "image" wird über das FAL wird ein Thumbnail gesetzt das wir später Ausgeben. Die Überschrift definieren wir über »header« und fügen über »subheader« eine Unterüberschrift ein. Danach fügen wir noch die Zugriffs und Extended Tabs hinzu. Diese dienen der Zeitgesteuerten Veröffentlichung und des Zugriffsschutzes falls man Frontenduser hat.

```php
$tca = array(
	'types' => array(
		'video_content' => array(
			'showitem' => '--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
	bodytext;Youtube Video URL,
	image;Thumbnail,
	header;Headline,
	subheader;Subheadline,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended'
		)
	),
	'columns' => array(
		'CType' => array(
			'config' => array(
				'items' => array(
					'video_content' => array(
						'Video Element', // Name des Inhaltselementes
						'video_content', // TCA Name des Inhaltselementes
						'EXT:eigene_inhaltselemente/Resources/Public/Images/Backend/ContentElements/VideoContent.png' // Bild des Inhaltelementes
					)
				)
			)
		)
	)
);

$GLOBALS['TCA']['tt_content'] = array_replace_recursive($GLOBALS['TCA']['tt_content'], $tca);
```

Seit der TYPO3CMS Version 6.2 werden Erweiterungen im TCA im Verzeichnis Configuration/TCA/Overrides abgelegt. Infos dazu findet ihr in diesem Slide http://de.slideshare.net/pk77/2015-04-tca-anderungen

## TypoScript »meine_extension/ Configuration/ TypoScript/ setup.txt«
So ab jetzt ist unser Inhaltselement im TYPO3 CMS verfügbar. Damit wir aber auch eine passende Ausgabe im Frontend bekommen müssen wir noch ein par Einstellungen im TypoScript vornehmen. Diese dienen allein dafür, dass unser Inhaltselement gerendert wird. Praktischerweise bringt TYPO3 schon die notwendigen Funktionen mit so das wir uns hier aus 2 Quellen bedienen können. Einmal das CSS_STYLED_CONTENT und als zweites FLUID.

Mit folgendem TypoScript legen wir das Rendering für das Inhaltselement fest. Wir benutzen dafür ein FLUID Template. Dieses ist sehr einfach zu konfigurieren und falls wir noch zusätzliche »ViewHelper« benötigen haben wir vollen zugriff auf die TYPO3 Funktionen.

Da wir das FAL benutzen um unser Vorschaubild zu Rendern packen wir das ganze in eine Fluid Variable um darauf ohne Probleme zugreifen zu können. Wir bedienen uns hier der Standardfunktion aus dem CSS_STYLED_CONTENT

```
tt_content.video_content = FLUIDTEMPLATE
tt_content.video_content {
	file = EXT:eigene_inhaltselemente/Resources/Private/Templates/VideoContent.html
	variables {
		previewImage = FILES
		previewImage {
			references {
				table = tt_content
				fieldName = image
			}
			renderObj = IMAGE
			renderObj {
				file.import.data = file:current:uid
				file.treatIdAsReference = 1
			}
		}
	}
}
```

## FLUID Template

Als letztes kommt das FLUID Template dran. Hier können wir auf die Felder mittels {data} zugreifen. In dieser Variable finden wir alle von TYPO3 gerenderten Felder.

Im FLUID Wiki von finden wir die Komplette Referenzen Hier kann man sich einfach spielen und das Inhaltselement nach Belieben anpassen.

```html
<div class="video-content">
    <div class="video-content__video">
        <a href="{data.bodytext}">{previewImage -> f:format.raw()}</a>
    </div>
    <div class="video-content__content">
        <h3>{data.header}</h3>
        <h4>{data.subheader}</h4>
    </div>
</div>
```

## Nachwort
So ab nun kann man ganz einfach weitere Inhaltselemente hinzufügen und so hinbiegen wie man sie gerne hätte. Wenn jemand Fragen oder Anregungen hat einfach an info@creativeworkspace.de schreiben. Ich bin auch jederzeit via Twitter erreichbar mit @beardcoder.

Viel Spaß beim Ausprobieren und herumexperimentieren.

Wer sich die Komplette Extension ansehen oder herunterladen möchte findet sie bei mir auf Github unter https://github.com/beardcoder/eigene_inhaltselemente

Vielen dank an:

http://typo3.org/ für die Bereitstellung des Wikis
