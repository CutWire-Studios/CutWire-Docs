---
sidebar_position: 1
title: Node editor overview
---

# The node editor

The clip canvas is a **node graph**. Every media element is a card (a "node"),
and you wire cards together by dragging between their **ports** — the small
coloured dots on each card. Connections decide how elements are layered,
positioned, fed audio, and fed live data.

You don't *have* to wire anything: a lone element fired to a deck just plays. The
node editor is what lets you go further — stacking layers, placing things on a
canvas, routing sound, and driving text from scripts.

## Getting around the canvas

- **Move a card** — drag its header/body.
- **Pan** — drag the empty background.
- **Zoom** — scroll the mouse wheel.
- **Select** — click a card; **right‑click** a card for its menu (Edit / Rename /
  Delete, etc.).
- **Right‑click the empty canvas** to add special nodes or group a selection
  (see below).
- **Delete a connection** — right‑click the wire → **Delete connection**.

## Ports and connections

Each port has a **kind**, shown by colour. You can only connect two compatible
ports, and SwitchX won't let you make an invalid link. Drag from one port and drop
on another to connect.

| Port | Colour | Found on | Meaning |
|---|---|---|---|
| **Chain In / Chain Out** | blue / green | every element | Stack elements into a layer chain (compositing). |
| **Transform Context** | gold | every element | Send this element into a canvas so it can be positioned. |
| **Context Hub** | gold | [Transform Context node](./transform-context-node) | The canvas that elements plug into. |
| **Audio (out)** | orange | media clips with sound | The clip's audio, to route onward. |
| **Audio In** (shader) | orange | [Shader](../clip-elements/shader) elements | Feed sound into a shader to make it react. |
| **Master Audio In** | amber | [Master Audio Output](./audio-output-node) | Collects audio to play out a device. |
| **Master Audio Input (out)** | teal | [Master Audio Input](./audio-output-node) | A microphone/line‑in feeding the graph. |
| **Script Out / Data In** | teal | [Script node](./script-node) / [Text](../clip-elements/text) | Live values from a script into a text template. |

### What each connection means

- **Chain Out → Chain In** — **layering**. Build a stack of elements that
  composite together into one deck output, lowest to highest.
- **Transform Context → Context Hub** — **placement**. Plug an element's
  Transform Context port into a [Transform Context node](./transform-context-node)
  to position and scale it on a defined output canvas. Several elements can share
  one canvas to build a composed layout.
- **Audio → Shader Audio In** — **reactivity**. Route a clip's sound (or a mic)
  into a [shader](../clip-elements/shader) so the visuals move with it.
- **Audio / Master Audio Input → Master Audio In** — **monitoring/output**.
  Send clip audio and live mic/line inputs to a
  [Master Audio Output](./audio-output-node) node to choose which device they
  play out of.
- **Script Out → Data In** — **live data**. Feed values computed by a
  [Script node](./script-node) into a [Text](../clip-elements/text) element's
  `{placeholder}` tokens.

> **Single vs. multiple connections.** Most input ports accept one wire at a time
> — connecting a new one replaces the old. Hub‑style ports (a canvas's Context
> Hub, a clip's audio out, a Master Audio In) accept **many** connections, so one
> canvas can host many elements and one output can collect many sources.

## Special nodes

Right‑click the empty canvas to add nodes that aren't media elements:

| Node | Purpose | Page |
|---|---|---|
| **Transform Context Node** | Defines an output canvas; elements plug in to be positioned. | [Transform Context node](./transform-context-node) |
| **Master Audio Output** | Chooses which device audio plays out of. | [Audio nodes](./audio-output-node) |
| **Master Audio Input** | Brings a microphone or line‑in into the graph. | [Audio nodes](./audio-output-node) |
| **Script Node** | Runs a Lua script that feeds live values to text. | [Script node](./script-node) |

You can also **Group Selection** to collapse several cards into a single
[group](./groups).
