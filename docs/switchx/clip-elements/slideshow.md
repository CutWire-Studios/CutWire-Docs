---
sidebar_position: 4
title: Slideshow
---

# Slideshow

A **Slideshow** element cycles through every image in a folder on a timer, with an
optional GPU transition between slides. Great for sponsor loops, photo montages,
pre‑show idents, and rolling announcements.

**Add it:** **Add Element → Slideshow…**, then pick an image folder and a
per‑slide interval.

## Setting it up

When you create a slideshow you choose:

- **Image folder** — every supported image in it (PNG, JPG, JPEG, BMP, WebP),
  sorted by filename, becomes a slide.
- **Seconds per slide** — how long each image holds before advancing (1–60 s).

The slideshow then loops through the folder for as long as it's on a deck.

## Transition effects

Between slides the slideshow can run a hardware‑accelerated transition. The
available effects are:

| Effect | Look |
|---|---|
| **None (hard cut)** | Instant switch, no animation. |
| **Cube 3D** | Slides rotate on a 3D cube. |
| **Flip 3D** | The frame flips over in perspective. |
| **Page Curl** | The current slide peels away like a page. |
| **Doorway** | The new slide opens through a doorway. |
| **Cross Zoom** | Zoom blur from one slide into the next. |
| **Ripple** | A ripple distortion reveals the next slide. |
| **Glitch** | A digital glitch wipe. |
| **Mosaic Flip** | Tiles flip across the frame. |
| **Swirl** | The image swirls into the next. |

Each transition also has its own duration (defaulting to around 0.8 s), separate
from the per‑slide hold time.

## What it can do

- Runs continuously on a deck like any live source.
- **Transform and position** on a canvas via the card's inline **Transform**
  controls.
- Combine two slideshows on the A and B decks and crossfade between them for a
  layered photo wall.
