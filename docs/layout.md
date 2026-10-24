# 5. Layout Components

Bokrah v0.6.0 provides ten layout groups for web and Flutter. All examples support English, Arabic/RTL, light, dark and high contrast themes. Applications own routing, scroll positions and business state.

## Table of contents

1. [Container](#container)
2. [Row / Column](#row--column)
3. [Grid](#grid)
4. [Divider](#divider)
5. [Spacer](#spacer)
6. [Stack](#stack)
7. [Modal / Bottom Sheet](#modal--bottom-sheet)
8. [Responsive Layout](#responsive-layout)
9. [Page Scaffold](#page-scaffold)
10. [Section Header](#section-header)

## Container

Web: `.bk-container`. Flutter: `BkContainer(child: ...)`. Centers content with a maximum inner width of 1,200px and horizontal margins of 16/24/48px at compact/medium/wide sizes. Flutter accepts an optional maxWidth. Use one container at the page boundary; nesting adds padding. Flutter requires bounded width. Web's outer maximum is 1,296px, including two 48px wide-screen margins.

## Row / Column

Web: `.bk-row` and `.bk-column`. Flutter: `BkRow(children: ...)` and `BkColumn(children: ...)`. Web row gap is 12px; web columns and Flutter flows default to 16px. Rows wrap rather than clip actions. Columns stretch children horizontally and size to content vertically. Flutter rows use Wrap: do not place Expanded/Flexible inside them. Give long content a width constraint. Preserve source order for keyboard and assistive technology; RTL changes inline direction automatically.

## Grid

Web: `.bk-layout-grid`. Flutter: existing `BkResponsiveGrid(children: ...)`. Equal-width cells use 4 columns below 760px, 8 from 760px and 12 from 1,200px. Gutters are 16/24/32px. Web follows viewport breakpoints; Flutter follows available parent width and includes shared page margins. Supply bounded width and short cell labels; use Responsive Layout for larger content regions. These are layout grids, not interactive ARIA data grids. Data tables are documented separately.

## Divider

Web: semantic `<hr class="bk-divider">`. Flutter: `BkDivider()`. A one-pixel theme border separates related sections, with 24px vertical space. Keep a meaningful heading for every section; separators do not replace titles.

## Spacer

Web: `.bk-spacer` with `--bk-gap:32px`; add `.bk-spacer--inline` for horizontal space. Flutter: `BkSpacer(size: BkSpace.xxl, axis: Axis.vertical)`. Default 16px; choose shared spacing tokens. Fixed spacers work in scroll views and contain no semantic content. Use CSS gap or BkColumn.gap for repeated spacing; Flutter's native Spacer is for bounded flex layouts.

## Stack

Web: `.bk-overlay-stack`, children share a CSS grid cell; `.bk-overlay-stack__badge` anchors a badge at inline end. Flutter: `BkStack(children: ...)`, using native Stack/PositionedDirectional. Supply bounded height for positioned-only children. Keep interactive content unobscured and source order meaningful. The existing web `.bk-stack` retains its vertical-flow behavior for compatibility.

## Modal / Bottom Sheet

Web uses a labelled native dialog with `.bk-modal`; add `.bk-modal--sheet` to dock it to the bottom. Import `bindBokrahModal`, pass the opener and dialog, and call its returned cleanup before removing them. Add `data-bk-close` to dismiss controls. Use a unique aria-labelledby heading and a visible localized close button. Native showModal makes the rest of the page inert, contains keyboard focus and handles Escape. The helper restores focus to the connected opener on close. Content scrolls within 85dvh. Native HTML dialog support is required.

Flutter: `showBkModal<void>(context: context, title: title, closeLabel: close, builder: (dialogContext) => content)` and `showBkBottomSheet<void>(...)`. Both return the native nullable route result, contain focus and support platform back/Escape. Use their builder context to pop a result. The modal scrolls long content; the sheet uses 85% of available height, safe areas, scrollable content and keyboard insets. MaterialApp supplies localizations, theme and direction. Label content controls explicitly. These dismissible previews are unsuitable for mandatory decisions without additional application policy.

## Responsive Layout

Web: `.bk-responsive-layout` contains `.bk-responsive-layout__body`. A container query changes from one column to a 1:2 split when the container reaches 760px; children remain in source order. CSS container query support is required (older browsers keep one column). Flutter: `BkResponsiveLayout(compact: ..., medium: ..., wide: ...)` uses WidgetBuilder callbacks at 760 and 1,200px based on bounded parent width. Only the selected branch builds. Keep form/data state above it so switching branches preserves user work. Do not infer device type from viewport size.

## Page Scaffold

Web: `.bk-page-scaffold` with header, main and footer slots, minimum height 100dvh and bottom safe-area padding. Use one main landmark and a skip link. Page content owns normal document scrolling. The catalogue shows an inset structural preview, not nested landmarks.

Flutter: `BkPageScaffold(body: ..., appBar: ..., drawer: ..., bottomNavigationBar: ..., floatingActionButton: ...)`. Wraps native Scaffold and SafeArea. Body owns its ListView/CustomScrollView; do not nest another Scaffold or an unbounded Expanded in a scroll axis. The catalogue opens this example on its own route so Back returns to the catalogue.

## Section Header

Web: `.bk-section-header`, with a div for a semantic heading/description plus an optional action. It wraps on narrow screens. Flutter: `BkSectionHeader(title: ..., description: ..., action: ...)`, marks the title as a semantic header and places an optional action below the copy for reliable large-text layout. Choose a correct HTML heading level rather than styling every header as h1.

## Validation

Automated Flutter coverage checks parent-width branch selection, narrow RTL/large-text wrapping, modal Escape dismissal and bottom-sheet dismissal without removing the owner page. Web previews exercise both dialog forms and responsive composition. Run npm run check and npm run build at repository root, then flutter analyze and flutter test in both Flutter package and example directories.
