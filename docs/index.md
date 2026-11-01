---
layout: default
---

In 2024 I bought a JUNO-X with the hope of replacing my trusty
Juno-106. I intended to use the JUNO-X for upcoming shows so I wouldn't be
hauling around a vintage synth, which had been a central sound in my studio for
years. I thought "a digital Juno-106 … how cool!"

If you own a JUNO-X you were probably smirking as you read that last sentence.
What I learned (and what you know) is that the X is not just a digital 106 with
more bells and whistles. The "106-ness" of the X is mostly in its hardware
design—and I soon learned that the JUNO-X was a really complicated
synthesizer.

I tried for 2 years to wrap my head around it. No matter how many YouTube
tutorials I watched, pages of the manual I read, and Googling I used to crack
the JUNO-X code, it came up short. Enter **JUNO-Xtra**—an app I wrote to help me
decode the JUNO-X so I could use more of its features, easily create and back
up sounds, and save banks as custom setlists.

It's late 2026 and I'm just now beginning to understand the complicatedly cool
JUNO-X. I hope the JUNO-Xtra app helps you do the same.

This is my third synth app. If you're a fellow synthaholic, see also:
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

<div class="soon" markdown="1">

## Not yet

<ul class="features">
  <li><strong>Anything to download.</strong> There is no installer yet: the Mac build isn't signed or packaged, which is why both buttons below are dark. That is the one thing standing between this page and a release.</li>
  <li><strong>Changing anything on the Settings page.</strong> It reads; it does not write, and that's on purpose: the JUNO-X accepts a System edit while it's powered and throws it away at the next power-off unless you do a SYSTEM WRITE on the panel yourself. So the page shows you the setting and the buttons to press on the instrument, rather than writing something that won't survive the night.</li>
</ul>

</div>

{% include download-buttons.html %}

<!-- The third and last placeholder. It carries BOTH classes on purpose: .todo
     so it cannot be published by accident without somebody seeing it, and
     .install-note so that when the yellow box becomes the real sentence it is
     already wearing the quiet style that sentence wants. Drop `todo ` from the
     class and the box becomes the finished line. -->
<p class="todo install-note" markdown="1">
**NOTE FOR DANIEL:** this line depends on how the Mac build is signed and
notarized. If it ships signed, say nothing here. If it doesn't, say what
macOS will show and what to do about it — the way 7/11 names the Windows
SmartScreen warning before it happens. A warning nobody warned you about
reads as "this is broken". Delete this box either way.
</p>

JUNO-Xtra is free. [Donations]({{ site.donate }}) help cover code signing and
hosting. Thanks from Seattle! — Daniel
{: .donate-line}

## Fishing for feedback

It's me and one JUNO-X so far. Everything here has been read off, and written
back to, exactly one instrument — mine. If you own a JUNO-X I'd like to hear
what breaks, what's missing, and what you expected it to do that it doesn't.

[Drop me a line]({{ '/contact/' | relative_url }})
