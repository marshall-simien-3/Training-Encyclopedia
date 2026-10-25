# My Training Encyclopedia

A free, static HTML/CSS/JavaScript training site with a dark dashboard homepage and documentation-style learning chapters.

## Run locally

Open `index.html` in your browser. No installation or server is required for this starter version.

## Publish on GitHub Pages

1. Create a public GitHub repository (for example, `training-encyclopedia`).
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.
5. Visit `https://YOUR_USERNAME.github.io/training-encyclopedia/` after deployment.

GitHub Pages sites are publicly accessible. Do not publish private or proprietary material.

## Add chapters

Edit the `topics` array and `chapters` object in `script.js`. Every topic must have a matching chapter ID. This is a starter prototype with six introductory chapters; more detailed chapters can be added over time.

## Notes

Search covers the starter chapter text and metadata. The light/dark preference is saved in your browser. There is no backend, login, or cross-device progress syncing.
