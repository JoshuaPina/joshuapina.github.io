# Joshua Piña's Portfolio

Welcome to the repository for the personal portfolio of **Joshua Piña**, a Data Scientist, Program Manager, and U.S. Army Veteran.

> **Note:** This repository is currently in transition. The portfolio has been replaced with a Wikipedia-styled biographical page while the original Matrix-themed experience is being redesigned and merged. The original version is preserved on the `original-portfolio` branch.

---

## Current Version — Wikipedia-Style Portfolio

The live site at [joshuapina.github.io](https://joshuapina.github.io) currently features a Wikipedia-styled biographical portfolio page, built entirely with HTML, CSS, and vanilla JavaScript — no frameworks or dependencies.

### Pages

| File | Description | Status |
|---|---|---|
| `index.html` | Main biography page (Wikipedia style) | ✅ Live |
| `contact.html` | Contact methods and professional links | ✅ Live |
| `under-construction.html` | Placeholder for pages in development | ✅ Live |

### Current Features

- **Wikipedia skin** — Faithful recreation of the Vector 2022 Wikipedia layout, including infobox, table of contents, hatnotes, reference citations, and side-boxes
- **Google Translate** — English, Spanish, and French via the Google Translate widget, positioned in the article title bar
- **GitHub search** — Search bar scoped to `JoshuaPina` and `gsu-ds` GitHub organizations via the GitHub search API
- **Dynamic dates** — Relative timestamps ("6 months ago") and copyright year calculated at page load via JavaScript
- **Inline repo links** — Each project section links directly to its corresponding GitHub repository
- **Further Repositories** — Dedicated section listing all public repos with descriptions
- **Responsive assets** — Profile photo, signature wordmark, and school logos

### Asset Structure

```
Assets/
├── css/
│   ├── wiki.css          # Wikipedia Vector 2022 base styles
│   └── wikis.css         # Supplementary skin styles
└── images/
```
---

## Previous Version — Matrix-Themed Portfolio (preserved on `original-portfolio` branch)

The original portfolio featured an immersive Matrix-themed landing page and interactive terminal interface.

### Features (to be re-integrated)

- **Matrix Landing Page** — Digital rain animation entry experience
- **Interactive Terminal** — Command-line interface for exploring the portfolio (`help`, `about`, `skills`, `projects`, `contact`, `social`, `gui`, `clear`, `date`, `echo`)
  - Tab autocompletion and command history navigation
- **Visual Portfolio (GUI mode)** — Traditional graphical interface as an alternative to the terminal
- **Resume & Resources** — Downloadable resume and professional documents

### Previous Structure

```
index.html              # Matrix landing page entry point
script.js               # Matrix rain animation and entry logic
styles.css              # Landing page styles
pages/
├── terminal/
│   ├── terminal_home.html
│   ├── terminal.js
│   └── terminal.css
├── home.html
├── aboutme.html
└── projects.html
data/                   # Downloadable resources (PDFs, resumes)
images/                 # Site images
```

---

## Planned Features

The following will be developed and merged in a future update:

- [ ] **Blog** — Technical writing, career reflections, and data science commentary
- [ ] **Recent Projects** — Live project updates and works-in-progress
- [ ] **The Primer** — Curated resource guide for data science fundamentals
- [ ] **Merged landing experience** — Matrix entry page re-integrated with the Wikipedia-style biography
- [ ] **Terminal re-integration** — Interactive terminal accessible from the main portfolio
- [ ] **Dark mode** — Toggle between light and dark Wikipedia skin

---

## Running Locally

Serve the files using a simple HTTP server from the project root:

**Python:**
```bash
python3 -m http.server
```
Then visit `http://localhost:8000`.

**VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

---

## Testing

Run static-site integrity tests locally:

```bash
python3 -m pip install -r requirements-test.txt
pytest -q
```

Current tests cover:

- Core page presence (`index.html`, `contact.html`, `construction.html`)
- Required HTML titles
- Resolution of local relative links and asset paths

---

## CI/CD

GitHub Actions workflow: `.github/workflows/ci-cd.yml`

- **CI:** runs pytest on every pull request and push to `main`
- **CD:** deploys to GitHub Pages only after tests pass on pushes to `main`

If deployment is not yet active, enable GitHub Pages in repository settings and set source to **GitHub Actions**.

---

## Branches

| Branch | Description |
|---|---|
| `main` | Current live site (Wikipedia-style portfolio) |
| `original-portfolio` | Original Matrix-themed portfolio, preserved for future merging |