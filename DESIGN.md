---
name: Rodrigo Pizarro
description: A working Spotify artist surface whose catalog is a life.
colors:
  green: "#1ed760"
  green-hover: "#3be477"
  green-press: "#1abc54"
  blue-badge: "#4cb3ff"
  bg-void: "#000000"
  bg-base: "#121212"
  bg-elevated: "#181818"
  bg-press: "#2a2a2a"
  text: "#ffffff"
  text-sub: "#b3b3b3"
  ink: "#0d0d0d"
  text-soft: "#eaeaea"
typography:
  display:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 5.25rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  cover: "4px"
  card: "6px"
  pane: "8px"
  pill: "999px"
  disc: "50%"
spacing:
  gap: "8px"
  inset: "16px"
  section: "24px"
  split: "32px"
components:
  play-disc:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.disc}"
    size: "56px"
    height: "56px"
    width: "56px"
  play-disc-hover:
    backgroundColor: "{colors.green-hover}"
  play-disc-active:
    backgroundColor: "{colors.green-press}"
  pill:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "3px 15px"
    height: "32px"
    typography: "{typography.body}"
  pill-hover:
    backgroundColor: "rgb(255 255 255 / 8%)"
  dock-play:
    backgroundColor: "{colors.text}"
    textColor: "{colors.ink}"
    rounded: "{rounded.disc}"
    size: "32px"
    height: "32px"
    width: "32px"
  lang-on:
    backgroundColor: "{colors.text}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "28px"
  track-row:
    rounded: "{rounded.cover}"
    padding: "0 12px"
    height: "48px"
  contact-row:
    rounded: "{rounded.cover}"
    padding: "0 8px"
    height: "56px"
  topbar-round:
    backgroundColor: "rgb(0 0 0 / 70%)"
    textColor: "{colors.text}"
    rounded: "{rounded.disc}"
    size: "32px"
    height: "32px"
    width: "32px"
---

# Design System: Rodrigo Pizarro

## Overview

**Creative North Star: "A Catalog That Is a Life"**

This is a working Spotify artist surface, not a dark résumé with a green accent. The shell is void black; the reading panes are the familiar Spotify base; the color in the room is the photograph and the album art. Green is a verb. It starts Popular. It marks the track that is on. It does not decorate the page.

The type is compact self-hosted Satoshi. Interface copy lives between eleven and sixteen pixels. The only jump to display scale is a name — the artist on the hero, the record on a song or album page. Controls do real work: Play scrolls and starts Popular, Follow opens LinkedIn, Share sends this page, EN/ES sits in the sticky top bar. Depth is tonal (void / pane / elevated) plus the drop under a cover, not glass and not a hard offset shadow.

**Key Characteristics:**
- Black shell, pane surfaces, artwork as the chroma field
- Green reserved for play and now-playing / active transport
- Self-hosted Satoshi at 400 / 500 / 700 / 900; display is weight 900 only
- Eight-pixel gaps and pane radii; four-pixel list covers; full pills; a 56px play disc
- Listeners line is theatrical and marked (`staged` / `en escena`)

## Colors

A near-achromatic Spotify night, with one play green and a small verified blue.

### Primary
- **Play Green**: The 56px play disc, the current-track name and index, liked / shuffle / repeat / volume when on. Hover lifts; press deepens. Never a section fill or a brand wash.

### Secondary
- **Verified Blue**: The verified-artist mark, and in-copy links on a song page. A chip of sky, not a second brand color.

### Neutral
- **Void**: The OS gutter behind the panes; `theme-color` of the document.
- **Pane**: Main column, sidebar, hero falloff target, sticky top bar.
- **Elevated**: Shelf-cover rest fill; the mobile mini-player slab.
- **Press**: Cover placeholder and the hover wash under a shelf cover.
- **White**: Primary type and the selected language chip / dock play disc.
- **Silver**: Secondary type, idle icons, track meta, dock artist line.
- **Ink**: Glyphs sitting on green or on a white disc.
- **Soft White**: Long about/song copy over photography or dark pane.

### Named Rules
**The Play-Green Rule.** Green is a control state, not a theme. If a surface is not playing, about to play, or actively on, it is not green.

**The Artwork-First Rule.** Chroma besides play green and verified blue comes from photographs and covers. Do not invent a third accent.

## Typography

**Display Font:** Satoshi (self-hosted `src/fonts/satoshi/`, weights 400 / 500 / 700 / 900) with Helvetica Neue, Helvetica, Arial
**Body Font:** The same Satoshi stack
**Label/Mono Font:** Same family; tabular numerals only on the dock timeline

**Character:** Compact, slightly tight Spotify UI. The Black cut is reserved for names. Everything else stays small and close.

### Hierarchy
- **Display** (900, hero clamp, line-height 0.95, tracking −0.04em): Artist name, bottom-left on the full-bleed photo. Below 900px the hero tightens to `clamp(2.2rem, 11vw, 3.2rem)`.
- **Headline** (900, record clamp, line-height 1, tracking −0.04em): Song, album, and playlist titles on their own routes. Album is the largest of the three.
- **Title** (700, 1.5rem, line-height 1.2, tracking −0.02em): Section heads — Popular, Contact, Albums, Playlists, About.
- **In-list title** (400 or 700, 1rem): Track names (400); shelf titles and primary nav links (700). Same size, weight carries the rank.
- **Body** (400, 0.875rem, line-height 1.45): Default UI, verified row, listeners, track meta, pills. Contact names step to 1rem. Song prose is 15px / 1.6 / max 62ch.
- **Label** (400–700, 11–12px): Dock artist line, timeline times, language chips (12px / 700 / 0.04em).

### Named Rules
**The Name-Is-the-Display Rule.** Only an artist or record name may leave the 11–16px UI band. Section labels stay at title size; they do not compete with the name.

**The Staged Listeners Rule.** The listeners sentence keeps its theatrical mark — `monthly listeners · staged` / `oyentes mensuales · en escena`. Do not style that figure as a factual KPI.

## Layout

The desktop OS is a two-by-two grid: 280px sidebar + fluid main on the first row, a 72px now-playing dock spanning the second, 8px gutter and 8px gap on void. Main and nav are 8px-radiused panes. The sticky top bar (12×16 padding, pane fill) holds Back, EN/ES, and Share.

The artist home is a full-bleed hero (copy padded 72×24×20, name and actions bottom-left) then a pane band (12×24×96). Inside the band: Popular and Contact in a 1.4 / 0.7 split with a 32px gutter, then horizontal shelves (152px columns, 24px gap, x-mandatory snap), then the about mosaic (8px gap). Track rows are 48px tall on a 24px + 40px cover + fluid + meta grid. Contact rows are 56px with a 40px circular mark.

At 900px the sidebar and desktop dock extras collapse: full-bleed main, 64px mini-player, 56px three-tab bar, 16px page insets, shelves at 148px / 16px. At 700px the hero photo source swaps, about drops the side tiles, and song/album/playlist headers stack.

## Elevation & Depth

Depth is tonal first. Void sits behind panes; elevated sits on pane; a 10% white wash lifts a hovered row. Covers throw a single soft black drop. The hero is a photograph under two veils (bottom pane fade, left readability fade), not a tinted glass plate. No hard-offset shadows.

### Shadow Vocabulary
- **Shelf cover** (`box-shadow: 0 8px 24px rgb(0 0 0 / 50%)`): Resting album and playlist cards.
- **Record cover** (`box-shadow: 0 16px 40px rgb(0 0 0 / 50%)`): Song and album detail art.
- **Playlist cover** (`box-shadow: 0 12px 32px rgb(0 0 0 / 50%)`): Playlist-route art.

### Named Rules
**The Tonal Shell Rule.** New surfaces join void / pane / elevated / press. Do not add a shadow to a pane, a nav, or a row.

## Shapes

Covers in lists are 4px. Cards and the about mosaic sit at 6px. Panes, the toast, and the mobile mini-player are 8px. Pills and the language capsule are fully rounded. Play is a circle — 56px in the hero and on shelf hover, 32px (36px on mobile) as the white dock control. Contact marks are 40px circles on a pressed fill. Focus is a 2px white ring, 3px offset.

### Named Rules
**The Eight-and-Four Rule.** Gaps and pane radii are 8px. List covers are 4px. Pills are 999px. The green play disc is 56px. Do not invent a new radius for a new screen of this shell.

## Components

### Buttons
- **Play disc:** 56px circle, play green, ink glyph, 24px icon nudged 2px right. Hover scales to 1.04 and lifts the green; active returns to 1 and presses the green. 120ms on `cubic-bezier(0.3, 0, 0, 1)`.
- **Follow pill:** Transparent, 1px white stroke, 700 body, min-height 32px, 3×15 padding. Hover: 1.04 scale and 8% white fill. Following keeps the same stroke — it is a state of copy, not a fill flip.
- **More / Share / Back:** 32px circles. Top-bar rounds sit on 70% black; the hero more glyph is silver until hover white.
- **Dock play:** White 32px disc, ink glyph. Not green — the dock already has green on active secondaries.

### Chips
- **Language:** Pill capsule, 72% black, 18% white hairline. Idle letters are white 12px/700; the on state flips to white fill and ink type. Share hides beside it below 900px.

### Cards / Containers
- **Panes:** Pane fill, 8px radius, no stroke, no shadow.
- **Shelf cards:** 152px columns; 6px cover; title 1rem/700; subtitle silver body. A 48px play disc rises from 8px on hover (160ms). Pointer-events stay off the overlay — the card is the hit target.
- **About mosaic:** 8px gap, 6px clips, caption on an 82% black lift using soft white at 14px.

### Inputs / Fields
- **Seek range:** 4px pill track, white fill to `--pos`, `#4d4d4d` remainder, 12px white thumb. Desktop dock only.

### Navigation
- **Sidebar:** 280px pane, 12px inset. Primary links 1rem/700 silver, 40px rows, 24px authored icons; hover and current go white. Soft links (Playlists, About, Contact) drop to body/500. A 10% white rule separates the two ranks.
- **Mobile tabs:** Three columns on void, 10px/500 silver, 24px icons, current white, safe-area padding.
- **Top bar:** Sticky, pane, back always present.

### Track row
48px, 4px radius, 10% white hover. Index is silver until the row is current or hovered, then a 14px play/pause glyph replaces the number. Current row, name, and index go play green. Meta (duration / dates) is silver body and drops off below 900px.

### Contact row
56px, 4px radius, 16px name, 40px circular mark. Hover is the same 10% white wash as tracks.

### Now-playing dock
Three columns on desktop (meta / transport / extras). Cover is 56×56 at cover radius. Title 14px, artist 11px silver. Idle icons silver; hover white; on-state green. Mobile: elevated 8px slab inset 8px, cover + title + white play only.

### Artist hero
Full-bleed photograph (`object-position: 68% 28%`), dual veil, verified row (18px blue mark + 14px/700), display name, listeners in 14px white, then Play / Follow / More at a 16px gap. This is the first-viewport signature of the world.

### Toast
Fixed, centered above the dock, 8px radius, 12×20 padding, 500 body, fill `#0d72ea`. Share-copy confirmation only — not a palette role.

## Do's and Don'ts

### Do:
- **Do** keep Play as the 56px green disc that starts Popular, and Follow as the white-stroke pill that opens LinkedIn.
- **Do** put the artist name at display scale on the real photograph, with Popular and Contact in the first scroll.
- **Do** draw icons as the authored SVG set (`app-icon`); one stroke weight, currentColor except the verified check.
- **Do** keep the listeners line marked `staged` / `en escena`.
- **Do** collapse at 900px to the mobile artist grammar: no sidebar, stacked band, mini-player, three tabs.

### Don't:
- **Don't** wash a pane, hero, or section in play green. Green is the verb.
- **Don't** substitute a system display face for Satoshi. The face is self-hosted; the stack is fallback, not the voice.
- **Don't** introduce kickers as a reusable pattern. Section heads are the title size; they do not wear a label above.
- **Don't** use hard-offset or zero-blur block shadows. Cover drops are soft and black only.
- **Don't** use emoji or glyph dingbats as icons.
- **Don't** present credentials as a résumé grid. Songs, albums, and playlists are the navigation model.
