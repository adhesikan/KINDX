# KINDX

A minimal, asset-free landing page highlighting KINDX services. The project uses plain HTML, CSS, and JavaScript with inline SVG logos and no external images or binary files. All site assets live in `public/` so static hosts can serve the directory root without extra configuration.

## Structure
- `public/index.html` — markup for the landing page sections (hero, solutions, approach, contact) with inline SVG logos.
- `public/legal.html` — compliant token disclaimer and data-provider notes for KINDX.
- `public/styles.css` — styling for layout, typography, and responsive behavior.
- `public/script.js` — small enhancements for navigation toggling, smooth scrolling, and form feedback.
- `public/robots.txt` — search-engine crawling instructions to avoid extra 404 noise.
- `public/health.txt` — simple uptime probe endpoint returning `ok`.

## Running locally
Open `public/index.html` in your browser. No build steps or dependencies are required.
