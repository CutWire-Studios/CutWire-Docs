---
sidebar_position: 2
title: Virtual camera & network output
---

# Virtual camera & network output

Beyond the projector, CutWire Prism can send your program mix to other apps and
machines: as a **virtual webcam**, as an **NDI** network stream, and to **mirror
windows**.

## Virtual Camera output

Toggle **View → Virtual Camera Output** to expose the program mix as a **webcam**
that other applications can select — Zoom, Teams, OBS, a browser, etc. Pick
"CutWire Prism" as the camera in that app and it sees your live mix.

This is the easiest way to put CutWire Prism into a video call or another capture tool
without any cabling or capture card.

> Virtual camera is platform‑dependent. On Linux it requires the `v4l2loopback`
> module to be loaded (`sudo modprobe v4l2loopback`); if it isn't available the
> menu item is disabled and a tooltip explains why.

## NDI Program output

Toggle **View → NDI Program Output** to broadcast the program mix as an **NDI**
source on your network (named *CutWire Prism Program*). Other NDI‑aware tools — OBS,
vMix, another CutWire Prism, an NDI monitor — can then receive it over the LAN with no
cables.

Combined with the [NDI source](../clip-elements/ndi) element (which *receives*
NDI), this lets CutWire Prism sit anywhere in an NDI production chain.

> NDI is an optional feature. If your build doesn't include it the menu item is
> disabled.

## Mirror / preview windows

**View → Preview Output** opens a second window that mirrors the program mix. It
opens on a second monitor when one is available, so you can keep a confidence
monitor near you while the main Output window feeds the projector.

Use **View → Stay on Top** to keep the Output window above everything else, and
make it full screen for a clean projector feed.

## Choosing an output path

| You want to… | Use… |
|---|---|
| Project to a screen | The **Output window** (full screen on the projector). |
| Join a video call or feed OBS locally | **Virtual Camera Output**. |
| Send to other production tools over the network | **NDI Program Output**. |
| Keep a confidence monitor | **Preview Output**. |
| Keep a file of the show | [Recording](./recording). |

These aren't exclusive — you can run several at once.
