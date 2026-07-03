---
sidebar_position: 2
title: Process node
---

# Process node

A **Process node** applies a single effect to a video stream. Chain several
together to combine effects.

**Add it:** right‑click the empty canvas → **Add → Process Node →** pick one:

- **Crop**
- **Flip Horizontal**
- **Flip Vertical**

## Ports

Every Process node has **one blue input** (left edge) and **one blue output**
(right edge). Wire an [Input node](./overview#1-input-nodes-your-sources)'s
output — or another Process node's output — into the input, and take the
output onward to a [Layer node](./layer-node) or
[A/B Select node](./ab-select-node).

## Crop

Click **Edit** on a Crop node to draw the crop region over a preview of the
incoming stream.

## Flip Horizontal / Flip Vertical

No settings — the node mirrors the incoming stream along the chosen axis.

## Chaining

Effects apply in the order the nodes are connected. For example:

```
Input → Crop → Flip Horizontal → Layer
```

Put crops and flips before you stack a stream into a Layer node, so the
composited result already has the effect applied.
