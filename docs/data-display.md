# 4. Data Display Components

[Live web catalogue](https://mahfoud-sa.github.io/bokrah-design-system/#data-display) · [Flutter catalogue](https://mahfoud-sa.github.io/bokrah-design-system/flutter/)

## Contents

- [Cards and List Tiles](#cards-and-list-tiles)
- [Data Tables and Data Grids](#data-tables-and-data-grids)
- [Avatars and Images](#avatars-and-images)
- [Badges and Tags](#badges-and-tags)
- [Tooltips and Popovers](#tooltips-and-popovers)
- [Accordion / Expansion Panel](#accordion--expansion-panel)
- [Timeline](#timeline)
- [Charts and Statistics](#charts-and-statistics)
- [Key Performance Indicator Cards](#key-performance-indicator-cards)
- [Empty State and No Results](#empty-state-and-no-results)
- [Integration and accessibility](#integration-and-accessibility)

## Cards and List Tiles

`BkCard` / `.bk-card` group related information. `BkListTile(title:, subtitle:, leading:, trailing:, onTap:)` supplies an optional action on a native Material ListTile. A null callback leaves it passive. The component provides its own Material surface so ink and focus effects remain visible inside cards.

Web `.bk-list` uses a real list. `.bk-list-tile` can be a button for an action, an anchor for navigation, or a generic container for passive content. Use `.bk-list-tile__content` for title and secondary text. Avoid nesting interactive controls inside an already-interactive tile; give independent row actions their own accessible names.

## Data Tables and Data Grids

The data grid is an enhanced semantic table: filtering, column sorting and horizontally scrollable overflow. It is not an editable spreadsheet and does not claim ARIA grid keyboard behavior.

Flutter `BkDataGrid(caption:, columns:, rows:, emptyLabel:, numericColumns:, sortColumnIndex:, sortAscending:, onSort:)` renders a native DataTable. Column/row lengths must match, columns must be nonempty and any sort index must be valid. Rows are formatted display strings. The consumer supplies the row order and handles onSort(column, ascending). `numericColumns` aligns numeric display cells; it does not parse money or sort records itself.

Web uses `.bk-table` inside `.bk-table-wrap`, a caption, column headers and native header buttons. Only the active sort column has aria-sort. The labelled table region can receive keyboard focus for horizontal scrolling. The example filters five local sample rows and sorts amount values numerically (45, 80, 200, 240, 1200), rather than as strings. A no-match state offers Clear table filter and preserves source records.

Consumers own fetching, pagination, totals, permissions, edit state, loading/errors and money formatting. Combine with the existing pagination component for larger sets. Virtualization, cell editing, column resizing, column hiding and row selection are outside this initial data-grid API. Do not put a very large unpaginated set in either native DataTable or the example table.

## Avatars and Images

Flutter `BkAvatar(label:, initials:, image:, size:)` uses a circular presentation, a meaningful accessible label and explicit initials. Initials are supplied by the consumer so language-specific naming rules are not guessed. A missing or failed image falls back to initials. The default size is 48.

`BkImage(image:, label:, loadingLabel:, errorLabel:, aspectRatio:)` receives an ImageProvider. It reserves an aspect ratio (default 16:9), clips to a shared radius, shows a static loading placeholder and provides a localized error state. It does not silently discard failures or expose technical exception details. The consumer owns image sources, authorization, caching and retry policy.

Web `.bk-avatar` supports initials or images. Give a meaningful avatar a single accessible name and hide decorative initials from duplicate announcements. `.bk-image` uses explicit dimensions/aspect ratio and useful alternative text; `.bk-image-error` provides a visible fallback. The example can trigger a deliberately invalid local data image and then restore the real illustration without requesting an external service.

The restaurant illustration is generated locally from simple geometry by `scripts/generate-demo-image.mjs`, as SVG for web and PNG for Flutter. It is an illustration, not a restaurant photograph. Source geometry and generated outputs are committed; no remote image or runtime image service is required.

## Badges and Tags

`BkBadge(label:, tone:)` / `.bk-badge` communicate a passive status such as paid, pending or draft. Always include visible text. Use the existing semantic tone colors across all three themes.

`BkTag(label:, onDeleted:, deleteLabel:)` uses a native InputChip. A removable tag requires a localized delete label. A null delete callback leaves it passive. Web `.bk-tag` contains visible text and a separately named remove button, for example Remove tag: Lunch. Removal updates local state; after removing a web tag, focus moves to the next available remove control or Restore tags. Restoring tags does not reset other examples.

A tag is not automatically a filter, a toggle, a multi-select option or an editable token. If a product adds selection, expose its selected state and implement the corresponding behavior. Never render a passive status badge as a fake button.

## Tooltips and Popovers

Tooltips contain brief supplementary, noninteractive text. Never place the only required label, an essential error message or a button inside a tooltip. Web `bindBokrahTooltip(trigger, tooltip)` assigns role tooltip, preserves existing aria-describedby relationships, shows on focus/hover, remains hoverable, dismisses with Escape and returns a cleanup function. Supply a unique tooltip ID. The small close delay lets the pointer move into the tooltip. Flutter `BkTooltip(label:, child:)` delegates to the native Tooltip, including platform hover/long-press and semantic description behavior.

Popovers contain longer explanatory details or controls. Web `bindBokrahPopover(trigger, popover)` uses the native Popover API when supported, with a nonmodal fallback. Supply a labelled role-dialog surface and an explicit `[data-bk-close]` button. The helper positions within the viewport, enters the details on opening, restores trigger focus on Close/Escape, and lets outside activation dismiss without stealing focus. Scrolling the surrounding page or resizing dismisses open web details; scrolling inside the details remains available. The controller has open, close and destroy. Call destroy on unmount to remove document listeners.

Flutter `BkPopover(label:, title:, message:, closeLabel:)` is an anchored nonmodal OverlayPortal. It follows its trigger, respects RTL, chooses above/below placement, constrains width/height, scrolls long content, closes on outside taps or focus departure, and restores trigger focus on explicit Close/Escape. It owns and disposes its focus nodes. It does not take over the page as a modal dialog.

For context on keeping hover/focus help dismissible and hoverable, see [WCAG content on hover or focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html). Review tooltip and nonmodal details behavior with the assistive technologies used by the consuming application.

## Accordion / Expansion Panel

Flutter `BkAccordion(title:, children:, initiallyExpanded:)` uses a native Material ExpansionTile. Web `.bk-accordion` styles native details/summary, retaining built-in activation and expanded state. Each panel expands independently; no artificial single-open rule is imposed. Keep summary labels useful, allow content to wrap, and do not nest another button inside a summary.

Use an accordion to reduce scanning effort for optional detail. Essential errors and required primary actions should not be hidden in a collapsed panel. Preserve state appropriately when the consuming page rerenders.

## Timeline

`BkTimeline(entries:)` takes `BkTimelineEntry(title:, detail:, time:)`. The web `.bk-timeline` uses an ordered list, explicit time elements and text descriptions. Connector lines and dots are decorative; content order and textual timestamps carry meaning. Both follow RTL start-edge alignment.

The consumer owns event ordering, timezone conversion and date/time formatting. These are display strings, not a business-event engine. The catalogue shows three illustrative times with descriptions and does not write an audit log. Paginate or progressively load long histories.

## Charts and Statistics

`BkBarChart(label:, values:, emptyLabel:)` takes nonnegative finite `BkChartValue(label:, value:, displayValue:)` entries. The number controls bar length; the formatted string is what the user reads. Empty data has an explicit message. All-zero data produces zero-length finite bars instead of dividing by zero.

Each Flutter bar row exposes its label and display value as one semantic description; the decorative progress-shaped bar is excluded from progress semantics because it represents a data value, not a running task. Web `.bk-chart` uses figure/figcaption and `.bk-bars`, with all labels and values visible as real text. Zero values remain visible, and color is not the only carrier of information.

The initial chart component is a horizontal bar chart. Pie, scatter, multi-series and interactive time-series charts are outside this release. The example's total (460) and maximum (160) describe sample order counts. Financial aggregation, rounding, comparison definitions and statistical analysis belong to the consuming application.

## Key Performance Indicator Cards

`BkKpiCard(label:, value:, comparison:, comparisonTone:)` / `.bk-kpi` show a named metric, formatted value and an explicit comparison or detail. The application supplies currency/units and comparison period, and chooses the semantic tone. Do not infer whether a negative change is good or bad from the sign alone.

The example shows illustrative JOD values and names the sample comparison period. Numeric values are isolated from RTL surrounding text. Use a visible label and period; do not present a trend arrow without explanatory words. The original BkStatCard remains available for metrics without a comparison badge.

## Empty State and No Results

An empty state means the underlying collection has no items yet. A no-results state means a filter or search matched nothing. Neither is a server failure or a loading state.

`BkEmptyState(title:, message:, action:)` remains the general first-use component. `BkNoResults(title:, message:, clearLabel:, onClear:)` adds an optional explicit reset action. Web `.bk-empty` and `.bk-no-results` follow the same distinction. The catalogue has a live category search; an unmatched query shows No results, and Clear search restores the original list and input focus. The table also has its own independent filter reset.

Consumers own whether to suggest a first action, a reset, or a different query. A no-results view must not claim the user's data has been deleted. Keep request failures and permissions failures separate from these states.

## Integration and accessibility

All ten groups use the same light, dark and high-contrast palettes and localized Arabic/English labels. Table headers and sortable state, meaningful image alternatives, named removable controls, visible keyboard focus and text equivalents for charts are part of the contract. Descriptive status messages avoid announcing purely decorative skeletons and bars. Interfaces wrap or scroll where needed; test larger text and narrow viewports in the consuming product.

The web tooltip and popover bindings have no import-time side effects; retain their disposal handles and clean up on unmount. The package supplies native semantic HTML/CSS patterns rather than a framework-specific table state manager. The Flutter package receives controlled display data and callbacks. Neither package calls accounting APIs or persists records.

```dart
BkDataGrid(caption: 'Sample records', columns: ['Reference', 'Amount'],
  rows: formattedRows, emptyLabel: 'No matching records',
  numericColumns: {1}, sortColumnIndex: sortColumn,
  sortAscending: ascending, onSort: sortRows);
BkKpiCard(label: 'Sales · JOD', value: '1,240.00',
  comparison: '+12% vs previous sample day', comparisonTone: BkTone.success);
```

```js
import {bindBokrahTooltip, bindBokrahPopover} from '@bokrah/design-system';
const disposeTooltip = bindBokrahTooltip(helpButton, tooltip);
const details = bindBokrahPopover(detailsButton, popover);
// When the view unmounts:
disposeTooltip();
details.destroy();
```

Examples: `examples/web/data-display.js` and `examples/flutter/lib/data_display.dart`. Regenerate the shared illustration with `node scripts/generate-demo-image.mjs` if its geometry changes.
