---
target: "artist home (localhost:4200)"
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-11T22-13-00Z
slug: src-app-home-home-ts
---
Method: dual-agent (A: a8f3bf91-6dfd-4ffb-88b2-4c858d390db6 · B: 134a3efb-db98-4b2d-b31a-70a9799990a0)

Target: `src/app/home/home.ts` (artist home) · live `http://localhost:4200/` · mode Experience

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Current track, play/pause, EN/ES, Following, and toast are clear; detail routes have no “you are here”; volume looks on when idle |
| 2 | Match System / Real World | 3 | Fluent Spotify-artist grammar; search icon = Popular, ⋯ = Share, Follow = LinkedIn, dates dressed as duration |
| 3 | User Control and Freedom | 2 | Back on `/` can history.back() off-site; song pages auto-play when the id is new; playlist iframe sits under a second dock |
| 4 | Consistency and Standards | 2 | Popular rows swap index→play; album rows are bare numbers; shelf play disc does not play; playlist kicker stays English |
| 5 | Error Prevention | 2 | Three empty albums look as live as Trabajo; Follow + blocked popup still sets Following |
| 6 | Recognition Rather Than Recall | 2 | Play / Follow / EN·ES are labeled; mobile Share, More, and dock extras require Spotify literacy plus a remapping |
| 7 | Flexibility and Efficiency | n/a | Experience / portfolio — no expert workflow to accelerate |
| 8 | Aesthetic and Minimalist Design | 3 | Tonal shell and green-as-verb hold; dock glyph wall, rest-state green volume, and three equal empty chapters add noise |
| 9 | Error Recovery | 2 | Empty albums say “Próximamente...” with no next step; bad ids redirect home silently |
| 10 | Help and Documentation | n/a | Experience surface; the metaphor is the documentation |
| **Total** | | **19/32** | **Acceptable (59%)** |

Heuristics 7 and 10 are n/a. Visual craft wants to score Good; lying affordances, empty-chapter traps, and dual transport hold it in Acceptable.

## Design Specificity Verdict

**Start here.** Authored for this product. A neighboring dark portfolio could steal the void/pane shell; it could not truthfully claim this navigation model (songs = experiences, albums = chapters, playlists = real Spotify embeds) or this face on this photograph at this display size.

**LLM assessment:** The world holds. Satoshi Black for the name only, 11–16px UI elsewhere, green reserved for play / current track, artwork as the chroma field, theatrical listeners marked `en escena`. Desktop is a reduced Spotify Web artist (280px nav + hero + Popular/Contact split + shelves + dock). Mobile collapses to the right grammar. The risk is leftover *Spotify IA*, not leftover *portfolio IA*: Popular wears a search icon, hero ⋯ shares the page, Follow opens LinkedIn without saying so, and the volume icon is green at rest. The catalog-as-life idea is strongest on Trabajo and weakest on Arte / Otros hobbies / Recomendaciones, which are sold as equal shelf covers then resolve to a wall.

**Deterministic scan:** CLI `detect.mjs --json` on home, shell, pages, and `index.html` exited **2** with **16 findings** (8 warning, 8 advisory): `broken-image` ×8, `design-system-font-size` ×7, `design-system-radius` ×1. All eight `broken-image` hits are **false positives** — Angular `[src]` bindings, not missing files. The type-ramp advisories are real drift vs DESIGN.md: contact 16px, about 13px, topbar 12px, song copy 15px, plus fluid clamp endpoints on hero / song / playlist headlines. Playlist cover uses `border-radius: 12px`, off the 4/6/8 scale. In-page detector (Playwright, not the user's tab) found **2** runtime anti-patterns on `/` only: `clipped-overflow-container` on `div.os`, and `line-length` ~98 chars (aim <80). Song, album, and playlist routes logged no in-page anti-patterns.

**Visual overlays:** Injection succeeded in a headless Chromium session (`detect.js` on `/`, `/song/1`, `/album/2`, `/playlist/1`; home grew `div.impeccable-overlay`). This harness has no Cursor browser MCP, so **no [Human] tab was opened** and there is **no reliable user-visible overlay in your browser**. Live-server on :8400 was started and stopped; your Angular server on :4200 was left running.

## Overall Impression

The first viewport does the product's actual job: after thirty seconds you have the name and the metaphor without clicking. That is rare and it is working. What fails is honesty one click later. Controls borrowed from Spotify lie about their jobs, half the album shelf is a beautiful dead end, and a playlist page runs two playheads at once. The single biggest opportunity is to make every control and every cover tell the truth — Play plays, Share shares, Follow says LinkedIn, and unreleased chapters look unreleased.

## What's Working

1. **First-viewport memory machine.** Photo, Satoshi Black name, `100,000,000 oyentes mensuales · en escena`, 56px green disc, Seguir. At desktop, Popular and Contact are already in the frame. The dock plants Mercado Libre / Rodrigo Pizarro immediately — current chapter as now-playing.
2. **Play-green + artwork-first discipline.** Green is the disc and the current track, not a section wash. Covers carry the chroma. DESIGN.md's north star is held on the hero and the lists.
3. **Catalog as discography, not a CV grid.** Popular is five experiences; Trabajo is a real album; playlists are live embeds; credentials stay inside tracks. That is product-specific IA, not decoration.

## Priority Issues

### [P1] Controls lie about their jobs
- **Why it matters:** A first-timer opens a share sheet when they wanted a menu, looks for Search, and thinks Arte is playable. The product's three real verbs (Play → Popular, Follow → LinkedIn, Share → this page) get scrambled by borrowed Spotify grammar.
- **Fix:** Give ⋯ a share glyph (or the word Share). Give Popular / Álbumes icons that mean those words. Remove shelf play overlays on chapters that cannot play. Label Follow with LinkedIn / the unused `openLinkedIn` string. Label the dock heart “Like” or drop it.
- **Suggested command:** `/impeccable clarify`

### [P1] Three albums are equal citizens that resolve to a wall
- **Why it matters:** Arte, Otros hobbies, and Recomendaciones use the same 152px cover + hover play disc as Trabajo, then land on a centered `Próximamente...`. Friends and curious recruiters go where the life metaphor promises texture and hit a dead end. Peak-end dies here.
- **Fix:** Mark unreleased chapters on the shelf (subtitle “Próximamente”, no play disc, reduced presence) or don't ship them as destinations until they have tracks. On the empty page, link onward to Trabajo / Estudios / Playlists.
- **Suggested command:** `/impeccable onboard`

### [P1] Two playheads on playlist pages
- **Why it matters:** `/playlist/1` shows a real Spotify embed (The Last of Us, Guardar en Spotify) while the site dock still presents Mercado Libre with shuffle and a date seek. Two transports teach the visitor the player was decorative all along.
- **Fix:** On playlist routes, collapse or retarget the career dock. Let the embed be the only play surface. Keep the artist header.
- **Suggested command:** `/impeccable distill`

### [P2] Mobile Share is missing; Home Back is an eject handle
- **Why it matters:** Below 900px the topbar share is `display: none`. Share survives only as hero ⋯. On `/`, Back can `history.back()` off-site. The opaque `#121212` topbar also lids the hero photo instead of frosting over it. Casey never finds Share; Back on an artist home is exit, not “up.”
- **Fix:** Keep a labeled Share in the mobile hero or topbar. On `/`, Back should hide, no-op, or only scroll the pane. Let the topbar go transparent → pane on scroll.
- **Suggested command:** `/impeccable adapt`

### [P2] Detail grammar and status don't match Popular
- **Why it matters:** Album rows have no hover play/pause; song-page play always announces Play; opening the already-current song does not start while opening another auto-starts; mute pauses; playlist kicker is hardcoded `"Playlist"`. Same object, three behaviors.
- **Fix:** One track-row component. Song play = play/pause this id. Pick one autoplay policy. Localize “Playlist”. Don't couple mute to pause unless the control says so.
- **Suggested command:** `/impeccable harden`

## Persona Red Flags

**Jordan (first-timer)** — understand what to do in 5s, then Play. The giant name and green disc work. ⋯ reads as overflow, not Share. Sidebar Popular + magnifying glass reads as Search. Follow does not say where it goes. The date column looks like a broken duration.

**Casey (distracted mobile)** — Play, maybe Share, one-handed. Dock play is in the thumb zone; EN/ES is a fat pill. Share is gone from the top bar. Hero Play sits mid-photo, above the thumb zone. Tabs are only Inicio / Popular / Álbumes — Contact, Playlists, About have no tab. First mobile screen shows Popular + one contact row; the rest sit under a 64px mini-player + 56px tabs.

**Riley (stress tester)** — push every control and every album. Arte / Hobbies / Recommendations look shippable, then `Próximamente...` with no recovery. `/song/99` silently becomes home. Follow + blocked popup still sets Following. Mute pauses the theatrical timeline. Playlist page: two players, two truths.

**Recruiter / hiring manager** — current job + LinkedIn in <30s. Mercado Libre is row 1, already green, already in the dock. Follow opens the real LinkedIn. Empty albums waste a hiring skim. EN copy (`Im currently`, “computer engineering”) undercuts craft if they switch language. They do not need shuffle / like / seek.

**Peer / friend** — recognize Rodrigo, then poke Art / hobbies / a playlist. Face, name, and About mosaic work. The three chapters a friend would open are the empty ones. Playlist listen fights the career dock. Staged 100,000,000 is funny if they notice `en escena`; easy to screenshot as a fake claim if they don't.

## Cognitive load

4 / 8 checklist failures → **high**. Failed: chunking (6 equal albums, 8+ dock glyphs), minimal choices, working memory (⋯ = Share, search = Popular, Follow = LinkedIn, dates = duration), progressive disclosure (emptiness only after navigation). Decision points with >4 options: album shelf (6), playlist shelf (5), sidebar (6), desktop dock (8+).

## Emotional journey

Peak is the first viewport; secondary peak is the About mosaic. Valleys are empty albums, the two-player playlist page, and About copy that shrugs off mid-sentence. If they leave after 30s on the hero, the end *is* the peak — product success. If they browse like a friend, they can exit on a dead album. Recruiter path (Popular → Mercado Libre → Follow) ends well.

## Minor Observations

- CLI type-ramp drift: 12 / 13 / 15 / 16px and several clamp endpoints off DESIGN.md; playlist radius 12px off the 4/6/8 scale.
- In-page: `div.os` clips a positioned child; About-scale line length ~98 characters.
- Playlist page kicker is English `"Playlist"` on an otherwise ES UI.
- About side images are `alt=""`; lead image alt is just “Sobre mí.” About body is an unfinished sentence in both languages.
- Volume defaults to `.is-on` (green) when nothing is playing — closest the page comes to a theme wash.
- iframe `title="Spotify"` puts the wordmark in the accessibility tree.
- No skip link to `#main`.
- Toast `#0d72ea` is correctly not a palette role; it still flashes as a third accent on Share.

## Questions to Consider

- If three chapters have no tracks, why do they get the same cover, the same hover play, and the same shelf rank as Trabajo?
- What if Follow said “LinkedIn” and ⋯ said “Share” — would anyone miss the Spotify cosplay?
- Should a playlist page be allowed to show two play buttons, or does the career dock have to sleep when real music is in the room?
- If the dock timeline cannot honestly be a song length, should it be a seek bar at all — or just the current chapter's dates as text under his name?
