# JUNO-Xtra website — scaffold

The marketing site for **JUNO-Xtra**, the Mac editor/librarian for the Roland
JUNO-X. Jekyll, served by GitHub Pages from `/docs`.

**This repo is NOT the app.** The app is `roland-junox-editor`. Keep the two
apart: `crumar-seven-editor` (app) and `this-seven-goes-to-eleven` (site) got
crossed once because the names were close, and this pair is closer.

## How it is built

Both existing sites are Jekyll with **no `theme:` key**, a hand-written
`_layouts/default.html`, and one `assets/css/style.css` that owns the whole
look. This follows that exactly.

There is no build step to run. GitHub Pages runs Jekyll on push. Nothing is
compiled, bundled or minified, and no `node_modules` is involved.

To see it locally you need Ruby and Jekyll (`bundle exec jekyll serve`). If
that isn't installed, push to a branch and point Pages at it — that is the
shortest path to looking at it.

`preview-homepage.html` at the repo root is the homepage with every Liquid tag
resolved by hand and the CSS, JS and wordmark inlined, so it opens by
double-clicking with no server. **It does not update itself** — it is a
snapshot, and it is outside `docs/`, so it is never published. Re-make it, or
delete it, after changing `index.md`, `_layouts/default.html` or `_config.yml`.

```
docs/
  CNAME                       juno-xtra.com — the only thing GitHub Pages reads for the domain
  _config.yml                 title, tagline, download URLs, analytics — ALL the switches
  _layouts/default.html       head, header, footer; every page uses it
  _layouts/post.html          a Notes post
  _includes/junox-logo.svg    the wordmark, INLINED (see below)
  _includes/junox-mark.svg    the "Xt" mark on its own — not used yet
  _includes/download-buttons.html
  index.md                    the homepage, content only
  notes/index.html            the Notes index
  contact/index.md            Web3Forms form — NEEDS AN ACCESS KEY
  privacy.md
  assets/css/style.css
  assets/js/shot.js           screenshot lightbox
  assets/js/download.js       shows the version, nothing else
  assets/img/favicon.svg      copy of the app's src/img/junox-icon.svg
  assets/img/screenshots/     EMPTY — see below
```

## The domain

**`juno-xtra.com`**, hyphenated, bought and on Cloudflare. It lives in exactly
two places and they have to agree:

- `docs/CNAME` — the bare hostname, nothing else. This is the only file GitHub
  Pages reads; without it the custom domain is not served at all.
- `url:` in `docs/_config.yml` — what Jekyll builds absolute URLs from
  (canonical, `og:url`, `feed.xml`, `sitemap.xml`). `baseurl:` is empty because
  the site is at the root of its own domain.

**Do not edit the custom domain in the GitHub Pages settings screen once the
file exists.** Saving there rewrites `docs/CNAME` as a commit, and the two
copies then disagree until somebody notices.

## The brand assets

Copied from the app repo (`roland-junox-editor/src/img/`), not redrawn:

- `_includes/junox-logo.svg` — the wordmark, **inlined** rather than used as an
  `<img>`. It paints the word with `fill="currentColor"` so it takes the colour
  of whatever it sits on, and an `<img>` cannot inherit colour. That is the
  whole reason it was traced that way. The blue rule under it is fixed at
  `#3980c8`.
- `_includes/junox-mark.svg` — the "Xt" alone. Not used on the page yet.
- `assets/img/favicon.svg` — the app icon: "Xt" white on `#2a2a2d`.

**Do not set the wordmark as live text.** The face is Eurostile Bold Extended,
which is licensed and cannot ship. It is paths.

When these change in the app, copy them again. They are copies on purpose: a
site that reaches into the app repo for an asset is a site that breaks when the
app repo moves.

## Still to do

**The install note.** Deleted from the homepage on 1 Nov; it was a yellow
placeholder box addressed to Daniel. The decision it was waiting on has not
been made, so it comes back as a real sentence or not at all:

- Mac build ships **signed and notarized** → say nothing. No box.
- Mac build ships **unsigned** → name what macOS will show and what to do
  about it, BEFORE it happens, the way 7/11 names the Windows SmartScreen
  warning. A warning nobody warned you about reads as "this is broken".

The style is already in the stylesheet as `.install-note` — a quiet grey line
under the buttons. Write the sentence into `index.md` wearing that class.

**The "Not yet" box.** Also deleted on 1 Nov. It carried two admissions:
nothing to download yet, and the Settings page reads but does not write. The
first stops being true at release. The second is permanent and true, and if it
belongs anywhere on the site it belongs on a features or FAQ page, stated as a
design decision rather than a shortfall — the JUNO-X throws away a System edit
at power-off unless you do a SYSTEM WRITE on the panel, so the app shows the
setting and the panel route instead of writing something that will not survive
the night.

**Screenshots.** `assets/img/screenshots/` is empty and `index.md` references
four pairs of files. Each needs a full PNG and a small JPEG thumbnail at the
same aspect, named as `index.md` has them:

```
banks.png / banks-thumb.jpg
scene-builder.png / scene-builder-thumb.jpg
zones.png / zones-thumb.jpg
backups.png / backups-thumb.jpg
```

**The strip is behind `screenshots:` in `_config.yml`, and it is `false`.**
Jekyll cannot test whether a file exists, so with the strip always on the top
of the homepage is four broken-image icons — which reads as a broken site
rather than an unfinished one. Put all eight files in place, flip the switch to
`true`, and that is the whole change.

The `alt` text in `index.md` describes what each one should show. 7/11's
`tools/make-favicons.js` and `tools/render-share.js` are the pattern for
generating the thumbnails and a share card rather than making them by hand.

**The favicon PNGs.** Only the SVG is here. Safari and older Android want
`favicon-32.png`, `apple-touch-icon.png` and a real `.ico`. 7/11 generates its
whole set from one SVG with `tools/make-favicons.js`; port that rather than
exporting by hand.

**A share card** (`og:image`). Left out of the layout entirely rather than
pointed at a file that 404s. 7/11 renders its 2400×1260 card from the site's
own header with `tools/render-share.js`.

**The relay.** Both other sites put their downloads behind one
(`lend.jx-3p.com`, `ping.thissevengoestoeleven.com`): a Cloudflare Worker that
302s to the right installer for the platform and counts the press server-side,
with the country, at the moment of redirect. Copy
`this-seven-goes-to-eleven/relay/` — it is about a hundred lines. Then set
`RELAY` in `assets/js/download.js` and the two URLs in `_config.yml`.

**Do not count downloads with a GoatCounter click event.** 7/11 tried it: one
press recorded against the relay's forty-one for the same clicks, because the
browser navigates away and the event loses the race. It is broken by design,
not by configuration.

**GoatCounter.** `goatcounter:` is empty, so no analytics ship. Create the site
at goatcounter.com first, then put the code in `_config.yml`.

**A downloadable build.** This is the launch blocker, and it is in the app
repo, not here. `package.json` builds `--mac dir --arm64` with
`identity: null`: a `.app` folder, unsigned, with no `.dmg` and no Windows
target. Both download buttons are correctly inert until that changes, and the
homepage says so in the "Not yet" box.

## Decisions this scaffold is waiting on

- **The repo name.** `junox-site` was the recommendation. Not created yet.
- **Whether the Mac build is signed.** It decides whether the first-run note on
  the homepage exists at all; the placeholder is marked on the page.
- **Daniel's opening paragraph.** Marked on the page.
- **The two analytics paragraphs in `privacy.md`.** They describe GoatCounter
  and a relay that do not exist yet. Marked on the page.

Settled: the domain (`juno-xtra.com`, above).

## Feature claims on the homepage — where each one is checked

Every line in "What JUNO-Xtra can do today" is checkable in
`roland-junox-editor`. If one changes there, change it here:

| The claim | Where it rests |
|---|---|
| USB, no browser, no Wi-Fi | `src/midi.js` (`@julusian/midi`) |
| 16 banks, 256 scenes | `src/backup-service.js`, `src/address.js` |
| drag the order, write it back | `src/bank-commit.js`, `src/bank-model.js` |
| rename a scene | `src/rename-service.js` |
| tone per part, split, velocity, fades, **saved** | `src/zone-service.js`, `src/tone-picker.js`, `src/build-view.js` — Save Scene writes the ZONE blocks |
| effects are LIVE ONLY | `docs/fx.md`: all 461 effect addresses are temporary, "so no effect edit can reach stored memory by construction" |
| setlists, and the tone-drift report | `docs/setlists.md` (built, round-tripped on hardware 1 Nov 2026), `src/setlist-*.js` |
| back up all / one bank | `src/backup-service.js`, `docs/backup-file.md` |
| restore all / bank / picked scenes | `src/restore-service.js`, `docs/backup-file.md` |
| 102 System settings, read-only | `src/system-settings.js`, `src/settings-view.js` |
| every write read back and compared | `src/scene-writer.js` steps 2-4 |
| a copy before anything is overwritten | `src/scene-writer.js` step 1, `src/bank-snapshot.js` |

**Not claimed, deliberately:** saving an effect setting into a scene (the app
cannot, by construction), and writing System settings (read-only on purpose —
the instrument discards a System edit at power-off without a panel SYSTEM
WRITE).
