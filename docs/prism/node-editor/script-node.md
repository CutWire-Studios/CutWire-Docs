---
sidebar_position: 8
title: Script node
---

# Script node

A **Script node** runs a small **Lua** script and publishes the values it produces
as live data. Wire it into a [Text](../clip-elements/text) element and those
values fill in the text's `{placeholder}` tokens — giving you a live clock,
counter, score, ticker, or anything else you can compute. Scripts can also read
live data from other nodes, fetch from the web, and even drive the
[A/B switcher](./ab-select-node) automatically.

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

- A **preset list** to start from: **Live Clock**, **Counter**, **Greeting**,
  **Bitcoin Price**, **A/B Auto Switch**, and **Custom Script**.
- A **code area** with **Lua syntax highlighting** to edit or write your own.
- A **trigger** setting that controls when the script re‑runs:
  - **On input change** — re‑run automatically whenever incoming data (from the
    **Data In** port) changes. This is the default and covers most live data.
  - **Manual** — only run when you tell it to.
- A **Run** button to execute the script immediately and see the result: the
  **output pane** shows the JSON the script produced, and any parse or runtime
  **error** is shown inline so you can fix it fast.

> Need something on a timer (e.g. refresh every few seconds)? Add a
> [**Trigger node**](#trigger-node) and wire it into the script's **Data In** —
> its ticks drive the "On input change" trigger on a schedule.

## Reading live data — the `input` table

A Script node has a **Data In** port on the left. Wire other data producers into
it — a [Trigger node](#trigger-node), an [Audio Script node](./audio-script-node),
or another Script node — and their values arrive in a global Lua table called
**`input`**. If several producers are connected, their values are merged.

```lua
-- React to audio wired into Data In
return { level = string.format("%.0f%%", (input.level or 0) * 100) }
```

## What scripts can do

Scripts run in a sandboxed Lua environment with the standard **base**,
**string**, **math**, **table**, and **os** libraries. In addition:

- **`input`** — the merged live data from the Data In port (a table).
- **`http.get(url [, timeoutMs])`** — fetch a URL and return the response body as
  a string (default timeout 10 s). Handy for prices, scores, or feeds:

```lua
-- Simplified price ticker
local body = http.get("https://api.example.com/price")
return { price = body }
```

- **Return value = output.** Return a **table** of named values (becomes the
  node's data), a **string** (used as‑is), or nothing (empty output).

## Driving the A/B switcher

A Script node can automate which clips go live. Wire its **Script Out** into an
[A/B Select node](./ab-select-node)'s **Data In** port and return which slots to
send to each deck — by **slot name** (case‑insensitive) or **1‑based index**:

```lua
-- Alternate two sources every run
counter = (counter or 0) + 1
if counter % 2 == 0 then
  return { a = "Intro", b = "Loop" }
else
  return { a = "Loop", b = "Intro" }
end
```

The built‑in **A/B Auto Switch** preset is a ready‑made starting point.

## The node face

The node shows **Lua Script** and its trigger and has:

- an **Edit** button (or double‑click) to reopen the editor,
- a **Data In** port (left) for incoming live data,
- a teal **Script Out** port (right) to connect to text, an A/B Select node, or a
  shader,
- right‑click → **Run now** to fire the script on demand, and **Delete**.

## Typical uses

- A live **clock** or **countdown** rendered as styled text.
- A **counter** or **score** you bump with a Manual trigger.
- A **ticker** that pulls a value (like a price) via `http.get` on a
  [Trigger node](#trigger-node) schedule.
- **Auto‑switching** decks or shader parameters from live/audio data.

> For richly designed graphics (animated scoreboards, branded frames) consider an
> [HTML overlay](../clip-elements/html-overlay) instead — scripts shine for
> feeding plain text values.

## Trigger node

A **Trigger node** is a timing‑only producer — it emits a pulse on a schedule so
another node (usually a Script node set to **On input change**) runs repeatedly.

**Add it:** right‑click the empty canvas → **Add Trigger Node**.

Its edit dialog offers three modes:

- **Interval** — pulse every *N* seconds.
- **At time of day** — pulse at a set clock time.
- **Manual pulse** — fire only when you click.

Each pulse sends `{ tick, epoch, pulse = true }` out of its data port; wire that
into a Script node's **Data In** to give it a heartbeat.

