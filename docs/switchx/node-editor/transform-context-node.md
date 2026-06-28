---
sidebar_position: 2
title: Transform Context node
---

# Transform Context node

The **Transform Context node** defines an **output canvas** — a fixed working
resolution that elements are positioned and scaled within. It's how you build a
composed shot: a background, a camera in one corner, a logo in another, a lower
third along the bottom — all on one canvas.

Think of it as the "stage": each element you plug in gets an X/Y position and a
width/height *relative to this canvas*, so the layout holds together no matter the
projector resolution.

**Add it:** right‑click the empty canvas → **Add Transform Context Node**.

## Wiring elements into it

The node has a single gold **Context Hub** port. Drag from an element's **Transform
Context** port to this hub to place that element on the canvas. The hub accepts
**many** elements at once — connect as many as you want to compose them together.

Once connected, position each element either with:

- the inline **Transform ▸** controls on the element's card (X / Y / W / H as
  percentages), or
- the visual **transform editor** (below).

## The node's two buttons

The node shows the canvas size (e.g. `Canvas 1280×720`) and has two click targets:

### Edit button — set the canvas size

Clicking the on‑node **Edit** button opens the visual **Transform Editor**, where
you drag and resize the connected elements directly on a representation of the
canvas — a hands‑on way to lay out the composition.

### Double‑click / "Edit Canvas Size" — change the resolution

Double‑clicking the node (or right‑click → **Edit Canvas Size**) opens the
**Canvas Size** dialog:

- **Width** and **Height** spin boxes for an exact resolution.
- A **Preset** dropdown — Custom, 16:9 (1280×720), 16:9 (1920×1080), or
  4:3 (1024×768) — which fills in the size for you.

The size you set becomes the coordinate space every connected element is laid out
in.

## Typical setup

1. Add a [Canvas](../clip-elements/canvas) element (transparent or a colour) as
   your background.
2. Add a Transform Context node and set it to your output resolution.
3. Wire the background, a [camera](../clip-elements/camera), and a
   [text](../clip-elements/text) or [HTML overlay](../clip-elements/html-overlay)
   into the node's hub.
4. Position each with the inline Transform controls or the visual editor.
5. Fire the composition to a deck and crossfade as usual.
