---
sidebar_position: 7
title: Script node
---

# Script node

A **Script node** runs a small **Lua** script and publishes the values it produces
as live data. Wire it into a [Text](../clip-elements/text) element and those
values fill in the text's `{placeholder}` tokens — giving you a live clock,
counter, score, ticker, or anything else you can compute.

**Add it:** right‑click the empty canvas → **Add Script Node** (opens the Script
Editor).

> Scripting is an optional feature. If your build doesn't include Lua, the menu
> item won't appear.

## How a script feeds text

A script `return`s a table of named values. For example, a clock script:

```lua
-- Live clock
return {
  now  = os.date("%H:%M:%S"),
  date = os.date("%Y-%m-%d"),
}
```

Wire the Script node's **Script Out** port to a Text element's **Data In** port,
and give the text a template like:

```
Time: {now}
```

Now `{now}` updates every time the script runs. One script can supply several
values (`now`, `date`, …) to one or more text elements.

## The Script Editor

Opened when you create a Script node, or via the on‑node **Edit** button:

- A **preset list** of sample scripts (clock, counter, greeting, a live price
  ticker, …) to start from.
- A **code area** to edit Lua or write your own.
- A **trigger** setting that controls when the script runs:
  - **Periodic** — re‑run every *N* milliseconds (set the interval). Use this for
    clocks and anything that changes over time.
  - **On start** — run once when triggered. Use for one‑off values.
  - **Manual** — only run when you tell it to.
- **Run now** to test the script and preview its output immediately.

## The node face

The node shows **Lua Script** and its trigger (e.g. `Every 1000ms`) and has:

- an **Edit** button (or double‑click) to reopen the editor,
- a teal **Script Out** port to connect to text,
- right‑click → **Run now** to fire the script on demand (handy for Manual
  triggers), and **Delete**.

## Typical uses

- A live **clock** or **countdown** rendered as styled text.
- A **counter** or **score** you bump with a Manual trigger.
- A **ticker** that pulls a value (like a price) on a periodic timer.

> For richly designed graphics (animated scoreboards, branded frames) consider an
> [HTML overlay](../clip-elements/html-overlay) instead — scripts shine for
> feeding plain text values.
