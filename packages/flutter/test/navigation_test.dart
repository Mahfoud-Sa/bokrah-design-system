import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  const items = [
    BkNavigationItem(label: 'Overview', icon: Icons.home_outlined),
    BkNavigationItem(label: 'Reports', icon: Icons.bar_chart),
  ];
  testWidgets('navigation selection updates controlled state', (tester) async {
    var selected = 0;
    await tester.pumpWidget(
      MaterialApp(
        theme: BkTheme.highContrast(),
        home: StatefulBuilder(
          builder: (context, setState) => Scaffold(
            body: Column(
              children: [
                BkNavigationBar(
                  items: items,
                  selectedIndex: selected,
                  onSelected: (i) => setState(() => selected = i),
                ),
                Text('Selected $selected'),
              ],
            ),
            bottomNavigationBar: BkBottomNavigation(
              items: items,
              selectedIndex: selected,
              onSelected: (i) => setState(() => selected = i),
            ),
          ),
        ),
      ),
    );
    await tester.tap(
      find.descendant(
        of: find.byType(BkBottomNavigation),
        matching: find.text('Reports'),
      ),
    );
    await tester.pumpAndSettle();
    expect(find.text('Selected 1'), findsOneWidget);
    await tester.tap(
      find.descendant(
        of: find.byType(BkNavigationBar),
        matching: find.text('Overview'),
      ),
    );
    await tester.pumpAndSettle();
    expect(find.text('Selected 0'), findsOneWidget);
  });
  testWidgets('pagination cannot leave its first and last page', (
    tester,
  ) async {
    var page = 1;
    await tester.pumpWidget(
      MaterialApp(
        home: StatefulBuilder(
          builder: (context, setState) => Scaffold(
            body: BkPagination(
              page: page,
              pageCount: 3,
              label: 'Page $page of 3',
              previousLabel: 'Previous',
              nextLabel: 'Next',
              onChanged: (i) => setState(() => page = i),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Previous'));
    expect(page, 1);
    for (var i = 0; i < 2; i++) {
      await tester.tap(find.text('Next'));
      await tester.pumpAndSettle();
    }
    expect(page, 3);
    await tester.tap(find.text('Next'));
    expect(page, 3);
    expect(find.text('Page 3 of 3'), findsOneWidget);
  });
  testWidgets('tabs reveal the corresponding panel', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: DefaultTabController(
            length: 2,
            child: Builder(
              builder: (context) {
                final c = DefaultTabController.of(context);
                return Column(
                  children: [
                    BkTabs(controller: c, labels: const ['First', 'Second']),
                    Expanded(
                      child: TabBarView(
                        controller: c,
                        children: const [
                          Text('First content'),
                          Text('Second content'),
                        ],
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Second'));
    await tester.pumpAndSettle();
    expect(find.text('Second content').hitTestable(), findsOneWidget);
  });
  testWidgets('dropdown selects enabled actions and closes', (tester) async {
    String? selected;
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: BkDropdownMenu<String>(
            label: 'Actions',
            actions: const [
              BkMenuAction(value: 'view', label: 'View details'),
              BkMenuAction(
                value: 'export',
                label: 'Unavailable',
                enabled: false,
              ),
            ],
            onSelected: (value) => selected = value,
          ),
        ),
      ),
    );
    await tester.tap(find.text('Actions'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('View details'));
    await tester.pumpAndSettle();
    expect(selected, 'view');
    expect(find.text('View details'), findsNothing);
  });
  testWidgets('back action has an explicit name and safe disabled fallback', (
    tester,
  ) async {
    var calls = 0;
    await tester.pumpWidget(
      MaterialApp(
        home: Directionality(
          textDirection: TextDirection.rtl,
          child: Scaffold(
            body: Row(
              children: [
                BkBackButton(label: 'Go back', onPressed: () => calls++),
                const BkBackButton(label: 'No history'),
              ],
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.byTooltip('No history'));
    expect(calls, 0);
    await tester.tap(find.byTooltip('Go back'));
    expect(calls, 1);
    expect(tester.takeException(), isNull);
  });

  testWidgets('drawer selection closes the modal without leaving its screen', (
    tester,
  ) async {
    var selected = -1;
    await tester.pumpWidget(
      MaterialApp(
        home: Builder(
          builder: (context) => Scaffold(
            appBar: const BkAppBar(title: 'Workspace'),
            drawer: BkNavigationDrawer(
              label: 'Destinations',
              items: items,
              selectedIndex: 0,
              onSelected: (index) {
                selected = index;
                Navigator.of(context).pop();
              },
            ),
            body: Builder(
              builder: (context) => TextButton(
                onPressed: () => Scaffold.of(context).openDrawer(),
                child: const Text('Open drawer'),
              ),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Open drawer'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Reports'));
    await tester.pumpAndSettle();
    expect(selected, 1);
    expect(find.text('Workspace'), findsOneWidget);
    expect(find.text('Destinations'), findsNothing);
  });
}
