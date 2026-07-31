---
sidebar_position: 6
title: Audio
---

# Audio

Mix levels, chain audio effects, clean noise, and jump into captions from the
**Audio** properties tab — plus presets in **Assets → Sounds**.

![Audio effects / Sounds panel](../assets/audio-properties.avif)

## Volume

Select a video or audio clip → **Properties → Audio** → **Volume**.

- Drag the volume control to set level.
- Click the keyframe diamond to animate volume over time — see
  [Keyframes](./keyframes).

## Sounds library

**Assets → Sounds** lists bundled audio-effect presets. Drag onto a clip or add
from the **Audio effects** section in Properties.

| Category | Effects |
|---|---|
| **Space** | Auto-Pan, Chorus, Echo, Flanger, Phaser, Slapback, Stereo Widen, Tremolo |
| **Texture** | 8-Bit, Bitcrush, Crystalize, Tape Saturation, Vinyl |
| **Transmission** | Megaphone, Muffled, Telephone, Underwater, Walkie-Talkie |
| **Utility** | Compressor, De-esser, EQ, Limiter, Noise Gate, Voice Leveler |
| **Voice** | Alien, Chipmunk, Dark Lord, Deep Voice, Robot, Wobble |

Reorder or remove effects in the clip’s audio effect chain.

## Noise cleanup

Under **Noise**, click **Remove noise…**. This uses the DeepFilter addon and an
[AI engine](../addons#ai-powered-addons).

In the **Remove noise** window, audition a short **Original** vs **Noise
removed** preview, then confirm to process the whole clip. Drift adds the clean
result on a **new audio track** and leaves the original alone.

Setup and A/B steps: [Addons → Use noise removal](../addons#use-noise-removal).

## Captions from speech

**Create captions from speech** on the Audio tab runs the same auto-caption flow
as the Text tab. Full steps: [Captions](./captions).

## Separate and unlink

On the [timeline](../timeline), **Separate audio** (`Ctrl+Shift+S`) pulls a
video’s soundtrack onto an audio track; **Unlink** (`Ctrl+Shift+U`) lets linked
pairs move independently.
