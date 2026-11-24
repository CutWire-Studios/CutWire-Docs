---
sidebar_position: 19
title: Effect makers
---

# Effect makers

Drift's effects, transitions, and audio effects are packages, and the editor can
build them. Two workspaces under **Studio** hold the node editors:

| Workspace | Builds |
|---|---|
| **Video effect maker** (Forge) | Effects, transitions, and animations. |
| **Audio effect maker** (Audio Forge) | Audio effects, as a pedalboard. |

Both export a `.driftfx` package and can install straight into the browsers the
rest of the editor uses.

## Video effect maker

Three panels: **Forge Nodes** (the palette), **Forge Graph** (the canvas), and
**Forge Inspector**.

### Building a graph

| Control | What it does |
|---|---|
| **New Effect / Transition / Animation** | Start a project of that kind. |
| **Open a saved Forge project** | Reopen earlier work. |
| **Search nodes** | Filter the palette. |
| **Undo / Redo** | `Ctrl+Z` / `Ctrl+Shift+Z`. |

Node editor shortcuts, live while the graph has focus:

| Action | Shortcut |
|---|---|
| Select all nodes | `Ctrl+A` |
| Copy / Paste / Duplicate | `Ctrl+C` / `Ctrl+V` / `Ctrl+D` |
| Delete selection | `Delete` or `Backspace` |
| Cancel the pending connection | `Escape` |
| Frame the selection | `F` |
| Fit all nodes | `Ctrl+0` |
| Zoom in / out | `Ctrl++` / `Ctrl+-` |
| Hold to pan, tap for quick add | `Space` |

### Inspector

Four tabs:

| Tab | Holds |
|---|---|
| **Node** | The selected node's settings. Also **Expose as slider**. |
| **Sliders** | The parameters your effect shows to users. |
| **Details** | Package metadata. |
| **Code** | The shader the graph compiles to. |

**Details** carries **Name**, **Identifier**, **Category**, **Description**,
**Author**, and **Version**, plus **Plays as** (**In**, **Out**, or across the
cut) and a **Default duration** in ms for transitions and animations.

:::note
*Plays across the cut; Loop repeats the transition window.* A transition can
play once across an overlap or loop inside its window.
:::

### Sliders

Right-click a node and choose **Expose as slider**, or use **Expose** on the
Node tab. Each slider gets a **Label**, an **identifier**, **Min**, **Max**, and
**Default** — plus **On by default** for switches, a **Default color** for
colours, **Comma-separated options** for choices, and a **Group** to organise
them.

**Move up**, **Move down**, and **Remove slider** order the panel users will
see. **Save preset** stores a set of values; **Reset values** clears them.

A slider nothing reads is flagged *Nothing uses this slider.*

### Previewing

The preview bar renders the graph on real footage:

| Control | What it does |
|---|---|
| **Use selection** | Preview on the selected clip. |
| **Follow selection** | Keep following whatever is selected. |
| **Loop play** | Repeat the preview window. |
| **In / Out** (ms) | The window to play. |
| **Preview output** | Which node's output to show. |

It reports **Compiles** when the graph is valid, and *Previewing a single node*
when you have isolated one.

### Installing and sharing

| Action | What it does |
|---|---|
| **Install** | Install it into the effect, transition, or animation browsers. |
| **Export .driftfx…** | Write a shareable Drift package. |
| **Export folder…** | Write the package as a folder. |

Installing over an existing id asks *“\<name\>” is already installed. Replace it
with this version?*

## Audio effect maker

The same shape, as a pedalboard: **Audio Forge Pedals**, **Audio Forge Graph**,
and **Audio Forge Inspector** (**Node**, **Sliders**, **Details**).

| Control | What it does |
|---|---|
| **New audio effect** | Start a pedalboard. |
| **Open a saved audio effect** | Reopen earlier work. |
| **Search pedals** | Filter the palette. |
| **Install** | Install it into the audio effects browser. |
| **Export .driftfx…** / **Export folder…** | Share the package. |

The audition bar reads *Pick an audio or video clip on the timeline to hear the
pedalboard on it. Loop play repeats its first four seconds.* It reports
**Valid** when the graph is sound.

A pedal's **bypass** can be switched live without rebuilding the graph, so you
can hear what each stage contributes while you play.

## Procedural packages

The **Procedural** workspace writes 3D generators in code rather than nodes —
see [3D → Procedural 3D](./3d).

## Where packages live

Effects, transitions, templates, and audio effects are addons. Installed
packages show up in the matching assets tab, and the **Custom** section of
[Extras](./addons) lists packs installed from a file.

:::tip
Contributions of effects, transitions, templates, and audio effects go to the
[Drift-Addons](https://github.com/CutWire-Studios/Drift-Addons) repository
rather than the editor itself.
:::

## Related

- [Effects](./clip-tools/effects) — using effects on clips.
- [Transitions](./clip-tools/transitions) — using transitions.
- [Audio](./clip-tools/audio) — the clip audio effect chain.
- [Addons](./addons) — installing and managing packs.
