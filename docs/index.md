---
layout: default
---

In 2024 I bought a JUNO-X with the hope of replacing my trusty
JUNO-106. I intended to use the JUNO-X for live shows to avoid
hauling around its vintage counterpart. I thought "a digital JUNO-106 … how cool!"

If you own a JUNO-X you were shaking your head as you read that last sentence.
What I learned (and what you know) is that the X is not just a digital 106 with
more bells and whistles. The "106-ness" of the X is mostly in its hardware
design—and I soon learned that the JUNO-X is a really complicated
synthesizer.

I tried for 2 years to wrap my head around it. No matter how many YouTube
tutorials I watched, pages of the manual I read, and Googling I used to crack
the JUNO-X code, it came up short. Enter **JUNO-Xtra**—an app I wrote to help
decode the JUNO-X so I could use more of its features, easily create and back
up sounds, and save custom setlists.

It's late 2026 and I'm just now beginning to understand the complicatedly cool
JUNO-X. I hope the JUNO-Xtra app helps you do the same.

P.S. This is my third synth app. If you're a fellow synthaholic, see also:
[JP Patches](https://jx-3p.com){:target="_blank" rel="noopener"} for the JX-3P
and [This Seven Goes to Eleven](https://thissevengoestoeleven.com){:target="_blank" rel="noopener"}
for the Crumar Seven.

<!-- THE STRIP IS BEHIND A SWITCH (site.screenshots in _config.yml). The eight
     files it wants are not captured yet, and Jekyll cannot test whether a file
     exists — so with the strip always on, the top of the homepage is four
     broken-image icons, which reads as a broken site rather than an
     unfinished one. Set the switch to true once the files are in place. -->
{% if site.screenshots %}
<div class="shots">
  <figure class="shot">
    <button type="button" class="shot-open" aria-label="Enlarge screenshot">
      <img src="{{ '/assets/img/screenshots/banks-thumb.jpg' | relative_url }}"
           data-full="{{ '/assets/img/screenshots/banks.png' | relative_url }}"
           width="640" height="368" loading="lazy"
           alt="The Banks 1-16 view: bank 8 read from the instrument, its sixteen scenes in two columns of eight, one row dragged to a new slot and carrying a FROM chip.">
    </button>
  </figure>
  <figure class="shot">
    <button type="button" class="shot-open" aria-label="Enlarge screenshot">
      <img src="{{ '/assets/img/screenshots/scene-builder-thumb.jpg' | relative_url }}"
           data-full="{{ '/assets/img/screenshots/scene-builder.png' | relative_url }}"
           width="640" height="368" loading="lazy"
           alt="Scene Builder: the five parts with a tone on each, and the effects chain — MFX, chorus, delay, reverb and drive — open below.">
    </button>
  </figure>
  <figure class="shot">
    <button type="button" class="shot-open" aria-label="Enlarge screenshot">
      <img src="{{ '/assets/img/screenshots/zones-thumb.jpg' | relative_url }}"
           data-full="{{ '/assets/img/screenshots/zones.png' | relative_url }}"
           width="640" height="368" loading="lazy"
           alt="The zone tray: a keyboard split drawn on a keybed, each part's key range tinted in its own colour with its velocity range and fades beside it.">
    </button>
  </figure>
  <figure class="shot">
    <button type="button" class="shot-open" aria-label="Enlarge screenshot">
      <img src="{{ '/assets/img/screenshots/backups-thumb.jpg' | relative_url }}"
           data-full="{{ '/assets/img/screenshots/backups.png' | relative_url }}"
           width="640" height="368" loading="lazy"
           alt="The Backups tab: saved backup files listed with what each one holds, and a restore in progress showing a row per scene.">
    </button>
  </figure>
</div>
{% endif %}

## What JUNO-Xtra can do today

<ul class="features">
  <li>Connect over USB</li>
  <li>Back up &amp; restore a single bank or all 16 banks</li>
  <li>Reorder scenes with drag-and-drop</li>
  <li>Rename scenes with your laptop keyboard</li>
  <li>Build a scene with ease</li>
  <li>Visually adjust keyboard zones, octaves and velocity</li>
  <li>Audition effects as you listen</li>
  <li>Save a bank as a setlist</li>
  <li>For Mac &amp; PC</li>
</ul>

{% include download-buttons.html %}

JUNO-Xtra is free. [Donations]({{ site.donate }}) help cover code signing and
hosting. Thanks from Seattle! — Daniel
{: .donate-line}

## Fishing for feedback

It's me and one JUNO-X so far. Everything here has been read off, and written
back to, exactly one instrument — mine. If you own a JUNO-X I'd like to hear
what breaks, what's missing, and what you expected it to do that it doesn't.

[Drop me a line]({{ '/contact/' | relative_url }})
