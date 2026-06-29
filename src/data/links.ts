/**
 * Leaves on the AnEvergreene hub tree.
 *
 * `links`            — leaves that carry a label + URL (clickable buttons)
 * `decorativeLeaves` — bare leaves scattered in the canopy for visual fullness;
 *                      placeholders for future links
 *
 * `tip` is the (x, y) coordinate in the tree's SVG (viewBox -100 0 600 620).
 * Open `art/tree-source.svg` in Inkscape to see all anchor positions.
 *
 * Labels at y < 260 sit in the dusky sky (parchment text).
 * Labels at y ≥ 260 sit against the warm peach (deep forest text).
 */

export type LinkSpec = {
  label: string;
  href: string;
  tip: { x: number; y: number };
  /** rotation in degrees; default 0. Positive = clockwise tilt. */
  rotate?: number;
};

export type DecorativeLeaf = {
  x: number;
  y: number;
  /** rotation in degrees, default 0 */
  rotate?: number;
  /** scale relative to base leaf size, default 1 */
  scale?: number;
  /** color variant: fern (default), sage, lime, olive, moss */
  color?: 'fern' | 'sage' | 'lime' | 'olive' | 'moss';
  /** opacity 0-1, default 0.45 */
  opacity?: number;
};

// Layout: 1 apex + 3 descending pairs. Upper pair is widest spread; middle and
// lower pairs step inward for a more oval canopy. Upper-pair branches in
// tree-source.svg still need extending in Inkscape to reach x=20 and x=380.
// Rotations are tied to position (which side of trunk), not to label.
export const links: LinkSpec[] = [
  { label: 'Forest',     href: 'https://ladyaudrey.github.io/Forest/',                    tip: { x: 200, y: 110 }, rotate:   0 },
  { label: 'Studio',     href: 'https://ladyaudrey.github.io/Studio/',                    tip: { x:  20, y: 180 }, rotate: -12 },
  { label: 'Substack',   href: 'https://audreys-evergreene-newsletter.beehiiv.com/',      tip: { x: 380, y: 180 }, rotate:  12 },
  { label: 'Whispers',   href: 'https://whispersoftheheartwood.com/',                     tip: { x: 200, y: 250 }, rotate:   0 },
  { label: 'Instagram',  href: 'https://www.instagram.com/an_evergreene/',                tip: { x:  44, y: 320 }, rotate: -14 },
  { label: 'YouTube',    href: 'https://www.youtube.com/@AnEvergreene',                   tip: { x: 356, y: 320 }, rotate:  14 },
  { label: 'X',          href: 'https://x.com/amberlyrastudio',                           tip: { x:  74, y: 430 }, rotate: -15 },
  { label: 'Alongside',  href: 'https://github.com/LadyAudrey/DutchFoodModel',            tip: { x: 326, y: 430 }, rotate:  15 },
];

/**
 * Decorative leaves — no link, just visual fullness.
 * Three zones:
 *   - Attached: positioned at actual twig endpoints in the tree art
 *   - Flying: drifting in the sky (top + midline/horizon) to draw the eye
 *   - Fallen: on the ground at the base
 * Opacities kept low (≤0.35 for attached, ≤0.45 for fallen) so they don't
 * compete visually with the link leaves.
 */
export const decorativeLeaves: DecorativeLeaf[] = [
  // ===== Attached to canopy — clusters around each twig tip for summer fullness =====
  { x: 283, y: 108, rotate:  36, scale: 0.38, color: 'fern',  opacity: 0.36 },
  { x: 276, y: 100, rotate: -32, scale: 0.39, color: 'moss',  opacity: 0.37 },
  { x: 269, y:  98, rotate: -18, scale: 0.45, color: 'sage',  opacity: 0.32 },
  { x: 187, y: 142, rotate: -20, scale: 0.44, color: 'moss',  opacity: 0.38 },
  { x: 181, y: 130, rotate: -25, scale: 0.43, color: 'olive', opacity: 0.34 },
  { x: 197, y: 140, rotate: -32, scale: 0.43, color: 'fern',  opacity: 0.37 },
  { x:  69, y: 226, rotate:  -1, scale: 0.42, color: 'moss',  opacity: 0.33 },
  { x:  69, y: 231, rotate: -30, scale: 0.39, color: 'olive', opacity: 0.36 },
  { x:  75, y: 233, rotate:   1, scale: 0.41, color: 'moss',  opacity: 0.33 },
  { x: 150, y: 227, rotate:  39, scale: 0.49, color: 'sage',  opacity: 0.45 },
  { x: 163, y: 222, rotate: -33, scale: 0.42, color: 'olive', opacity: 0.40 },
  { x: 147, y: 220, rotate:   2, scale: 0.41, color: 'lime',  opacity: 0.35 },
  { x: 210, y: 223, rotate:  42, scale: 0.47, color: 'fern',  opacity: 0.34 },
  { x: 219, y: 218, rotate: -25, scale: 0.43, color: 'olive', opacity: 0.45 },
  { x: 216, y: 233, rotate:  26, scale: 0.48, color: 'sage',  opacity: 0.43 },
  { x: 279, y: 176, rotate: -38, scale: 0.50, color: 'sage',  opacity: 0.42 },
  { x: 277, y: 172, rotate: -37, scale: 0.51, color: 'sage',  opacity: 0.39 },
  { x: 287, y: 174, rotate: -18, scale: 0.44, color: 'olive', opacity: 0.44 },
  { x: 273, y: 231, rotate:  13, scale: 0.42, color: 'sage',  opacity: 0.35 },
  { x: 276, y: 236, rotate: -12, scale: 0.44, color: 'moss',  opacity: 0.40 },
  { x: 270, y: 226, rotate: -28, scale: 0.45, color: 'moss',  opacity: 0.42 },
  { x: 388, y: 212, rotate: -31, scale: 0.47, color: 'sage',  opacity: 0.42 },
  { x: 387, y: 219, rotate: -37, scale: 0.43, color: 'olive', opacity: 0.45 },
  { x: 390, y: 208, rotate:  25, scale: 0.48, color: 'fern',  opacity: 0.33 },
  { x: 130, y: 280, rotate:  23, scale: 0.49, color: 'lime',  opacity: 0.36 },
  { x: 125, y: 281, rotate: -25, scale: 0.38, color: 'olive', opacity: 0.41 },
  { x: 139, y: 276, rotate:  19, scale: 0.45, color: 'sage',  opacity: 0.33 },
  { x:  86, y: 283, rotate:  35, scale: 0.50, color: 'lime',  opacity: 0.39 },
  { x:  78, y: 275, rotate:   2, scale: 0.46, color: 'sage',  opacity: 0.42 },
  { x:  88, y: 271, rotate:  31, scale: 0.45, color: 'lime',  opacity: 0.33 },
  { x: 297, y: 254, rotate:   1, scale: 0.41, color: 'lime',  opacity: 0.35 },
  { x: 301, y: 244, rotate: -35, scale: 0.49, color: 'olive', opacity: 0.45 },
  { x: 300, y: 266, rotate: -29, scale: 0.47, color: 'sage',  opacity: 0.44 },
  { x: 319, y: 257, rotate: -24, scale: 0.45, color: 'lime',  opacity: 0.40 },
  { x: 311, y: 262, rotate:  43, scale: 0.48, color: 'sage',  opacity: 0.37 },
  { x: 326, y: 265, rotate:   2, scale: 0.51, color: 'olive', opacity: 0.38 },
  { x: 112, y: 270, rotate: -14, scale: 0.39, color: 'sage',  opacity: 0.32 },
  { x: 115, y: 265, rotate:  30, scale: 0.38, color: 'sage',  opacity: 0.41 },
  { x:  99, y: 265, rotate: -37, scale: 0.50, color: 'fern',  opacity: 0.33 },
  { x: 314, y: 276, rotate: -15, scale: 0.47, color: 'lime',  opacity: 0.35 },
  { x: 304, y: 287, rotate:  28, scale: 0.45, color: 'moss',  opacity: 0.42 },
  { x: 325, y: 277, rotate: -21, scale: 0.39, color: 'fern',  opacity: 0.38 },
  { x: 170, y: 336, rotate:   9, scale: 0.45, color: 'olive', opacity: 0.41 },
  { x: 177, y: 344, rotate:  37, scale: 0.39, color: 'fern',  opacity: 0.41 },
  { x: 181, y: 327, rotate: -14, scale: 0.41, color: 'sage',  opacity: 0.38 },
  { x: 309, y: 338, rotate:   9, scale: 0.42, color: 'sage',  opacity: 0.35 },
  { x: 297, y: 340, rotate:  25, scale: 0.39, color: 'fern',  opacity: 0.45 },
  { x: 321, y: 326, rotate: -34, scale: 0.40, color: 'sage',  opacity: 0.38 },
  { x:  45, y: 355, rotate: -18, scale: 0.51, color: 'olive', opacity: 0.34 },
  { x:  31, y: 355, rotate: -12, scale: 0.42, color: 'olive', opacity: 0.41 },
  { x:  54, y: 360, rotate:  39, scale: 0.40, color: 'olive', opacity: 0.36 },
  { x: 362, y: 358, rotate: -38, scale: 0.48, color: 'moss',  opacity: 0.33 },
  { x: 358, y: 347, rotate: -39, scale: 0.45, color: 'moss',  opacity: 0.44 },
  { x: 364, y: 351, rotate: -38, scale: 0.39, color: 'moss',  opacity: 0.34 },
  { x: 115, y: 369, rotate:  31, scale: 0.47, color: 'fern',  opacity: 0.35 },
  { x: 104, y: 375, rotate: -14, scale: 0.46, color: 'moss',  opacity: 0.40 },
  { x: 114, y: 378, rotate:  29, scale: 0.45, color: 'moss',  opacity: 0.44 },
  { x: 168, y: 380, rotate: -19, scale: 0.41, color: 'lime',  opacity: 0.37 },
  { x: 175, y: 388, rotate:  -7, scale: 0.42, color: 'olive', opacity: 0.42 },
  { x: 156, y: 368, rotate:  13, scale: 0.52, color: 'moss',  opacity: 0.45 },
  { x: 236, y: 378, rotate: -36, scale: 0.41, color: 'moss',  opacity: 0.35 },
  { x: 233, y: 368, rotate: -14, scale: 0.42, color: 'lime',  opacity: 0.38 },
  { x: 239, y: 388, rotate:  -7, scale: 0.52, color: 'moss',  opacity: 0.42 },
  { x: 137, y: 400, rotate:  22, scale: 0.47, color: 'fern',  opacity: 0.39 },
  { x: 144, y: 391, rotate: -28, scale: 0.40, color: 'lime',  opacity: 0.33 },
  { x: 140, y: 392, rotate: -11, scale: 0.46, color: 'lime',  opacity: 0.41 },
  { x: 124, y: 483, rotate: -19, scale: 0.45, color: 'lime',  opacity: 0.35 },
  { x: 270, y: 521, rotate: -39, scale: 0.47, color: 'fern',  opacity: 0.43 },

  // ===== Flying — drifting toward the header (softer, slower, seen zone) =====
  { x:  30, y:  60, rotate:  40, scale: 0.26, color: 'sage',  opacity: 0.28 },
  { x: 360, y:  40, rotate: -55, scale: 0.24, color: 'lime',  opacity: 0.25 },
  { x: -40, y: 100, rotate: -65, scale: 0.28, color: 'fern',  opacity: 0.28 },
  { x: 440, y: 110, rotate:  60, scale: 0.28, color: 'moss',  opacity: 0.28 },

  // ===== Flying — midline / horizon, drawing the eye back down to the tree =====
  { x: -60, y: 280, rotate: -70, scale: 0.32, color: 'lime',  opacity: 0.32 },
  { x: 450, y: 290, rotate:  55, scale: 0.30, color: 'sage',  opacity: 0.30 },
  { x: -50, y: 380, rotate:  20, scale: 0.30, color: 'fern',  opacity: 0.30 },
  { x: 445, y: 390, rotate: -25, scale: 0.30, color: 'olive', opacity: 0.30 },
  { x: -80, y: 450, rotate: -65, scale: 0.30, color: 'moss',  opacity: 0.30 },
  { x: 460, y: 440, rotate:  60, scale: 0.28, color: 'olive', opacity: 0.28 },

  // ===== Fallen on the ground =====
  { x:  -50, y: 590, rotate:  85, scale: 0.42, color: 'lime',  opacity: 0.40 },
  { x:   30, y: 610, rotate: -75, scale: 0.40, color: 'sage',  opacity: 0.38 },
  { x:  120, y: 600, rotate: 120, scale: 0.44, color: 'fern',  opacity: 0.42 },
  { x:  280, y: 605, rotate:  35, scale: 0.40, color: 'olive', opacity: 0.38 },
  { x:  370, y: 595, rotate: -95, scale: 0.42, color: 'moss',  opacity: 0.42 },
  { x:  450, y: 608, rotate:  65, scale: 0.42, color: 'sage',  opacity: 0.40 },
];
