---
sidebar_position: 16
title: Speech and voices
---

# Speech and voices

Drift turns speech into captions and text into speech, both on your own machine.
The **Subtitles** workspace gathers the cue grid, the text editor, the timing
tools, and the subtitle lane around the preview; the **Speech** assets tab
generates voiceover.

## Auto captions

The **Subtitles** assets tab writes captions from the speech in your clips:

1. Select a video or audio clip on the timeline.
2. Set **Recommended caption length** — from one word per caption upward.
3. Press **Add auto caption**.

Several selected clips become one caption clip. The same action lives on a
clip's **Audio** tab as **Create captions from speech**.

| Requirement | Size |
|---|---|
| [AI engine](./addons) | — |
| Speech recognition model | about 670 MB |

:::caution
Shorter captions are timed by splitting each phrase evenly, so they can drift
slightly out of sync with the speech. Use the timing tools below to correct
them.
:::

## Subtitle clips

One subtitle clip holds many timed cues. Place it on the timeline, trim its
length, then add caption lines at each moment.

| Action | What it does |
|---|---|
| **Add subtitle clip** | An empty subtitle track clip. |
| **Import subtitle file** | Load a `.srt` or `.vtt` file as a subtitle clip. |
| **Add auto caption** | Generate cues from speech. |

### Cue grid

The **Subtitle cues** panel lists every cue in the selected clip.

| Control | What it does |
|---|---|
| **Add a cue at the playhead** | New cue at the current time. |
| **Insert a cue after the selected one** | New cue following the selection. |
| **Delete the selected cues** | `Delete`. |
| **Scroll to the current cue during playback** | Follow along while playing. |
| **Show timeline times** | Times from the start of the timeline instead of the clip. |
| **Filter cues** | Narrow the list. |
| **Find in cues** | `Ctrl+F`. |

### Subtitle text editor

The **Subtitle text** panel edits every cue as plain **SRT** or **WebVTT** text.

| Control | What it does |
|---|---|
| **Apply** (`Ctrl+S`) | Replace the cues with this text. |
| **Revert** | Discard edits and reload the text from the cues. |
| **Import** | Replace the cues from a `.srt` or `.vtt` file. |
| **Export** | Save the applied cues as a `.srt` or `.vtt` file. |
| **Copy all** | Copy the whole script. |
| **Timeline** | Show times from the start of the timeline. |

If the cues change elsewhere while you are editing, Drift offers **Reload** or
**Keep mine**.

### Timing

The **Subtitle timing** panel fixes drift across many cues at once.

| Control | What it does |
|---|---|
| **Scope** | **All**, **Selected**, or **From playhead**. |
| **Shift times** | Move cues by an **Amount** in **ms** or **frames**, **Earlier** or **Later**. |
| **Edges** | Apply to **Both**, **Start**, or **End**. |
| Nudge buttons | `−1 s`, `−100 ms`, `−1 f`, `+1 f`, `+100 ms`, `+1 s`. |
| **Two-point sync** | Pick two existing cues and stretch the whole set so both land correctly. |

Cues can also be nudged from the keyboard while the panel is engaged:

| Action | Shortcut |
|---|---|
| Nudge selected cues earlier / later | `Alt+Left` / `Alt+Right` |
| Nudge 0.1 s earlier / later | `Alt+Shift+Left` / `Alt+Shift+Right` |

### Subtitle lane

The **Subtitle lane** panel shows the cues as blocks over a waveform, so you can
drag a cue onto the words it belongs to.

## Generated voiceover

The **Speech** assets tab turns a script into speech. It is generated on this
device and added at the playhead.

1. Type what the voice should say.
2. Pick a **Voice** and a **Language**.
3. Set **Expressiveness** — higher values sound more dramatic and speak faster.
4. Press **Generate speech**.

The character count shows an estimated duration as you type.

:::caution
Speech longer than 30 seconds often ends in gibberish or silence. Split the
script into shorter parts.
:::

The voice model downloads on first use, and loading it the first time takes a
while.

### Cloning a voice

**New voice** creates a voice from a recording:

| Source | What it does |
|---|---|
| **From selected clip** | Use the selected clip's audio. The first 20 seconds are used; a **Start offset** picks where to begin. |
| **Record…** | Record 5 to 20 seconds in a quiet room, reading the prompt aloud in your natural voice. |
| **Import file…** | Load a `.wav`, `.mp3`, `.flac`, `.ogg`, `.m4a`, `.aac`, or `.opus` sample. |

Name the voice and press **Save**. Saved voices can be auditioned, renamed, or
deleted from the voice row.

:::caution
Cloning asks you to confirm **I have the right to use this person's voice**.
Only clone voices you are allowed to use.
:::

### Sound effects

**Sound effect…** generates a sound effect from a text prompt. This one runs in
the cloud (ElevenLabs) and needs your own API key.

## Cloud services

**Settings → AI & Cloud** holds optional cloud providers for transcription
(Scribe), voiceover, and sound effects.

| Control | What it does |
|---|---|
| **Paste API key** | Store a key for the provider. |
| **Test** | Check the key works. |
| **Allow sending audio and text to \<provider\>** | Needed before Drift or a connected agent can use the service. |
| **Default voice id**, **Voice model**, **Transcription model** | Which model the provider should use. |

:::caution
Keys are stored unencrypted in Drift's settings. `ELEVENLABS_API_KEY` and
`FISH_API_KEY` in the environment take precedence. Use is billed to your own
account.
:::

## Teleprompter

The **Record** workspace includes a **Teleprompter** that scrolls your script
while you record. See [Recording](./recording).

## Related

- [Captions](./clip-tools/captions) — styling caption clips.
- [Text and titles](./clip-tools/text-and-titles) — title style packs you can copy onto a subtitle track.
- [Audio mixing](./audio-mixing) — ducking music under speech.
- [Addons](./addons) — the speech, voice, and voice-activity models.
