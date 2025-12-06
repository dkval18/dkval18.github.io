gsap.registerPlugin(ScrollTrigger);

/*
  How it works:
  - The pyramid's DOM element has its top set to 100vh, so its apex is at the bottom of the viewport on load.
  - We animate the pyramid with a large negative `y` value so the triangle moves up and reveals itself.
  - The ScrollTrigger's `end` value is set to a pixel distance equal (or a bit larger) than the pyramid's height
    so the reveal is tied to that much scrolling.
*/

/* Customize these to match the CSS pyramid size if you change the border sizes */
const PYRAMID_HEIGHT = 1400;   // must match the CSS border-bottom px value
const REVEAL_SCROLL = PYRAMID_HEIGHT + 200; // extra room so it finishes nicely

// Pyramid: move up by the pyramid height (so the full triangle moves into view)
gsap.to(".pyramid", {
    y: -PYRAMID_HEIGHT, // move the triangle up by its own height
    ease: "none",
    scrollTrigger: {
        trigger: ".scene",
        start: "top top",         // start at top of page (when scene sits in viewport)
        end: `+=${REVEAL_SCROLL}`,// progress over this many pixels of scrolling
        scrub: true,
        // markers: true, // uncomment for visual debugging
    }
});

// Sun parallax: much slower upward movement for depth
gsap.to(".sun", {
    y: -120,
    ease: "none",
    scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: `+=${REVEAL_SCROLL}`,
        scrub: true
    }
});
