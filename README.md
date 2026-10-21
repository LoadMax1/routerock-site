# RouteRock

Public website for [RouteRock](index.html), a mobile operations app for construction hauling companies. The site is static HTML and CSS in the repository root. There is no build step.

GitHub Pages serves it from the root of the default branch (`main`).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | What RouteRock is, beta features, coming soon, and contact |
| `privacy.html` | Privacy policy for the mobile app. Keep this URL stable. |
| `support.html` | How to get help, and a short FAQ |
| `delete-account.html` | How to request account and data deletion |
| `brand.html` | Logo files, colors, and type. Linked from the footer. |

Shared navigation in the header and footer links the public pages. Styles live in `styles.css`. Logo files, icons, and the original artwork are in `assets/brand/`. `site.webmanifest` and `favicon.ico` are at the repository root.

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
