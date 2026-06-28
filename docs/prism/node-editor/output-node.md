---
sidebar_position: 5
title: Output node
---

# Output node

The **Output node** is the single endpoint of your graph — what actually
shows on the program output.

It appears automatically as soon as your graph has at least one node. There is
always exactly one, and it can't be deleted while other nodes exist.

## What it accepts

The Output node takes **either**:

- **one blue video stream** — from an [Input](./overview#1-input-nodes-your-sources),
  [Process](./process-node), or [Layer](./layer-node) node. It's shown
  directly, with **no crossfade** — the crossfader and transitions are
  disabled; or
- **one or more red wires** from [A/B Select nodes](./ab-select-node) — this
  enables the usual **A/B crossfader and transitions**.

You can't mix blue and red into the Output at the same time — it's one or the
other.

## Choosing which mode you want

- For a **fixed composition** with nothing to crossfade, build
  `Input → (Process…) → Layer → Output` and connect the Layer's blue output
  straight to the Output node.
- For **live A/B mixing**, route your candidate streams through one or more
  [A/B Select nodes](./ab-select-node) and connect their red outputs to the
  Output node instead.
