---
sidebar_position: 13
title: Phone camera
---

# Phone camera (WebRTC)

A **Phone Camera** element streams a smartphone's camera into SwitchX over Wi‑Fi
using WebRTC — no app store download or cable required for the basic browser path.
It's a quick way to add a roaming camera: a crowd cam, a touchline view, a
backstage feed.

**Add it:** **Add Element → Phone Camera (WebRTC)…**.

> Phone camera is an optional feature. If your build doesn't include it, the menu
> item is greyed out.

## How pairing works

1. Choose how the phone will reach your PC:
   - **Local network (LAN)** — phone and PC on the same Wi‑Fi (the usual choice).
   - **Public relay server** — for connecting over the internet via a relay you
     run (advanced).
2. SwitchX shows a **QR code** and a "Waiting for phone…" status.
3. On the phone, **scan the QR code**:
   - Your phone's camera app opens a browser streamer page, **or**
   - The SwitchX companion app pairs natively.
4. Once the phone connects, the status changes to **Connected** and the live
   feed appears as a card.

On the LAN path your phone may warn about a self‑signed certificate — accept it so
the camera can start. If a firewall prompt appears on the PC, allow it so the
phone can reach SwitchX.

## What it can do

- Stream a phone camera live to either deck.
- **Transform and position** on a canvas like any source.
- Reconnect later — the element remembers its pairing, so you can bring the phone
  back without setting up again.

## Tips

- Keep the phone on the **same Wi‑Fi** as the PC for the simplest, lowest‑latency
  connection.
- Mount or stabilise the phone for steady footage; Wi‑Fi cameras are best for
  roaming shots rather than locked‑off hero angles.
