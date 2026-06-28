---
sidebar_position: 2
title: Getting started
---

# Getting started

This page walks you from an empty workspace to your first live mix. It assumes
SwitchX is already installed and open.

When SwitchX launches you'll see two windows:

- The **main window** — your control surface (clip canvas on top, decks and
  crossfader below).
- The **Output window** (*SwitchX - Output Monitor*) — the program mix your
  audience sees. Move this to your projector or second screen.

## 1. Add some media

There are three quick ways to get media in:

- **Drag & drop** video or image files straight onto the main window.
- **Media → Add Files…** to pick individual files, or **Media → Add Folder…**
  to load a whole folder into the **Asset Library** (the left sidebar).
- **Add Element ▾** (the big button on the empty canvas, also in the
  **Media → Add Element** menu) to create live inputs — a camera, screen capture,
  canvas, shader, text, and more.

Each element becomes a **card** on the clip canvas. Files you load into the Asset
Library can be dragged onto the canvas, or added as cards directly.

## 2. Send a clip to a deck

Every card has an **A** and a **B** button.

- Click **A** to load that element onto **Deck A**.
- Click **B** to load it onto **Deck B**.

The deck's preview thumbnail and time readout update immediately. Use the deck's
**play/pause** button to start playback, and the **Speed** box for per‑deck
playback speed (100% = normal).

> Tip: every card can also be fired from the keyboard. New cards are
> auto‑assigned a key — press it for Deck A, or **Shift + key** for Deck B. See
> [Hotkeys](./hotkeys).

## 3. Mix with the crossfader

Load one element on **Deck A** and a different one on **Deck B**, then drag the
**A/B Crossfader** slider:

- Hard left = only Deck A on the program output.
- Hard right = only Deck B.
- Anywhere between = a blend, using the selected **Transition** style.

Press **AUTO** to glide automatically to the other side over the set time, or
**CUT** for an instant switch. See [Crossfader](./crossfader) for every
transition.

## 4. Open your output

The Output window is already showing your mix. For a live show:

- Drag it to your projector/second monitor and make it full screen.
- Or **View → Preview Output** to open a second mirror window.
- Or enable **NDI**, **Virtual Camera**, or **Recording** from the **View** menu
  (see [Extra features](./extra-features/recording)).

## 5. Use the panic controls

Under the crossfader sit three live‑safety buttons:

- **BLACKOUT** — cut the program to black (also the **B** key).
- **PAUSE** — freeze the output on the current frame (also the **P** key).
- **STAY TUNED** — show a holding screen.

Click again to release.

## 6. Save your show

**Media → Save Session…** (Ctrl+S) stores your whole layout — every element,
connection, hotkey, and the crossfader state. SwitchX also **autosaves** and will
offer to recover your work if it closed unexpectedly. To move a show to another
machine, use **Export Project…** to bundle the session and its media into one
portable file.

That's the loop: **load → trigger → mix → output → save.** The rest of these docs
go deep on each piece.
