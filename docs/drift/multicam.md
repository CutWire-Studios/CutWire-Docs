---
sidebar_position: 18
title: Multicam
---

# Multicam

Multicam watches every angle at once and lets you punch the cut live, the way a
vision mixer works.

Open it with `Ctrl+Shift+C`, or from **Video** in the header
(*Sync and switch between angles*).

## Setting up

Multicam reads angles from video clips stacked on separate tracks, so the top
camera is the program.

- With clips already stacked, Multicam opens ready to use.
- With nothing stacked, press **Set up from my media** — *Your imported videos
  will go on a track each, stacked so the top camera is the program.*
- Otherwise it reports *Select at least two video clips on different tracks, then
  open Multicam again.*

### Syncing the angles

**Sync by audio** (on a clip's context menu) lines angles up by their
soundtracks, so cameras started at different moments land on the same timeline
position before you cut.

## Cutting

The window shows every angle as a live tile with the program beside it.

| Action | Shortcut |
|---|---|
| Switch to angle 1–9 | `1`–`9`, or `Num+1`–`Num+9` |
| **Play / Pause** | — |
| **Previous / Next frame** | — |
| **Seek** | Drag the bar. |

Press an angle while the timeline plays and Multicam stages a cut at that moment.
Cuts stay staged until you save, so a mis-punched cut costs nothing.

## Saving the cut

| Action | Result |
|---|---|
| **Save combined** | One track carrying the switched program. |
| **Save as separate tracks** | Keep every angle on its own track, with the cuts applied. |
| **Cancel** | Discard the staged cuts. |

## Notes

- *No clip at the current time* means the playhead is past the end of the
  stacked angles.
- *No angles to switch between* means fewer than two angles were found.
- Multicam previews on the GPU; if it reports *GPU preview unavailable*, check
  **Help → Debug info**.

## Related

- [Timeline](./timeline) — stacking and arranging the angle tracks.
- [Source Lab](./source-lab) — preparing each camera's footage first.
- [Audio mixing](./audio-mixing) — mixing the angles' sound.
