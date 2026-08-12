---
version: 1
slug: "src-app-pages-song-page-ts"
primary_target: "src/app/pages/song-page.ts"
related_targets: ["src/app/core/sheet.ts","src/app/core/wash.ts"]
---

# Surface: Song (experience)

## Scope and mode
Experience. Detail route for one song/experience. Visitor mode: read the role, then play or leave.

## Audience / job
Recruiter or peer opened a track from Popular or an album. They need the name, dates, and description without a pixelated logo owning the viewport.

## Action
Read the experience. Play/pause the track. Follow the album link. Back returns through the sheet.

## Constraints
Only `/song`. Album and playlist pages stay. Do not replace logo assets. Do not invent copy. Wash color is sampled from the existing cover.

## Direction
Compact ficha: 72–80px cover beside the title (list scale, not album scale). Color wash from the logo in the top ~260px, fading to pane `#121212`. Body at normal reading size (~15px / 62ch). Play disc is the verb. Sheet open/close ~200ms, ~12% travel.

## Memorable moment
The logo identifies; the name and the text carry the page. The room is tinted, not black, not a giant stamp.
