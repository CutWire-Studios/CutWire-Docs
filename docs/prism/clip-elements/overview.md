---
sidebar_position: 1
title: Clip elements overview
---

# Clip elements

A **clip element** is any media source you can put on the canvas. In the node
editor it becomes an **Input node** — a card with a thumbnail, a single blue
output port, and — depending on the type — an **Edit** button. Choosing which
deck it goes live on is done downstream, with an
[A/B Select node](../node-editor/ab-select-node).

Add elements from the **Media → Add Element** menu, the **Add Element ▾** button
on the canvas, by dragging files in, or via **Add Files / Add Folder**.

## The element types

| Element | What it is | Page |
|---|---|---|
| **Media File** | A video file (FFmpeg). Trimmable, with audio. | [Media file](./media-file) |
| **Image** | A still picture (PNG, JPG, BMP, WebP, GIF). | [Image](./image) |
| **Slideshow** | A folder of images cycling on a timer, with GPU transitions. | [Slideshow](./slideshow) |
| **Camera** | A live webcam or capture device. | [Camera](./camera) |
| **Screen Capture** | A live feed of a whole display. | [Screen capture](./screen-capture) |
| **Window / Tab** | A live feed of a single window. | [Window capture](./window-capture) |
| **Canvas** | A generated solid colour, checkerboard, or transparent backdrop. | [Canvas](./canvas) |
| **Shader** | A live GLSL fragment shader, optionally audio‑reactive. | [Shader](./shader) |
| **HTML Overlay** | A web page or composed widget layout (scoreboards, clocks…). | [HTML overlay](./html-overlay) |
| **Text** | A styled text source, optionally fed live data by a script. | [Text](./text) |
| **NDI Source** | A video stream coming in over the network via NDI. | [NDI source](./ndi) |
| **Phone Camera** | A smartphone camera streamed over Wi‑Fi (WebRTC). | [Phone camera](./phone-camera) |

## File sources vs. live sources

- **File sources** — Media File, Image, Slideshow. These come from files on disk
  and can be trimmed and have overlays added through the **Clip Editor** (see
  [Media file](./media-file)). Cropping and flipping are applied downstream
  with [Process nodes](../node-editor/process-node).
- **Live sources** — everything else. These generate or capture frames in real
  time. They can be processed and composited the same way, through the
  [Node editor](../node-editor/overview).

## Ports at a glance

Cards expose small coloured dots (**ports**) you drag between to wire things up.
Which ports a card has depends on its type:

- Every element has a single blue **output** port — its video stream, ready to
  feed a [Process node](../node-editor/process-node), a
  [Layer node](../node-editor/layer-node), an
  [A/B Select node](../node-editor/ab-select-node), or the
  [Output node](../node-editor/output-node) directly.
- **Media File** elements that contain an audio track gain an **audio** port and
  an audio strip.
- **Shader** elements gain an **audio‑in** port so they can react to sound.
- **Text** elements gain a **data‑in** port so a [Script node](../node-editor/script-node)
  can feed them live values.

See the [Node editor](../node-editor/overview) for how connections work.
