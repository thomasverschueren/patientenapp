# Patiëntenapp – Dienst Orthopedie, Jan Yperman Ziekenhuis

Web-app met informatie vóór en na een orthopedische ingreep, per gewricht en per ingreep.
Patiënten kunnen de app op het beginscherm van hun gsm zetten en ze werkt ook zonder internet.

## Wat zit erin

| Bestand / map | Inhoud |
|---|---|
| `index.html` | De volledige app: startpagina, gewrichten, alle infofiches, "Mijn opvolging" en "Vraag of probleem" |
| `manifest.webmanifest` | Naam, kleuren en icoon voor "Zet op beginscherm" |
| `sw.js` | Service worker: maakt de app offline beschikbaar |
| `icons/` | App-iconen |
| `artsen/` | Foto's van de chirurgen |
| `*.jpg` | Afbeeldingen in de fiches |
| `.nojekyll` | Zorgt dat GitHub Pages de bestanden ongewijzigd toont |

## Online zetten met GitHub Pages

1. Maak op github.com een nieuwe repository aan, bijvoorbeeld `patientenapp`
   (bij voorkeur onder een organisatie-account van de dienst).
2. Klik **Add file → Upload files** en sleep **de inhoud** van deze map in het venster
   (dus `index.html`, `sw.js`, de mappen `icons` en `artsen`, …, niet de map zelf).
   Let op: het verborgen bestand `.nojekyll` moet mee; lukt dat niet via slepen, maak het dan
   aan via **Add file → Create new file** met als naam `.nojekyll` (leeg laten).
3. Klik **Commit changes**.
4. Ga naar **Settings → Pages**. Kies bij *Source* **Deploy from a branch**, branch **main**, map **/ (root)**, en klik **Save**.
5. Na ongeveer een minuut staat de app op `https://<accountnaam>.github.io/patientenapp/`.

Eigen adres (bv. `app.orthopedie-yperman.be`): laat de IT een CNAME-record aanmaken naar
`<accountnaam>.github.io` en vul het adres in bij **Settings → Pages → Custom domain**. Vink daarna **Enforce HTTPS** aan.

## Een fiche aanpassen

Alle inhoud staat in `index.html`.

- Elke fiche is een blok `<div class="view" id="v-<naam>">`, bv. `id="v-rotator-cuff-herstel"`.
  Zoek op die naam en pas de tekst aan.
- De lijst van gewrichten, chirurgen en ingrepen staat in het script, in de lijst `const J=[ … ]`.
- De momenten voor "Mijn opvolging" staan in `const MS={ … }` (aantal dagen na de operatie).
- **Na elke wijziging:** verhoog `VERSIE` bovenaan `sw.js` (bv. `2026-11-18-2`). Anders blijven telefoons
  die de app al gebruiken de oude versie tonen.

### Werken met voorstellen en goedkeuring (aanbevolen)

1. Bewerk een bestand op GitHub (potloodicoon) en kies onderaan **Create a new branch … and start a pull request**.
2. De verantwoordelijke chirurg bekijkt de wijzigingen en keurt goed met **Merge pull request**.
3. Pas na goedkeuring komt de wijziging online.

Stel in **Settings → Branches** een regel in voor `main` met *Require a pull request before merging*,
zodat niets online komt zonder nazicht.

## Vóór gebruik door patiënten

- [ ] Elke chirurg heeft de fiches van zijn subspecialisatie gevalideerd; daarna mogen de labels
      "Concept – nog te valideren" weg (zoek op `ver concept`).
- [ ] Rechten op beelden geregeld: `reversed-prothese.jpg` (© Medacta), `rc-voorzijde.jpg` en
      `rc-achterzijde.jpg` (anatomie-illustraties), foto's van de artsen, figuur van de website.
- [ ] Akkoord van de dienst communicatie en de IT van het ziekenhuis.
- [ ] Nagegaan of de app (met de persoonlijke tijdlijn in "Mijn opvolging") onder de MDR-regelgeving valt.

## Privacy

De app verzamelt en verstuurt geen gegevens. "Mijn opvolging" bewaart de operatiedatum en afspraken
enkel lokaal op het toestel van de patiënt. Zet nooit patiëntgegevens in deze repository.

## Contact

Dienst Orthopedie – Jan Yperman Ziekenhuis, Briekestraat 12, 8900 Ieper · 057 35 73 70 · secortho@yperman.net
