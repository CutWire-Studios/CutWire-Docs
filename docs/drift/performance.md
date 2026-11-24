---
sidebar_position: 21
title: Performance
---

# Performance

Heavy footage, deep effect stacks, and 4K timelines can outrun live playback.
Drift has three answers — preview copies, pre-rendered sections, and preview
quality — and none of them change what you export.

## Preview copies (proxies)

A proxy is a small, easy-to-decode copy of a clip that the preview plays
instead of the original. **Export always uses the original media.**

| Control | Where | What it does |
|---|---|---|
| **Create proxy** | Clip context menu | Make a preview copy of this clip. |
| **Link proxy…** | Clip context menu | Point a clip at a proxy you already have. |
| **Use preview copies for playback** | Settings → Storage & media | Play clips from their proxies where one exists. |
| **Suggest preview copies on import** | Settings → Storage & media | **Ask**, **Always create preview copies**, or **Never ask**. |
| **Preview copy resolution** | Settings → Storage & media | **360p**, **540p**, **720p**, or **1080p**. |

When Drift spots slow footage it offers: *\<n\> clips may play back slowly. A
proxy makes previewing smoother; export still uses the original.* While a proxy
is in use the preview notes *Previewing from a low-resolution proxy. Export uses
the original.*

:::tip
Linking one proxy teaches Drift its naming pattern, so proxies sitting next to
your media link automatically on future imports.
:::

Proxies and reversed clips are written to the folder set by **Save preview
copies and reversed clips**. Changing the folder moves nothing; proxies in the
old folder are simply not found until you point back at it. If the folder is
unplugged or read-only, Drift falls back to its cache until it returns.

:::note
Changing **Preview copy resolution** does not re-make existing copies — they
stay unused until you create them again at the new size.
:::

## Pre-rendered sections

Pre-rendering bakes a finished stretch of timeline so it plays and exports
without compositing again.

1. Mark a work area with `I` and `O`.
2. Press **Pre-render work area**.

| Control | What it does |
|---|---|
| **Pre-render** | Bake the current work area. |
| **Manage pre-rendered sections…** | List, review, and remove sections. |
| **Delete pre-rendered section** | Drop one section. |
| **Delete all pre-rendered sections** | Clear the lot. |

Baked ranges are marked **Pre-rendered** on the timeline. Pre-rendered sections
belong to the main timeline — inside a composite the panel says so and asks you
to switch back.

### When your edit moves on

If you change a baked range, Drift warns that *\<n\> pre-rendered sections no
longer match your edits*, and the export dialog offers:

| Choice | Result |
|---|---|
| **Re-render first** | Re-bake, then export. |
| **Render them live** | Ignore the stale bakes and composite normally. |
| **Export as is** | Use the old pictures. |

**Use pre-rendered sections** in the export dialog controls whether export reads
baked ranges at all.

## Preview quality

**Settings → Preview → Playback quality** lowers what the preview renders.
*Lower is smoother while editing. Full matches an export exactly; Auto renders
only the pixels on screen.*

| Setting | Use when |
|---|---|
| **Full** | Checking the picture exactly. |
| **Half** / **Quarter** | Normal editing on a busy timeline. |
| **1/8 (Eco)** | Very heavy projects, or saving battery. |
| **Auto** | Let Drift render only what is on screen. |

**Decoding** chooses how video is decoded for preview: *Software is smoother for
most clips but uses more CPU. Hardware suits high-quality 4K.*

## Graphics

**Settings → Performance**:

| Setting | What it does |
|---|---|
| **Interface graphics API** | What draws panels, the timeline, and menus. **OpenGL** hands the preview over without a copy; the others can make the interface smoother but copy every preview frame through the CPU, so playback may get slower. |
| **Faster preview (experimental)** | Keeps video on the graphics card. Turn it off if the picture looks wrong. |
| **Graphics card** | Which card Drift runs on — **Power saving (integrated GPU)** or **High performance (discrete GPU)**. |

:::note
These take effect after a restart. If Drift does not start with your choice of
graphics API, it falls back to OpenGL and tells you so.
:::

## Advanced tuning

**Settings → Performance → Advanced tuning** exposes the memory and playback
knobs. *The defaults suit most machines; changing them can make playback stutter
or use far more memory.* **Reset to defaults** puts them back.

| Setting | Controls |
|---|---|
| **Skip frames when playback falls behind** | Drop preview frames that finish more than *n* ms late instead of showing them late. **Off** never drops a frame. |
| **Preview memory** | Memory shared by all clips for decoded frames. **Automatic** uses an eighth of system memory (a sixteenth on Android), at least 128 MiB. |
| **Scrubbing memory per clip** | Decoded images each clip keeps for scrubbing and effects. **Unlimited** keeps up to 16 frames per clip, which is large for 4K. |
| **Effects workspace: buffer count** | Idle GPU render targets kept for reuse. |
| **Effects workspace: video memory limit** | Cap on video memory held by idle render targets. |
| **Graphics card image cache** | Stills and converted frames kept on the GPU, by count and by memory. |

## Cache

**Settings → Storage & media → Cache** shows how much is used, with **Clear
cache** and a **Cache location** you can change (takes effect after restart).

## Related

- [Preview](./preview) — the preview's own toolbar.
- [Source Lab](./source-lab) — converting awkward footage into something edit-friendly.
- [Export](./export) — hardware encoding and pre-rendered sections.
- [Settings](./settings) — every page in one place.
