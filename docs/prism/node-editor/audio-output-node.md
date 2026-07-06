---
sidebar_position: 6
title: Audio nodes
---

# Audio nodes

CutWire Prism routes sound through the node graph, just like video. The main
pieces are:

- the **audio strip** on a clip that has sound,
- **[Audio effect nodes](./audio-effect-node)** for real-time DSP on a stream,
- the **Audio Output** node (where audio plays out),
- **Mic Input** nodes (microphone or line‑in), and
- **Audio Mixer** nodes (blend multiple streams before an output).

Audio wires use two colours:

- **Yellow** — a single raw stream (clip audio, mic, effect in/out, mixer inputs).
- **Orange** — mixed or output-ready audio (mixer out, shader audio-in, output
  device ports).

## Clip audio strip

When you add a [Media File](../clip-elements/media-file) or other source that
contains an audio track, its card grows an **audio strip** showing the current
**playback mode** and **delay**, plus an **Edit Audio** button and a yellow
**audio port** on the right.

### Edit Audio button

Click **Edit Audio** (on the strip, or right‑click the card → **Edit Audio**) to
open the **Audio Settings** dialog:

| Setting | What it does |
|---|---|
| **Playback Mode** | **Always play (while on either deck)** — audio keeps playing whenever the clip is on A or B. **Play when its deck is active** — audio follows the crossfader and is only fully audible while that deck is the active side. |
| **Audio Delay** | Offset the audio in milliseconds (−5000 to +5000) to fix lip‑sync. |

Per-stream **volume and mute** are set on the [Audio Mixer](#audio-mixer-node)
when a clip is routed through one (see below), not in this dialog.

The clip's **audio port** lets you route that sound onward — for example through
[Audio effect nodes](./audio-effect-node), into an **Audio Mixer**, into a
[shader's audio‑in port](../clip-elements/shader) to make visuals react, or into
an **Audio Output** device port.

## Audio Output node

The **Audio Output** node is where routed audio leaves the graph. There can be
only **one** in a session. Add it when you need to send sound to specific
interfaces (a PA feed, a separate sound card, headphones) instead of relying on
the system default alone.

**Add it:** right‑click the empty canvas → **Add Audio Output**.

The node lists every detected playback device — **Default** plus each output
CutWire Prism finds. Each device has its own **orange input port** on the left;
wire a stream (or a mixer's output) into the port for the device you want.

- **Right‑click** the node → **Refresh Devices** if you plug in hardware after
  opening the session.
- Wiring a stream **directly** to a device port automatically inserts an
  **Audio Mixer** in between when needed (see below).

## Mic Input node

A **Mic Input** node brings a live **microphone or line‑in** into the graph —
commentary, a stage mic, a music feed.

**Add it:** **Add Element → Mic Input…** (not from the canvas right‑click menu).

- The node has a yellow **output port** on the right — wire it into an
  **Audio Mixer**, through [Audio effect nodes](./audio-effect-node), into a
  [shader's audio‑in](../clip-elements/shader), or to an **Audio Output** device
  port.
- Click **Edit Mic** (or right‑click → **Edit Mic…**) to pick the input device
  (**System Default Mic**, or any detected input).
- Volume and mute for a mic follow the **mixer slot** it is wired into, not the
  mic node itself.

## Audio Mixer node

The **Audio Mixer** blends several yellow audio streams into one orange output.
Use it when more than one source should play out of the same device, or when you
need per-source level control.

**Add it manually:** right‑click the empty canvas → **Add Audio Mixer**.

CutWire Prism also **inserts a mixer automatically** when you wire a clip or mic
to an **Audio Output** device port — you do not have to add one yourself for a
simple single-source route.

Each connected input shows a row on the node:

- **Double‑click** a name to rename it (for example "Music" or "Commentary").
- Click **Edit Mix** to open faders for every connected input — horizontal level
  sliders with dB readouts, plus a **mute** toggle per channel.

The mixer has:

- one or more **yellow inputs** on the left (an empty slot always waits at the
  bottom for the next connection),
- one **orange output** on the right — wire this to the **Audio Output** port
  for the speaker or interface you want.

## Putting it together

- **Shape a clip before playback:** clip audio port → [Audio effect node](./audio-effect-node) (…)
  → Audio Output (device port).
- **Hear a clip on a specific speaker:** clip audio port → Audio Output (pick the
  device port). A mixer is added automatically if needed.
- **Mix clip + mic to one PA:** clip audio port → mixer input; Mic Input → mixer
  input → mixer out → Audio Output (PA port). Use **Edit Mix** for levels.
- **Make a shader pulse to music:** clip audio port (or Mic Input) → shader's
  audio‑in port.
- **Gate and limit a mic feed:** Mic Input → Noise Gate → Limiter → Audio Output.
  See [Audio effect nodes](./audio-effect-node) for the full list of effects and
  dial controls.

> A reminder from the deck controls: the **crossfader** also affects deck audio
> when a clip uses **Play when its deck is active**, and the **panic** Blackout /
> Pause / Stay Tuned buttons cut deck audio.
