# RouteRock

Public website for [RouteRock](index.html), a mobile operations app for construction hauling companies. The site is static HTML and CSS in the repository root. There is no build step.

GitHub Pages serves it from the root of the default branch (`main`).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: what RouteRock is, beta highlights, how it works, and a demo request |
| `features.html` | Beta features in detail, plus a labeled coming-soon section |
| `how-it-works.html` | Separate steps for the driver and for the owner or dispatcher |
| `pricing.html` | Pricing is not set yet. Join the beta or request pricing by email |
| `about.html` | Founder and the first customer |
| `contact.html` | Support email and a mailto demo request |
| `privacy.html` | Privacy policy for the mobile app. Keep this URL stable. |
| `support.html` | How to get help, and a short FAQ |
| `delete-account.html` | How to request account and data deletion |
| `brand.html` | Logo files, colors, and type. Linked from the footer. |

The header links Home, Features, How it works, Pricing, About, Contact, Privacy, and Support. The footer adds Delete account and Brand. Styles live in `styles.css`. Logo files, icons, and the original artwork are in `assets/brand/`. `site.webmanifest` and `favicon.ico` are at the repository root. `sitemap.xml` and `robots.txt` are at the repository root.

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

The typeface is Montserrat, loaded from Google Fonts. The screen logo is `assets/brand/logo-horizontal.svg`. See `brand.html` for the files and notes.

## Contact

Questions about the app go to [loadmaxlog@gmail.com](mailto:loadmaxlog@gmail.com).

RouteRock (operated by LoadMax Logistics, Charlotte, NC).
