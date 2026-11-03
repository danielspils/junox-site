# junox-site

The marketing site for **JUNO-Xtra**, the editor/librarian for the Roland JUNO-X. Jekyll, served by GitHub Pages from `/docs`. No build step, no `node_modules`, nothing compiled: Pages runs Jekyll on push.

**This repo is NOT the app.** The app is `roland-junox-editor` (`~/roland-junox-editor`). `crumar-seven-editor` and `this-seven-goes-to-eleven` got crossed once because the names were close; this pair is closer. Sibling sites to borrow from: `jx-3p.com` (JP Patches) and `thissevengoestoeleven.com`.

`README.md` holds what is still to do and why. It is excluded from the build - **internal notes are not the site.** jx-3p.com published Azure account identifiers because 36 maintainer `.md` files in its `docs/` had no front matter and Jekyll served them verbatim. `exclude:` in `_config.yml` is the second line of defence; keeping notes out of `docs/` is the first.

## The switches

`docs/_config.yml` owns every switch, and each one is the ONLY switch:

- `downloads.mac` / `downloads.pc` - empty means nothing to download, and the page says so identically in the download block and the phone menu. Paste a URL and both light up. Point these at a relay, never at GitHub.
- `screenshots: false` - Jekyll cannot test whether a file exists, so the strip is behind a switch rather than drawing four broken images. All eight files in, then flip it.
- `tagline` - carries markup. The header renders it as written; `<title>` and `og:title` take it through `strip_html`. One value, so a page and a shared link can never disagree.
- `url:` must match `docs/CNAME`, or every page gets a canonical pointing somewhere it is not served from. **Do not edit the custom domain in the Pages settings screen** once `CNAME` exists: saving there rewrites the file as a commit.

**Never count downloads with a GoatCounter click event.** 7/11 measured one press against the relay's forty-one for the same clicks - the browser navigates away and the event loses the race. Broken by design, not by configuration.

## The header is the JUNO-X front panel

`.site-head` in `assets/css/style.css`, and it is measured, not styled by eye. Every colour is a sampled pixel value from `roland-junox-editor/docs/Juno-X panel 1.png`; the app draws the same panel from `src/panel-layout.js`. **A correction belongs in both repos.**

- Sizes are panel units: `--pu` for bars, type and dividers, `--bu` for buttons. They shrink together at the breakpoint; nothing is hard-coded in px.
- `--divider-clear: .107` is a RATIO of the bar's height, not a unit count, and it is `bands.dividerClearOfBar` in the app. The white dividers stop just short of the red and blue bars, the way they do on the instrument. This was got wrong three times by treating it as a fixed offset: at this header's smaller scale a count that is a hairline on the instrument is a visible gap here.
- **Full bleed is done with pseudo-elements** (`width: 100vw; background: inherit`) on the first and last bays' bars. `box-shadow` with zero spread was tried and is wrong: it paints a *copy* of the box offset by 100vw and leaves the gutter bare. Content stays on the 46rem column; only the bars run to the edge.
- `.headnav > .bay:last-child`, never `:last-of-type`. Once the `.headnav` wrapper existed the logo bay became the only `<section>` child of `.deck`, so `:last-of-type` matched it and painted a red bleed down its right edge. For the same reason the divider is `.bay:not(.bay-logo)::before`, not a `+` sibling selector.
- **There is no `!important` in this stylesheet and it stays that way.** `roland-junox-editor/docs/DESIGN.md` calls these "rules written to win and lost". Name the colour directly instead.
- The wordmark is **paths, never live text**: the face is Eurostile Bold Extended, which is licensed and cannot ship. It is inlined rather than an `<img>` so `fill="currentColor"` can inherit colour. Its viewBox is cropped to the measured ink.
- The wordmark cap is `flex: 0 1 300px` on the `<a>`. **Safari ignores `max-width` on an SVG sized `width: 100%`** - that is how it ran off an iPhone at ~380px against a 300px cap.

## Narrow screens

One breakpoint, `52rem`, and below it the panel bays are gone outright rather than hidden: a burger opens a plain text menu (Mac download / PC download / Notes / Contact), `display: none` until JS adds `.has-burger`, so it degrades to a visible list with JS off. The tagline sits directly under the wordmark at every width, never below the buttons. **Horizontal paddings here are `1.5rem`** - the body column's padding, not a panel-unit count, which drifted 12px out of alignment with the first paragraph.

## Verifying a change

There is no local server unless Ruby and Jekyll are installed. Playwright and Chromium are available to the agent: reconstruct the page with the Liquid resolved and check it across a device matrix (17 sizes, closed and open) for horizontal scroll, elements outside the viewport, buttons escaping their bay, touch targets under 44px, clipped titles, and left-edge alignment of wordmark, tagline and first paragraph.

Two ways that harness has lied, both fixed, both worth re-checking in a new one: **include `<meta name="viewport">`** or every size reports a 980px viewport; and measure clipping with a `Range`, not `scrollWidth`, which counts the 100vw bleed element and reports every title clipped.

## Two standing rules

**Daniel is colourblind** (deuteranope). From the app's `docs/DESIGN.md`: colour "must not be the only way to read anything small or thin", and "the colour only confirms".

**A fenced code block means Terminal to him.** Never put a bare URL in one - he will paste it into zsh. Write `open "https://..."`.

## The ordered list

`roland-junox-editor/docs/release-v1.md` is the single roadmap and it covers both repos. Do not start a second one here.
