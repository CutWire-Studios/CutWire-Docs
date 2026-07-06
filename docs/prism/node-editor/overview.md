---
sidebar_position: 1
title: Node editor overview
---

# The node editor

The node editor is built around a clear, left‑to‑right signal flow. You build
a simple pipeline out of four kinds of nodes and connect them with wires.

## The big picture

Video flows from left to right through four node types:

**Input → Process → Switching → Output**

- **Input nodes** are your sources (video files, images, cameras, screens,
  shaders, text, etc.).
- **Process nodes** apply effects like crop and flip.
- **Switching nodes** combine or choose between streams — either stacking them
  into layers, or picking which stream goes live on the A/B decks.
- **Output node** is the end of the chain — what actually shows on your
  program output.

You connect nodes by dragging from one node's port (the little coloured dot) to
another's. Wires come in three colours:

- **Blue** wires carry a video stream.
- **Red** wires carry an A/B deck selection (only between
  [A/B Select nodes](./ab-select-node) and the [Output node](./output-node)).
- **Yellow** wires carry a single raw audio stream (clip audio, mic, effect
  in/out, mixer inputs).
- **Orange** wires carry mixed or output-ready audio (mixer output, shader
  audio-in, Audio Output device ports). See
  [Audio nodes](./audio-output-node) and [Audio effect nodes](./audio-effect-node).

## Adding nodes

- **Clips / sources** are added through the **Add Element** menu (including
  **Mic Input…**), or by dragging media files onto the canvas. See
  [Clip elements](../clip-elements/overview).
- **Everything else** is added from the canvas **right‑click menu**:
  - **Add Input Node…** – add another source
  - **Add Process Node → Crop / Flip Horizontal / Flip Vertical**
  - **Add Switching Node → Layer / A/B Deck Select**
  - **Add Audio Effect Node →** (effect list)
  - **Add Audio Output**, **Add Audio Mixer**, and [Script nodes](./script-node)
    See [Audio nodes](./audio-output-node) for routing, mixers, and effects.
- **The Output node appears automatically** as soon as your graph has at least
  one node. There is always exactly one, and it can't be deleted while other
  nodes exist.

## The four node types

### 1. Input nodes (your sources)

Each source is now a clean node with a **single blue output port** on its
right edge — that's the video stream leaving the node.

- Click **Edit** to open that source's settings (trim a video, pick a camera,
  edit a shader, etc.).
- Video and image inputs keep their **trim** controls but **no longer have
  crop** — cropping now lives on a [Process node](#2-process-nodes-effects).
- Sources with audio still have a yellow audio port and can be wired to an
  [Audio Output](./audio-output-node) device port, through mixers and effects,
  as before.

Inputs no longer have A/B buttons or transform controls — those jobs moved to
the Switching nodes.

### 2. Process nodes (effects)

A [Process node](./process-node) has **one blue input** (left) and **one blue
output** (right). It applies a single effect to whatever passes through:

- **Crop** – click **Edit** to draw the crop region.
- **Flip Horizontal**
- **Flip Vertical**

Chain as many as you like, in any order — effects are applied in the order
they're connected. For example: `Input → Crop → Flip Horizontal → …`.

> Tip: Process nodes attach directly to an Input (or to another Process node).
> Put your crops/flips before you stack things into a Layer.

### 3a. Layer node (stacking / compositing)

A [Layer node](./layer-node) stacks several video streams on top of each other
on a shared canvas.

- It has **several blue inputs** and one blue output. It **always keeps one
  empty input at the bottom** — just connect a stream to it and a new empty
  slot appears, so you never run out.
- Each connected input shows a row with:
  - an **eye icon** – toggle that layer's visibility on/off,
  - the layer **name** (double‑click to rename),
  - **▲ / ▼ arrows** – move the layer up or down in the stack.
- **Order matters:** the **bottom row is the bottom‑most layer**, and the top
  row sits on top — just like a layers panel in an image editor.
- Click **Edit Layout** to open the canvas editor, where you drag and resize
  each layer to place it. Use **Edit Canvas Size** to change the composition
  resolution.

The Layer node replaces the old "transform context" node.

### 3b. A/B Deck Select node (going live)

This is the central place to decide what plays on your **A** and **B** decks.
See [A/B Select node](./ab-select-node).

- It has **several blue inputs** (again with an always‑available empty slot)
  and **one red output**.
- Each input row has a **name** (double‑click to rename) and an **[A] [B]**
  pair of buttons — click one to send that stream to deck A or deck B.
- You can have **more than one A/B Select node**, and they all behave as
  **one big A/B switcher**: only one stream can be on A and one on B at any
  time across all of them.
- The **[A] [B] buttons are disabled until the node's red output is connected
  to the Output node** — that's your cue to wire it up first.

### 4. Output node

The single endpoint of your graph. See [Output node](./output-node). It
accepts **either**:

- **one blue video stream** — shown directly, with **no crossfade** (the
  crossfader and transitions are disabled); or
- **one or more red wires** from A/B Select nodes — this enables the usual
  **A/B crossfader and transitions**.

You can't mix blue and red into the Output — it's one or the other.

## Two ways to run a show

**Simple single stream (no mixing):**

```
Input → (Process…) → Layer → Output
```

Whatever you build lands straight on the program output. Great for a fixed
composition.

**Full A/B mixing:**

```
Input → (Process…) ┐
Input → (Process…) ┤→ A/B Select → Output
Input ──────────── ┘
```

Assign streams to A and B, then use the crossfader and transitions to mix
between them live. Add a Layer node before the A/B Select if a deck should be
a multi‑layer composite.

## Handy behaviors

- **No reloading while you tinker.** Moving nodes, editing transforms,
  toggling a layer's eye, reordering layers, or renaming things won't re‑open
  your video files. Sources are only reloaded when you genuinely change
  *which* clip is playing.
- **Swapping A↔B is instant.** Moving the same clip between decks (or
  swapping the two decks' clips) reuses what's already playing instead of
  reloading from disk, so playback keeps its position.
- **Wires run straight.** Connection wires leave and enter nodes horizontally,
  perpendicular to the node edge.
