import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  testWidgets(
    'responsive branches use parent width and build only one branch',
    (tester) async {
      for (final entry in {
        400.0: 'compact',
        760.0: 'medium',
        1200.0: 'wide',
      }.entries) {
        await tester.pumpWidget(
          MaterialApp(
            home: Center(
              child: SizedBox(
                width: entry.key,
                child: OverflowBox(
                  maxWidth: entry.key,
                  child: BkResponsiveLayout(
                    compact: (_) => const Text('compact'),
                    medium: (_) => const Text('medium'),
                    wide: (_) => const Text('wide'),
                  ),
                ),
              ),
            ),
          ),
        );
        expect(find.text(entry.value), findsOneWidget);
        expect(find.byType(Text), findsOneWidget);
      }
    },
  );
  testWidgets('flow supports narrow RTL large text inside scrolling content', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(320, 640);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(
      MaterialApp(
        home: MediaQuery(
          data: const MediaQueryData(textScaler: TextScaler.linear(2)),
          child: Directionality(
            textDirection: TextDirection.rtl,
            child: BkPageScaffold(
              body: ListView(
                children: [
                  BkContainer(
                    child: BkColumn(
                      children: [
                        const BkSectionHeader(
                          title: 'ملخص المطعم',
                          description: 'تفاصيل',
                        ),
                        BkRow(
                          children: [
                            TextButton(
                              onPressed: () {},
                              child: const Text('المبيعات'),
                            ),
                            TextButton(
                              onPressed: () {},
                              child: const Text('المصروفات'),
                            ),
                          ],
                        ),
                        const BkSpacer(size: 32),
                        const BkDivider(),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
    expect(tester.takeException(), isNull);
    expect(
      tester.getTopLeft(find.text('المبيعات')).dy,
      lessThan(tester.getTopLeft(find.text('المصروفات')).dy),
    );
  });
  testWidgets('modal and sheet dismiss only their route', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Builder(
          builder: (context) => Scaffold(
            body: Column(
              children: [
                const Text('owner page'),
                TextButton(
                  onPressed: () => showBkModal<void>(
                    context: context,
                    title: 'Modal',
                    closeLabel: 'Dismiss',
                    builder: (_) => const Text('Modal content'),
                  ),
                  child: const Text('Open modal'),
                ),
                TextButton(
                  onPressed: () => showBkBottomSheet<void>(
                    context: context,
                    title: 'Sheet',
                    closeLabel: 'Dismiss',
                    builder: (_) => const Text('Sheet content'),
                  ),
                  child: const Text('Open sheet'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Open modal'));
    await tester.pumpAndSettle();
    expect(find.text('Modal content'), findsOneWidget);
    await tester.sendKeyEvent(LogicalKeyboardKey.escape);
    await tester.pumpAndSettle();
    expect(find.text('Modal content'), findsNothing);
    expect(find.text('owner page'), findsOneWidget);
    await tester.tap(find.text('Open sheet'));
    await tester.pumpAndSettle();
    expect(find.text('Sheet content'), findsOneWidget);
    await tester.tap(find.text('Dismiss'));
    await tester.pumpAndSettle();
    expect(find.text('Sheet content'), findsNothing);
    expect(find.text('owner page'), findsOneWidget);
  });
}
