// Names the version the button will hand you. That is all it does.
//
// WHAT IT DELIBERATELY DOES NOT DO, both learned on thissevengoestoeleven.com:
//
// 1. IT DOES NOT RESOLVE THE INSTALLER. Asking GitHub's API from the visitor's
//    browser which file the newest release holds works, and has a floor nobody
//    can see: 60 unauthenticated requests an hour PER ADDRESS. One visitor
//    never approaches it; an office behind a single outbound address does, and
//    on failure the button silently stays pointing at the release page, where
//    Mac and PC land identically on a list of files. The relay resolves it
//    server-side in a 302 instead, so the buttons are correct with JavaScript
//    off, with this file blocked, and with GitHub's API refusing everyone.
//
// 2. IT DOES NOT COUNT THE CLICK. A fire-and-forget analytics request racing
//    the navigation that follows it loses, and it loses almost every time: on
//    7/11 that recorded ONE press in two weeks against FORTY-ONE redirects the
//    relay logged for the same clicks. It was not misconfigured. It was
//    counting from the wrong side of a navigation, and it produced a number
//    that looked like a count and was not. The relay counts presses
//    server-side at the moment of redirect, where nothing can race it, and
//    carries country as well.
//
// So one job is left, the one that genuinely needs a browser.
(function () {
  // Set this when the relay exists. Until then there is nothing to ask and the
  // version line simply never appears, which is the correct resting state.
  const RELAY = '';
  if (!RELAY) return;

  // THE VERSION IS READ, NEVER WRITTEN DOWN HERE. No version string appears
  // anywhere in this repo: the relay reports the tag it actually resolved, so
  // the number on the page is by construction the number the button hands you,
  // and shipping a release never needs a site edit. A hardcoded version is a
  // lie waiting for the next release.
  //
  // If the relay cannot answer, the line stays hidden and the page says
  // nothing. An absent version is a small loss; a WRONG one, left over from a
  // previous release, is the thing worth avoiding.
  const line = document.getElementById('dl-version');
  const buttons = [...document.querySelectorAll('a.dl-btn, a.dl-link')];

  const platformOf = (a) =>
    (a.classList.contains('is-mac') || a.classList.contains('dl-mac')) ? 'mac'
      : (a.classList.contains('is-pc') || a.classList.contains('dl-pc')) ? 'pc'
        : null;

  fetch(`${RELAY}/version`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then((v) => {
      if (!v || !v.ok || !v.tag) return;
      // The tag carries a leading v; the sentence reads better without it.
      const version = String(v.tag).replace(/^v/, '');
      // Recorded on the buttons so a press is attributed to the release it
      // would actually have fetched, not to whatever is newest by the time
      // anybody reads the figures.
      for (const button of buttons) {
        if (platformOf(button)) button.setAttribute('data-version', v.tag);
      }
      if (line) {
        line.textContent = `Version ${version}`;
        line.hidden = false;
      }
    })
    .catch(() => { /* no version shown, and the buttons work regardless */ });
})();
