---
sidebar_position: 4
title: Workspaces
---

# Workspaces

A workspace is one arrangement of panels for one kind of task. Drift ships with
a set of them, and the header switcher moves between them without disturbing your
project — the timeline, playhead, and selection stay where they were.

## Switching

| Control | What it does |
|---|---|
| **Workspace button** (header) | Opens the switcher. *Each workspace arranges the panels for one kind of task.* |
| `Alt+1` … `Alt+9` | Jump straight to a workspace by its position in the list. |
| `Ctrl+Alt+Right` / `Ctrl+Alt+Left` | Next / previous workspace. |

The switcher groups entries under **Everyday** and **Studio**. Studio holds the
deeper tools — **3D**, **Procedural**, **Video effect maker**, **Audio effect
maker**, and **AI**. Your own saved layouts are listed under Everyday.

:::tip
Setting **Experience with video editing** to *First time* in
[Settings → Personalize](./settings) hides the Studio workspaces; setting
**Working with AI agents** to *None* hides the **AI** and **Procedural**
workspaces and the **Ask** button in the header. You can show any of them again
from the same page.
:::

## The built-in workspaces

### Everyday

| Workspace | Panels it opens with |
|---|---|
| **Edit** | Assets (Media), Preview, Properties, Timeline — the default. |
| **Edit (Portrait)** | The same panels stacked for a tall canvas. |
| **Source Lab** | Sources, Source Lab Viewer, Process, Output, Trim, Ranges & Markers. See [Source Lab](./source-lab). |
| **Audio** | Audio FX, Preview, clip Audio FX and Audio tabs, History, Audio Mixer, Timeline. See [Audio mixing](./audio-mixing). |
| **Record** | Assets (Media), Preview, Teleprompter, Recorder, Noise Removal, Timeline, Audio Mixer. See [Recording](./recording). |
| **Subtitles** | Subtitles and Speech asset tabs, Subtitle timing, Preview, Subtitle cues, Subtitle text, Subtitle lane, Timeline. See [Speech and voices](./speech-and-voices). |
| **Color** | Looks, Preview, Scopes, Color grade, clip Effects, Timeline. See [Color grading](./color-grading). |
| **Keyframes** | Assets (Media), Preview, Properties, Keyframes, Timeline. See [Keyframes](./clip-tools/keyframes). |
| **Masking & Tracking** | Assets (Media), Preview, Masking, clip Effects, Tracking, Timeline. See [Masking and tracking](./masking-and-tracking). |

### Studio

| Workspace | Panels it opens with |
|---|---|
| **3D** | 3D Outliner, Preview, 3D Viewport, 3D Transform, Camera, View & Lights, 3D Model, Timeline. See [3D](./3d). |
| **AI** | Preview, Timeline, Audio Sheet, Agent Log, Agent Views, History. See [Agent access](./agent-access). |
| **Procedural** | Procedural Code, Preview, 3D Viewport, Procedural Parameters, Procedural Console, Timeline. |
| **Video effect maker** | Forge Nodes, Forge Graph, Timeline, Preview, Forge Inspector. See [Effect makers](./effect-makers). |
| **Audio effect maker** | Audio Forge Pedals, Audio Forge Graph, Timeline, Preview, Audio Forge Inspector. |

## Panels

Every workspace is built from the same pool of panels, so the same **Preview** or
**Timeline** you know appears in all of them:

**Assets** · **Properties** · **Preview** · **Timeline** · **Audio Mixer** ·
**Source Viewer** · **Sources** · **Source Lab Viewer** · **Source Lab Trim** ·
**Ranges & Markers** · **Process** · **Output** · **Subtitle cues** ·
**Subtitle lane** · **Subtitle text** · **Subtitle timing** · **History** ·
**Agent Log** · **Agent Views** · **Audio Sheet** · **Recorder** ·
**Teleprompter** · **Noise Removal** · **Color** · **Looks** · **Scopes** ·
**Keyframes** · **Masking** · **Tracking** · **3D Viewport** · **3D Outliner** ·
**3D Transform** · **Camera** · **View & Lights** · **Procedural Code** ·
**Procedural Parameters** · **Procedural Console** · **Forge Graph** ·
**Forge Nodes** · **Forge Inspector** · **Audio Forge Graph** ·
**Audio Forge Pedals** · **Audio Forge Inspector**

A single tab of the **Assets** or **Properties** panel can also be placed on its
own — the **Color** workspace, for example, docks the clip **Effects** tab next
to the grading controls instead of the whole inspector.

## Making your own

Open **Settings → Workspaces** to arrange layouts:

> Arrange panels into layouts, optionally across several windows. Drag a panel
> onto an edge of another block to split it, or onto its middle to add a tab.
> Nothing changes in the editor until you save.

| Control | What it does |
|---|---|
| **New workspace** | Start a layout of your own. |
| **Orientation** | *Auto (follow canvas)*, *Landscape*, or *Portrait*. Auto picks one from the project's canvas shape. |
| **Panels / Library tabs / Inspector tabs** | The three palettes you drag from. |
| **Default tab** / **Make active tab** | Which tab of a stacked block is shown first. |
| **Reset** | Built-in presets keep a copy of the original, so this brings them back. |

Changes apply only when you press **Save**; **Discard** and **Keep editing** are
offered if you navigate away with unsaved edits.

### Several windows

A workspace can span more than one window. Add a **Window** in the designer, give
it a title, and pin it to **Any screen** or **Fullscreen**.

:::tip
A Preview-only fullscreen window makes a clean second-monitor output.
:::

Panels can also be floated out of the layout into their own window while you
work. **Restore Workspace Windows** (unbound by default) brings back any window
from the active workspace that has been closed.

## Related

- [The interface](./interface) — what each panel does.
- [Settings](./settings) — Personalize, Appearance, and Workspaces.
- [Hotkeys](./hotkeys) — the full keymap, including per-panel scopes.
