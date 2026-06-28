---
sidebar_position: 1
title: Clip elements overview
---

# Clip elements

A **clip element** is any media source you can put on the canvas and fire to a
deck. Each element is a card with an **A** and **B** button, a thumbnail, and —
depending on the type — an **Edit** button and extra connection ports.

Add elements from the **Media → Add Element** menu, the **Add Element ▾** button
on the canvas, by dragging files in, or via **Add Files / Add Folder**.

## The element types

| Element | What it is | Page |
|---|---|---|
| **Media File** | A video file (FFmpeg). Trimmable, croppable, with audio. | [Media file](./media-file) |
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
  and can be trimmed, cropped, transformed, and have overlays added through the
  **Clip Editor** (see [Media file](./media-file)).
- **Live sources** — everything else. These generate or capture frames in real
  time. They can still be transformed and positioned on a canvas through the
  [Node editor](../node-editor/overview).

## Ports at a glance

Cards expose small coloured dots (**ports**) you drag between to wire things up.
Which ports a card has depends on its type:

- Every element has **Chain In / Chain Out** (layering) and a **Transform
  Context** port (for placing it on a [canvas](../node-editor/transform-context-node)).
- **Media File** elements that contain an audio track gain an **audio** port and
  an audio strip.
- **Shader** elements gain an **audio‑in** port so they can react to sound.
- **Text** elements gain a **data‑in** port so a [Script node](../node-editor/script-node)
  can feed them live values.

See the [Node editor](../node-editor/overview) for how connections work.
