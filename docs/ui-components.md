# 2. UI Components

[Live catalogue](https://mahfoud-sa.github.io/bokrah-design-system/#components) · [Flutter catalogue](https://mahfoud-sa.github.io/bokrah-design-system/flutter/)

## Contents

- [Buttons & Actions](#buttons--actions)
- [Feedback & Status](#feedback--status)
- [States and accessibility](#states-and-accessibility)
- [Implementation examples](#implementation-examples)

## Buttons & Actions

| Component | Purpose / states | Flutter | Web |
| --- | --- | --- | --- |
| Primary button | One main action; enabled, hover, focus, pressed, disabled, loading | `BkButton` | `.bk-button` on a real button |
| Secondary button | Supporting action | `variant: BkButtonVariant.secondary` | `.bk-button--secondary` |
| Tertiary action | Lower-emphasis action; still a full touch target | `variant: BkButtonVariant.tertiary` | `.bk-button--tertiary` |
| Destructive action | Explicitly named consequence; confirmation for consequential changes | `variant: BkButtonVariant.danger` | `.bk-button--danger` |
| Icon button | Compact action with accessible name and tooltip | `BkIconButton(label:, icon:)` | `.bk-icon-button` + `aria-label` + title |
| Button group | Related independent actions; normal Tab navigation, wraps at narrow widths | `BkButtonGroup(label:, children:)` | `.bk-button-group` + `role="group"` and accessible name |
| Navigation action | Goes to another location | Consumer owns routing and link behavior | Real anchor with href; never a fake button |
| Loading action | Blocks duplicate submissions, exposes localized busy text | `loading: true, loadingLabel:` | Native disabled + `aria-busy="true"`, visible loading label |

Use action-specific labels such as Save transaction. Keep the main action visually distinct. Disabled actions must be unavailable in behavior, not just dimmed. If the reason for unavailability matters, provide visible helper text. Tertiary is a presentation variant; a link remains an anchor, and an action remains a button.

The catalogue's destructive confirmation has Cancel first and initially focused, an explicit confirm action, Escape dismissal, and no data mutation. Consumers own authorization, deletion, transaction validation, pending state and recovery. A generic confirmation dialog cannot make a financial operation safe by itself.

## Feedback & Status

| Component | Purpose / states | Flutter | Web |
| --- | --- | --- | --- |
| Alert | Persistent inline explanation: success, warning, danger/error, information | `BkAlert(title:, message:, tone:)` | `.bk-alert` + `.bk-tone-*` |
| Status badge | Compact textual status, including neutral/draft | `BkBadge(label:, tone:)` | `.bk-badge` + `.bk-tone-*` |
| Toast / snackbar | Brief informational feedback, explicit dismissal | `BkToast.show(context, message:, tone:)` | `.bk-toast` with a populated polite status region and dismiss button |
| Progress | Measured progress or indeterminate work | `BkProgress(label:, value:)`; null is indeterminate, 0–1 is measured | Labeled native progress element; omit value for indeterminate; example uses max 100 |
| Skeleton | Decorative approximation while data is loading | `BkSkeleton(width:, height:)`; parent supplies one loading label | `.bk-skeleton` with aria-hidden, labeled busy parent |
| Empty state | Explain why content is absent and provide a next step | `BkEmptyState(title:, message:, action:)` | `.bk-empty` with visible heading and optional real action |

Use persistent alerts for errors requiring action. Do not put the only description of an error in an automatically disappearing toast. Status must use words and, where helpful, icons as well as color. A badge is not interactive unless explicitly designed as a separate control.

Flutter toasts return the native ScaffoldFeatureController so consumers can close them. They default to eight seconds, accept a custom duration, include the localized Material close control, and use the active semantic palette. The web example is intentionally persistent until dismissed and does not move focus when it appears; explicit dismissal returns focus to its trigger. Web toast orchestration belongs to the consuming application; the package supplies its styles. Both use a single feedback surface rather than stacking messages.

Skeletons are hidden from assistive technology; announce one meaningful parent loading status. The Flutter placeholder is static. The web placeholder's animation is disabled with prefers-reduced-motion. Progress should represent actual work when a value is provided. Examples use illustrative values and never import accounting records.

## States and accessibility

All components use the shared palettes, including high contrast, and Arabic/English direction and labels. Buttons target at least 48 logical pixels. Hover is an enhancement; keyboard focus is visible and native Space/Enter activation is preserved. Icon actions require names even when the visual icon seems obvious.

Groups are not toolbars or segmented single-selection controls; do not add toolbar arrow-key behavior or aria-pressed selection without implementing that interaction. Dialogs use native focus containment or Flutter's dialog route, close predictably, and restore focus. Avoid automatically focusing a destructive confirmation action.

Static example alerts are not assertive live regions. Consumers may announce a newly occurring important error, while normal completion feedback uses polite announcements. Avoid duplicate announcements, per-percent chatter during long tasks, and inaccessible essential actions in timed messages. Test keyboard navigation, text scaling, all three themes and RTL in the consuming product.

## Implementation examples

```dart
BkButtonGroup(label: 'Transaction actions', children: [
  BkButton(label: 'Save', loading: saving, onPressed: save),
  BkIconButton(label: 'Add item', icon: Icons.add, onPressed: add),
]);
BkProgress(label: 'Importing transactions', value: 0.4);
BkToast.show(context, message: 'Ready for review', tone: BkTone.success);
```

```html
<div class="bk-button-group" role="group" aria-label="Transaction actions">
  <button class="bk-button" type="button">Save</button>
  <button class="bk-button bk-button--tertiary" type="button">More details</button>
</div>
<label for="import-progress">Importing transactions</label>
<progress class="bk-progress" id="import-progress" value="40" max="100">40%</progress>
```

See `examples/web/ui-components.js` and `examples/flutter/lib/ui_components.dart` for complete interactive examples. These sit alongside the earlier form, card and table patterns. The packages remain presentation-only; they do not call Bokrah APIs or persist business data.
