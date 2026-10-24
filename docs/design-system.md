# Bokrah design system

[Complete foundations reference](foundations.md): colors, typography, spacing, borders, shadows, icons, grid, motion, themes and accessibility.

## Contents

- [Direction and source](#direction-and-source)
- [Foundations](#foundations)
- [Components and parity](#components-and-parity)
- [Arabic and accessibility](#arabic-and-accessibility)
- [Versioning and rollout](#versioning-and-rollout)

## Direction and source

Reviewed the live [Bokrah website](https://mahfoud-sa.github.io/bokrah-website/) on 24 October 2026, including its Arabic layout and computed styles. The website is the visual reference: forest green #164B39, cream #F7F7F0, dark green text #163F32, warm neutral surfaces, sage accents, generous spacing, and rounded corners.

The current app's `lib/app/config/theme.dart` uses orange #E65100 with larger radii. That is a legacy theme; it has not been changed. Adopt this library incrementally rather than mixing orange and green primary actions on the same screen.

## Foundations

`tokens/tokens.json` is the single source for semantic colors in light/dark/high-contrast modes, spacing, radii, type scale, layout, and motion. Run `npm run generate` after editing it; commit the generated CSS, JS/JSON and Dart. CI rejects drift.

Semantic names describe purpose: primary/onPrimary, text/muted, background/surface/surfaceAlt, border/controlBorder, focus, and success/warning/danger/info. Never use color alone for status. Chart decoration may use sage, but readable text must use semantic foregrounds. Website muted copy has deliberately been darkened to meet the documented contrast checks. Subtle borders are decorative; use controlBorder to identify inputs.

Body, headings and Arabic use Somar Sans from the supplied archive. Standard-width static OpenType faces cover weights 100–900 in normal and italic styles, with explicit CSS/Flutter registrations. Asset provenance is recorded in fonts/SomarSans-NOTICE.md in both distributions. Flutter package families are package-qualified. Consumers get offline rendering; no runtime Google Fonts request is needed. Typography: 12 caption, 14 small, 16 body, 24 title, 32 heading, 48 display. Avoid clipping at large text scales.

Spacing uses 4, 8, 12, 16, 24, 32, 48 and 64 units. Radii: 6, 8, 12 and 20; pill is for compact statuses. Interactive controls target 48 logical pixels. Web layouts collapse below 760px. Use responsive constraints rather than fixed heights for text content.

## Components and parity

| Pattern | Flutter | Web |
| --- | --- | --- |
| Action | BkButton primary/secondary/danger; loading/disabled | .bk-button with variants; native disabled and aria-busy |
| Text entry | BkTextField with label, helper, error | .bk-field + native labeled input/select/textarea |
| Surface | BkCard | .bk-card |
| Status | BkBadge and BkAlert | .bk-badge and .bk-alert with explicit text |
| Metric | BkStatCard | .bk-stat |
| Empty state | BkEmptyState | .bk-empty |
| Dialog/table | Material themed primitives | Native dialog and semantic table styles |

Components own presentation; consumers own routing, API calls, authentication, money formatting, validation rules, and translation. Examples contain illustrative data only. The web package intentionally uses native HTML semantics and CSS so React, Vue, and plain HTML can all consume it without another runtime.

## Arabic and accessibility

Set locale and direction at the application boundary. Use directional spacing and start/end alignment. Keep numbers and identifiers readable using explicit bidirectional isolation when needed. Translate labels, helper text, errors, and accessible names together. Examples switch English/Arabic and light/dark/high-contrast modes.

Use visible keyboard focus, real buttons/labels, descriptive errors linked to fields, and a text label for every status. Loading actions are unavailable to duplicate submissions and announce their busy state. Web respects reduced motion. Contrast tests require 4.5:1 for body/muted and status text in normal themes, 7:1 in high contrast, and 3:1 for input boundaries and focus outlines. Automated checks are a baseline; keyboard, screen-reader, zoom, and device review are still required before consumer rollout.

## Versioning and rollout

Both packages start at 0.2.0. This is a repository distribution, not a pub.dev or npm registry publication. Use Git/path dependencies until a registry release is explicitly requested. No existing Bokrah production screen has been migrated by this change.

Change tokens first, regenerate, update both examples, run web and Flutter checks, and record changes in CHANGELOG. Changes to component API or semantic meaning require a migration note. Start migration with one isolated page, review Arabic/English and light/dark/high-contrast behavior, then expand.
