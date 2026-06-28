---
sidebar_position: 6
title: Crossfader & transitions
---

# Crossfader & transitions

The **crossfader** blends **Deck A** into **Deck B** on the program output. It's
the centrepiece of live mixing: cue a source on each deck, then move between them
however you like — a slow dissolve, a hard cut, a wipe, or a 3D flip.

The crossfader controls sit in the **A/B Crossfader** box between the two decks.

## The controls

| Control | What it does |
|---|---|
| **Crossfader slider** (◄ A … B ►) | Drag to blend. Hard left = only Deck A; hard right = only Deck B; in between = a mix using the selected transition. |
| **Transition** dropdown | The *style* used when blending (see the table below). |
| **Time (s)** | Duration of an automatic transition, 0.1–10 seconds. |
| **AUTO** | Smoothly glide to the opposite deck over the set time, using the selected transition. |
| **CUT** | Jump instantly to the opposite deck. |

The crossfader also rides the **deck audio levels** as you move it, so sound
follows the picture.

## Mixing by hand vs. AUTO vs. CUT

- **By hand** — drag the slider for full manual control of the blend; great for
  riding a dissolve to the beat. Grabbing the slider stops any running AUTO move.
- **AUTO** — press it to animate from the current side to the other over the
  **Time (s)** you set. Press again before it finishes to reverse. AUTO always
  heads to whichever side you're *not* on.
- **CUT** — press for an instant switch to the other deck, ignoring the transition
  style (a true hard cut).

## Transition styles

The **Transition** dropdown picks how A and B combine across the blend. The full
set:

| Transition | What it looks like |
|---|---|
| **Crossfade** | A simple alpha dissolve between the decks. |
| **Cut** | A hard switch at the fader centre. |
| **Wipe ←** | B is revealed from the left. |
| **Wipe →** | B is revealed from the right. |
| **Wipe ↑** | B is revealed from bottom to top. |
| **Wipe ↓** | B is revealed from top to bottom. |
| **Slide ←** | A exits left as B enters from the right. |
| **Slide →** | A exits right as B enters from the left. |
| **Slide ↑** | A exits top as B enters from the bottom. |
| **Slide ↓** | A exits bottom as B enters from the top. |
| **Dip to Black** | Fade through black between decks. |
| **Dip to White** | Fade through white between decks. |
| **Additive Glow** | Adds the two images for a bright, glowing VJ blend. |
| **Cross Zoom** | A dynamic zoom‑scaling blend. |
| **Split Door (H)** | A horizontal split opens to reveal the next deck. |
| **Split Door (V)** | A vertical split opens to reveal the next deck. |
| **Vortex Spin** | A spinning vortex wraps from one deck to the other. |
| **Split 4‑Corner** | The frame splits into four quadrants that slide outward. |
| **3D Gallery Fly** | A cinematic 3D pan/zoom fly‑past with a warm light sweep. |
| **3D Cube** | A 3D perspective cube rotates to reveal the next deck. |
| **3D Flip** | The screen flips 180° in 3D perspective. |

> **Choosing a style:** Crossfade and Dip to Black are the safe, classic choices
> for most shows. Wipes and Slides suit energetic sports and music segments. The
> 3D and Vortex styles are showpiece moves — striking, but use them sparingly.

## A quick mixing workflow

1. Fire a source to **Deck A** (its card's **A** button or a hotkey).
2. Fire a different source to **Deck B** (its **B** button or **Shift + hotkey**).
3. Pick a **Transition** and set a **Time (s)**.
4. Press **AUTO** to glide across, drag the slider to ride it manually, or **CUT**
   for an instant switch.
5. Cue the next source on the deck you just left, and repeat.

## Remote and panic

- You can drive the crossfader, AUTO, CUT, and the transition style from another
  device — see [Remote control](./extra-features/remote-control).
- The [Panic](./interface#panic) buttons (Blackout / Pause / Stay Tuned) override
  the program output for live emergencies, independently of the crossfader.
