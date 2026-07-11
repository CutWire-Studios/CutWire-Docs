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

- A **preset list** of ready‑made shaders (see below). Selecting one loads its
  code.
- A **code area** with **syntax highlighting** where you can edit the GLSL or
  paste your own fragment shader.
- **Compile / Preview** to render the shader live so you can see it before adding
  it.

When you accept, the shader becomes a card that renders continuously on whichever
deck it's fired to.

## Built‑in presets

Prism ships **16 presets**. Non‑reactive presets animate on their own:

- **Neon Kaleidoscope**, **Cyberpunk Horizon Grid**, **Falling Cyber Particles**,
  **Rotating Hypnotic Rings**, **Abstract Quantum Strings**,
  **Geometric Portal Matrix**, **Neon Particle Swarm**, **Cosmic Plasma Flares**.

The **audio‑reactive** presets (7) move to the music when you feed them sound —
and fall back to a gentle time‑based animation when no audio is connected:

- **Audio‑Reactive Wave** — a waveform that ripples with the sound.
- **Audio‑Pulse VU Bars** — classic VU‑style bars.
- **Radial Spectrum Ring** *(new)* — mirrored FFT bars radiating from a centre
  ring that pulses on the beat, with drifting glow particles (cyan).
- **LED Matrix Equalizer** *(new)* — a block/LED equalizer, columns rising
  green → yellow → red with the spectrum.
- **Spectrum Mirror Skyline** *(new)* — a dense forest of neon frequency needles
  with a floor reflection, hue sweeping across the spectrum.
- **Spectral Bloom** *(new)* — a central polar bloom whose spikes are carved by
  the FFT; bass swells it, beats flash the rim (pink → blue).
- **Particle Terrain** *(new)* — a 3D field of glowing dots whose surface ripples
  to the spectrum; beats lift and brighten the whole terrain (white → rose).
- **Neon Wave Curtain** *(new)* — a curtain of glowing vertical lines that fold
  in waves driven by bass and level (violet → hot pink).

## Audio‑reactive shaders

Shader cards have an extra **audio‑in port**. Wire a sound source into it and the
shader receives a live audio spectrum it can react to. There are two ways to feed
it:

- **Directly** — connect a [clip's audio](../node-editor/audio-output-node) or a
  [Mic Input](../node-editor/audio-output-node#mic-input-node)
  (microphone/line‑in) into the shader's audio‑in.
- **Through an [Audio Script node](../node-editor/audio-script-node)** — this
  gives you control over the analysis (FFT size, number of bands, smoothing, beat
  sensitivity) that drives the shader.

**Smooth idle when audio pauses.** When you pause the clip or audio, reactive
shaders no longer freeze or cut abruptly — the level, spectrum, and beat pulse
**fade smoothly to their idle state** over a fraction of a second, then the
shader continues its own time‑based motion. Resuming brings the reactivity right
back.

See [Audio nodes](../node-editor/audio-output-node) for how to wire audio into a
shader.

## Writing audio‑reactive shaders

If you write your own GLSL, Prism sets these uniforms every frame — declare only
the ones you use:

| Uniform | Type | Meaning |
|---|---|---|
| `u_resolution` | `vec2` | Output size in pixels |
| `u_time` | `float` | Seconds since the shader started |
| `u_hasAudio` | `bool` | `true` while audio is flowing |
| `u_audioLevel` | `float` | Overall loudness (RMS), `0..1` |
| `u_bands` | `vec3` | (low, mid, high) energy, `0..1` |
| `u_bass` / `u_mid` / `u_treble` | `float` | Components of `u_bands` |
| `u_beat` | `float` | Onset pulse that spikes on a beat, then decays |
| `u_spectrum` | `sampler2D` | FFT magnitudes — sample `x∈[0,1]` low→high, read `.r` |
| `u_spectrumSize` | `int` | Number of valid spectrum bins |

Any extra value a [Script node](../node-editor/script-node) sends is also exposed
as a uniform — e.g. returning `{ intensity = 0.8, tint = {1, 0.2, 0.4} }`
provides `u_intensity` (float) and `u_tint` (vec3). Sample the spectrum with:

```glsl
float mag = texture(u_spectrum, vec2(f, 0.5)).r; // f = 0..1
```

## What it can do

- Generate endless looping visuals with zero source footage.
- React to live audio for music‑driven backdrops.
- **Transform and position** on a canvas, or run full‑screen as a background under
  other layers.
