---
sidebar_position: 9
title: Shader
---

# Shader

A **Shader** element runs a live GLSL fragment shader — generated, animated
visuals rendered on the GPU. Use it for VJ backdrops, motion graphics, plasma and
particle effects, and **audio‑reactive** visuals that move to the music.

**Add it:** **Add Element → Shader…**, which opens the **Shader Editor**.

## The Shader Editor

The editor lets you start from a bundled preset or write your own code:

- A **preset list** of ready‑made shaders (neon kaleidoscopes, cosmic plasma,
  cyber grids, particle swarms, audio VU bars, and more). Selecting one loads its
  code.
- A **code area** where you can edit the GLSL or paste your own fragment shader.
- **Compile / Preview** to render the shader live so you can see it before adding
  it.

When you accept, the shader becomes a card that renders continuously on whichever
deck it's fired to.

## Audio‑reactive shaders

Shader cards have an extra **audio‑in port**. Wire a sound source into it — a
[clip's audio](../node-editor/audio-output-node) or a
[Mic Input](../node-editor/audio-output-node#mic-input-node) (microphone/line‑in) — and
the shader receives a live audio spectrum it can react to. Several built‑in
presets (the "audio pulse", "VU bars", and "reactive wave" shaders) are designed
to pulse and move with the sound.

See [Audio nodes](../node-editor/audio-output-node) for how to wire audio into a
shader.

## What it can do

- Generate endless looping visuals with zero source footage.
- React to live audio for music‑driven backdrops.
- **Transform and position** on a canvas, or run full‑screen as a background under
  other layers.
