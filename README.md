# Rodrigo Pizarro

Personal site shaped as a Spotify artist page. Angular 22, static hosting on GitHub Pages.

## Run it (Docker)

Nothing else needs to be installed on the host. Docker is the supported toolchain — see [docs/TOOLING.md](docs/TOOLING.md).

```bash
docker compose build
docker compose up dev
```

Open [http://localhost:4200/](http://localhost:4200/).

Production build for GitHub Pages:

```bash
docker compose run --rm build
docker compose up preview
```

Preview: [http://localhost:8080/](http://localhost:8080/).

## Deploy

Push to `main`. `.github/workflows/gh-pages.yml` builds inside Docker and publishes `dist/rodri-page/browser` to the `gh-pages` branch (`https://antiloope.github.io/rodri-page/`).
