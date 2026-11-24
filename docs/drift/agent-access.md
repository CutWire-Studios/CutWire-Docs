---
sidebar_position: 20
title: Agent access
---

# Agent access

Drift can let an AI coding agent — Cursor, Claude Code, or anything else that
speaks MCP — edit the project you have open. The agent imports, cuts, grades,
captions, and exports in the same editor you are looking at, and every change
lands in the undo history where you can reverse it.

:::note
Only programs on this device can connect. Drift binds to `127.0.0.1` and nothing
else.
:::

## Turning it on

**Settings → AI & Cloud → Agents**:

| Control | What it does |
|---|---|
| **Agent access** | *Let Cursor or Claude edit this project for you.* Off at every launch by default. |
| **Start agent access on launch** | Turn it on automatically next time. Turning access off resets this. |
| **Commands in search (`Ctrl+K`)** | Offer editing commands from the header search field. |

After enabling it, copy the connection snippet from the same page into your
agent's MCP configuration. The bearer token rotates each session.

### Connecting over stdio

A stdio attach keeps no token in your config file:

```json
{
  "mcpServers": {
    "drift": {
      "command": "/path/to/drift",
      "args": ["--mcp-stdio"]
    }
  }
}
```

`drift --mcp-stdio` attaches to a running editor that has Agent access on. If
the editor is closed or access is off, calls come back as errors and the bridge
keeps running — turning Agent access on is enough, with no need to restart the
agent.

## Several editors at once

Any number of editors can run together. The first takes port 4731 and the rest
bind a free port. With exactly one running, an agent attaches to it on the first
call; with several it refuses to guess and lists them until the agent picks one.

Agents can also start and stop their own instances, which run isolated: they
share your settings but never reopen your last project, never offer crash
recovery, and never touch your recent-projects list — so your own editor reopens
exactly what it would have otherwise.

## Headless

`drift --headless` runs the editor with no window and serves MCP itself, for
servers and unattended automation. It needs no running editor and no open
project.

| Command | Transport |
|---|---|
| `drift --headless [project.json]` | MCP on stdin/stdout; quits when stdin closes. |
| `drift --headless --mcp-port 4731` | MCP over HTTP; runs until stopped. |

## What an agent can do

An agent works through toolboxes covering the timeline, project, media, text,
effects, colour, masks, tracking, subtitles, speech, 3D, and export — close to
the whole editor.

It can also *see* and *hear* the project, which is what makes unattended editing
work:

| Tool | What it gives the agent |
|---|---|
| **inspect** | A summary of the project: tracks, clips, and unsaved changes. |
| **activity** | Where visual change, motion, and loudness happen over a range — *where* to look. |
| **frames** | One contact sheet of many moments — *what* is there. |
| **capture** | A full-size still of the composition, or of the free 3D viewpoint. |
| **Audio Sheet** | The project's sound as a readable sheet — see [Audio mixing](./audio-mixing). |

Batched edits collapse into a single undo step, so one instruction is one thing
to undo.

## Watching what it does

The **AI** workspace (under **Studio**) docks the agent panels:

| Panel | Shows |
|---|---|
| **Agent Log** | Every tool call as it happens, with timings, and **Undo** / **Redo**. It says *Listening on \<address\>* when access is on. |
| **Agent Views** | Images the agent requested — frames, audio sheets, and captures — for this session. |
| **History** | The undo stack, so you can step back past anything. |
| **Audio Sheet** | What the agent reads to hear the mix. |

**Connect an agent…** in the Agent Log jumps to the settings, and **Clear log**
empties it.

:::tip
Setting **Working with AI agents** to *None* in
[Settings → Personalize](./settings) hides the **AI** and **Procedural**
workspaces and the **Ask** button.
:::

## Ask

You do not need an external agent for small edits. **Ask** in the header
(`Ctrl+Shift+K`) takes plain words — *“fade in over half a second”*, *“make it
black and white”*, *“speed this up to 1.5x”* — and performs the edit. It runs on
a local Command Bar Model of about 490 MB, which Drift offers to install the
first time you use it.

## Cloud services

An agent can use cloud transcription, voiceover, and sound effects if you have
added your own key and allowed it — see
[Speech and voices](./speech-and-voices).

## Security

- Drift binds to `127.0.0.1` only; nothing off this machine can reach it.
- Any local process holding the session token has full editor access.
- Turn Agent access off when you are finished.

:::note
On Flatpak, letting an agent import files from your home folder may need
`flatpak override --filesystem=home org.cutwire.Drift`.
:::

The full protocol reference — every toolbox, op, and endpoint — lives in
[`docs/MCP.md`](https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md)
in the Drift repository.

## Related

- [Settings](./settings) — AI & Cloud, and Personalize.
- [Audio mixing](./audio-mixing) — the Audio Sheet.
- [Workspaces](./workspaces) — the AI layout.
