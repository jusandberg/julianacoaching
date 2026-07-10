# The U Method Website Style Guide

This guide documents the current site direction so new pages, icons, photos, graphics, and resources stay consistent.

## Brand Direction

The visual direction is modern, minimal, premium, and grounded. It should feel like a calm executive coaching practice with warmth: spacious layouts, crisp black accents, slate neutrals, soft gold, circular imagery, and gentle playful movement.

Keywords:
- Premium
- Grounded
- Calm
- Human
- Reflective
- Spacious
- Quietly playful

Avoid:
- Bright rainbow palettes
- Heavy gradients everywhere
- Busy decorative blobs
- Large square image frames
- Overly corporate blue SaaS styling
- Cute or childish illustration styles

## Color System

Use Slate & Gold as the primary palette.

| Token | Hex | Use |
|---|---:|---|
| Ink | `#101419` | Primary text, dark buttons, high-contrast details |
| Muted Slate | `#66707a` | Body text, metadata, secondary labels |
| Soft Slate | `#e9edf0` | Alternating page sections |
| Paper | `#fbfcfd` | Main page background |
| Line | `#d9dee4` | Borders, dividers, card outlines |
| Gold | `#d9b75e` | Accent, badges, key numbers, logo detail |
| Cream Gold | `#f3e4bd` | Soft background accents, floating circles |
| Pale Slate | `#dfe5ea` | Card markers, subtle surfaces |
| Mid Slate | `#657482` | Logo, decorative circles, cool contrast |

Gradient:

```css
linear-gradient(110deg, #657482 0%, #d9b75e 48%, #f3e4bd 100%)
```

Use the gradient sparingly:
- One phrase in a major headline
- Small brand moments
- Never for large full-page backgrounds

## Typography

Primary font stack:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Headline style:
- Large, confident, minimal
- Tight line-height
- Slight negative letter spacing
- Short, clear phrasing

Current sizes:
- Hero H1: `clamp(56px, 8vw, 112px)`, line-height `.92`
- Page H1: `clamp(48px, 7vw, 88px)`, line-height `.92`
- H2: `clamp(34px, 5vw, 64px)`, line-height `1`
- H3: `22px`, line-height `1.15`
- Lead text: `clamp(18px, 2vw, 22px)`, line-height `1.55`
- Body text: browser default around `16px`, line-height `1.55`
- Eyebrow labels: `12px`, uppercase, `font-weight: 800`, `letter-spacing: .08em`

Writing style:
- Clear, grounded, emotionally intelligent
- Avoid jargon unless explained
- Use short sections and direct headings
- Place placeholders in brackets until final copy is ready

Example tone:
> A grounded place to slow down, hear yourself clearly, and choose the next step with more trust.

## Layout

Main content width:

```css
.wrap {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}
```

Spacing:
- Hero sections: spacious, usually `78px 0 66px`
- Inner sections: `94px 0`
- Mobile sections: `68px 0`
- Card gaps: `16px`
- Major grid gaps: `clamp(36px, 7vw, 96px)`

Grid patterns:
- Hero/split layout: text left, visual right on desktop
- Stack to one column below `980px`
- Cards use 3 columns on desktop, 2 on tablet, 1 on mobile

Corners:
- Cards and UI panels use `8px`
- Buttons use pill radius
- Photos use circles

Avoid nested cards. If something is a section, keep it full-width or unframed. Use cards for repeated content, quotes, services, and booking options.

## Navigation

Desktop:
- Sticky top navigation
- Frosted white/slate background
- Logo left, links right
- Primary booking link uses dark fill

Mobile:
- Menu button opens stacked navigation
- Links become large tap targets
- Keep labels short

## Buttons

Primary button:
- Dark ink background
- White text
- Pill shape
- Minimum height: `48px`
- Font weight: `800`

Secondary button:
- White background
- Ink text
- Pale slate border

Hover:
- Move up slightly
- Add soft shadow

Button copy:
- Use action language: `Book a discovery call`, `Explore coaching`, `View booking options`
- Avoid vague labels like `Click here`

## Cards

Card styling:
- White background
- `1px` border in `--line`
- `8px` radius
- Padding around `26px`
- Soft hover lift only when card is interactive

Use cards for:
- Services
- Resources
- Testimonials
- Booking options
- FAQ-adjacent content

Do not use cards for:
- Whole page sections
- Hero content
- Generic decorative blocks

## Photo Style

Current direction:
- Photos should be circular, not square
- Keep them smaller and intentional
- Use real portrait photography where possible
- Avoid large cropped square photo panels

Homepage portrait:
- Circular image
- Approx. `330px` desktop max
- Has soft shadow
- Optional credibility card overlaps lower edge/shoulder area
- Do not cover the face

About portrait:
- Circular image
- Natural color is okay
- Keep centered inside the visual column

Cropping:
- Faces should have breathing room
- Keep eyes and forehead clear
- If using overlay cards, place them shoulder-down or outside the circle edge

CSS pattern:

```css
.portrait-panel,
.split-media {
  width: min(330px, 100%);
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.portrait-panel img,
.split-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Imagery Direction

Use imagery that feels:
- Real
- Calm
- Human
- Bright enough to inspect
- Minimal background
- Not overly stock-like

Recommended image types:
- Portraits
- Close-up reflective workspace details
- Simple abstract circles or balance motifs
- Warm neutral backgrounds
- Coaching worksheets or resource previews

Avoid:
- Dark moody stock photos
- Blurry atmospheric images
- Busy office scenes
- Overly polished corporate handshake photos
- Decorative SVG blob illustrations

## Icon Style

Icons should feel premium, minimal, and functional.

Recommended style:
- Line icons
- Stroke width: `1.75px` to `2px`
- Rounded caps and joins
- No filled cartoon icons
- No multicolor icon sets
- Use ink, slate, or gold only

Icon color rules:
- Default icon stroke: `#101419`
- Secondary icon stroke: `#657482`
- Accent icon stroke: `#d9b75e`
- Icon backgrounds: `#f3e4bd`, `#dfe5ea`, or white

Icon containers:

```css
.icon-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid #d9dee4;
  border-radius: 50%;
  background: #fbfcfd;
  color: #101419;
}

.icon-mark svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
```

Use icons for:
- Session types
- Resources
- Booking steps
- Values
- Download links
- Email/contact

Suggested icon concepts:
- Discovery call: calendar or chat bubble
- Coaching session: circle with path, compass, or spark
- Resources: document, bookmark, or download arrow
- Emotional clarity: small circle cluster
- Leadership: compass or upward line
- Reflection: mirror, eye, or simple wave
- Booking: calendar check

Keep icons supportive. They should not become the main visual personality of the site.

## Decorative Motion

Current motion system:
- Floating circles only
- Main circles use cream/gold/slate
- Dots are detached from the main circle and spread around page edges
- Movement should be subtle and slow

Use:
- Large cream/gold circles
- Smaller slate/gold/cream dots
- Gentle floating animation

Avoid:
- Lines or bars
- Squares
- Fast movement
- Decorations directly over faces
- Many dots clustered in one area

Motion timing:
- Main circle: around `6s`
- Small dots: around `6.4s`
- Ease: `ease-in-out`

Reduced motion:
- All decorative animation must pause under `prefers-reduced-motion`

## Logo

Active logo: Option A.

Files:
- `logo.svg`: active site logo
- `logo-option-a.svg`: classic refresh
- `logo-option-b.svg`: executive block
- `logo-option-c.svg`: editorial seal
- `logo-option-d.svg`: minimal line mark
- `logo-options.html`: comparison page

Logo usage:
- Use `logo.svg` in navigation
- Keep clear space around it
- Do not stretch or recolor outside the palette
- Use Option A unless a final alternate is selected

## Page Templates

### Standard Page Hero

Use:
- `page-hero`
- One eyebrow
- One H1
- One lead paragraph
- Optional circular image or decorative circles

Do not:
- Add cards inside the hero
- Add long explanatory copy
- Put decorations over key text

### Content Section

Use:
- `section`
- Optional `soft` variant
- `section-head`
- Cards or split grid

### CTA Section

Use:
- `cta-strip`
- One short heading
- One short lead
- One primary action

## Accessibility

Always:
- Use meaningful alt text for real images
- Use empty/hidden labels for decorative elements
- Keep text contrast high
- Keep button text specific
- Respect `prefers-reduced-motion`
- Avoid placing text over busy images

Decorative circles should use:

```html
aria-hidden="true"
```

## Adding New Pages

When adding a page:
1. Reuse the existing nav and footer.
2. Start with a `page-hero`.
3. Use one primary content structure: cards, FAQ, steps, or split section.
4. Add only a few detached decorative circles.
5. Keep images circular if they are portraits.
6. Use the Slate & Gold palette only.
7. Check mobile so text and cards do not overlap.

## Quick CSS Tokens

```css
--ink: #101419;
--muted: #66707a;
--soft: #e9edf0;
--paper: #fbfcfd;
--line: #d9dee4;
--gold: #d9b75e;
--cream: #f3e4bd;
--slate: #657482;
--shadow: 0 24px 74px rgba(16, 20, 25, .12);
--radius: 8px;
```
