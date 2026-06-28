---
sidebar_position: 11
title: Text
---

# Text

A **Text** element is a styled text source — titles, lower thirds, captions,
names, and labels rendered directly by CutWire Prism. Unlike an HTML overlay it needs no
markup; you just type and style.

**Add it:** **Add Element → Text…**, which opens the **Text Editor**.

## The Text Editor

You set:

- **Content** — the text to show. It can contain `{placeholder}` tokens that get
  filled in live by a script (see below).
- **Font** — family and size.
- **Text colour** — pick any colour.
- **Background** — transparent (so it sits cleanly over other layers), or a solid
  colour you choose.
- **Alignment** — how the text is positioned within its frame.

## Live data with a script

Text elements have a **data‑in port**. Connect a
[Script node](../node-editor/script-node) to it and the script can fill in
`{placeholder}` tokens with live values that update over time.

For example, a text template of:

```
Time: {now}
```

fed by a clock script that sets `now` to the current time, becomes a live ticking
clock. Scripts can pull in counters, scores, prices, greetings — anything you can
compute in Lua. See the [Script node](../node-editor/script-node) page.

## What it can do

- Show static titles and lower thirds with full styling control.
- Show **live, changing text** when driven by a script.
- **Transform and position** on a canvas — drop a caption into the lower third
  over a camera on the other deck.

## Text vs. HTML overlay

- **Text** is fast to set up and ideal for simple titles and script‑driven
  values.
- [HTML overlay](./html-overlay) is for richer, designed graphics (animated
  scoreboards, branded frames) where you want web layout and styling.
