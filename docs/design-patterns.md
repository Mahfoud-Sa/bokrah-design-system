# 7. Design Patterns

Bokrah v0.8.0 combines the existing components into nine complete experience recipes. Both catalogues include English/Arabic flows using shared spacing, typography, semantic colors, focus behavior and component states.

These are reference implementations with local sample data. Authentication does not create a session, recovery does not send email, and CRUD does not save production records. The web examples share sample CRUD/search/dashboard state in memory; Flutter opens independent demo routes with their own sample data. Reloading the web page or reopening a Flutter route resets its sample. No production Bokrah application screens or services are migrated in this release.

## Table of contents

1. [Authentication](#authentication)
2. [CRUD](#crud)
3. [Search & Filtering](#search--filtering)
4. [Forms](#forms)
5. [Lists](#lists)
6. [Dashboard](#dashboard)
7. [Notifications](#notifications)
8. [Error Handling](#error-handling)
9. [Permissions](#permissions)
10. [Reuse and integration](#reuse-and-integration)
11. [Validation](#validation)

## Authentication

**Examples:** Login, Register, Forgot Password, OTP.

**Composition:** labelled fields + primary action + flow selector + inline error/status feedback. Use a password input for the sample password. The OTP example is a single labelled field so pasting a complete code and keyboard navigation remain straightforward.

**Flow:** choose a flow → enter sample values → validate → disable repeated submission while processing → show an explicit result. Login validates sample email/password shape. Register also requires a nonblank sample name. Recovery always displays the same acknowledgement for a syntactically valid email. OTP accepts the documented sample code `000000`; other six-digit values produce a visible error and permit retry. No request is sent.

**State and recovery:** preserve non-sensitive input after an error; do not replace the entire form with an unexplained spinner. Keep important failure text next to the form. Do not announce a successful real login when the demo merely finishes. Web language/theme reconstruction clears sample authentication inputs; it does not retain passwords in the shared sample model.

**Production handoff:** replace the simulated completion with the application's authentication/session service. The service owns account creation, credential verification, session expiry, recovery delivery, OTP generation/expiry/attempt limits and authorization. The demo code and six-character password check are fixtures, not an authentication policy. Resolve the post-login destination from application routing, and retain the intended destination when a session expires.

**Acceptance:** invalid input does not continue; pending submission cannot be repeated; failed OTP can be corrected; recovery does not reveal whether an account exists; the result and next action are clear in both languages.

## CRUD

**Examples:** Create, Read, Update, Delete.

**Composition:** record form + list tiles/cards + read view + edit mode + destructive confirmation modal + persistent result feedback. Draft validation requires a nonblank name and positive finite sample amount.

**Flow:** Create appends a local record with a stable sample ID. Read shows that record's ID, name and amount. Update fills the form with the selected record and saves to that ID. Cancel editing leaves the original record unchanged. Delete first names the record in a confirmation dialog; Keep record/Escape dismisses without mutation; only explicit confirmation removes it.

**State and recovery:** retain edit drafts until save/cancel; return focus to a sensible control after deletion. Clamp result pagination when the last item on a page disappears. A Viewer cannot create/update/delete; a Cashier can create/update; an Owner can also delete. Guard the action handler as well as disabling its control.

**Production handoff:** consumers own persistence, input rules, audit history, conflict resolution, idempotency and rollback behavior. Demo amounts use display numbers to illustrate composition; production money parsing, rounding, currency and totals belong to the accounting domain. The design system does not define those rules.

**Acceptance:** cancel preserves data; confirmed deletion removes only the selected ID; edited values are visible in Read; unavailable actions do not mutate; empty results explain how to create a record.

## Search & Filtering

**Examples:** Search Bar, Filters, Sorting.

**Composition:** labelled search field + category selector + sort selector + result count + results + pagination + reset action.

**Flow:** normalize the query's surrounding whitespace and case → combine it with the selected category → sort the filtered copy → page the result. Amount sorting is numeric. Search/category changes reset the current page. No-results feedback offers a reset action and does not discard source data. The web uses the same local records as CRUD; Flutter's search route uses its own sample copy.

**State and recovery:** keep search/filter/sort values visible. In a real remote search, debounce where appropriate, cancel or ignore stale responses, and preserve the latest successful results while communicating refresh/failure. Use a count/status message instead of moving focus on every keystroke.

**Acceptance:** filters combine; Arabic search works; amounts such as 45, 240 and 1200 sort numerically; source order/data are unchanged; Reset restores all results; pagination remains valid after filtering/deletion.

## Forms

**Examples:** Multi-Step Form, Validation, Confirmation.

**Composition:** progress/step indicator + labelled fields + inline error + Back/Continue controls + read review + final confirmation/result.

**Flow:** Details → Review → Confirm → Completed. Required fields are validated before leaving Details. Review shows the exact sample name/amount. Back returns to editable fields with the draft intact. Final confirmation is explicit and does not run from merely viewing the review screen. Start another form resets the completed sample.

**State and recovery:** keep the draft above individual steps; validation errors must identify a correction. Web step changes focus a heading so keyboard users can understand the new content. Prevent repeated real submission, preserve the draft after failure, and let consumers decide whether leaving a dirty form needs a warning.

**Production handoff:** application validation and submission are separate concerns. The demo confirmation reports local completion rather than claiming server persistence. Connect final submission to a service and render its confirmed outcome before reporting success.

**Acceptance:** invalid Details cannot advance; Back preserves values; the review matches entered values; confirmation is a separate action; completion can start a fresh flow.

## Lists

**Examples:** Pagination, Infinite Scroll, Pull to Refresh.

**Composition:** loading-mode selector + bounded/scrollable list + progress/status + navigation/load-more controls + refresh control + end marker.

**Pagination:** sample data has twelve entries, three per page. Previous/Next disable at valid boundaries; refresh returns to the first page.

**Infinite scrolling:** the web uses an IntersectionObserver sentinel inside the list's scroll viewport; Flutter uses the scroll controller's remaining extent. New batches append to the existing list. A busy guard prevents concurrent loads. The sample stops after twelve entries and marks the end. Load more remains a keyboard-accessible fallback, including browsers without IntersectionObserver.

**Pull to refresh:** Flutter uses native RefreshIndicator with AlwaysScrollableScrollPhysics. The web progressively enhances its bounded list with a downward touch gesture starting at scrollTop zero; browser/platform gestures may consume the touch, so the visible Refresh button always remains available. Refresh is simulated, increments the sample refresh marker, resets the first batch/page and retains the selected loading mode. Touch behavior should be checked on the target physical device; browser desktop QA uses the button fallback.

**State and recovery:** keep stable item identities, preserve position when appending, distinguish initial loading from loading-more/refresh, stop duplicate loads, show end-of-list and retain usable content after an actual service error. A remote cursor, cache policy and retry strategy belong to the consuming app.

**Acceptance:** pages never exceed bounds; repeated load triggers do not create duplicate batches; infinite scrolling eventually reaches an explicit end; keyboard users can load and refresh; refreshing does not leave a stuck spinner.

## Dashboard

**Examples:** KPI Cards, Charts, Recent Activity.

**Composition:** clearly labelled KPI cards + chart with visible values + activity list/timeline. The local sample uses sales, expenses and balance in JOD, and illustrative order counts by period.

**Flow:** render summaries first, supporting comparisons/units next, then activity detail. Web KPI values reflect the local CRUD records so the recipe demonstrates dependent views updating together. Flutter composes the same sample data into stat cards, the existing BkBarChart and BkTimeline on its own route.

**State and recovery:** charts need textual values, units, a meaningful accessible name and an empty-state alternative. Loading one metric should not hide unrelated available metrics. A stale real metric needs an explicit freshness indicator. Do not treat sample arithmetic as an audited accounting report.

**Acceptance:** labels explain every number; units are visible; no meaning depends only on color; large text and RTL remain readable; dependent sample summaries update after local record edits.

## Notifications

**Examples:** In-App Alerts, Notification Center.

**Composition:** persistent inline alert + unread count/status + list of notifications + individual/mark-all read actions + sample notification creation.

**Flow:** a new notification enters unread → opening/marking it read updates that item → unread count updates → Mark all clears the unread count without removing history. Adding another local sample restores an unread item.

**State and recovery:** read state belongs to the notification's stable ID. Keep important alerts visible until the user can act; avoid using short-lived toast feedback as the only failure explanation. Announce meaningful count/action changes without repeatedly reading the entire center. The web moves focus to a remaining usable action after marking read.

**Production handoff:** delivery, persistence, deduplication, timestamps, notification preferences and server read state are application services. These examples do not request browser notification permission or send push/email notifications.

**Acceptance:** individual read updates only that item; Mark all produces zero unread; adding a new item increases unread count; read items remain visible; disabled read actions cannot repeat.

## Error Handling

**Examples:** 401, 403, 404, 500, Network Failure.

| Error preview | Meaning in the flow | Recovery action |
| --- | --- | --- |
| 401 | Missing/expired session | Open the sign-in recipe; a production router retains the intended destination. |
| 403 | Authenticated role lacks permission | Explain the restriction and open role/permission guidance; do not loop the user through login. |
| 404 | Destination/resource is absent | Offer a known overview destination; don't invent missing data. |
| 500 | Service operation failed | Keep the draft and offer a deliberate retry; real duplicate-sensitive writes require service idempotency. |
| Network failure | Request could not reach its service | Preserve useful data/drafts; retry when possible; separate connectivity failures from permission errors. |

**Composition:** readable error title + concise explanation + relevant recovery action + pending/recovered feedback. The selector simulates each error; it does not make failing HTTP requests. Web recovery goes to the appropriate catalogue region; Flutter opens the appropriate recipe route or returns to the overview. The Flutter error route includes an editable sample draft to demonstrate retention through retry. The web form/CRUD drafts remain separate and are not discarded by retry.

**State and recovery:** never include raw credentials or sensitive service details in user-facing errors. Avoid automatic retry loops. Keep errors useful to the user, with diagnostics handled separately by the application. Pending retries block repeat activation; simulated success is labelled as a sample outcome.

**Acceptance:** each error has a distinct explanation/action; retry does not clear drafts; 401 and 403 have different recoveries; retry eventually enables the action; no real response status is falsely claimed.

## Permissions

**Examples:** Role-Based Visibility, Restricted Actions.

| Sample role | Read | Create | Update | Delete | Administration panel |
| --- | --- | --- | --- | --- | --- |
| Owner | Yes | Yes | Yes | Yes | Visible |
| Cashier | Yes | Yes | Yes | No | Hidden |
| Viewer | Yes | No | No | No | Hidden |
| Unknown | No | No | No | No | Hidden |

**Composition:** role preview selector + conditionally visible administration panel + restricted action + visible explanation. The web selector also updates the local CRUD controls. Flutter's CRUD route contains its own role selector; the Permissions route demonstrates visibility and a guarded command independently.

**Flow:** resolve the current role → display relevant navigation/content → disable discoverable unavailable commands with a reason → guard execution using the current role. Recheck after any async confirmation before mutating. The confirmation flow never grants permission by itself.

**Production handoff:** this role selector is a catalogue control, not a way for end users to grant themselves access. The consuming application/server must authorize every request and resource, handle revoked/stale permissions, and scope access to the correct restaurant/account. Hiding or disabling controls alone is not enforcement.

**Acceptance:** Viewer cannot mutate; Cashier cannot delete; Owner-only content disappears after role changes; handlers reject unavailable actions; restricted actions have an understandable reason.

## Reuse and integration

Patterns are recipes assembled from the existing packages, not new monolithic widgets or a bundled backend. Copy/adapt the relevant composition while keeping state/services owned by your application.

- Web compositions: [examples/web/patterns.js](../examples/web/patterns.js). Pure sample data/query/permission helpers: [pattern-models.js](../examples/web/pattern-models.js). The catalogue renderer cleans up observers and pending timers when language/theme changes. Shared local CRUD and multi-step drafts survive those redraws; credentials do not.
- Flutter compositions/routes: [examples/flutter/lib/patterns.dart](../examples/flutter/lib/patterns.dart). Sample helpers: [pattern_models.dart](../examples/flutter/lib/pattern_models.dart). Controllers are disposed and delayed completions check mounted state. Page shells use BkPageScaffold and scrollable content; destructive dialogs reuse showBkModal.
- Apply [component states](component-states.md), [layout constraints](layout.md), [navigation](navigation.md) and [data display](data-display.md) rules to every flow. Use real headings/labels, visible focus, descriptive status messages and directional layout.
- Replace sample data/delays with application interfaces for sessions, records, queries, list cursors, notifications and authorization. Preserve cancellation, draft retention and duplicate-submission guards when doing so.
- Localize product copy, dates, numerals and currency in the application. The sample IDs/mixed-language record names are fixtures; they are not the final domain vocabulary or a complete localization policy.

## Validation

At root, run npm run check (token checks plus recipe model tests) and npm run build. In packages/flutter and examples/flutter, run flutter analyze and flutter test. Build the Flutter catalogue with flutter build web --release --base-href /bokrah-design-system/flutter/.

Regression tests cover numeric filtering/sorting without mutation, safe paging bounds, unknown-role denial, finite draft validation, CRUD cancellation/confirmed deletion, form draft retention, OTP rejection/retry, reset after no results, restricted role actions, retry draft retention, list page/refresh behavior and Arabic narrow/large-text display. Browser QA exercises the corresponding local flows, shared web summaries, notifications, infinite-scroll controls and Arabic/theme rendering. Physical-device touch verification remains necessary for the web pull gesture; the refresh button is always supported.

GitHub Actions validates and publishes both catalogues on main. The examples remain sample-only after publication; connecting production services is a separate integration step.
