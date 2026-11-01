---
layout: default
title: Privacy
permalink: /privacy/
# QUOTED, AND IT HAS TO BE. This sentence contains a colon followed by a space
# ("Short version: ..."), and YAML reads that as the start of a nested mapping:
# unquoted, this front matter does not parse and the build fails on this page.
# Any description with a colon in it gets quotes.
description: "What this site and the JUNO-Xtra app collect. Short version: the site counts page views without cookies, and the app sends nothing anywhere."
---

## Privacy

**This site** counts page views with GoatCounter: no cookies, no
fingerprinting, nothing that identifies you, so there is nothing to consent to.
What it records is the page, the referrer and the country.

**The download buttons** go through a small redirect service rather than
straight to GitHub. It resolves the right installer for your platform and
counts the press, with the country, at the moment it redirects you. It does not
set a cookie and does not keep your address.

<p class="todo"><strong>CHECK THIS BEFORE PUBLISHING.</strong> The two
paragraphs above describe analytics and a relay that are not set up yet —
<code>goatcounter</code> is empty in <code>_config.yml</code> and there is no
relay. Both paragraphs are true the moment those exist and false until then. If
the site goes up before them, cut them.</p>

**The app** reads from and writes to your JUNO-X over USB and keeps your
backups in files on your own computer. It has no account, no telemetry, and
sends nothing anywhere.

Questions: [the contact form]({{ '/contact/' | relative_url }}).
