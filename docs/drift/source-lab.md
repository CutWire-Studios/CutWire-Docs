---
sidebar_position: 7
title: Source Lab
---

# Source Lab

Source Lab is where footage gets prepared before it reaches the cut: scrub it
frame by frame, mark the parts worth using, split it at scene changes, and crop,
normalize, denoise, stabilise, or upscale it.

Open the **Source Lab** workspace from the switcher. It has six panels —
**Sources**, **Source Lab Viewer**, **Source Lab Trim**, **Ranges &
Markers**, **Process**, and **Output**.

## Sources

The source bin, separate from the timeline.

| Control | What it does |
|---|---|
| **Import Media** / **Import Folder** | Bring files in. |
| **Search media** | Filter by name. |
| Filters | **All**, **Favorites**, **Has ranges**, **Hide rejected**, **Video**, **Audio**, **Image**. |

Each row shows the format — resolution, frame rate, and sample rate.

## Viewer and transport

The viewer shows the selected source with its resolution and frame rate.

| Control | Key |
|---|---|
| **Play backward** | `J` |
| **Pause / Play** | `Space` |
| **Play forward, faster each press** | `L` |
| **Stop shuttle** | `K` |
| **Previous / Next frame** | `Left` / `Right` |
| **Toggle before/after compare** | `\` |

The readout shows **In**, **Out**, and **Dur** for the current trim.

## Trim

The **Source Lab Trim** panel is the source's own timeline, with a waveform.

| Control | What it does |
|---|---|
| **Range from In/Out** | Save the trimmed part as a range. |
| **Marker** (`M`) | Add a marker at the playhead. |
| **Show the whole source** | Zoom out to the full length. |
| **Zoom in / out** | Also `Ctrl+scroll`. |
| **Snap** | Snap to the playhead, markers, ranges, and trim. |
| **Zero-crossing** | Snap cuts to where the waveform crosses zero. |

:::tip
Zero-crossing snapping avoids the click you get from cutting audio mid-wave.
:::

## Ranges and markers

Named spans and point markers live on the source itself, independent of any
clip.

| Control | What it does |
|---|---|
| **Auto-split** | Detect shots and replace the ranges with one per shot. |
| **Make subclips** | Add each selected range to the media bin as its own clip. |
| **Favorite** / **Reject** / **Clear rating** | Rate a range. |
| **Rename** | Name a range. |
| **Note** | Attach a note to a range. |
| **Delete** | Remove the range. |

Filters narrow the list to **All**, **Favorites**, **Rejected**, or
**Markers**.

| Action | Shortcut |
|---|---|
| **Favorite the selected ranges** | `F` |
| **Reject the selected ranges** | `Delete` or `Backspace` |
| **Remove the selected ranges** | `Shift+Delete` |

## Process

Everything in **Process** applies to the source, so every clip cut from it
inherits the result. **Reset all** clears the lot.

### Crop / Reframe

Drag the crop box on the viewer, or set **X**, **Y**, **W**, and **H** by hand.
Aspect presets are available, with **Free** for anything else, and **Reset
crop** starts over.

### Speed

| Control | What it does |
|---|---|
| **Speed** | Retime the source. |
| **Keep pitch** | Hold the original pitch through a speed change. |

The panel shows the resulting length.

### Audio

| Control | What it does |
|---|---|
| **Gain** | Level adjustment. |
| **Normalize** | Bring the source to a loudness target. |
| **Target** | **-14 LUFS (streaming)**, **-16 LUFS**, **-23 LUFS (broadcast)**, or **Custom**. |
| **Reduce noise** | Clean hiss and background noise. Needs the noise-removal model. |

### Stabilize

**Smooth camera shake** steadies a handheld shot.

:::note
Some builds have no video stabilization support, and the panel says so.
:::

### Enhance

| Control | What it does |
|---|---|
| **Remove compression** | Clean up artefacts from heavily compressed footage. |
| **Upscale** | Raise the resolution, with the output size shown. |
| **None** | Keep the original size. |

Enhance needs models from **Extras**; without them the panel offers **Get
models**. It also estimates the time — *Enhancing this range takes about \<n\>.
Trim to the part you need first.*

### Previewing the result

The compare view renders a before/after:

- **Preview frame** — enhance just the frame you are on.
- **Render preview** — render the result into the B side.

Change a setting and it reads *The settings changed. Render the preview again.*

## Output

**Output** decides what happens to the processed source.

| Action | What it does |
|---|---|
| **Replace in bin** | The source becomes the result; clips on the timeline follow it. |
| **Add as copy** | Add the result to the media bin as a new item. |
| **Export file…** | Write the result to a file, leaving the project untouched. |

The plan card above says whether the job re-encodes — *Copies the streams, no
re-encode*, *Re-encodes the result*, or *No re-encode needed* — and gives the
result length.

### Export options

| Option | Choices |
|---|---|
| Quality | **High**, **Standard**, **Small**, **Custom** |
| Audio-only | **M4A**, **WAV**, **FLAC** |
| **Container** / **Codec** | Format of the output file. |
| **Fast trim (stream copy)** | Cut without re-encoding. Starts at the previous keyframe. |

:::note
Only a plain trim can be copied without re-encoding — any crop, speed change,
or enhance forces a re-encode.
:::

After a successful export, **Show in folder** opens it.

## Scenes

The **Scenes** assets tab does shot detection on a timeline clip rather than a
source:

| Control | What it does |
|---|---|
| **Find scenes** | Scan the selected clip for shot boundaries and rank each shot by movement and loudness. |
| **Split at scenes** | Cut the clip at every detected boundary. |
| **Add markers at scenes** | Drop a timeline marker at every boundary. |
| **Identify objects** | Also label each shot with what is in it. Slower, and needs the **Scene Labels** add-on. |
| **Sensitivity** | How readily a change counts as a cut. |
| **Most active first / In order** | Switch between activity ranking and timeline order. |

Click a shot to jump to it.

## Related

- [Media library](./media-library) — the timeline's own media bin.
- [Performance](./performance) — proxies for heavy footage.
- [Export](./export) — exporting the finished timeline.
