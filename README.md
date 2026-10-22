# RouteRock

Public website for [RouteRock](index.html), a mobile operations app for construction hauling companies. The site is static HTML and CSS in the repository root. There is no build step.

GitHub Pages serves it from the root of the default branch (`main`).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Construction hauling software: the pain, who it is for, and questions |
| `features.html` | Dump truck ticketing app, plus an honest note that dispatch is not available yet |
| `how-it-works.html` | Haul ticket tracking and the trucking time clock, including offline |
| `pricing.html` | Pricing is set with each fleet during rollout. No prices or perks |
| `about.html` | Charlotte, NC, LoadMax Logistics, and the trust line |
| `charlotte-nc.html` | Dump truck ticketing app Charlotte NC |
| `articles/index.html` | Dump truck hauling articles, plus four posts |
| `404.html` | Missing-page message. Not listed in the sitemap |
| `contact.html` | Demo page. About 15 minutes. The form opens a mailto to demo@routerockhub.com. A plain mailto link remains |
| `privacy.html` | Privacy policy for the mobile app. Keep this URL stable. |
| `terms.html` | Terms of service for the app and site. Subject to review. Effective October 22, 2026. |
| `support.html` | How to get help, and a short FAQ |
| `delete-account.html` | How to request account and data deletion |
| `brand.html` | Logo files, colors, and type. Linked from the footer. |

The header links Features, How it works, Pricing, About, and Articles, plus a Book a demo button that opens `contact.html`. On a narrow screen the links sit behind a menu button. The footer also links Articles, Charlotte, NC, Privacy, Terms, Support, Delete account, and Brand. Styles live in `styles.css`. `site.js` fades sections in on scroll, closes the menu with Escape, and on the contact page checks the demo form before it opens an email. Pages include JSON-LD for the organization, the app, breadcrumbs, and the FAQ blocks. `llms.txt` is a plain-language summary. Logo files are in `assets/brand/`. `sitemap.xml` and `robots.txt` are at the repository root.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

You can also open `index.html` directly in a browser. Links and the stylesheet use relative paths.

## GitHub Pages

In the repository settings, set Pages to deploy from the `main` branch and the `/` (root) folder. `.nojekyll` is included so Pages serves the files as they are, without a Jekyll build.

## Brand

Colors are CSS variables at the top of `styles.css`.

| Name | Hex | Use |
| --- | --- | --- |
| Deep Navy | `#1F2A44` | Primary |
| Safety Orange | `#F58220` | Buttons and highlights |
| Steel Gray | `#6B7280` | Secondary text and lines |
| Light Gray | `#F4F5F7` | Background |
| White | `#FFFFFF` | Surfaces |

The typeface is Montserrat, self-hosted as latin WOFF2 files in `assets/fonts/` with `font-display: swap`. The screen logo is `assets/brand/logo-horizontal.svg`. See `brand.html` for the files and notes.

## Contact

Questions about the app go to [support@routerockhub.com](mailto:support@routerockhub.com).

RouteRock (operated by LoadMax Logistics, Charlotte, NC).
