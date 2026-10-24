import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  testWidgets('data grid forwards numeric sorting and displays the new order', (
    tester,
  ) async {
    var rows = [
      ['A', '100'],
      ['B', '20'],
      ['C', '3'],
    ];
    int? sorted;
    bool ascending = true;
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: StatefulBuilder(
            builder: (context, setState) => BkDataGrid(
              caption: 'Sample records',
              columns: const ['Ref', 'Amount'],
              rows: rows,
              emptyLabel: 'No records',
              numericColumns: const {1},
              sortColumnIndex: sorted,
              sortAscending: ascending,
              onSort: (column, direction) => setState(() {
                sorted = column;
                ascending = direction;
                rows = [...rows]
                  ..sort(
                    (a, b) => direction
                        ? double.parse(a[1]).compareTo(double.parse(b[1]))
                        : double.parse(b[1]).compareTo(double.parse(a[1])),
                  );
              }),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Amount'));
    await tester.pumpAndSettle();
    expect(sorted, 1);
    expect(
      tester.getTopLeft(find.text('3')).dy,
      lessThan(tester.getTopLeft(find.text('20')).dy),
    );
  });
  testWidgets('tag deletion and no-results reset are real actions', (
    tester,
  ) async {
    var deleted = false, cleared = false;
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: Column(
            children: [
              BkTag(
                label: 'Lunch',
                deleteLabel: 'Remove Lunch',
                onDeleted: () => deleted = true,
              ),
              BkNoResults(
                title: 'No results',
                message: 'Try a different filter',
                clearLabel: 'Clear search',
                onClear: () => cleared = true,
              ),
            ],
          ),
        ),
      ),
    );
    await tester.tap(find.byTooltip('Remove Lunch'));
    expect(deleted, isTrue);
    await tester.tap(find.text('Clear search'));
    expect(cleared, isTrue);
  });
  testWidgets('accordion reveals its content', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: BkAccordion(
            title: 'Details',
            children: const [Text('Record description')],
          ),
        ),
      ),
    );
    expect(find.text('Record description').hitTestable(), findsNothing);
    await tester.tap(find.text('Details'));
    await tester.pumpAndSettle();
    expect(find.text('Record description').hitTestable(), findsOneWidget);
  });
  testWidgets(
    'popover stays within narrow view and Escape restores trigger focus',
    (tester) async {
      tester.view.physicalSize = const Size(360, 700);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      await tester.pumpWidget(
        MaterialApp(
          theme: BkTheme.highContrast(),
          home: const Scaffold(
            body: Align(
              alignment: Alignment.topRight,
              child: BkPopover(
                label: 'Open details',
                title: 'Metric details',
                message: 'Metric explanation',
                closeLabel: 'Close details',
              ),
            ),
          ),
        ),
      );
      await tester.tap(find.text('Open details'));
      await tester.pumpAndSettle();
      expect(find.text('Metric explanation'), findsOneWidget);
      expect(
        tester.getRect(find.text('Metric explanation')).right,
        lessThanOrEqualTo(360),
      );
      await tester.sendKeyEvent(LogicalKeyboardKey.escape);
      await tester.pumpAndSettle();
      expect(find.text('Metric explanation'), findsNothing);
      expect(
        tester
            .widget<OutlinedButton>(
              find.widgetWithText(OutlinedButton, 'Open details'),
            )
            .focusNode!
            .hasFocus,
        isTrue,
      );
    },
  );
  testWidgets(
    'failed images expose the supplied fallback instead of an exception',
    (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: BkImage(
              image: MemoryImage(Uint8List(0)),
              label: 'Restaurant',
              loadingLabel: 'Loading',
              errorLabel: 'Image unavailable',
            ),
          ),
        ),
      );
      await tester.pumpAndSettle();
      expect(find.text('Image unavailable'), findsOneWidget);
      expect(tester.takeException(), isNull);
    },
  );
  testWidgets('zero-value charts use finite bars and expose readable values', (
    tester,
  ) async {
    final handle = tester.ensureSemantics();
    try {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: BkBarChart(
              label: 'Orders',
              emptyLabel: 'No chart data',
              values: const [
                BkChartValue(label: 'Monday', value: 0, displayValue: '0'),
              ],
            ),
          ),
        ),
      );
      expect(
        tester
            .widget<LinearProgressIndicator>(
              find.byType(LinearProgressIndicator),
            )
            .value,
        0,
      );
      expect(find.bySemanticsLabel('Monday: 0'), findsOneWidget);
      expect(tester.takeException(), isNull);
    } finally {
      handle.dispose();
    }
  });
}
