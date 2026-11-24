---
sidebar_position: 13
title: Masking and tracking
---

# Masking and tracking

The **Masking & Tracking** workspace draws masks on the preview and pins them to
things that move. Open it from the workspace switcher, or use **Mask & track**
from a clip's context menu.

Masks behave as adjustment layers: a mask limits where the effects above it
apply, so blurring a face or grading one corner is a mask plus an effect, not a
separate tool.

## Mask tools

Each tool has a shortcut that is live while the pointer is over the preview, so
the same letters stay free on the timeline.

| Tool | What it does | Key |
|---|---|---|
| **Select** | Move and reshape masks you have already drawn. | `V` |
| **Rectangle** | Draw a rectangular mask to keep or hide a box-shaped area. | `R` |
| **Ellipse** | Draw an oval mask, such as a spotlight or a vignette. | `E` |
| **Polygon** | Click out a shape point by point for precise edges. | `P` |
| **Brush** | Paint the mask by hand and fix the edges. | `B` |
| **Lasso** | Draw around an object freehand to select it. | `F` |
| **Scissors** | Click along an edge and it snaps to the outline. | `C` |
| **Magic wand** | Click a colour to select all similar pixels next to it. | `U` |
| **AI object** | Click what you want and AI finds its outline. | `A` |
| **Tracker** | Pin a point to something moving so a mask or object can follow it. | `T` |

A view toggle beside the tools shows the mask as **Off**, **Tint hidden**, or
**Black & white** while you work.

### Brush

| Control | What it does | Key |
|---|---|---|
| **Size** | Brush diameter. | `[` / `]` |
| **Hardness** | Edge softness. | `Shift+[` / `Shift+]` |
| **Opacity** | How much each stroke covers. | — |
| **Smoothing** | Smooths the stroke path. | — |
| **Paint / Erase** | Left-drag paints or erases. | `X` |
| **Fill closed loops** | Fill a loop you draw rather than just its outline. | — |
| **Pressure changes size** | Use tablet pressure. | — |
| **Fill** | Cover the whole clip with the mask. | — |
| **Clear** | Empty the mask. | — |

:::caution
Brush masks are a still image, so brush fixes do not follow motion. For a moving
subject use **AI object**, or draw the mask and then track it. **Clear fix on
this frame** removes a brush fix from the frame at the playhead.
:::

### Magic wand, Lasso, and Scissors

These three fill into the same still mask the Brush paints.

| Control | What it does |
|---|---|
| **Tolerance** | How close a colour must be to be included. |
| **Contiguous** | Only pixels touching the one you clicked. |
| **Add** / **Subtract** | Click adds; `Shift` also adds, `Alt` or right-click subtracts. |

### AI object and background removal

**AI object** marks a subject by clicking it. Left-click marks the subject,
right-click marks what to exclude, and clicking a marker removes it.

| Control | What it does |
|---|---|
| **Anything (click to pick)** | Point at any subject. Needs the click-to-pick cutout model (about 190 MB). |
| **People (automatic)** | Finds people with no clicks. The smaller download, about 20 MB. |
| **Cut out** / **Cut out people** | Run the cutout. |
| **Clear points** | Start the marking over. |
| **Refine selected mask** | Re-run on an existing mask. |
| **Remove background** | Trace the subject and pin the result as a mask layer. |

Both need an [AI engine](./addons) installed first.

:::tip
The **Masks** assets tab has the same **Remove background…** action, plus
**Image or video as mask…** to use a file's own pixels as the coverage map, and
a row of ready-made mask presets you can drag onto a clip.
:::

## Trackers

The **Tracking** panel follows a feature through a clip and drives a mask, the
clip, or the camera from it. Trackers need a video clip.

| Tracker | Follows |
|---|---|
| **Point** | One spot, such as a corner or a face, for position-only following. |
| **Planar** | A flat surface, such as a screen or sign, including its rotation and scale. |

Place a point tracker by clicking the feature on the preview. For a planar
tracker, click the corners of a flat surface and press `Enter` to finish; add up
to four points on the same surface for rotation, scale, and perspective.

### Running a track

| Action | Shortcut |
|---|---|
| **Track whole clip** — backward and forward from here | — |
| **Track forward** | `Ctrl+T` |
| **Track backward** | `Ctrl+Shift+T` |
| **Track one frame forward** | `Ctrl+Shift+Right` |
| **Track one frame backward** | `Ctrl+Shift+Left` |
| **Stop tracking** | `Esc` |

If the track slips, move to a good frame and correct the box — the panel reads
*Corrected at this frame. Track ▶ to continue.* **Erase before** and **Erase
after** drop the samples on either side of the playhead.

| Control | What it does |
|---|---|
| **Box size** | Size of the area being followed. Bigger is steadier, smaller is more precise. |
| **Stop if match is worse than** | Tracking stops when the match degrades past this. |
| **Add point** | Place another point on the preview. |

### What a track drives

| Target | Effect |
|---|---|
| **Mask** | **Add mask** draws a mask from the tracker and makes it follow the track. |
| **Move clip** | Puts the clip's centre on the tracked point, or keeps the offset it had at the reference frame. |
| **Move camera** | Moves the tracked object to the middle of the frame, or keeps it where it is — this is how you stabilise a shot. |

A planar tracker can also report **Position**, **Position + rotation**,
**Position, rotation + size**, or **Perspective**, and **Locked to screen**
pins the result to the frame rather than the scene.

**Stop following** and **Stop driving from this** release the link; **Delete
tracker** removes it entirely.

### Follow an object

**Follow an object** is the quick version: click something in the preview and
the selected clip follows it, such as a label on a moving car. The panel then
reads *Follows <feature> on <clip>*, and **Use clip at playhead** repoints it at
whatever video is underneath.

## Face masks

**Blur every face** lays a tracked mask on each face in a clip in one click.
Each face stays editable afterwards, and the panel notes *Blur added on an
adjustment layer. Adjust the amount in the Effects tab.*

## Path editing

Polygon masks and shape paths share a path editor, live whenever it is on
screen:

| Action | Shortcut |
|---|---|
| **Pen tool: add points to a path** | `P` |
| **Convert point between corner and smooth** | `Shift+C` |
| **Delete point without keeping the curve** | `Shift+Delete` |

## Related

- [Cutouts and masks](./clip-tools/cutouts-and-masks) — mask controls in the clip inspector.
- [Effects](./clip-tools/effects) — what a mask limits.
- [Keyframes](./clip-tools/keyframes) — animating a mask by hand.
