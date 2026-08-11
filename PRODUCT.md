# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Angular (rewrite on current Angular, replacing the Angular 17 NgModule app). Local Node is not installed; build, serve, and CI-like workflows run in Docker. Deploy target is GitHub Pages as a static site, same as today (`https://antiloope.github.io/rodri-page/`).

## Users

Primary visitors are mixed: recruiters or hiring managers *and* peers or friends. Experience wins. The page should feel like an artist surface first; the CV is discovered by exploring tracks, albums, and playlists rather than being presented as a résumé.

## Product Purpose

A personal site for Rodrigo Pizarro that presents his life and work as if he were a Spotify artist. Success is memory: after about 30 seconds a visitor should remember the Spotify metaphor and his name, even if they never click.

## Positioning

Not a résumé with Spotify decoration. A working artist-page surface whose “songs” are experiences, “albums” are life chapters, and “playlists” are real Spotify embeds. A neighboring portfolio could copy a dark theme; it could not truthfully claim this as the navigation model.

## Operating Context

- Static hosting on GitHub Pages (no server runtime in production).
- Authors and iterates without a local Node install; Docker is the documented toolchain.
- Content lives in the repo (copy, dates, links, images) until Rodrigo supplies updates.
- Language follows the browser (`es` vs other → English) and can be overridden from a header control.

## Capabilities and Constraints

- Artist home: hero, Popular (experiences as tracks), contact, albums, playlists, about.
- Detail surfaces for a song (experience), album (chapter), and playlist (Spotify embed).
- Play starts / opens Popular.
- Follow opens LinkedIn.
- Share shares this page (Web Share API, with clipboard fallback).
- Bilingual EN/ES from browser language, plus a visible language selector.
- Keep current projects, reference links, and images until Rodrigo replaces them. Do not invent new employers, dates, or claims.
- Albums without songs stay as empty / coming-soon chapters (Art, Hobbies, Recommendations).
- Mobile-responsive. Must remain a static build suitable for GitHub Pages.
- Open: later content refresh (roles, dates, photos) is expected and should be easy to swap.

## Brand Commitments

- Name: Rodrigo Pizarro.
- Governing metaphor, pinned by the author: a real Spotify artist page — typography, type sizes, spacing, and control grammar should read as Spotify, not as a generic dark portfolio.
- Voice: first person, bilingual, music carried with technology.
- Existing identity assets in `src/assets/` (profile, album art, playlist covers, contact icons) remain in use until replaced.

## Evidence on Hand

- Copy, songs, albums, playlists, and bilingual strings: `src/app/global-content.ts`.
- Images: `src/assets/` (including `profile.png`, album and playlist covers, contact icons).
- Live contact: personal email, GitHub (`Antiloope`), LinkedIn, Instagram.
- Real Spotify playlist embed URLs already in the content file.
- Do not fabricate testimonials, listener counts as fact, new jobs, or press. The “monthly listeners” figure is theatrical, inherited from the old site, not a claim.

## Product Principles

- Memory over conversion: the metaphor and the name have to land in the first viewport.
- The player chrome must do real work (Play, Follow, Share, language). Decorative controls are a product failure.
- Credentials are found by browsing, not dumped as a CV.
- Content is owned by Rodrigo; the product must make future swaps of copy and images cheap.
- Ship as a static page that Docker can build and GitHub Pages can host.

## Accessibility & Inclusion

No product-specific standard was set. Keyboard use, visible focus, and language switching must work; treat WCAG AA as a working floor until stated otherwise.
