---
sidebar_position: 8
title: Editing clips
---

# Editing clips

Select a clip on the timeline to edit it in the **Properties** panel on the
right. Tabs appear based on clip type — only relevant controls show.

![Properties panel for a selected clip](./assets/properties-general.avif)

If nothing is selected: *“It's empty here”* / *“Click a clip on the timeline to
edit its properties”*.

## Property tabs at a glance

| Tab | When it appears | What it’s for |
|---|---|---|
| **General** | Always | Name, type, timing, trim, source file |
| **Text** | Text / subtitle with style | Content, font, color, outline, shadow |
| **Position & size** | Non-audio | Transform, opacity, flip, auto keyframes |
| **Audio** | Video / audio | Volume, noise cleanup, audio effects, auto captions |
| **Speed & Fade** | Video / audio | Speed, reverse, fades, custom speed curve |
| **Layer mix** | Non-audio | Blend modes |
| **Transition** | Overlap / transition selection | Type, duration, remove |
| **Cutouts** | Visual clips | Subject cutout, geometric masks |
| **Effects** | Visual | Effect stack, face tracking, params |
| **Subtitles** | Subtitle clips | Cue list editor |
| **Shape** | Shape clips | Fill, stroke, geometry |

How-tos for major tools live under [Clip tools](./clip-tools/text-and-titles).

## General tab

| Control | What it does |
|---|---|
| **Clip name** | Label shown on the timeline. |
| **Type** | Read-only: Video, Audio, Image, Text, Subtitle, Shape, or Sticker. |
| **Starts at (s)** | Timeline start time in seconds. |
| **Duration (s)** | How long the clip plays. |
| **Trim → From (s) / To (s)** | In/out points inside the source media. |
| **File** | Path of the source file (media clips). |

Adjusting trim here matches dragging the clip’s edges on the timeline; use
whichever is more precise for the job.

## Position & size (quick reference)

| Control | What it does |
|---|---|
| **Position (px)** X / Y | Place the clip on the canvas. |
| **Size (px)** Width / Height | Scale. |
| **Opacity** / **Angle** | Fade and rotate. |
| **Rotate 90°** | Quarter turns. |
| **Flip H / Flip V** | Mirror. |
| **Reset position & size** | Restore defaults. |
| **Auto keyframes** | Record changes as you scrub — see [Keyframes](./clip-tools/keyframes). |

## Layer mix

**How layers mix** — blend modes: Normal, Multiply, Screen, Overlay, Add, Darken,
Lighten. **Reset to Normal** clears the choice.

## Next

- [Text and titles](./clip-tools/text-and-titles)
- [Effects](./clip-tools/effects)
- [Speed and motion](./clip-tools/speed-and-motion)
- [Keyframes](./clip-tools/keyframes)
