---
sidebar_position: 15
title: Audio mixing
---

# Audio mixing

The **Audio** workspace puts the mixer, the clip audio tabs, and the audio
effect browser around the preview. The mixer is also available as a strip under
the timeline — **Toggle audio mixer strip** (unbound by default), or **Open in
Audio workspace** from the strip itself.

## Audio Mixer

One fader per audio track plus a **Master**.

| Control | What it does |
|---|---|
| **Fader** | Track level. Scroll to adjust, double-click for 0 dB. |
| **Pan** | Stereo placement. Drag to adjust, double-click to centre. |
| **Mute** / **Solo** | Silence a track, or hear only the soloed ones. |
| **Mute master** | Silence the whole mix. |
| **Add audio track** | Add a track from the mixer. |
| **Record voiceover on \<track\>** | Arm that track and record — see [Recording](./recording). |

## Loudness

| Control | What it does |
|---|---|
| **Analyze** | Measure loudness of the selected clip. |
| **Normalize to** | Set the clip's volume to **-14**, **-16**, or **-23 LUFS**. |

The readout reports *Loudness: \<n\> LUFS, true peak \<n\> dBTP*, and warns
*Normalized to \<n\> LUFS, but peaks clip* when the target cannot be met without
clipping.

:::tip
-14 LUFS suits streaming and social platforms, -23 LUFS is the broadcast target.
[Source Lab](./source-lab) can normalize a source before it reaches the cut.
:::

## Ducking

Auto ducking lowers a music clip while other tracks are speaking.

Select the music clip with speech overlapping it, then **Duck music** in the
mixer — or **Auto duck** from the clip's context menu.

| Control | What it does |
|---|---|
| **Duck against** | The tracks whose audio lowers the music. Defaults to **All other tracks**. |
| **Detect** | **Auto**, **Level**, or **Voice**. |
| **Preset** | **Gentle**, **Standard**, **Voiceover**, **Silence**, or **Custom**. |
| **Reduce by** | How far the music drops. |
| **Sensitivity** | How readily speech triggers the duck. |
| **Fade down** / **Fade up** | How quickly it drops and recovers. |

**Auto** uses voice detection when the **Voice activity (silero.vad)** addon is
installed and loudness otherwise; **Voice** ignores music and noise. Without the
addon the panel notes *Auto uses loudness only.*

Ducked clips are marked **Ducked** in the mixer. Running the pass again replaces
the previous one.

## Noise removal

The **Noise Removal** panel (and **Remove noise…** on a clip's **Audio** tab)
cleans hiss, hum, and background noise from speech. It needs an
[AI engine](./addons) and the noise removal model, about 9 MB.

Select an audio or video clip first — with nothing selected the panel reads
*Select an audio or video clip to remove noise.*

## Audio Sheet

The **Audio Sheet** panel renders the mix as a readable sheet — waveform, frame
strip, and analysis — for **Work area**, **Selected clip**, or **Whole
timeline**, at widths from 1000 to 2400 px.

| Reading | What it reports |
|---|---|
| **Integrated** | Overall loudness in LUFS. |
| **Loudness range** | Spread in LU. |
| **True peak** | Peak level in dBTP. |
| **Gaps** | Silent stretches. |
| **Clipping** | Where the signal clips. |
| **Events** | Detected hits and transients. |
| **Cuts in sync** | How many cuts land on the beat — *\<n\> ok, \<n\> off*. |

**Sections** splits the audio into speech and music bands, **Sounds** names what
it hears, and **Find** searches for a sound by description — *e.g. heavy rain or
a fast whoosh*. These need the AI engine and the audio tagging add-ons; without
them the panel offers **Get add-ons**. **Export PNG…** saves the sheet.

:::note
Audio Sheet is also what a connected agent reads to hear a project — see
[Agent access](./agent-access).
:::

## Audio effects

Audio effects go on clips with sound, chained in the clip's **Audio FX** tab or
dragged from the **Audio FX** assets tab. Reorder, bypass, or remove links in
the chain. Catalog and workflow: [Audio](./clip-tools/audio).

Build your own in the **Audio effect maker** workspace — see
[Effect makers](./effect-makers).

## Related

- [Audio](./clip-tools/audio) — the clip's audio tab and effect chain.
- [Recording](./recording) — voiceover, screen, and camera capture.
- [Speech and voices](./speech-and-voices) — captions and generated speech.
- [Source Lab](./source-lab) — normalize and denoise before the cut.
