# 6. Component States

Bokrah v0.7.0 defines ten shared states across web and Flutter. The catalogues demonstrate actual native interaction, rather than permanent pictures of hover or focus. Each interactive control uses the applicable states below; validation, selection and read-only states are meaningful only for the relevant component families.

## Table of contents

- [State definitions](#state-definitions)
- [State priority and combinations](#state-priority-and-combinations)
- [Component applicability](#component-applicability)
- [Web implementation](#web-implementation)
- [Flutter implementation](#flutter-implementation)
- [Accessibility and localization](#accessibility-and-localization)
- [Validation](#validation)

## State definitions

| State | Description | Visual and behavior contract |
| --- | --- | --- |
| Default / افتراضي | Normal appearance | Theme surface, foreground and control border; actionable label. |
| Hover / التحويم | Mouse pointer over component | Surface or native Material hover overlay changes; no action fires until activation. Touch does not require hover. |
| Focused / التركيز | Keyboard or input focus | Visible focus indicator independent of validation or selection; keyboard activation remains available. Web uses a 3px focus-visible ring, fields use Flutter's 3px focus border, other Flutter controls use Material focus overlays. |
| Pressed / الضغط | During interaction | Web inset stroke or native Material pressed feedback. Release/cancel removes the transient effect. Toggle selection remains separate. |
| Disabled / معطل | Interaction unavailable | Native disabled attribute or null Flutter callback blocks activation. Dimmed appearance with an adjacent reason when useful. Not a substitute for authorization. |
| Loading / التحميل | Processing an operation | Visible processing text/progress and accessible announcement. Prevent repeat submission on the initiating action; keep unrelated controls usable. |
| Error / خطأ | Validation or operation failure | Error text plus semantic error state, theme danger color, and useful recovery guidance. Persist important errors. |
| Success / نجاح | Successful validation or operation | Explicit success text and, where useful, a check icon; theme success color. Never communicate success by color alone. |
| Selected / محدد | Active or selected item | Persistent active treatment and the matching native/ARIA state. Focus can move independently of selection. |
| Read-only / للقراءة فقط | Visible but not editable | Field remains focusable and selectable for copying. Use readOnly/readonly; disabled fields are a different behavior. |

## State priority and combinations

1. Disabled or loading blocks activation even if hovered, pressed or selected. Loading is separate from disabled: its reason is processing, not permanent unavailability. Native disabled controls leave keyboard tab order; preserve a persistent status message near the operation.
2. Hover and pressed never remove keyboard focus. A selected control can also be focused or hovered. A pressed button is not automatically selected.
3. Error takes priority over success. Clear stale validation feedback when the value changes; validation is owned by the application, not inferred from a green border.
4. Read-only fields can be focused and selected; they never become editable through hover or click. Controls without editable values do not gain a read-only mode.
5. Default is the base treatment, not an extra boolean competing with other states. Opening a menu/dialog is represented by expanded/open state as well as its trigger's interaction states.

## Component applicability

Every interactive family has default, hover (pointer devices), focused, pressed and disabled contracts. Use native semantics; some informational components have no interaction states. Additional states are defined here rather than forcing ten flags onto every widget.

| Family / existing components | Loading, error, success | Selected | Read-only |
| --- | --- | --- | --- |
| Buttons, icon actions, button groups, back button | BkButton has built-in loading. Other actions use application-owned progress/status plus disabled callback/attribute. Errors/success appear in associated feedback. | Toggle actions use aria-pressed or a native selectable control; ordinary commands do not. | Not applicable. |
| Text inputs | Field error/success feedback; disable the submitting action while processing, not unrelated inputs. | Text selection is native and distinct from item selection. | BkTextField.readOnly / HTML readonly. |
| App bar/header, navigation bar, sidebar/drawer, bottom navigation, breadcrumbs | Async destination content owns progress/error/success. Current page remains identified while content loads. Unavailable destinations use text or an unavailable button with explanation. | aria-current=page; native Flutter selected destination. | Not applicable. |
| Tabs | Panel owns loading/error/success; disabled tabs cannot be selected. | aria-selected; native TabBar controller. | Not applicable. |
| Pagination, stepper | Parent operation owns feedback; boundary/blocked actions disabled. | Current page/step uses aria-current or native current index. | Not applicable. |
| Dropdown/context menus, popover, modal/bottom sheet | Trigger follows action states; content owns loading/validation feedback. Web disclosure bindings reject disabled and aria-disabled triggers. | Expanded/open is disclosure state, not selection; menu item selection belongs to the app. | Editable fields inside may be read-only. |
| Interactive list tiles and cards | Tile action owns feedback. A plain BkCard is a passive surface; add a native button/link for interaction. BkListTile.onTap=null makes a passive tile. | Native selectable item or explicit aria-selected only in a valid selectable widget role; never decorate an ordinary div as selected without semantics. | Not applicable. |
| Data tables/grids and sortable headings | Table's owning app supplies loading/error/no-results/success feedback. Sort controls are buttons. | aria-sort describes sort direction, not selected; row selection is application-owned. | Existing BkDataGrid is display-only, with interactive sort controls; no editing API. |
| Removable tags and selected chips | Removal button follows action states; removal feedback belongs to the app. Native Flutter InputChip/FilterChip carry semantics. | FilterChip/native selection or aria-pressed toggle. A BkBadge is passive. | Non-removable tags are passive; no read-only action. |
| Accordion/expansion panels | Expanded content owns progress/feedback. Native disclosure supports pointer and keyboard. Omit interaction when the app needs a static unavailable section. | aria-expanded/native expansion describes disclosure, not selected. | Not applicable. |
| Tooltip trigger | Inherits its underlying button/link states. Tooltip itself is noninteractive. Keep an unavailable-control explanation outside a disabled-only tooltip too. | Inherits trigger when applicable. | Inherits trigger when applicable. |
| Toast close actions, empty/no-results actions, section-header actions | Use native action states; progress and feedback belong to the operation. | Only if the supplied action is a toggle. | Not applicable. |
| Avatars, images, timeline, charts, statistics, KPI cards, separators and layout primitives | Content loading/error placeholders are content states, not fake button states. Any added interaction must be a labelled native control. | Not applicable to passive content. | Passive display is not a disabled input. |

## Web implementation

Import the package styles. Existing button, tab, menu, navigation, tag and list-tile selectors now have consistent applicable hover, pressed and disabled styling. Native form elements provide editing/disabled behavior. A CSS class or ARIA attribute alone never blocks arbitrary application click handlers.

- Buttons: use type=button, disabled for unavailability, aria-busy=true plus disabled while processing. Add a persistent role=status sibling for start/completion text. Never attach financial side effects to catalogue examples.
- Fields: label/for, aria-describedby for persistent helper/error text and aria-invalid=true after a failed validation. Success uses data-bk-validation=success plus visible success text. This attribute controls styling only; do not invent aria-success. Remove stale validation on edits.
- Selection: aria-pressed on toggle buttons, aria-selected on tabs/options, aria-current on navigation destinations. Each describes a different relationship.
- Read-only: input readonly; remain focusable and copyable. A visible Read-only label and dashed theme border distinguish it from disabled.
- Links do not support disabled. Prefer omitting unavailable links or showing a properly disabled button; aria-disabled alone cannot prevent navigation or activation. Menu/dialog/popover helpers now guard disabled triggers, including programmatic open calls; application-owned actions still need their own guards.
- Status messages remain textual in all themes. Avoid repeated live regions for static content and avoid announcing every keystroke as an error.

The state catalogue includes a 1.2-second sample operation, editable validation example, selected toggle and copyable read-only reference. Theme/language rerender cancels pending timers. Completion restores focus only if the user has not moved to another control.

## Flutter implementation

BkTheme uses native Material interaction feedback. Use BkButton.onPressed=null for disabled, and loading=true with a localized loadingLabel for busy; the callback is suppressed while loading. BkIconButton and command controls use null callbacks. Grouping buttons does not change their individual states.

BkTextField now accepts readOnly and successText in addition to enabled, helperText and errorText. With both errorText and successText supplied, error wins; successful validation renders explicit text and a check icon. Consumers should clear success/error after onChanged until validation runs again. Native read-only fields retain selection, focus and semantics while suppressing text editing.

Native TabBar, NavigationBar, FilterChip, InputChip, PopupMenuButton and ExpansionTile supply role-appropriate focus, selection, expansion and disabled behavior. Applications own async state, permission decisions and state persistence across navigation. Do not use a universal enum to force a selected or read-only state onto unrelated controls.

## Accessibility and localization

- Keep keyboard focus visible. Do not use hover as the sole way to discover actions.
- Error/success text and icons supplement theme colors. High contrast uses the existing semantic palette; reduced motion suppresses web transitions.
- Every example label/status has English and Arabic text and follows RTL reading order.
- Native disabled actions cannot activate through keyboard or pointer; explain unavailable actions in nearby text because they may not receive focus.
- Loading messages announce start/completion, without falsely reporting saved accounting records. Avoid stealing focus on completion.
- Read-only content can be selected/copied; disabled controls need not be selectable. Server-side authorization remains the consuming application's responsibility.

## Validation

Run npm run check and npm run build at repository root. Run flutter analyze and flutter test in packages/flutter and examples/flutter. Regression tests cover disabled/loading callbacks, error-over-success priority, and focus/selection without editing for read-only fields. Browser QA covers actual focus, loading completion, validation changes, selected toggles and Arabic/RTL themes. GitHub Actions rebuilds and publishes both catalogues.

For the web disclosure regression fixture, start npm run dev, open http://127.0.0.1:4180/tests/browser/states.html and select **Run disclosure state checks**. It checks native-disabled and aria-disabled menu, popover and modal triggers against enabled behavior (12 assertions), including programmatic menu/popover open calls. This browser fixture is run manually; it is not part of npm run check.
