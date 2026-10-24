// Generated documentation snippets; edit docs/reference-catalog.mjs.
import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

Widget docBkButton(BuildContext context) => BkButton(label: 'Save', onPressed: () {});

Widget docBkIconButton(BuildContext context) => BkIconButton(label: 'Add record', icon: Icons.add, onPressed: () {});

Widget docBkButtonGroup(BuildContext context) => BkButtonGroup(label: 'Record actions', children: [BkButton(label: 'Save', onPressed: () {})]);

Widget docBkTextField(BuildContext context) => BkTextField(label: 'Restaurant name', helperText: 'Used in your profile', onChanged: (value) {});

Widget docBkCard(BuildContext context) => BkCard(tinted: true, child: Text('Daily summary'));

Widget docBkBadge(BuildContext context) => BkBadge(label: 'Paid', tone: BkTone.success);

Widget docBkAlert(BuildContext context) => BkAlert(title: 'Review required', message: 'Check the sample details.', tone: BkTone.warning);

Widget docBkProgress(BuildContext context) => BkProgress(label: 'Import progress', value: .4);

Widget docBkSkeleton(BuildContext context) => BkSkeleton(width: 160, height: 16);

void docBkToast(BuildContext context) {
  BkToast.show(context, message: 'Sample saved');
}

Widget docBkStatCard(BuildContext context) => BkStatCard(label: 'Sales', value: '240.00', detail: 'JOD · sample');

Widget docBkEmptyState(BuildContext context) => BkEmptyState(title: 'No records yet', message: 'Create your first record.', action: BkButton(label: 'Create', onPressed: () {}));

Widget docBkAppBar(BuildContext context) => BkPageScaffold(appBar: BkAppBar(title: 'Records', actions: [BkIconButton(label: 'Add', icon: Icons.add, onPressed: () {})]), body: Text('Records'));

Widget docBkNavigationBar(BuildContext context) => BkNavigationBar(items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) {});

Widget docBkSidebar(BuildContext context) => BkSidebar(label: 'Workspace', items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) {});

Widget docBkNavigationDrawer(BuildContext context) => BkPageScaffold(appBar: BkAppBar(title: 'Records'), drawer: BkNavigationDrawer(label: 'Workspace', items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) { Navigator.of(context).maybePop(); }), body: Text('Records'));

Widget docBkBottomNavigation(BuildContext context) => BkBottomNavigation(items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) {});

Widget docBkTabs(BuildContext context) => DefaultTabController(length: 2, child: Builder(builder: (context) => Column(mainAxisSize: MainAxisSize.min, children: [BkTabs(controller: DefaultTabController.of(context), labels: const ['Overview', 'Records']), const SizedBox(height: 120, child: TabBarView(children: [Text('Overview'), Text('Records')]))])));

Widget docBkBreadcrumbs(BuildContext context) => BkBreadcrumbs(items: [BkBreadcrumb(label: 'Workspace', onPressed: () {}), const BkBreadcrumb(label: 'Records')]);

Widget docBkPagination(BuildContext context) => BkPagination(page: 1, pageCount: 3, label: 'Page 1 of 3', previousLabel: 'Previous', nextLabel: 'Next', onChanged: (page) {});

Widget docBkStepper(BuildContext context) => BkStepper(steps: const [Step(title: Text('Details'), content: Text('Enter details')), Step(title: Text('Review'), content: Text('Review details'))], currentStep: 0, onContinue: () {}, onCancel: () {});

Widget docBkDropdownMenu(BuildContext context) => BkDropdownMenu<String>(label: 'Record actions', actions: const [BkMenuAction(value: 'view', label: 'View'), BkMenuAction(value: 'delete', label: 'Delete', enabled: false)], onSelected: (value) {});

Widget docBkContextMenu(BuildContext context) => BkContextMenu<String>(label: 'Record actions', actions: const [BkMenuAction(value: 'view', label: 'View')], onSelected: (value) {}, child: Text('Sample record'));

Widget docBkBackButton(BuildContext context) => BkBackButton(label: 'Back to records', onPressed: () {});

Widget docBkListTile(BuildContext context) => BkListTile(title: 'Lunch service', subtitle: 'Sample record', onTap: () {});

Widget docBkDataGrid(BuildContext context) => BkDataGrid(caption: 'Sample records', columns: const ['Name', 'Amount'], rows: const [['Lunch', '240.00']], emptyLabel: 'No records', numericColumns: const {1}, sortColumnIndex: 1, onSort: (index, ascending) {});

Widget docBkAvatar(BuildContext context) => BkAvatar(label: 'Bokrah restaurant', initials: 'BK');

Widget docBkImage(BuildContext context) => BkImage(image: const AssetImage('assets/dining-room.png'), label: 'Restaurant illustration', loadingLabel: 'Loading illustration', errorLabel: 'Illustration unavailable');

Widget docBkTag(BuildContext context) => BkTag(label: 'Lunch', deleteLabel: 'Remove Lunch filter', onDeleted: () {});

Widget docBkTooltip(BuildContext context) => BkTooltip(label: 'Sample data only', child: TextButton(onPressed: () {}, child: Text('About metric')));

Widget docBkPopover(BuildContext context) => BkPopover(label: 'Metric details', title: 'About this metric', message: 'Sample values only.', closeLabel: 'Close details');

Widget docBkAccordion(BuildContext context) => BkAccordion(title: 'Record details', children: const [Text('Sample record BK-001')]);

Widget docBkTimeline(BuildContext context) => BkTimeline(entries: const [BkTimelineEntry(title: 'Shift opened', detail: 'Sample activity', time: '09:00')]);

Widget docBkBarChart(BuildContext context) => BkBarChart(label: 'Sample orders', emptyLabel: 'No data', values: const [BkChartValue(label: 'Lunch', value: 80, displayValue: '80 orders')]);

Widget docBkKpiCard(BuildContext context) => BkKpiCard(label: 'Sales', value: '240.00', comparison: '+12% vs previous sample day', comparisonTone: BkTone.success);

Widget docBkNoResults(BuildContext context) => BkNoResults(title: 'No matches', message: 'Try another category.', clearLabel: 'Clear filters', onClear: () {});

Widget docBkIcon(BuildContext context) => BkIcon(BkIconName.receipt, semanticLabel: 'Receipt');

Widget docBkContainer(BuildContext context) => BkContainer(child: Text('Page content'));

Widget docBkRow(BuildContext context) => BkRow(children: const [Text('Sales'), Text('Expenses')]);

Widget docBkColumn(BuildContext context) => BkColumn(children: const [Text('Title'), Text('Description')]);

Widget docBkResponsiveGrid(BuildContext context) => BkResponsiveGrid(children: const [Text('1'), Text('2'), Text('3'), Text('4')]);

Widget docBkDivider(BuildContext context) => BkDivider();

Widget docBkSpacer(BuildContext context) => BkSpacer(size: BkSpace.xxl);

Widget docBkStack(BuildContext context) => SizedBox(height: 120, child: BkStack(children: [const SizedBox.expand(child: ColoredBox(color: Colors.green)), const PositionedDirectional(top: 8, end: 8, child: Text('Draft'))]));

Widget docBkResponsiveLayout(BuildContext context) => BkResponsiveLayout(compact: (context) => const Text('Compact'), medium: (context) => const Text('Medium'), wide: (context) => const Text('Wide'));

Widget docBkPageScaffold(BuildContext context) => BkPageScaffold(appBar: BkAppBar(title: 'Records'), body: ListView(children: const [Text('Record content')]));

Widget docBkSectionHeader(BuildContext context) => BkSectionHeader(title: 'Monthly overview', description: 'Sample period', action: BkButton(label: 'Export preview', onPressed: () {}));

Widget docshowBkModal(BuildContext context) => Builder(builder: (context) => BkButton(label: 'Review', onPressed: () { showBkModal<void>(context: context, title: 'Review sample', closeLabel: 'Close review', builder: (dialogContext) => const Text('Sample details')); }));

Widget docshowBkBottomSheet(BuildContext context) => Builder(builder: (context) => BkButton(label: 'Review', onPressed: () { showBkBottomSheet<void>(context: context, title: 'Review sample', closeLabel: 'Close review', builder: (sheetContext) => const Text('Sample details')); }));
