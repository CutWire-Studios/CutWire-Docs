---
sidebar_position: 3
title: Layer node
---

# Layer node

The **Layer node** stacks several video streams on top of each other on a
shared canvas — SwitchX's compositing node. It replaces the old "transform
context" node.

**Add it:** right‑click the empty canvas → **Add → Switching Node → Layer**.

## Ports

- **Several blue inputs**, on the left edge. The node **always keeps one empty
  input available** — connect a stream to it and a new empty slot appears
  below, so you never run out of room to add another layer.
- **One blue output**, on the right edge — the composited result, ready to
  feed a [Process node](./process-node), an [A/B Select node](./ab-select-node),
  or the [Output node](./output-node) directly.

## The layer list

Each connected input adds a row to the node showing:

| Control | What it does |
|---|---|
| **Eye icon** | Toggle that layer's visibility on/off without disconnecting it. |
| **Name** | Double‑click to rename the layer. |
| **▲ / ▼** | Move the layer up or down in the stack. |

**Order matters:** the **bottom row is the bottom‑most layer**; the top row
sits on top of everything below it — just like a layers panel in an image
editor.

## Edit Layout

Click **Edit Layout** on the node to open the visual canvas editor, where you
drag and resize each connected layer directly on a representation of the
composition. Use **Edit Canvas Size** to change the output resolution the
layers are positioned within.

## Typical setup

1. Wire a background [Input node](../clip-elements/canvas) into the Layer
   node's first input.
2. Wire a camera, text, or overlay into the next input(s) — each gets its own
   row.
3. Use **Edit Layout** to position and size each layer.
4. Reorder rows with **▲ / ▼** so the right elements sit on top.
5. Take the Layer node's output to an [A/B Select node](./ab-select-node) or
   straight to the [Output node](./output-node).
