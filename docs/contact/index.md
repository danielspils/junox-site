---
layout: default
title: Contact
description: Send a note about JUNO-Xtra — bugs, missing features, or what your JUNO-X does that mine doesn't.
---

## Contact

Bugs, missing features, something your JUNO-X does that mine doesn't — all
welcome. If it’s a bug, please include the firmware version and what you were
doing when it happened. That helps a ton.

<!-- Web3Forms: a form that posts somewhere without this site having a backend
     of its own, which is how 7/11's contact page works. THE ACCESS KEY BELOW
     IS A PLACEHOLDER — get one at web3forms.com and paste it in. The key is
     public by design (it only lets a form post to one address), but an empty
     one means every message is dropped silently. -->
<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="PASTE-YOUR-WEB3FORMS-KEY">
  <input type="hidden" name="subject" value="JUNO-Xtra — a note from the site">
  <!-- Honeypot: bots fill it, people never see it. -->
  <input type="checkbox" name="botcheck" class="hp" tabindex="-1" aria-hidden="true">

  <label for="name">Your name</label>
  <input id="name" type="text" name="name" autocomplete="name">

  <label for="email">Your email</label>
  <input id="email" type="email" name="email" autocomplete="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="7" required></textarea>

  <button type="submit">Send</button>
</form>
