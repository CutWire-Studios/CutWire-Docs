---
sidebar_position: 8
title: Canvas
---

# Canvas

A **Canvas** element is a generated backdrop — a solid colour, a checkerboard, or
fully transparent. It's a building block rather than a picture: use it as a
background to place other elements on, as a transparent base for overlays, or as a
plain colour fill.

**Add it:** **Add Element → Canvas…**.

## Setting it up

When you create a canvas you choose:

**Aspect / size** — a preset or a custom resolution:

| Preset | Resolution |
|---|---|
| 16:9 | 1280 × 720 |
| 4:3 | 1024 × 768 |
| 1:1 | 1080 × 1080 |
| 9:16 | 1080 × 1920 |
| Custom… | Any width × height you enter |

**Fill type:**

- **Checkered** — a checkerboard pattern (a clear visual "nothing here yet" base).
- **Transparent** — no fill at all, so whatever is behind shows through. Ideal as
  a base for overlays.
- **Color** — a solid colour you pick.

## What it can do

- Acts as a **base layer** you stack other elements onto.
- Pairs naturally with the [Transform Context node](../node-editor/transform-context-node),
  which defines the output canvas that elements are positioned within.
- A transparent canvas plus [text](./text) or
  [HTML overlays](./html-overlay) gives you clean graphics over a live camera or
  video on the other deck.

## Typical uses

- A solid‑colour or branded background behind text and logos.
- A transparent stage to composite multiple overlays.
- A quick full‑screen colour for testing projector output.
