---
sidebar_position: 10
title: Keyframes
---

# Keyframes

Keyframes record a property value at a moment in time so Drift can interpolate
between them — position, opacity, volume, effect parameters, and more.

![Keyframe edit strip](../assets/keyframes.avif)

## Auto keyframes

On **Position & size** and **Effects**, enable **Auto keyframes**. With the
toggle on, changing a value while the playhead is parked writes (or updates) a
keyframe at that time.

Turn auto keyframes off when you want one-shot adjustments that apply for the
whole clip.

## Diamonds and tips

Property rows that support animation show a diamond control:

1. Move the playhead to the time you want.
2. Click the diamond (or change the value with auto keyframes on).
3. Move to another time and set a different value.

Drift interpolates between keys. Remove a key by selecting it and deleting, or by
clearing keys from the property’s context controls when available.

## Graph editor

With keyframed properties selected, the timeline **KeyframeGraph** shows curves
so you can refine timing and easing visually. Use it for smoother motion than
stepping values alone.

## What you can animate

Common targets:

- Transform: position, size, opacity, rotation ([Editing clips](../editing-clips))
- Volume ([Audio](./audio))
- Effect parameters ([Effects](./effects))
- Speed via the [custom speed curve](./speed-and-motion) window (related, but its
  own editor)
