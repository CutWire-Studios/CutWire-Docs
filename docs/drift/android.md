---
sidebar_position: 26
title: Android
---

# Android

Drift on Android is the same editor, not a cut-down companion app. The timeline,
effects, masks, cutouts, text, 3D models, voiceover, and export are all there,
and projects move between phone and desktop unchanged.

Install from
[Google Play](https://play.google.com/store/apps/details?id=org.cutwire.drift),
or sideload an APK from the
[latest release](https://github.com/CutWire-Studios/Drift/releases/latest) —
`arm64-v8a` for phones and tablets, `x86_64` for emulators.

## Two layouts

| Layout | Suits |
|---|---|
| **Mobile** | The touch interface made for phones. |
| **Desktop** | Full menus, panels, and precise timeline editing — for a mouse and keyboard. |

Tablets and Chromebooks get the desktop layout. If you plug a mouse into a
phone, Drift offers to switch: *A mouse is connected. The desktop layout has
full menus, panels and precise timeline editing.*

**Switch to desktop layout** and **Switch to mobile layout** are in the project
menu. Drift restarts to switch, and your project is kept.

:::tip
The desktop layout on a tablet gives you the same [workspaces](./workspaces) as
the desktop build, including Color, Masking & Tracking, and 3D.
:::

## The mobile interface

The mobile layout is a preview over the timeline, with a **Quick edit** bar for
the common jobs:

**Effects** · **Adjust** · **Sticker** · **Text** · **Crop** · **Trim** ·
**Video to audio** · **Image to video**

Selecting a clip opens pages rather than docked panels — **Transform**,
**Speed**, **Volume**, **Blending**, **Filters**, **Adjust**, **Crop**,
**Mask**, **Text**, **Shape**, **Sticker**, **Motion**, **3D Model**,
**Camera**, **Stabilize**, **Subtitles**, **Audio effects**, **Transition**, and
**Animation**.

The **Add** page has **Library** and **Properties** tabs, and **Extras** and
**Marketplace** pages install packs just as on desktop.

### Touch conventions

| Gesture | Does |
|---|---|
| Pinch | Zoom the preview or the crop frame. |
| Drag the edges | Reframe a crop — *Drag the edges to reframe · pinch to zoom*. |
| Tap an effect card | Apply it. |
| Touch bars under the canvas | Adjust the selected property. |

Trim controls are explicit buttons — **In** / **Trim start**, **Out** / **Trim
end**, and nudges one frame earlier or later — so you are not fighting for
pixels on a small screen.

## Preview quality

The same quality control as desktop sits in the preview toolbar — **Full**,
**Half**, **Quarter**, **1/8 (Eco)**, **Auto** — plus **Hardware** decoding,
**Guides**, and a **3D view** toggle.

:::note
Preview memory defaults to a sixteenth of system memory on Android (an eighth on
desktop), at least 128 MiB. Raise it in
[Settings → Performance](./performance) if playback stutters and you have
headroom.
:::

## Recording and voiceover

Voiceover recording works as it does on desktop, with **REC** and **PAUSED**
states on the transport. See [Recording](./recording).

## Sharing

**Share** sends the exported video straight out of the app to any app that takes
video. **Save Shareable Copy** and **Share a copy** package the project with its
media first — see [Projects](./projects).

Media shared *into* Drift from another app arrives through **Add shared media**.

## What differs from desktop

- Addon and model downloads are the same, but large models (speech recognition
  is about 670 MB) are worth getting on Wi-Fi.
- Hardware encoding and decoding depend on the device's media stack.
- Android builds are tagged `android-arm64` for addon platform matching, so
  Extras only offers packs that will run.

## Related

- [Getting started](./getting-started) — the same first-project walkthrough.
- [Projects](./projects) — moving a project between devices.
- [Performance](./performance) — memory and quality settings.
- [Export](./export) — sizes and codecs.
