# Tooling

## Why Docker

This machine (and any clean clone) is not assumed to have Node, npm, or the Angular CLI. Installing those globally is easy to get wrong across Angular major versions.

Docker is the **only supported way** to install dependencies, serve the app, and produce the GitHub Pages build. The images pin Node 22, match CI, and keep the host clean.

The production site is still a static Angular build. Docker is a build environment, not a runtime dependency on GitHub Pages.

## Commands

```bash
# first time and after dependency changes
docker compose build

# local app — http://localhost:4200/
docker compose up dev

# production tree for GitHub Pages (writes ./dist)
docker compose run --rm build

# preview that tree — http://localhost:8080/
docker compose up preview
```

After `package.json` changes, rebuild the image so `/app/node_modules` is recreated:

```bash
docker compose build --no-cache
docker compose up dev
```

## GitHub Pages

`docker compose run --rm build` uses `--base-href /rodri-page/` and copies `index.html` to `404.html` so Angular routes (`/song/1`, `/album/2`) work on GitHub Pages.

The workflow in `.github/workflows/gh-pages.yml` runs that same Docker build and publishes `dist/rodri-page/browser`.
