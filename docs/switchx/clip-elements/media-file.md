---
sidebar_position: 2
title: Media file (video)
---

# Media file (video)

A **Media File** element plays a video from disk through SwitchX's FFmpeg engine.
It's the workhorse element for highlight reels, replays, music videos, and any
pre‑recorded footage.

**Add it:** drag a video file onto the window, use **Media → Add Files…**, or
**Add Element → Media File…**.

**Supported formats:** MP4, AVI, MOV, MKV, WebM, FLV, M4V, MPG/MPEG — anything
FFmpeg can open.

## What it can do

- **Play, pause, scrub, and seek** on either deck, with a position slider and
  time readout.
- **Per‑deck speed** set in percent (100% = normal).
- **Loop** — toggle **Repeat** on the card to loop the clip.
- **Audio** — if the file has an audio track, the card grows an **audio strip**
  and an **audio port**. See [Audio in the node editor](../node-editor/audio-output-node).
- **Trim, crop, transform, and overlays** through the Clip Editor.

## The card

The card shows the thumbnail and these controls:

| Control | What it does |
|---|---|
| **A / B** | Send the clip to Deck A or Deck B. |
| **Repeat** | Toggle looping for this clip. |
| **Edit** | Open the Clip Editor (below). |
| **Transform ▸** | Expand inline X / Y / W / H position boxes to place the clip on its canvas. |
| **Set output** | When the clip is inside a [group](../node-editor/groups), make it the group's output. |

## The Clip Editor

Click **Edit** on a media‑file card to open the Clip Editor — a tabbed dialog for
shaping the clip. It edits a copy of the clip's settings and applies them when you
accept.

### Trim tab

Set the in and out points so the deck only plays the part you want.

- A **playback preview** with play/pause and a scrub slider.
- A **timestamp** field for frame‑accurate entry.
- **Set Start** and **Set End** buttons capture the current preview position as
  the in/out point.

### Crop tab

Cut away edges of the source frame.

- A visual **crop selector** you drag and resize over the preview.
- Numeric **X / Y / W / H** boxes for exact values.
- **Reset** to clear the crop, and a **preview** toggle to see the result.

### Transform & overlays

Position the cropped clip on its output canvas (the inline **Transform** controls
on the card do the same), and composite **text and image overlays** on top — each
with its own font size, colour, opacity, and visibility. Overlays are handy for
lower thirds, logos, and labels baked into the clip itself.

> Images use the same editor minus the Trim tab (a still has nothing to trim).
