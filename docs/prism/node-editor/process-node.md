---
sidebar_position: 2
title: Process node
---

# Process node

A **Process node** applies a single effect to a video stream. Chain several
together to combine effects.

**Add it:** right‑click the empty canvas → **Add Process Node →** pick one:

| Effect | What it does | Settings |
|---|---|---|
| **Crop** | Trim the frame to a rectangle | Draw the crop region over a preview |
| **Flip** | Mirror the frame | Direction: **Horizontal / Vertical / Both** |
| **Rotate** | Rotate the frame in 90° steps | Angle: **0° / 90° / 180° / 270°** |
| **Opacity** | Fade the whole stream | Opacity **0–100%** |
| **Chroma Key** | Knock out a colour (green‑screen) | Key Colour, Threshold, Smoothness |
| **Blur** | Soften the image (GPU, two‑pass) | Radius **0–64 px** |
| **Sharpen** | Add edge detail | Amount **0.00–3.00** |
| **Keystone / Perspective** | Correct or warp perspective | Drag the 4 corners (+ Reset) |
| **Polygonal Masking** | Mask to a freeform polygon | Add points, "Mask outside (invert)", Clear Points |
| **Remove Background** | AI subject cut‑out (no green screen) | None — appears only on builds with segmentation |

> The old separate **Flip Horizontal** and **Flip Vertical** entries are now a
> single **Flip** node with a direction setting. Existing projects that used the
> old nodes still load correctly.

## Ports

Every Process node has **one blue input** (left edge) and **one blue output**
(right edge). Wire an [Input node](./overview#1-input-nodes-your-sources)'s
output — or another Process node's output — into the input, and take the
output onward to a [Layer node](./layer-node) or
[A/B Select node](./ab-select-node).

## Editing an effect

Click **Edit** on a node to open its settings. For most effects the dialog reads
your values **when you click OK** and previews as you adjust, so you see the real
result before committing.

- **Crop** — draw the crop region over a live preview of the incoming stream.
- **Chroma Key** — pick the key colour and dial in **Threshold** (how close a
  colour must be to be removed) and **Smoothness** (edge softening).
- **Keystone / Perspective** — drag the four corner handles to reshape the frame.
  The editor shows a **live warped preview** so you see the exact output, plus a
  dashed outline of the original bounds. You can **scroll to zoom** the preview
  and drag corners **outside** the frame (there's extra overscan room) for
  strong perspective pulls. **Reset** restores square corners.
- **Polygonal Masking** — click to drop polygon points around the area to keep;
  enable **Mask outside (invert)** to hide inside the shape instead, or
  **Clear Points** to start over.

## Splice into a connection

You can drop a Process node **directly onto an existing wire**. Drag the node
over a connection until the wire lights up with a white glow, then release —
Prism splices the node into that link, rewiring upstream → node → downstream
automatically. This also works for [Audio effect nodes](./audio-effect-node).

## Chaining

Effects apply in the order the nodes are connected. For example:

```
Input → Crop → Flip → Blur → Layer
```

Put crops, flips, and keys before you stack a stream into a Layer node, so the
composited result already has the effect applied.
