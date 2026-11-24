---
sidebar_position: 8
title: Timeline
---

# Timeline

The timeline is where you arrange clips across tracks. The toolbar sits above the
tracks; the playhead marks the current preview time.

![Timeline with tracks, playhead, and toolbar](./assets/timeline.avif)

## Tracks

Drift uses typed tracks so related clips stay organized. **New track** adds one:

| Track kind | Typical content |
|---|---|
| **Video** | Video and image clips. |
| **Audio** | Audio-only clips, or separated audio. |
| **Text** | Title overlays. |
| **Subtitle** | Caption clips. |
| **Graphic** | Shapes, stickers, and vector art. |
| **Adjustment** | Effects, masks, and grades applied to everything below. |
| **Audio adjustment** | Audio effects applied to the tracks below. |
| **Transform** | Moves, scales, and turns every track its bracket covers. |
| **Camera** | The [3D](./3d) scene camera. |

| Action | Shortcut |
|---|---|
| **Mute / unmute selected clip's track** | — |
| **Solo / unsolo selected clip's track** | — |
| **Hide / show selected clip's track** | `Shift+E` |
| **Lock selected clip's track** | — |
| **Make selected track taller / shorter** | — |
| **Add video track** / **Add audio track** | — |

Mute silences a track's audio; hide excludes it from the preview and export.
While any track is soloed, only soloed tracks are heard.

## Tools

| Tool | Behavior | Key |
|---|---|---|
| **Select** | Normal editing — move and select. | `V` |
| **Cut** | Click a clip to split it. | `B` |
| **Trim start** | Drop everything left of the cut. | — |
| **Trim end** | Drop everything right of the cut. | — |

## Cutting and arranging

| Action | What it does | Shortcut |
|---|---|---|
| **Split selection, or every track, at current time** | Cut at the playhead. | `S` |
| **Split selected clip at current time** | Cut only the selection. | `Shift+S` |
| **Delete left of the playhead** | Ripple-trim the start. | `Q` |
| **Delete right of the playhead** | Ripple-trim the end. | `W` |
| **Ripple delete selection** | Remove and close the gap. | `Shift+Delete` |
| **Merge adjacent clips** | Rejoin a split. | `Ctrl+M` |
| **Swap with previous / next clip** | Reorder without dragging. | — |
| **Freeze frame at playhead** | Insert a held frame. | — |
| **Add transition at playhead** | Drop a transition on the cut. | `Ctrl+Shift+D` |
| **Add speed point at playhead** | Add a speed ramp point. | `Shift+K` |
| **Add text at playhead** | New title. | — |
| **Nudge selection** | Move it a little. | `Alt+Left` / `Alt+Right` |

## Clips

| Action | What it does | Shortcut |
|---|---|---|
| **Copy / Cut / Paste / Duplicate** | Clipboard. | `Ctrl+C` / `Ctrl+X` / `Ctrl+V` / `Ctrl+D` |
| **Copy effects** / **Paste effects** | Move an effect stack between clips. | `Ctrl+Alt+C` / `Ctrl+Shift+V` |
| **Paste attributes…** | Pick which properties to copy. | `Ctrl+Alt+V` |
| **Delete selection** | Remove it. | `Delete` |
| **Delete selection with its effects** | Take pinned adjustments too. | — |
| **Separate audio** | Pull audio onto its own track. | `Ctrl+Shift+S` |
| **Unlink audio** / **Link clips** | Let a pair move independently, or re-link. | `Ctrl+Shift+U` / `Ctrl+Shift+L` |
| **Enable or disable selected clips** | Keep a clip in place but out of the render. | — |
| **Replace with…** | Swap the media, keeping timing and effects. | — |
| **Rename clip…** | Name it. | — |

:::note
**Delete** leaves a clip's pinned adjustments on the timeline, still applying to
whatever is underneath. **Delete with effects** removes them together.
:::

### Selection

| Action | Shortcut |
|---|---|
| **Select all clips** | `Ctrl+A` |
| **Deselect all** | `Ctrl+Shift+A` |
| **Clear selection** | `Escape` |
| **Select clip at playhead** | — |
| **Select next / previous clip** | — |
| **Transform selection together** | `Ctrl+G` |

## Layers

Three track kinds act on what sits below them rather than carrying media of
their own:

| Layer | What it does |
|---|---|
| **Adjustment** | Effects, masks, and grades applied to every visual track below it. |
| **Audio adjustment** | Audio effects applied to the tracks below. |
| **Transform** | *Moves, scales and turns every track its bracket covers* — one handle for a whole stack, including tilt and fade. |

| Action | Shortcut |
|---|---|
| **Add adjustment layer** | — |
| **Add transform layer** (also *above*) | — |
| **Select transform layer** moving this clip | `Shift+G` |
| **Move adjustment to its own track** | — |

Masks are adjustment layers too, which is why a mask limits the effects above
it — see [Masking and tracking](./masking-and-tracking).

## Composites

A composite is a clip that holds its own timeline, for when a stack needs
nesting.

| Action | What it does |
|---|---|
| **Make composite** | Fold the selection into one clip. |
| **Open composite** | Edit its inner timeline. |
| **Flatten composite** | Render it down to one clip. |
| **Dissolve composite** | Unpack its contents back onto the parent. |

Sequence tabs above the timeline switch between **Main** and any open composite,
and **New timeline** starts another sequence.

:::note
Pre-rendered sections belong to the main timeline — switch back to it to
pre-render. See [Performance](./performance).
:::

## Work area

The work area marks a range for looping, pre-rendering, and exporting.

| Action | Shortcut |
|---|---|
| **Mark work area in / out** | `I` / `O` |
| **Go to work area in / out** | `Shift+I` / `Shift+O` |
| **Mark work area to selected clip** | `X` |
| **Clear work area** | `Alt+X` |
| **Loop work area playback** | `Ctrl+L` |

## Markers and bookmarks

| Action | Shortcut |
|---|---|
| **Add / remove bookmark at current time** | `M` |
| **Go to next / previous bookmark** | `Shift+M` / `Ctrl+Shift+M` |
| **Rename bookmark at playhead** | — |
| **Delete bookmark at playhead** | — |
| **Delete all bookmarks** | — |

## Cutting to music

| Action | What it does |
|---|---|
| **Find the beat and show markers** | Find beats and hits in the audio under this clip. |
| **Beat markers** | Add timeline markers at the detected beats. |
| **Hide the beat markers** | Clear the overlay. |
| **Split on beats** | Cut the selected clip at every beat. |
| **Snap clips to beats** | Pull clip edges onto the bar. |

A clip with no detectable rhythm reports *no beat found*.

## Reframing

**Auto reframe…** crops a clip into another shape and keeps the subject in
frame:

| Control | Choices |
|---|---|
| **Track** | **Follow face** — follows the clip's face track; **Keep centred** — a fixed centre crop. |
| **Shape** | **Vertical 9:16**, **Square 1:1**, **Portrait 4:5**, **Wide 16:9**. |

Without a face track the crop stays centred. Auto reframe is also available from
the [export](./export) dialog.

## Snap, ripple, and zoom

| Control | What it does | Shortcut |
|---|---|---|
| **Snap** | Clips stick to neighbours, the playhead, and markers. | `N` |
| **Ripple** | Close gaps when trimming. | — |
| **Clip overlap** | Allow clips to overlap rather than push. | — |
| **Auto-select under playhead** | Keep the clip at the playhead selected. | — |
| **Zoom in / out** | Change timeline scale. | `Ctrl+=` / `Ctrl+-` |
| **Zoom timeline to fit project** | Fit the whole edit. | `Shift+Z` |

:::tip
Hold `Ctrl` (or `Cmd`) while trimming to suspend snapping for one drag.
:::

## Strips and overviews

| Control | What it shows |
|---|---|
| **Timeline overview** | A map of the whole edit above the tracks. |
| **Keyframe strip** | Keyframes for the selected clip inline — see [Keyframes](./clip-tools/keyframes). |
| **Audio mixer strip** | Faders under the tracks — see [Audio mixing](./audio-mixing). |

Each has a toggle in the keymap (unbound by default).

## Playback and navigation

| Action | Shortcut |
|---|---|
| **Play / Pause** | `Space` |
| **Stop and reset speed** | `K` |
| **Increase / decrease playback speed** | `L` / `J` |
| **Step back / forward one frame** | `Left` / `Right` |
| **Jump 1 second** | `Shift+Left` / `Shift+Right` |
| **Jump 10 seconds** | `Ctrl+Left` / `Ctrl+Right` |
| **Go to start / end of timeline** | `Home` / `End` |
| **Go to previous / next cut point** | `Alt+Up` / `Alt+Down` |

:::tip
`Shift` with an arrow key scrubs frame by frame in the preview.
:::

## Undo

| Action | Shortcut |
|---|---|
| **Undo / Redo** | `Ctrl+Z` / `Ctrl+Shift+Z` |

The **History** panel lists the undo stack so you can step back several edits at
once. A crash leaves the last save intact.

## Context menu

Right-click a clip for everything above plus **Speed and reverse…**,
**Volume…**, **Color grade…**, **Blur area**, **Edit keyframes…**, **Mask &
track…**, **Remove silence**, **Auto duck…**, **Sync by audio**, **Generate
captions**, **Crop…**, **Crop on canvas**, **Enhance video…**, **Stabilize…**,
**Convert to mask**, **Use as mask (nested timeline)**, **Convert to
edit-friendly format**, and **Save effects as preset…**.
