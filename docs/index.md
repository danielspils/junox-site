---
layout: default
---

The JUNO-X holds 256 scenes — sixteen banks of sixteen. Getting them into the
order a show needs, rather than the order you happened to save them in, means a
lot of button presses on a small screen. And the only copy of any of it lives
inside the instrument.

<p class="todo"><strong>YOUR PARAGRAPH GOES HERE.</strong> Both the other sites
open with the story — how you came to the instrument and what you were trying
to do with it — and that is the part people actually read. Two or three
sentences: when the JUNO-X arrived, what it joined or replaced in the rig, and
the thing about it that sent you to build software. Delete this box when it's
written.</p>

After JP Patches for my [JX-3P](https://jx-3p.com){:target="_blank" rel="noopener"}
and [This Seven Goes to Eleven](https://thissevengoestoeleven.com){:target="_blank" rel="noopener"}
for my Crumar Seven, I knew the shape of what I wanted: all 256 scenes on one
screen, drag them where they belong, and write the whole bank back. So here's
JUNO-Xtra.

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
  <li>Connect over USB — no dongle, no app in a browser, no Wi-Fi to forget</li>
  <li>Read all 16 banks and all 256 scenes off the instrument</li>
  <li>Drag scenes into the order you want, then write the new bank order back</li>
  <li>Rename scenes</li>
  <li>Build a scene: choose the tone each of the five parts plays, and draw the keyboard split on a keybed — every part's key range, its velocity range and its fades — then save it into the scene</li>
  <li>Turn the effects while you listen: MFX, chorus, delay, reverb and drive, each change heard on the instrument the moment you make it. These are live edits, the same as moving a knob on the panel — nothing in the effects view can write to stored memory, so recalling a scene puts everything back</li>
  <li>Save a bank as a setlist under a show's name, and load it back into whichever bank you're on months later</li>
  <li>A setlist records which user tones its scenes point at, and says which of them have changed since you saved it — before it loads anything</li>
  <li>Back up the whole instrument, or one bank on its own, to a file</li>
  <li>Restore from a backup — all of it, one bank, or the scenes you pick</li>
  <li>Read what the instrument is set to: 102 System settings off the JUNO-X, with the button route to change each one on the instrument itself</li>
  <li>Every write is read back off the instrument and checked against what was sent</li>
  <li>A copy is saved before anything is overwritten, so there is something to go back to</li>
</ul>

<div class="soon" markdown="1">

## Not yet

<ul class="features">
  <li><strong>Anything to download.</strong> There is no installer yet: the Mac build isn't signed or packaged, which is why both buttons below are dark. That is the one thing standing between this page and a release.</li>
  <li><strong>A Windows build.</strong> Mac only for now.</li>
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
