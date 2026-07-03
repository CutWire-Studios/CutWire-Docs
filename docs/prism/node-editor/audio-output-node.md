---
sidebar_position: 6
title: Audio nodes
---

# Audio nodes

CutWire Prism routes sound through the node graph, just like video. There are three
audio pieces:

- the **audio strip** on a media clip that has sound,
- the **Master Audio Output** node (where audio plays out), and
- the **Master Audio Input** node (a microphone or line‑in coming in).

## Clip audio strip

When you add a [Media File](../clip-elements/media-file) that contains an audio
track, its card grows an **audio strip** showing the volume, play/mute state,
playback mode, and delay — plus an **Edit Audio** button and an orange **audio
port**.

### Edit Audio button

Click **Edit Audio** (on the strip, or right‑click the card → **Edit Audio**) to
open the **Audio Settings** dialog:

| Setting | What it does |
|---|---|
| **Volume** | Clip playback volume, 0–100%. |
| **Muted** | Silence this clip without changing its volume. |
| **Playback Mode** | When the audio is allowed to play: **only when Deck A is active**, **only when Deck B is active**, or **continue playing regardless of the active deck**. |
| **Audio Delay** | Offset the audio in milliseconds, to fix lip‑sync. |

The clip's **audio port** lets you route that sound onward — for example into a
[shader's audio‑in port](../clip-elements/shader) to make visuals react, or into a
**Master Audio Output** node to choose a playback device.

## Master Audio Output node

The **Master Audio Output** node decides **which device** audio plays out of.
By default CutWire Prism uses the system default output; add this node when you need to
send audio to a specific interface (a PA feed, a separate sound card, headphones).

**Add it:** right‑click the empty canvas → **Add Master Audio Output**.

- It has an amber **Master Audio In** port that accepts **many** connections —
  wire clip audio ports and Master Audio Inputs into it.
- Click the **device button** on the node to choose the output device from a menu
  (System Default, or any detected audio output).

## Master Audio Input node

The **Master Audio Input** node brings a live **microphone or line‑in** into the
graph — commentary, a stage mic, a music feed.

**Add it:** right‑click the empty canvas → **Add Master Audio Input**.

- It has a teal **output port** — wire it into a **Master Audio Output** (to play
  it through a device) or into a [shader's audio‑in](../clip-elements/shader) (to
  make visuals react to the mic).
- Click the **device button** to pick the input device (System Default Mic, or any
  detected input).
- **Right‑click** the node for **Set Volume…** and **Mute / Unmute**.

## Putting it together

- **Hear a clip's audio on a specific speaker:** clip audio port → Master Audio
  Output (device set).
- **Make a shader pulse to music:** clip audio port (or Master Audio Input) →
  shader's audio‑in port.
- **Add live commentary to the mix:** Master Audio Input → Master Audio Output.

> A reminder from the deck controls: the **crossfader** also affects deck audio
> levels as you blend, and the **panic** Blackout / Pause / Stay Tuned buttons cut
> deck audio.
