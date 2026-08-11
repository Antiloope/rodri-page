---
version: 1
slug: "src-app-app-component-html"
primary_target: "src/app/app.component.html"
related_targets: ["src/index.html","src/styles.scss"]
---

# Surface: Artist home

## Scope and mode
Experience. The whole site is one artist surface (home + song/album/playlist in the same shell).

## Audience / job
A visitor should leave remembering “Rodrigo Pizarro” and that his CV is a Spotify artist page. Recruiters and peers both arrive; exploration leads, credentials are found.

## Action
Play starts Popular. Follow opens LinkedIn. Share shares this page. Language follows the browser and can be switched from a top-bar chip.

## Constraints
Keep current copy, links, and photos. No invented jobs or songs. No Spotify wordmark. Static GitHub Pages. Docker is the toolchain.

## Direction
Canon Spotify artist page (brief-pinned). Approved comp: `.impeccable/mocks/comp-stage-header.png`. Desktop = Spotify Web artist (sidebar + full-bleed hero + Popular/Contact + shelves + dock). Mobile = same grammar collapsed (no sidebar, stacked hero, full-width lists, mini player).

## Memorable moment
The name at Spotify display scale on his real photo, then a green Play that actually starts Popular.

## Inventory
| Ingredient | Medium |
|---|---|
| Hero photograph | existing `src/assets/profile.png` |
| Album / song / playlist covers | existing `src/assets/*` |
| Artist name | HTML + self-hosted Satoshi Black |
| Play / Follow / Share / lang | HTML/CSS + authored SVG |
| Track rows, shelves, sidebar, dock | semantic HTML/CSS |
| Contact marks | authored SVG (same real links) |
| Playlist listening | existing Spotify iframe |
| Empty albums | copy already in product (“Coming soon”) |
