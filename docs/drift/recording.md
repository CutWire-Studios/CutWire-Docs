---
sidebar_position: 17
title: Recording
---

# Recording

Drift records the screen, a window, the camera, and voiceover straight into the
project, so a capture is just another clip you can cut.

The **Record** workspace gathers the Recorder, the Teleprompter, Noise Removal,
and the Audio Mixer around the preview.

## Screen and camera

From the **Media** tab's import menu:

| Action | What it records |
|---|---|
| **Record Screen…** | A monitor or a window, with your microphone. |
| **Record Screen with Computer Sound…** | The same, plus the system's own audio. |
| **Record Camera…** | A connected camera, with your microphone. |

Drift shows *Waiting for you to choose what to share…* while you pick the
monitor or window, then *Starting…*. When you stop, the file is saved and added
to the media bin — *Recording saved and added to the bin* — ready to drop on the
timeline.

Recordings are encoded as H.264 in MP4 with real capture timestamps, so audio
stays in sync.

:::note
On Linux, screen capture goes through the desktop's own screen-sharing portal
and PipeWire, so it works on Wayland. The portal is what asks which monitor or
window to share.
:::

Only one recording runs at a time — starting a second reports *A recording is
already running.* If no camera is attached, **Record Camera…** reports *No
camera is connected.*

### Where recordings are saved

**Settings → Storage & media → Save screen and camera recordings**:

| Option | Where the file goes |
|---|---|
| **In my Movies folder** | Your system Movies folder. |
| **Beside the project** | Next to the project file. |
| **In this folder…** | A folder you choose. |

:::caution
A recording is the only copy of what it caught, so Drift's cache is not an
option here — the cache gets cleared. Until the project is saved, recordings go
to your Movies folder. Changing this setting does not move recordings you have
already made.
:::

## Voiceover

Record narration onto an audio track while the timeline plays.

Arm a track from the **Audio Mixer** (**Record voiceover on \<track\>**) or run
**Start/stop voiceover recording** from the keymap, then use the transport that
appears under the timeline:

| Control | What it does |
|---|---|
| **Microphone** | Click to switch input. Defaults to **Default Mic**. |
| **Mic gain** | Scroll to adjust, double-click for 0 dB. |
| **Pause / Resume recording** | Hold without finishing the take. |
| **Done** | Save the recording to the track. |
| **Discard** | Cancel the recording. |

A level meter and a **Recording** badge show the take is live, and the preview
carries a voiceover badge while it runs.

**Settings → Audio** sets the device used for recording voiceovers onto audio
tracks.

## Recorder panel

The **Recorder** panel in the Record workspace is the same transport as a docked
panel, showing **READY**, **REC**, or **PAUSED**.

| Control | What it does |
|---|---|
| **Start recording** | Begin a take. |
| **Pause / Resume recording** | Hold mid-take. |
| **Stop** | Finish the recording and save it to the track. |
| **Cancel** | Discard the recording. |
| **Input microphone** | Click to switch. |

## Teleprompter

The **Teleprompter** panel scrolls your script while you read.

| Control | What it does |
|---|---|
| **Edit script** | Paste or type your script. |
| **Read mode** | Switch to the large scrolling view. |
| **Start / Pause scrolling** | Control the scroll. |
| **Back to top** | Return to the start of the script. |
| **Speed** | Scroll rate, in lines per second. |
| **Size** | Text size. |
| **Follow recording** | Scrolling starts, pauses, and stops with recording. |
| **Show over preview** | Overlay the script on the preview. |

:::tip
Pair **Follow recording** with the Recorder so one button starts both the take
and the script.
:::

## Cleaning up a take

| Tool | Where |
|---|---|
| **Remove noise** | The **Noise Removal** panel, or a clip's **Audio** tab. |
| **Remove silence** | A clip's context menu. |
| **Normalize** | The **Audio Mixer**. |
| **Auto duck** | The **Audio Mixer**, to drop music under the narration. |

See [Audio mixing](./audio-mixing).

## Related

- [Speech and voices](./speech-and-voices) — generate narration instead of recording it.
- [Audio mixing](./audio-mixing) — levels, loudness, and ducking.
- [Media library](./media-library) — where recordings land.
- [Settings](./settings) — recording folders and the audio input device.
