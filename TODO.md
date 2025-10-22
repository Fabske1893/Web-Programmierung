# Projekt To‑Do Liste — Rezept-Webservice Frontend

Diese Datei enthält die priorisierte To‑Do‑Liste für das Frontend (Stand: 22.10.2025).

## Top-Prioritäten
1. HTML-Struktur & Semantik reparieren (HOCH)
   - Korrigiere fehlerhafte HTML-Struktur auf allen Seiten: `<head>` und `<body>` korrekt platzieren, `header`/`main`/`footer` in `<body>` verwenden.
   - setze aussagekräftige `<title>`-Tags.
   - Akzeptanzkriterien: alle HTML-Dateien sind strukturell valide; jede Seite hat passenden Title; semantische Container verwendet.

2. API-Layer / `js/api.js` erstellen (HOCH)
   - Zentralisiere alle Netzwerkaufrufe: `getRecipes()`, `getRecipe(id)`, `postRecipe(formData)`, `deleteRecipe(id)`.
   - Einheitliche Base-URL und `Authorization: Bearer <token>` Header.
   - Dateien: `js/api.js` plus Anpassung der Stellen, die bisher direkt AJAX nutzen.
   - Akzeptanzkriterien: Alle Netzwerkaufrufe laufen über `js/api.js`; Fehler zentral behandelt.

---

## Vollständige To‑Do Liste (priorisiert)

- HTML-Struktur & Semantik reparieren
  - Korrigiere fehlerhafte HTML-Struktur auf allen Seiten: `<head>` und `<body>` korrekt platzieren, Header/Footer in `<body>`, einheitliches `lang`-Attribut (z.B. `de`), aussagekräftige `<title>`-Tags.
  - Dateien: `*.html` (insbesondere `Homepage.html`, `recipes/CreateRecipe.html`, `recipes/recipe-detail.html`, `login/Login.html`, `register/Registration.html`, `admin/adminUI.html`).
  - Akzeptanzkriterien: alle HTML-Dateien validieren mit keinem strukturellem Fehler; jede Seite hat einen passenden Title; `header`, `main`, `footer` verwendet.

- Responsive Layouts & Breakpoints erweitern
  - Mobile-first Media queries, Logo-Positionierung responsive machen, teste bei 320/375/768/1024px.

- Accessibility & Keyboard/Focus
  - Fokus-Stile, ARIA-Attribute ergänzen, aussagekräftige alt-Attribute, Headings prüfen.

- API-Layer / `js/api.js` erstellen
  - Zentrale Fetch-/AJAX-Wrapper, Authorization-Header, zentrale Fehlerbehandlung.

- Sichere DOM-Manipulation (XSS-Vermeidung)
  - Ersetze `innerHTML` durch `textContent` oder sichere DOM-Erstellung; ggf. DOMPurify verwenden.

- Sortierung & Filter vollständig implementieren
  - Implementiere oder delegiere Sort/Filter; nutze `data-` Attribute beim Rendern.

- Admin-Funktionen: Laden & Löschen implementieren
  - Lade Rezepte via API, fülle Select, implementiere Lösch-Calls mit Bestätigung.

- Form-Validation & UX (Clientseitig)
  - HTML5-Validation + JS-Checks (E-Mail, Passwortlänge), Inline-Fehlermeldungen.

- Auth-Handling & Token-Management
  - Token sicher speichern, prüfen und beim Logoff leeren; Authorization Header verwenden.

- Performance-Verbesserungen
  - `loading="lazy"` für Bilder, Minify für Prod, evtl. CDN für jQuery oder jQuery entfernen.

- Linters & Tests einführen
  - ESLint, Prettier, Jest, evtl. GitHub Actions für CI.

- Fehler- und Loading-UI
  - Wiederverwendbarer Loading-Spinner, Fehlerbanner, Empty-States (z. B. `js/ui.js`).

- Dokumentation & README
  - `README.md` mit Projekt-Setup, API-URL-Einstellungen, Deploy-Notizen und Token-Handling.



