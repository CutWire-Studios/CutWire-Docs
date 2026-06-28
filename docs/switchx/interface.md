---
sidebar_position: 3
title: The interface
---

# The interface

SwitchX runs in two windows: the **main control window** and the **Output
window**. This page walks through every pane, button, and menu in the main
window. (Dialogs that belong to individual clip elements are covered under
[Clip elements](./clip-elements/overview).)

## Window layout

The main window is split top‑to‑bottom:

```
┌───────────────────────────────────────────────────────────┐
│  Menu bar:  Media   View   Run                            │
├──────────────┬────────────────────────────────────────────┤
│ Asset        │  Clip Node Canvas                          │
│ Library      │  (cards you wire together)                 │
│ (sidebar)    │                                            │
├──────────────┴────────────────────────────────────────────┤
│  Control Panel                                            │
│  ┌────────┐  ┌──────────────┐  ┌───────┐  ┌────────┐     │
│  │ A Deck │  │ A/B Crossfader│  │ Panic │  │ B Deck │     │
│  └────────┘  └──────────────┘  └───────┘  └────────┘     │
└───────────────────────────────────────────────────────────┘
```

The dividers between panes are draggable — resize the canvas, the decks, and the
previews to taste.

## Asset Library (left sidebar)

A running list of every media **file** you've loaded (via **Add Files**, **Add
Folder**, or drag & drop). It's your clip library — a holding area separate from
the canvas.

- Drag an item onto the canvas to add it as a card.
- Items show a thumbnail and name.

## Clip Node Canvas

The large workspace in the centre. Every media element is a **card** here, and
you connect cards together to build your media flow. This is the heart of
SwitchX — it has its own page: [Node editor](./node-editor/overview).

When the canvas is empty it shows a **Get Started** placeholder with an **Add
Element ▾** button.

## Control Panel

The bottom strip, holding four groups left‑to‑right.

### A Deck and B Deck

The two live channels. Each deck box contains:

| Control | What it does |
|---|---|
| **(None selected)** label | Name of the element currently loaded on this deck. |
| **Preview** | Live thumbnail of this deck's output. |
| **Progress slider** | Scrub position for video/slideshow elements. Drag to seek. |
| **Time** | `current / total` time readout. |
| **Speed** | Per‑deck playback speed in percent (100% = normal). |
| **Play / Pause** | Start or pause this deck. |

To load an element onto a deck, wire it into an
[A/B Select node](./node-editor/ab-select-node) and click that node's **A** or
**B** button (or use a [hotkey](./hotkeys)).

### A/B Crossfader

The mixing controls between the decks:

- **◄ A / B ►** labels and the **crossfader slider** — drag to blend Deck A into
  Deck B on the program output.
- **Transition** dropdown — the style used when blending (Crossfade, Cut, Wipes,
  Slides, Dips, 3D Cube, and more).
- **Time (s)** — duration for an automatic transition (0.1–10 s).
- **AUTO** — glide smoothly to the opposite deck over the set time.
- **CUT** — switch instantly to the opposite deck.

Full details on every mode are in [Crossfader](./crossfader).

### Panic

Three live‑safety toggles, each pressable again to release:

| Button | Effect | Key |
|---|---|---|
| **BLACKOUT** | Cuts the program output to black and stops deck audio. | `B` |
| **PAUSE** | Freezes the program output on the current frame. | `P` |
| **STAY TUNED** | Shows a "Stay Tuned" holding screen. | — |

Only one panic state is active at a time.

## Menu bar

### Media menu

| Item | What it does |
|---|---|
| **Add Element ▸** | Submenu to create any source type (see below). |
| **Add Files…** | Pick media files to add to the Asset Library. |
| **Add Folder…** | Add every supported file in a folder to the Asset Library. |
| **Save Session…** (Ctrl+S) | Save the whole show to a session file. |
| **Load Session…** (Ctrl+O) | Open a saved session. |
| **Export Project…** | Bundle the session **and its media** into a portable project archive. |
| **Import Project…** | Extract and open a project archive. |
| **Clear All** | Remove every card from the canvas. |

**Add Element** submenu — each opens the matching element. They are:
Media File, Slideshow, Camera, Screen Capture, Window / Tab, Canvas, Shader,
HTML Overlay, Text, NDI Source, and Phone Camera (WebRTC). See
[Clip elements](./clip-elements/overview). (NDI and Phone Camera are greyed out
if your build doesn't include them.)

### View menu

| Item | What it does |
|---|---|
| **Output Window** | Show / raise the program Output window. |
| **Preview Output** | Open a second mirror window of the program mix (uses a second monitor when available). |
| **Edit Hotkeys…** (Ctrl+Shift+K) | Assign and manage keyboard triggers. See [Hotkeys](./hotkeys). |
| **NDI Program Output** | Toggle sending the program mix as an NDI source. See [Extra features](./extra-features/virtual-camera). |
| **Virtual Camera Output** | Toggle exposing the program mix as a webcam other apps can use. |
| **Freeze Frame Capture…** (Ctrl+Shift+F) | Grab the current frame from the program or any deck layer — save it, add it as an image element, and/or hold it as a still. |
| **Recording Panel…** | Open the recording panel to start/stop each stream. See [Recording](./extra-features/recording). |
| **Drop Marker** (Ctrl+M) | Timestamp a labelled marker in the active recording. |
| **Connect to OBS…** | Connect to OBS Studio over obs‑websocket (port 4455). |
| **Link Clip to OBS Scene…** | Make triggering a clip also switch OBS to a chosen scene. |
| **OBS Scenes** | Switch the connected OBS scene directly (enabled once connected). |
| **Stay on Top** | Keep the Output window above all other windows. |

### Run menu

| Item | What it does |
|---|---|
| **Start Remote Control Server…** | Start the built‑in web server so you can drive the mix from a phone or laptop browser. See [Remote control](./extra-features/remote-control). |

## Output window

A separate window titled **SwitchX - Output Monitor** that shows only the final
program mix — no controls, no overlays. Put it on your projector or capture it
with OBS. Make it full screen for a clean feed, and use **View → Stay on Top** to
keep it above other windows.
