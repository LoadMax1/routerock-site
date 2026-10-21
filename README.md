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

Shared navigation in the header and footer links every page. Styles live in `styles.css`.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

You can also open `index.html` directly in a browser. Links and the stylesheet use relative paths.

## GitHub Pages

In the repository settings, set Pages to deploy from the `main` branch and the `/` (root) folder. `.nojekyll` is included so Pages serves the files as they are, without a Jekyll build.

## Colors

Brand colors are not final. The site uses a neutral placeholder palette and a text wordmark (there is no logo file). To change colors later, edit the variables at the top of `styles.css` (`--color-bg`, `--color-ink`, `--color-accent`, and the others in `:root`).

## Contact

Questions about the app go to [loadmaxlog@gmail.com](mailto:loadmaxlog@gmail.com).

RouteRock (operated by LoadMax Logistics, Charlotte, NC).
