---
sidebar_position: 3
title: The interface
---

# The interface

Drift's window is a header strip over a grid of panels. Which panels you see is
decided by the active [workspace](./workspaces) — **Edit** opens with assets on
the left, preview in the center, properties on the right, and the timeline along
the bottom.

![Drift main window layout](./assets/main-window.avif)

## Header

| Control | What it does |
|---|---|
| **Projects** | Project name and saved state. *Click to switch or start new* — recent projects, new, open, save with media, and project properties. |
| **Search** (`Ctrl+K`) | Jump to any command, setting, effect, workspace, or clip. |
| **Ask** (`Ctrl+Shift+K`) | *Describe an edit in plain words and Drift does it*, e.g. “fade in over half a second”. |
| **Workspace** | Switch workspace. See [Workspaces](./workspaces). |
| **Video** | Video size, crop, multicam, and pre-rendered sections. |
| **Marketplace** | Effects, transitions, sound effects, and stock media. |
| **Extras** | Optional AI engines, models, and add-ons. See [Addons](./addons). |
| **Settings** | Preferences, appearance, shortcuts, and workspaces. |
| **Notifications** | Update notices and background job results. |
| **Help** | Help and support, including **Debug info**. |
| **Export** | Opens the [export](./export) dialog; shows progress while an export runs. |

:::note
**Ask** needs the Command Bar Model, a small local model of about 490 MB. Drift
offers to install it the first time you use it. Setting **Working with AI
agents** to *None* in [Settings → Personalize](./settings) hides the button.
:::

## Assets panel

Tabs for browsing and adding content, covered on
[Media library](./media-library):

**Media** · **Text** · **Subtitles** · **Speech** · **Stickers** · **Shapes** ·
**Masks** · **Scenes** · **Effects** · **Templates** · **Transitions** ·
**Audio FX**

Drag items from most tabs onto the timeline, or onto overlapping clips for
transitions.

:::tip
**Labels under panel tabs** in [Settings → Personalize](./settings) puts a name
under each icon on the side rails.
:::

## Preview

The composition at the current playhead. Preview and export share one
compositor, so what you see is what you get. Toolbar controls cover fit and
fill, preview quality, guides, zoom, and fullscreen — see [Preview](./preview).

Overlays appear on top of the frame when you transform or crop a clip, draw a
mask, place a tracker, or fly the [3D](./3d) view.

## Properties panel

Controls for the selected clip. With nothing selected you'll see *“It's empty
here”* — click a clip on the timeline to edit it.

Tabs appear according to clip type:

| Tab | For |
|---|---|
| **General** | Name, timing, enablement. |
| **Text** | Titles and captions. |
| **Shape** | Shape overlays. |
| **Motion** | Lottie animations and SVG drawings. |
| **3D Model** | `.glb` models and Gaussian splats. |
| **PDF** | PDF documents. |
| **Subtitles** | Caption cues on a subtitle clip. |
| **Transform** | Position, size, rotation, anchor, depth. |
| **Camera** | Scene camera clips. |
| **Stabilization** | Smoothing for shaky footage. |
| **Animation** | Clip-level animation. |
| **Audio** | Volume, pan, noise removal, auto subtitles. |
| **Speed** | Speed, reverse, fades. |
| **Blending** | Blend mode and opacity. |
| **Masks** | Mask layers on the clip. |
| **Effects** | The clip's effect stack. |
| **Audio FX** | The clip's audio effect chain. |
| **Transition** | A transition between two clips. |

Overview: [Editing clips](./editing-clips).

## Timeline

Multi-track editor with a toolbar for playback, tools, split helpers, markers,
snapping, ripple, and zoom. Track types include video, audio, text, subtitle,
and shape, plus adjustment and transform layers. Full reference:
[Timeline](./timeline).

## Panels you can dock

Beyond the four above, a workspace can hold the **Audio Mixer**, **Color**,
**Looks**, **Scopes**, **Keyframes**, **Masking**, **Tracking**, **3D
Viewport**, **Recorder**, **Teleprompter**, **Audio Sheet**, **History**, and
more. [Workspaces](./workspaces) lists them all and explains how to arrange your
own.
