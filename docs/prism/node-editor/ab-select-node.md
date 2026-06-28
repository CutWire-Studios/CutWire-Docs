---
sidebar_position: 4
title: A/B Select node
---

# A/B Select node

![A/B Select node](./assets/ab-select-node.avif)

The **A/B Select node** is the central place to decide what plays on your
**A** and **B** decks.

**Add it:** right‑click the empty canvas → **Add → Switching Node → A/B Deck
Select**.

## Ports

- **Several blue inputs**, on the left edge, with an always‑available empty
  slot — connect a stream and a new empty input appears below it.
- **One red output**, on the right edge — the deck selection, which only
  connects to the [Output node](./output-node).

## Assigning decks

Each input row has a **name** (double‑click to rename) and an **[A] [B]** pair
of buttons. Click **A** or **B** to send that row's stream to the matching
deck.

- **The [A] [B] buttons stay disabled until the node's red output is
  connected to the Output node** — wire that up first.
- You can add **more than one A/B Select node**. All of them act as **one big
  A/B switcher**: only one stream can be on A and one on B at any time, across
  every A/B Select node in the graph.

## Typical setup

```
Input → (Process…) ┐
Input → (Process…) ┤→ A/B Select → Output
Input ──────────── ┘
```

Wire in as many candidate streams as you like (each behind whatever Process or
Layer nodes it needs), assign one to **A** and one to **B**, then use the
crossfader and transitions on the [Output node](./output-node) to mix between
them live.
