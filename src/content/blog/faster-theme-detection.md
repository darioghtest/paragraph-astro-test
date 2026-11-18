---
title: 'Theme detection is now 4x faster'
description: 'How we rebuilt the clustering pipeline so new feedback shows up in themes within seconds.'
pubDate: 'Nov 04 2026'
heroImage: '/images/faster-theme-detection.svg'
tags: ['engineering', 'performance']
---

When a new piece of feedback arrives, Lumen decides which theme it belongs to. Until last week that took up to two minutes. Now it takes about thirty seconds, and most items land in under ten.

## What changed

We moved from re-clustering the whole workspace on every update to an incremental approach:

1. Each new item is embedded once and compared against existing theme centroids.
2. Only themes whose centroid moves past a threshold are re-clustered.
3. A nightly job still runs the full clustering to catch drift.

## What you'll notice

Themes update while you're looking at them, and the "processing" badge disappears much sooner. Nothing changes in how you use Lumen.
