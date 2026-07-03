---
sidebar_position: 8
title: Hotkeys
---

# Hotkeys

CutWire Prism is built for fast, keyboard‑driven triggering during a live show. Each
clip card can be bound to a key — press it to fire the clip to **Deck A**, or hold
**Shift** to fire it to **Deck B**.

## How clip triggers work

- When you add a card, CutWire Prism **auto‑assigns** it the next free key from the grid
  below. The key shows as a small badge on the card.
- Press the key → the clip goes to **Deck A**.
- Press **Shift + key** → the clip goes to **Deck B**.
- Bindings are saved with your session, and CutWire Prism remembers a clip's key by its
  media so the same clip tends to get the same key next time.

## The trigger grid

Keys are assigned from this pool, left to right, top to bottom — the same layout
as a typical keyboard, so triggers fall under your fingers:

```
1 2 3 4 5 6 7 8 9 0
Q W E R T Y U I O P
A S D F G H J K L
Z X C V B N M
```

So the 1st clip is `1` (Deck A) / `Shift+1` (Deck B), the 11th is `Q` /
`Shift+Q`, and so on.

## Editing bindings

Open **View → Edit Hotkeys…** (**Ctrl+Shift+K**) to assign, change, or clear which
key triggers each clip. Each key can only be bound to one clip at a time.

## Live control keys

These keys are always available during a show, independent of clip triggers:

| Key | Action |
|---|---|
| `B` | **Blackout** — cut the program to black (toggles the Panic Blackout button). |
| `P` | **Pause** — freeze the program on the current frame (toggles Panic Pause). |
| `Ctrl+M` | **Drop Marker** in the active recording. |

> Note: because `B` and `P` are reserved for Blackout and Pause, those letters
> aren't used for clip triggers.

## Menu shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+S` | Save Session |
| `Ctrl+O` | Load Session |
| `Ctrl+Shift+K` | Edit Hotkeys |
| `Ctrl+Shift+F` | Freeze Frame Capture |
| `Ctrl+M` | Drop Marker |

## Cheat sheet

| You want to… | Press |
|---|---|
| Fire clip *n* to Deck A | its key (`1`–`0`, `Q`–`P`, `A`–`L`, `Z`–`M`) |
| Fire clip *n* to Deck B | **Shift +** its key |
| Black out the program | `B` |
| Freeze the program | `P` |
| Mark a moment while recording | `Ctrl+M` |
| Save / load the show | `Ctrl+S` / `Ctrl+O` |
| Re‑assign keys | `Ctrl+Shift+K` |
