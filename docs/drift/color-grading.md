---
sidebar_position: 12
title: Color grading
---

# Color grading

The **Color** workspace puts the grading controls, a LUT browser, and video
scopes around the preview. Open it from the workspace switcher, or use
**Color grade** from a clip's context menu to jump straight there.

A grade belongs to the clip you selected. Put one on an
[adjustment layer](./timeline) instead and it grades everything below it —
the Color panel says *Timeline grade also applies* when one is in play, with a
**Select it** shortcut to go edit it.

## Color panel

Five tabs, each with its own **Reset this tab**:

### Basic

| Control | What it does |
|---|---|
| **Exposure** | Overall brightness. |
| **Contrast** | Spread between dark and light. |
| **Highlights** / **Shadows** | Recover or push the bright and dark regions. |
| **Whites** / **Blacks** | Set the white and black points. |
| **Temperature** | Warm or cool the shot. |
| **Tint** | Green–magenta balance. |
| **Saturation** | Colour intensity across the frame. |
| **Vibrance** | Lifts muted colours and leaves saturated ones alone. |

### Wheels

Lift, gamma, and gain as three wheels — **Shadows**, **Midtones**, and
**Highlights** — each with a brightness slider beside it.

Drag inside a wheel to tint that range. Hold `Shift` for fine control, and
double-click to reset the colour.

### Curves

| Curve | What it does |
|---|---|
| **Master** | One curve over all channels. |
| **Red** / **Green** / **Blue** | Per-channel curves. |
| **Hue vs Hue** | Shift one colour toward another. |
| **Hue vs Saturation** | Make one colour more or less vivid. |
| **Hue vs Luminance** | Brighten or darken one colour. |

Click to add a point, drag to move it, and double-click, press `Delete`, or drag
it off the plot to remove it. `Esc` cancels a drag. **Reset channel** clears one
curve without touching the others.

### HSL

Hue, saturation, and luminance for eight colour bands — **Red**, **Orange**,
**Yellow**, **Green**, **Aqua**, **Blue**, **Purple**, and **Magenta**. Use it
to pull one colour without affecting the rest of the frame.

### Finishing

| Effect | What it does |
|---|---|
| **Film Grain** | Adds film-like noise. |
| **Glow** | Soft glow around bright areas. |
| **Chromatic Aberration** | Colour fringing at the edges. |
| **Vignette** | Darkens the corners. |
| **Halation** | Red glow around highlights, like film. |

### Compare, reset, and reuse

| Control | What it does |
|---|---|
| **Compare** (`\`) | Toggle the original. Hold the key to see it only while pressed. |
| **Show grade** | Turn the grade back on after bypassing it. |
| **Apply to all…** | Copy this grade to every video, image, and other visual clip on the timeline. |
| **Reset everything** | Clear the whole grade. |

:::note
While **Compare** is on, the panel reads *Showing the original. Your grade is
hidden until you turn Compare off* — so a flat-looking preview is expected.
:::

Grading controls take keyframes like any other parameter. A slider marked
*Animated. Editing sets keyframes* is already animated — see
[Keyframes](./clip-tools/keyframes). Drift sets keys as you edit only when
**Auto keyframes** is on.

## Looks

The **Looks** panel is the LUT browser.

| Control | What it does |
|---|---|
| **Search LUTs** | Filter the list by name. |
| **LUT Intensity** | How strongly the LUT applies. |
| **Import LUTs** | Load your own `.cube` files; they appear under **My LUTs**. |
| **Get free LUTs** | Download a free pack of ready-made grading LUTs. |
| **Rename…** / **Remove** | Manage imported LUTs. |

Select a clip first — with nothing selected the panel reads *Select a clip to
try LUTs on it*.

## Scopes

The **Scopes** panel reads the picture coming out of the preview, so play or
move the playhead to update it.

| Scope | Reads |
|---|---|
| **Histogram** | Distribution of tones across the frame. |
| **Waveform** | Luminance against horizontal position. |
| **Parade** | Red, green, and blue waveforms side by side. |
| **Vectorscope** | Hue and saturation as a wheel. |

**All** shows them together.

## Related

- [Effects](./clip-tools/effects) — the clip effect stack the grade sits in.
- [Keyframes](./clip-tools/keyframes) — animating grade parameters.
- [Source Lab](./source-lab) — normalize, denoise, and upscale before the cut.
