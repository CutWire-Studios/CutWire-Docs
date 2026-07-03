---
sidebar_position: 3
title: Image
---

# Image

An **Image** element shows a single still picture. Use it for logos, title cards,
sponsor boards, holding slides, or any graphic you want to hold on screen.

**Add it:** drag an image file onto the window, use **Media → Add Files…**, or
load a folder of images into the Asset Library and drop one on the canvas.

**Supported formats:** PNG, JPG/JPEG, BMP, WebP, GIF (shown as a still).

## What it can do

- Display indefinitely on either deck — there's nothing to play, so it just
  holds.
- **Overlays** through the Clip Editor (same dialog as a
  [media file](./media-file), without the Trim tab — a still has no timeline).
- **Crop or flip** by wiring the node's output into a
  [Process node](../node-editor/process-node), and **position it on a
  canvas** by wiring it into a [Layer node](../node-editor/layer-node), so you
  can place a logo in a corner or compose several images together.

Because an image carries no audio and no motion, its card is the simplest of the
file sources — thumbnail, **Edit**, and a single output port.

> Need a still grabbed from a live source? Use **View → Freeze Frame Capture…**,
> which can add the captured frame straight into your show as a new image
> element.
