# B.M. Tanvir Hasan Amit — Portfolio Site

## How to view it
Just double-click `index.html` (or open it with your browser). No build step, no server needed — it's plain HTML/CSS/JS.

## How to update things

- **Your photo:** replace `assets/images/profile/profile.jpg` with your real photo (keep the same filename, or update the `src` in `index.html`).
- **Skills & education:** edit `data/content.js`.
- **Projects:** edit `data/projects.js` — copy the example object, uncomment it, fill in your real project details.
- **Assignments:** edit `data/assignments.js`.
- **Certificates:** edit `data/certificates.js`.

Put any images/videos/PDFs you reference inside the matching `assets/` subfolder (`assets/images/projects`, `assets/videos`, `assets/certificates`, `assets/assignments`).

## Deploying it online (free options)
- **GitHub Pages:** push this folder to a GitHub repo, then enable Pages in repo settings.
- **Netlify / Vercel:** drag-and-drop this folder onto their dashboard for an instant live link.

## Folder structure
```
tanvir-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
├── data/
│   ├── content.js
│   ├── projects.js
│   ├── assignments.js
│   └── certificates.js
└── assets/
    ├── images/
    │   ├── profile/profile.jpg
    │   └── projects/
    ├── videos/
    ├── certificates/
    └── assignments/
```
