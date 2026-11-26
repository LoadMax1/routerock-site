# RouteRock

Public website for [RouteRock](index.html), a mobile operations app for construction hauling companies. The site is static HTML and CSS in the repository root. There is no build step.

GitHub Pages serves it from the root of the default branch (`main`).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Dump truck ticket capture and time tracking, with available now and coming soon |
| `construction-hauling-software.html` | Construction hauling software for dump-truck fleets |
| `features.html` | Available now and coming soon. Ticket photos are not queued offline |
| `how-it-works.html` | Haul ticket tracking and the trucking time clock, including offline |
| `pricing.html` | Published per-truck plans (Free, Core, Pro, Fleet quote) and a short founding-offer summary. Pro features are labeled Coming soon. Primary CTA is Book a demo |
| `about.html` | Built in Charlotte, NC, for fleets nationwide |
| `charlotte-nc.html` | Dump truck ticketing app Charlotte NC |
| `articles/index.html` | Dump truck hauling articles, plus four posts |
| `404.html` | Missing-page message. Not listed in the sitemap |
| `contact.html` | Demo page. About 15 minutes. Book a demo opens a mailto to demo@routerockhub.com with a subject and body template. Nothing is stored on this site |
| `privacy.html` | Privacy policy for the mobile app. Keep this URL stable. |
| `terms.html` | Terms of service for the app and site. Subject to review. Effective October 22, 2026. |
| `support.html` | Status and support. Hand-updated current status, support hours, how to report a problem, and a short FAQ. Product questions stay on `faq.html` |
| `delete-account.html` | How to request account and data deletion |
| `faq.html` | Every FAQ question on the site, grouped, with one FAQPage JSON-LD block |
| `founding-fleet.html` | Founding fleet offer for Core. Book a demo is the CTA |

The header links Features, How it works, Construction hauling, Pricing, FAQ, About, and Articles, plus a Book a demo button that opens `contact.html`. On a narrow screen the links sit behind a menu button. The footer also links Construction hauling software, Articles, Founding fleet, Charlotte, NC, FAQ, Privacy, Terms, Status and support, and Delete account. Styles live in `styles.css`. `site.js` fades sections in on scroll and closes the menu with Escape. Pages include JSON-LD for the organization, the app, and breadcrumbs. FAQPage JSON-LD is on `faq.html` and `support.html`. `llms.txt` is a plain-language summary. Logo files are in `assets/brand/`. `sitemap.xml` and `robots.txt` are at the repository root.

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

The typeface is Montserrat, self-hosted as latin WOFF2 files in `assets/fonts/` with `font-display: swap`. The screen logo is `assets/brand/logo-horizontal.svg`. Logo files stay in `assets/brand/`. Photo credits are in `assets/photos/README.md`.

## Contact

Questions about the app go to [support@routerockhub.com](mailto:support@routerockhub.com).

Built inside a working dump-truck company in the Charlotte, NC area.
