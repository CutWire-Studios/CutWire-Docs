---
sidebar_position: 12
title: NDI source
---

# NDI source

An **NDI Source** element brings in a video stream from another device or app on
your network using **NDI** (Network Device Interface). Use it to pull in a feed
from OBS, vMix, another CutWire Prism machine, an NDI camera, or a phone running an NDI
app — all over the LAN, no cables.

**Add it:** **Add Element → NDI Source…**, then pick a stream from the discovered
list.

> NDI is an optional feature. If your build doesn't include it, the menu item is
> greyed out.

## Finding a source

When you add an NDI source, CutWire Prism scans the network and lists every NDI stream
it finds. Pick one and it becomes a card that plays that live feed on whichever
deck you fire it to.

If nothing appears:

- Make sure something is actually **sending** NDI (e.g. CutWire Prism's own
  [NDI program output](../extra-features/virtual-camera), OBS with an NDI plugin,
  or a phone NDI app).
- Check both devices are on the same network, then try again.

## What it can do

- Receive a live network video feed and treat it like any other source —
  trigger it, mix it, transform it.
- Combine with [NDI program output](../extra-features/virtual-camera) to chain
  CutWire Prism with other production tools.

## Tip

CutWire Prism can both **receive** NDI (this element) and **send** its program mix as
NDI (**View → NDI Program Output**). That makes it easy to slot CutWire Prism into a
larger NDI‑based setup.
