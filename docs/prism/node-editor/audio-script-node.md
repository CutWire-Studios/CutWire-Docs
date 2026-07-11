---
sidebar_position: 9
title: Audio Script node
---

# Audio Script node

An **Audio Script node** analyzes a live audio stream and publishes the result as
data other nodes can react to. It's the bridge that makes
[shaders](../clip-elements/shader#audioreactive-shaders) pulse to the music and
lets a [Script node](./script-node) read the sound.

**Add it:** right‑click the empty canvas → **Add Audio Script Node**.

> Like the [Script node](./script-node), this is part of the optional scripting
> feature — the menu item only appears on builds that include it.

## Ports

- An **Audio In** port on the left — wire a clip's audio, a
  [Mic Input](./audio-output-node#mic-input-node), or an
  [Audio Capture node](./audio-output-node#audio-capture-node) into it.
- A **Script Out** port on the right — wire it into a
  [shader's audio‑in](../clip-elements/shader), a [Script node](./script-node)'s
  **Data In**, or an [A/B Select node](./ab-select-node).

## What it produces

Every frame the node emits these values from its analysis:

| Value | Range | Meaning |
|---|---|---|
| `level` | 0–1 | Overall loudness (RMS) |
| `low` / `mid` / `high` | 0–1 | Energy in the low, mid, and high bands |
| `beat` | 0–1 | A pulse that spikes on each beat, then decays |
| `spectrum` | 0–1 each | The FFT spectrum as an array of bins (low → high) |
| `hasAudio` | true/false | Whether audio is currently flowing |

Wired into a **shader**, these become the `u_audioLevel`, `u_bands`, `u_beat`,
`u_spectrum` (and related) uniforms automatically — see
[Writing audio‑reactive shaders](../clip-elements/shader#writing-audioreactive-shaders).
Wired into a **Script node**, they arrive in its `input` table
(`input.level`, `input.beat`, `input.spectrum`, …).

## Tuning the analysis

Click **Edit** to shape how the audio is analyzed. These settings change the feel
of the reaction without changing what shaders/scripts expect:

| Setting | Range | Default | Effect |
|---|---|---|---|
| **FFT size** | 256 – 8192 | 1024 | Frequency resolution of the analysis |
| **Spectrum bins** | 8 – 256 | 64 | Number of bars in the `spectrum` output |
| **Smoothing** | 0.0 – 0.98 | 0.5 | Higher = smoother, less jumpy motion |
| **Beat sensitivity** | 0.1 – 5.0 | 1.0 | Higher = more beats trigger the pulse |
| **Low/Mid split** | 20 Hz – 20 kHz | 250 Hz | Crossover between the low and mid bands |
| **Mid/High split** | 20 Hz – 20 kHz | 4 kHz | Crossover between the mid and high bands |

## Smooth idle when audio pauses

When the source is paused, the outputs don't cut out abruptly — the level, bands,
spectrum, and beat pulse **fade smoothly toward zero**, so reactive visuals
settle into their idle state instead of freezing. Resuming playback brings the
reaction straight back.

## Example

```
Media File (audio port) → Audio Script → Shader (audio‑in)
Audio Capture           → Audio Script → Script Node (Data In)
```
