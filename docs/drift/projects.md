---
sidebar_position: 5
title: Projects
---

# Projects

A Drift project is a `.drift` file: your timeline, clip settings, and references
to media. You can also save a **shareable copy** that packs media into the file
for backup or hand-off.

## Create, open, and save

Click the **project pill** in the header (or use shortcuts):

| Action | How |
|---|---|
| **New project** | **Initialize new project** (`Ctrl+N`). Drift may ask you to [choose a layout](./settings) again. |
| **Open** | **Open project…** (`Ctrl+O`) — filter *Drift project (*.drift)*. |
| **Save** | Header save button or `Ctrl+S`. |
| **Recent** | Listed under **Previous projects** in the project popup. Missing files show `(missing)`. |

The pill shows whether you have **All changes saved** or **Unsaved changes**.

## Unsaved changes

If you try to create a new project, open another, switch to a recent one, or quit
with unsaved work, Drift asks:

> *“‘Project’ has unsaved changes. Save before continuing?”*
>
> (The dialog shows the actual project name in place of *Project*.)

| Button | Result |
|---|---|
| **Don't Save** | Continue without writing the file. |
| **Cancel** | Stay on the current project. |
| **Save** | Save, then continue. |

## Shareable package (Save with media…)

**Save with media…** creates a portable `.drift` that includes the media your
project needs — useful for sharing or archiving. Drift shows progress while it
prepares the copy (*Preparing shareable copy*).

Use a normal **Save** for day-to-day work; use **Save with media…** when you need
a self-contained file.

## Project properties

**Project properties…** edits metadata:

| Field | Purpose |
|---|---|
| **Title** | Display name for the project. |
| **Author** | Creator credit (also settable as a default in Settings). |
| **Description** | Optional notes. |
| **Created / Modified** | Read-only timestamps. |

## Crash recovery

If Drift closes unexpectedly, the next launch can offer:

**Unsaved work from last session** — with the project name, **Auto-saved** time,
and original path.

| Choice | Result |
|---|---|
| **Restore** | Reopen the auto-saved work. |
| **New session** | Discard the recovery snapshot and start fresh. |
