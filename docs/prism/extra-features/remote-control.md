---
sidebar_position: 3
title: Remote control
---

# Remote control

CutWire Prism has a built‑in web server that lets you drive the mix from another device —
a phone, tablet, or second laptop — over your network. Open a browser on that
device and you can trigger clips, move the fader, cut, and run auto transitions
without touching the main machine.

## Starting the server

**Run → Start Remote Control Server…** opens the remote server dialog:

- Pick the **network interface** to bind to (which network the remote should
  reach you on).
- The dialog shows the **server port** (38470) and the **console URL**.
- A **QR code** encodes the URL — scan it with the remote device to open the
  control page instantly.
- A **status** line shows whether the server is running and which addresses to
  use.

If a firewall prompt appears, allow it so the remote device can connect.

## Connecting from another device

1. Make sure the remote device is on the **same network** as the CutWire Prism machine.
2. Scan the QR code, or type the shown URL (e.g. `http://<your-ip>:38470/`) into
   the device's browser.
3. The remote console loads — no app install needed.

## What you can do remotely

From the browser console you can:

- See the **list of clips** and which are live on Deck A / Deck B.
- **Send a clip to Deck A or Deck B**.
- **Move the crossfader**.
- Trigger **CUT** and **AUTO** transitions.
- **Change the transition style** and the **auto duration**.
- **Play / pause** each deck.
- See live **status** (fader position, active clips, play state).

## Tips

- Put the remote on a wired or strong Wi‑Fi connection for responsive control
  during a show.
- The remote is a great second pair of hands: one operator triggers from the
  laptop while another rides the fader from a phone at front of house.
