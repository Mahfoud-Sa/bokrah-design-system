# Complete foundations

[Live reference](https://mahfoud-sa.github.io/bokrah-design-system/#reference) · [Arabic guide](README.ar.md)

## Contents

- [Colors](#colors)
- [Typography](#typography)
- [Spacing](#spacing)
- [Borders](#borders)
- [Shadows](#shadows)
- [Icons](#icons)
- [Grid](#grid)
- [Motion](#motion)
- [Themes](#themes)
- [Accessibility](#accessibility)
- [Using the foundations](#using-the-foundations)

## Colors

Each palette defines primary, secondary, accent and neutral roles, their paired foregrounds, semantic success/warning/danger/info colors and their tinted surfaces, background, surface, surfaceAlt, readable text, muted text, decorative border, control border and focus. `tokens.color.light`, `dark`, and `highContrast` are canonical. On the web the high-contrast attribute value is `high-contrast`; Dart exposes `BkHighContrastColors`.

Use primary for the main action; secondary for supporting content, accent for restrained emphasis, neutral for low-priority content, and semantic colors only for their stated meaning. Always pair text with the intended foreground/background combination. The catalogue lists the exact values for the selected theme.

## Typography

| Property | Tokens / values | Unit |
| --- | --- | --- |
| Font families | Somar Sans for body, headings and Arabic | Locally bundled static OpenType faces: 100–900, normal and italic |
| Sizes | 12, 14, 16, 24, 32, 48 | Logical pixels |
| Weights | regular 400, medium 500, semibold 600, bold 700, extrabold 800 | Numeric font weight |
| Line heights | heading 1.3, body 1.6, Arabic 1.8 | Ratio of font size |
| Letter spacing | tight -0.03, normal 0, wide 0.08 | em |

Arabic uses normal tracking. CSS consumes em directly; Flutter `TextStyle.letterSpacing` uses logical pixels, so multiply an em token by the current font size. Flutter theme handles this conversion for heading text. Do not fix text containers to a height that clips Arabic or larger system text.

## Spacing

Required steps: **4, 8, 12, 16, 24, 32, 48** logical pixels, plus the existing 64 page token. Use xs/sm/md/lg/xl/xxl/section/page from `space` / `BkSpace`. Prefer directional padding and start/end alignment.

## Borders

Widths: none 0, hairline 1, strong 2, focus 3. Colors come from the current palette: `border` is decorative, `controlBorder` identifies controls, and `focus` identifies keyboard focus. Radius: sm 6, md 8, lg 12, xl 20, pill 999. A subtle decorative border is not an input boundary.

## Shadows

Elevation levels: flat 0, raised 1, floating 4, overlay 8. The `shadow` group defines x/y offset, blur, spread and opacity for raised/floating/overlay box shadows. The `dropShadow` group defines subtle/strong silhouette shadows. Exact values are visible in the reference and generated from JSON.

Web: `bk-elevation-raised`, `bk-elevation-floating`, `bk-elevation-overlay`, `bk-drop-shadow`, or generated CSS variables. Flutter: `BkElevation` for Material elevation, `BkShadow` for BoxDecoration and `BkDropShadow` for TextStyle shadows. Native blur rendering differs between engines; the semantic levels are shared. Keep visible borders on dark and high-contrast surfaces, where shadows alone cannot establish boundaries.

## Icons

**Bokrah Outline** is an initial eight-icon vector library: add, check, close, search, download, arrowForward, receipt and menu. Geometry lives in `tokens/icons.json` and generates both the SVG distribution and Flutter data. Extend this file rather than redrawing separate platform versions.

Sizes: 16 / 20 / 24 / 32 / 48; default 24. Stroke widths: 1.5 / 2 / 2.5; default 2, on a 24-unit viewBox. Flutter `BkIcon` uses a CustomPainter with the same paths. Web SVGs are exported at `@bokrah/design-system/icons/*.svg`; inline SVG with `.bk-icon` inherits currentColor. Set its stroke width with `--bk-icon-stroke-standard` or an explicit CSS stroke-width.

Decorative icons are hidden from assistive technology. A standalone meaningful icon needs an accessible name. Interactive icon buttons still need a 48px touch target even when the glyph is 24px. `BkIconName.arrowForward` mirrors automatically in RTL; inline web directional arrows use `.bk-icon--directional`. Static external SVG image files do not automatically mirror: give the image that class in an RTL ancestor. Do not mirror nondirectional symbols.

## Grid

| Band | Viewport / available width | Columns | Gutter | Outer margin |
| --- | --- | --- | --- | --- |
| Compact | Below 760 | 4 | 16 | 16 |
| Medium | 760–1199 | 8 | 24 | 24 |
| Wide | 1200 and above | 12 | 32 | 48 |

Maximum content width is 1200. Web uses viewport media queries generated from the grid tokens: `.bk-container` and `.bk-layout-grid`. Flutter `BkResponsiveGrid` uses the available parent width and equal-span children. Place it inside `ConstrainedBox(maxWidth: BkGrid.maxWidth.toDouble())` when a content-width cap is needed. Gutters, margins and breakpoint rules are generated for both platforms.

## Motion

Durations: instant 0, fast 160ms, normal 240ms, slow 400ms. Easing curves: standard `(0.2, 0, 0, 1)`, enter `(0, 0, 0.2, 1)`, exit `(0.4, 0, 1, 1)`. Named transition recipes: color (fast/standard), movement (normal/standard), entrance (slow/enter).

Web uses `--bk-transition-color`, `--bk-transition-movement`, and `--bk-transition-entrance`. Flutter uses `Duration(milliseconds: BkMotion.normal.round())` and `BkEasing.standard`, or the paired recipe `BkTransition.movement.duration` / `.curve`. Respect `prefers-reduced-motion` on web and `MediaQuery.disableAnimationsOf(context)` on Flutter; the examples remove movement duration under that preference. Loading indicators must have textual status and prevent duplicate activation. Motion never gates access to accounting data.

## Themes

Light, dark and high contrast all share the same semantic API. The catalogue theme button cycles through all three. Use `setBokrahTheme('high-contrast')` on web or `BkTheme.highContrast(arabic: true)` in Flutter. Flutter consumers can set `highContrastTheme` and `highContrastDarkTheme` so platform accessibility preferences select the supplied high-contrast theme.

`BkThemeTokens.of(context)` exposes the actual active palette to custom Flutter components. Semantic badges and alerts use it, so high contrast is preserved. Existing light/dark APIs remain available. On web, a Windows forced-colors preference uses system boundary and focus colors; this is distinct from the explicit Bokrah high-contrast palette.

## Accessibility

The system tests configured foreground/background pairs against **4.5:1** in normal themes and **7:1** in high contrast; active control boundaries and focus indicators target **3:1**. These are token-pair checks, not a claim of whole-application certification. See [WCAG contrast minimum](https://www.w3.org/TR/WCAG22/#contrast-minimum), [enhanced contrast](https://www.w3.org/TR/WCAG22/#contrast-enhanced), and [non-text contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast).

Focus ring width and offset are 3px. Controls target 48 logical pixels; this is Bokrah's design target. Use native web buttons, labels, semantic tables and dialogs, and keep focus visible. Arabic applies document RTL, directional spacing and mirrored directional icons; isolate numerical amounts. Support large text, keyboard operation, reduced motion and descriptive errors. Status must include words alongside color.

## Using the foundations

```css
.my-panel {
  border: var(--bk-border-width-hairline) solid var(--bk-control-border);
  border-radius: var(--bk-radius-lg);
  box-shadow: var(--bk-shadow-raised);
  transition: background var(--bk-transition-color);
}
```

```dart
BkIcon(BkIconName.receipt, size: BkIconSize.standard);
BkResponsiveGrid(children: cells);
BoxDecoration(boxShadow: [BkShadow.raised]);
```

Edit `tokens/tokens.json`, `tokens/icons.json`, or category metadata in `tokens/categories.json`, then run `npm run generate`. Commit generated Dart, CSS, JS, JSON and SVGs together. CI checks drift, all category metadata, contrast, vector paths, Flutter analysis, semantic high-contrast rendering, responsive grid behavior and release web builds.
