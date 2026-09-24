/*
 * Webtemple reviews widget loader (WEBT-70).
 *
 * The ONE file a client's website loads:
 *
 *   <script src="https://platform.webtemple.design/widget.js"
 *           data-wt-widget="<public id>" async></script>
 *
 * It fetches the pre-rendered widget from our CDN-cached endpoint and injects
 * it INLINE — light DOM, no iframe, no shadow root. That is a decision, not a
 * shortcut: the markup carries stable `wt-` class names precisely so the
 * client's own stylesheet can restyle it, and an isolating wrapper would make
 * that impossible.
 *
 * Plain browser JavaScript, no build step and no dependencies: it runs on
 * whatever the client's site is, which is not our stack and never will be. It
 * is served from `public/` verbatim, so what is written here is what ships —
 * nothing transpiles it, which is why it stays inside what every current
 * browser does natively (fetch, Promise, ResizeObserver, URL) and reaches for
 * nothing newer.
 *
 * TWO ENTRY CONDITIONS, one file:
 *   - a script tag carrying `data-wt-widget` fetches and injects that widget;
 *   - any `.wt-reviews` already in the document is wired up in place.
 * The second is what lets the console preview an unsaved configuration through
 * exactly the runtime a client gets, instead of a second implementation that
 * would drift from it.
 */
(function () {
  "use strict";

  /** Card gap and minimum card width — must match the widget stylesheet. */
  var GAP = 14;
  var MIN_CARD = 254;
  var MAX_VISIBLE = 4;
  var AUTOPLAY_MS = 4000;

  function reducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  /**
   * Whole cards only, never a cut-off one (owner's carousel verdict): fit the
   * largest whole number of cards, 1 to 4, that the track can hold at the
   * minimum card width. The cards then grow to divide the width exactly.
   */
  function fitCards(track) {
    var width = track.clientWidth;
    var n = Math.floor((width + GAP) / (MIN_CARD + GAP));
    if (n < 1) n = 1;
    if (n > MAX_VISIBLE) n = MAX_VISIBLE;
    track.style.setProperty("--wt-cards-visible", String(n));
  }

  function step(track, dir) {
    var card = track.querySelector(".wt-review");
    if (!card) return;
    var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    var behavior = reducedMotion() ? "auto" : "smooth";
    if (dir === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: behavior });
    } else {
      track.scrollBy({ left: (card.offsetWidth + GAP) * dir, behavior: behavior });
    }
  }

  function wireCarousel(root) {
    var track = root.querySelector(".wt-reviews-track");
    if (!track) return;
    fitCards(track);
    if (window.ResizeObserver) {
      new ResizeObserver(function () {
        fitCards(track);
      }).observe(track);
    } else {
      window.addEventListener("resize", function () {
        fitCards(track);
      });
    }

    var prev = root.querySelector(".wt-reviews-arrow-prev");
    var next = root.querySelector(".wt-reviews-arrow-next");
    if (prev) {
      prev.addEventListener("click", function () {
        step(track, -1);
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        step(track, 1);
      });
    }

    // Auto-play is a per-widget knob AND stops for anyone who asked the OS for
    // less motion — an animation nobody started should never be the one thing
    // on the page that ignores that.
    if (!root.hasAttribute("data-wt-autoplay") || reducedMotion()) return;
    var paused = false;
    var viewport = root.querySelector(".wt-reviews-viewport") || root;
    viewport.addEventListener("pointerenter", function () {
      paused = true;
    });
    viewport.addEventListener("pointerleave", function () {
      paused = false;
    });
    setInterval(function () {
      // Off-screen widgets and background tabs advance nothing: the scroll
      // would land wherever the user is not looking, and wake a sleeping tab
      // once every four seconds forever.
      if (paused || document.hidden) return;
      step(track, 1);
    }, AUTOPLAY_MS);
  }

  function wireReadMore(root) {
    var buttons = root.querySelectorAll(".wt-review-more");
    for (var i = 0; i < buttons.length; i++) {
      (function (button) {
        button.addEventListener("click", function () {
          var text = button.parentNode.querySelector(".wt-review-text");
          if (!text) return;
          var expanded = !text.hasAttribute("data-wt-clamped");
          if (expanded) {
            text.setAttribute("data-wt-clamped", "");
            button.textContent = "Read more";
          } else {
            text.removeAttribute("data-wt-clamped");
            button.textContent = "Show less";
          }
        });
      })(buttons[i]);
    }
  }

  /**
   * Refresh a pasted product-context JSON-LD block's figures from THIS widget's
   * response (decision 7a2).
   *
   * The block is static HTML the operator pasted beside the script tag, so a
   * non-JS crawler reads correct-at-paste-time numbers with no request at all;
   * a JS-rendering crawler gets the current ones from the fetch that was going
   * to happen anyway. There is never a second data request.
   */
  function refreshContext(root) {
    var rating = root.getAttribute("data-wt-rating");
    var count = root.getAttribute("data-wt-count");
    if (!rating && !count) return;
    var blocks = document.querySelectorAll(
      'script[type="application/ld+json"][data-wt-context]',
    );
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      var id = block.getAttribute("data-wt-context");
      if (id && id !== root.getAttribute("data-wt-id")) continue;
      try {
        var data = JSON.parse(block.textContent);
        if (!data.aggregateRating) continue;
        if (rating) data.aggregateRating.ratingValue = Number(rating);
        if (count) data.aggregateRating.reviewCount = Number(count);
        block.textContent = JSON.stringify(data);
      } catch {
        // A hand-edited block that no longer parses is the operator's to fix;
        // it must not take the widget down with it.
      }
    }
  }

  function enhance(root) {
    if (root.hasAttribute("data-wt-ready")) return;
    root.setAttribute("data-wt-ready", "");
    wireReadMore(root);
    if (root.className.indexOf("wt-reviews--carousel") !== -1) {
      wireCarousel(root);
    }
    refreshContext(root);
  }

  function enhanceAll(scope) {
    var roots = (scope || document).querySelectorAll(".wt-reviews");
    for (var i = 0; i < roots.length; i++) enhance(roots[i]);
  }

  function load(script) {
    var id = script.getAttribute("data-wt-widget");
    if (!id) return;
    // The origin is the loader's OWN src, so one snippet works on any host and
    // against any environment (production, a preview deploy, localhost).
    var origin = new URL(script.src, window.location.href).origin;
    var mount = document.createElement("div");
    mount.className = "wt-reviews-mount";
    mount.setAttribute("data-wt-id", id);
    // Placed where the script tag sits, so the widget appears exactly where the
    // operator pasted the snippet.
    script.parentNode.insertBefore(mount, script.nextSibling);

    fetch(origin + "/api/widget/" + encodeURIComponent(id))
      .then(function (response) {
        if (!response.ok) throw new Error("widget " + response.status);
        return response.text();
      })
      .then(function (html) {
        mount.innerHTML = html;
        var root = mount.querySelector(".wt-reviews");
        if (root) {
          root.setAttribute("data-wt-id", id);
          enhance(root);
        }
      })
      .catch(function (err) {
        // A widget that cannot load leaves the page exactly as it was. It is
        // social proof, not content the visitor came for — an error box would
        // be worse than nothing on somebody else's homepage.
        if (window.console) window.console.warn("[wt-reviews]", err);
        mount.parentNode.removeChild(mount);
      });
  }

  var self = document.currentScript;
  if (self && self.hasAttribute("data-wt-widget")) {
    load(self);
  } else {
    // No widget id on this tag: enhance whatever is already in the document.
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        enhanceAll();
      });
    } else {
      enhanceAll();
    }
  }
})();
