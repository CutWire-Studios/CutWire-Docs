---
sidebar_position: 5
title: Groups
---

# Groups

A **group** collapses several cards into a single tidy node. Use groups to keep a
busy canvas readable — bundle a composed layout (background + camera + overlays)
into one block you can fire, move, and manage as a unit.

## Creating a group

1. Select the cards you want (click and drag, or shift‑click).
2. Right‑click the canvas → **Group Selection**.

The selected cards become **members** of a new group node, and the canvas shows
the group instead of the loose cards.

## The group node

A group node has its own **A** and **B** buttons, an **Edit** button, and a label:

| Control | What it does |
|---|---|
| **A / B** | Fire the group's **output** element to Deck A or Deck B. |
| **Edit** | Open the group's inner canvas to arrange its members. |
| **Out: …** | Shows which member is the group's output (or "No output"). |

Right‑click the group for **Rename**, **Edit Group**, **Ungroup**, and **Delete**.

## Setting the group's output

A group plays **one** element to a deck — its **output** (also called the
delegate). Inside the group, use a member card's **Set output** button to choose
which element the group sends out when you press its A/B buttons. Typically this is
the top composition (e.g. a [canvas](../clip-elements/canvas) holding everything
via a [Transform Context node](./transform-context-node)).

## Editing inside a group

Click **Edit** to open the group's own node canvas. It works just like the main
canvas — add clips, [transform contexts](./transform-context-node),
[audio nodes](./audio-output-node), and [scripts](./script-node), and wire them
together. Right‑click inside to add elements and special nodes.

## Ungrouping

Right‑click → **Ungroup** to dissolve the group and return its members to the main
canvas as individual cards.
