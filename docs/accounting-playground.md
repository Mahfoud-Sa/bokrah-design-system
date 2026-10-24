# Accounting layout playground

## Launch and navigation

```powershell
cd examples/flutter
flutter pub get
flutter run -d chrome -t lib/playground_main.dart
```

Alternatively run the existing catalogue (`flutter run -d chrome`) and select
**Accounting playground** in its app bar. The catalogue also exposes
`/playground`, so its published Flutter web build supports `#/playground`.

The accounting playground lives in the **example application**, with reusable
widgets exported from `package:bokrah_catalog/accounting/accounting.dart`.
It is intentionally independent of accounting APIs, authentication, persistence,
and a router. Consumers can move the example-layer module into their application
without adding business models to the generic design-system package.

## Project audit and architecture

The existing package provides BkTheme light/dark/high-contrast palettes, Somar
Sans, generated spacing/type/color tokens, BkCard, BkButton, BkSectionHeader,
BkListTile, BkBadge, BkNoResults, BkBarChart, BkPageScaffold, grids, navigation,
and overlay helpers. The existing gallery uses local StatefulWidget state,
Material navigation, Material localizations, and generated 760/1200 foundation
breakpoints. No router or state-management dependency was present.

The playground reuses those primitives and Flutter's native accessible inputs,
menus and dialogs. ChangeNotifier/ListenableBuilder handle shared configuration
and accounting state; small view-specific state stays in its template. It adds
no runtime dependencies. Existing catalogue screens and foundation tokens remain
unchanged. Accounting-specific breakpoints are configurable at 600 and 840.

| File | Responsibility |
| --- | --- |
| `examples/flutter/lib/accounting/models.dart` | Company, FiscalPeriod, Account, JournalEntry/Line, Transaction, Invoice/Line, FinancialReport/Row, exact Money |
| `mock_data.dart` | Deterministic companies, periods, transactions, accounts, invoice lines and reconciled reports |
| `playground_controller.dart` | Configuration, mock periods, selection, filters, sorting, journal validation and draft snapshot |
| `components.dart` | Router-independent shell, sidebar/bottom navigation, page structure, financial amounts, inputs, summary, account tree and states |
| `templates.dart` and `templates/*.dart` | Layout dispatcher/barrel and eight independent template modules, including reusable grids/report/invoice views |
| `accounting_playground_page.dart` | Configuration panel, simulated viewport, inspector and valid code generation |
| `playground_main.dart` | Optional standalone entry point |
| `main.dart` | Existing catalogue's playground route and launch action |

## Using the playground

The configuration panel selects mobile (390×844), tablet (768×1024), desktop
(1280×800), or custom 320–1920 × 480–1400 viewports. Submit numeric fields with
Enter. The canvas uses real widgets and an independent Navigator and
ScaffoldMessenger so dialogs, snackbars and drawers stay inside the simulated
app. **Fit canvas** scales the complete viewport; disable it for native-size
interaction and scroll the outer canvas. Inner content scrolls independently.
MediaQuery supplies simulated size and preserves host text scale and keyboard
insets; the shell uses SafeArea and Scaffold keyboard resizing.

Narrow host windows use Configure / Preview / Inspector tabs. Wider host windows
show all three regions. Shell adaptation uses available constraints, not device
names: compact uses a drawer and optional horizontally scrollable destination
bar; medium uses an icon rail; expanded uses a collapsible grouped sidebar.
Navigation destinations, selected state and callbacks are supplied by callers.
The bottom bar scrolls so all eight destinations remain accessible without
shrinking touch targets. Disable both drawer and bottom navigation only when
testing a shell without app navigation; layout selection stays available in the
configuration panel.

Light, dark, system, and primary-brand appearance, comfortable/compact density,
English/Arabic, all shell visibility flags, mock loading/empty/error/populated
states, and custom breakpoints update immediately. Reset restores configuration
and transaction filters/data. Journals have a separate Cancel/reset action.

## Templates and interactions

| Layout | Working behavior |
| --- | --- |
| Dashboard | Period/company datasets update revenue, expenses, profit, cash and chart together; pending approvals, invoice receivables, fixed bank/payable snapshots, recent entries/invoices and quick navigation |
| Journal | Date and derived fiscal period, description, account selection, add/remove rows, exact debit/credit/difference, local draft snapshot, validated balanced posting and reset |
| Transactions | Combined reference/description search, dates/status/type, sortable reference/amount/date, 6-row pages, selection/bulk approval, record detail and filtered CSV export preview; cards on narrow layouts |
| Accounts | Expand/collapse hierarchy, search/type filtering with ancestor preservation, balance/status/parent and selected account details |
| Reports | Balance Sheet, Profit and Loss, Trial Balance, General Ledger, fiscal period/date range, groups/comparisons/totals and printable export preview |
| Invoices | Selection, customer/supplier label, line quantity/unit price/totals, discount, exact tax, grand total/paid/due and payment status; document preview |
| Authentication | Local validation, password visibility, simulated loading and configurable failure; no accounts, network requests or sessions |
| Master–detail | Selected transaction details beside desktop list; mobile detail replaces list with a back action |

Notifications open a local notification document, the user menu opens a demo
profile, company selection changes deterministic data, and global search submits
to the transaction page. The optional sticky footer demonstrates confirmation,
snackbar feedback and a dismissible bottom sheet. Every preview action operates
only on sample data.

## Financial and localization rules

Money stores integer minor units with explicit currency/precision. Samples use
**JOD with 2 decimal places for demonstration**, not a production currency
precision policy. Consumers can use precision 3 (or 0–6) explicitly. Financial
addition/subtraction require matching currency and precision. Parsing rejects
excess precision and values outside JavaScript's safe integer range; arithmetic
checks that range with BigInt. Binary floating-point values are used only to
draw proportional chart bars, never for financial totals.

Invoices calculate tax on subtotal minus discount. The mock dataset produces
exact 10% tax in minor units. Nonintegral tax results throw until the consuming
application supplies an explicit rounding policy; no rounding is hidden.
Statements reconcile: assets = liabilities + equity, trial debit = credit,
profit = revenue − expenses, ledger closing = opening + profit. Balance Sheet
and Trial Balance represent fixed snapshots. Date-filtered P&L and Ledger use
the selected transaction period; comparison values are explicitly mock snapshots.

Amounts support grouping, decimal precision, currency code/JD symbol, negative
parentheses/minus, optional zero dash and Arabic digits/separators. Values use
tabular digits, LTR bidi isolation and right numeric alignment. Dates use
MaterialLocalizations. Arabic direction, translated labels/validation, directional
padding, and back navigation are supported. Charts keep their financial order.

## Inspector and public APIs

The inspector identifies the real selected template, constructor parameters,
shell API, current configuration, variants/platforms, interaction/data states,
accessibility guidance and a complete StatefulWidget example. Copy Code imports
the example-layer barrel, owns/disposes a PlaygroundController, sets actual
configuration fields, and returns PreviewFrame under ListenableBuilder.
All eight default generated examples are committed under
`examples/flutter/test/accounting_examples/`; drift tests compare the generated
source, and `flutter analyze` checks those files with the application.

Generic needs map to existing components rather than new duplicate APIs:
BkPageScaffold and AccountingAppShell compose shell/header structure;
AppSidebar/AppBottomNavigation handle supplied destinations; PageHeader and
PageContainer compose BkSectionHeader/BkCard; DataTable and responsive record
cards handle selection; BkBadge, BkNoResults, Material dialogs and progress
indicators handle status/empty/confirmation/loading. Accounting components are
FinancialAmount, DebitCreditInput, JournalEntryGrid, BalanceSummary,
FiscalPeriodSelector, AccountTreeView, FinancialKpiCard,
FinancialReportViewer, AccountingTransactionTable and ApprovalStatusBadge.

## Validation

```powershell
cd examples/flutter
flutter analyze
flutter test
flutter build web --release --base-href /bokrah-design-system/flutter/
```

Tests cover money parsing/formatting/precision, journal balancing/drafts/posting,
invoice/report reconciliation, combined transaction filtering/sorting/paging,
selection/approval, device viewport switching, sidebar collapse, navigation,
RTL, themes, density, mock states, copy-code drift, semantics, and all eight
templates at 320px RTL/200% text, tablet and desktop widths.

Five Somar Sans visual baselines cover mobile light LTR, mobile dark RTL, tablet,
desktop and desktop compact density. They are pinned to Flutter 3.44.0 on Windows
to avoid cross-platform rasterization differences. Linux CI runs the functional
suite; the dedicated Windows CI job verifies all five goldens before deployment.
To intentionally update the baselines after reviewing a visual change:

```powershell
flutter test test/accounting_test.dart --plain-name golden --update-goldens
```

To update code fixtures after changing the inspector generator:

```powershell
flutter test test/accounting_test.dart --plain-name "inspector copy" --dart-define=UPDATE_ACCOUNTING_EXAMPLES=true
flutter analyze
```

## Deliberate boundaries

Drafts and approvals are in memory and reset on reload. Export/print actions open
copyable CSV or document previews; they do not invoke a native printer or generate
PDF files. This avoids platform services in the playground. Authentication,
accounting authorization and persistence are simulated. Bank/payable balances and
comparison reports are documented snapshots. The reusable widgets have no web-
only dependencies; native mobile/desktop builds still require their usual Flutter
platform scaffolding in the consuming app.

## العربية

شغّل `lib/playground_main.dart` أو افتح **مختبر المحاسبة** من ترويسة مكتبة
فلاتر. يضم المختبر ثمانية تخطيطات وتغيير الأبعاد والمظهر والكثافة واللغة وحالات
البيانات. الحسابات المالية بوحدات صحيحة؛ لا يوجد خادم أو تسجيل دخول حقيقي.
المسودات في الذاكرة، والطباعة والتصدير معاينات قابلة للنسخ. راجع الفاحص لواجهة
كل مكون، واستخدم **نسخ الكود** للحصول على مثال فلاتر صالح.
