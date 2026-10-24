import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  testWidgets(
    'named icon and tertiary actions activate once; disabled icon cannot activate',
    (tester) async {
      var calls = 0;
      await tester.pumpWidget(
        MaterialApp(
          theme: BkTheme.light(),
          home: Scaffold(
            body: BkButtonGroup(
              label: 'Actions',
              children: [
                BkIconButton(
                  label: 'Add example',
                  icon: Icons.add,
                  onPressed: () => calls++,
                ),
                const BkIconButton(label: 'Unavailable', icon: Icons.close),
                BkButton(
                  label: 'More details',
                  variant: BkButtonVariant.tertiary,
                  onPressed: () => calls++,
                ),
              ],
            ),
          ),
        ),
      );
      await tester.tap(find.byTooltip('Add example'));
      expect(calls, 1);
      await tester.tap(find.byTooltip('Unavailable'));
      expect(calls, 1);
      await tester.tap(find.text('More details'));
      expect(calls, 2);
      expect(
        tester.getSize(find.byType(IconButton).first).height,
        greaterThanOrEqualTo(48),
      );
    },
  );
  testWidgets(
    'progress has readable measured value and a labeled native indicator',
    (tester) async {
      final handle = tester.ensureSemantics();
      try {
        await tester.pumpWidget(
          MaterialApp(
            theme: BkTheme.highContrast(),
            home: const Scaffold(
              body: BkProgress(label: 'Importing', value: .4),
            ),
          ),
        );
        expect(find.text('Importing · 40%'), findsOneWidget);
        final data = tester
            .getSemantics(find.byType(LinearProgressIndicator))
            .getSemanticsData();
        expect(data.label, 'Importing');
        expect(data.value, '40');
      } finally {
        handle.dispose();
      }
    },
  );
  testWidgets('toast is visible and can be dismissed through its controller', (
    tester,
  ) async {
    ScaffoldFeatureController<SnackBar, SnackBarClosedReason>? controller;
    await tester.pumpWidget(
      MaterialApp(
        theme: BkTheme.highContrast(),
        home: Builder(
          builder: (context) => Scaffold(
            body: BkButton(
              label: 'Show',
              onPressed: () => controller = BkToast.show(
                context,
                message: 'Ready for review',
                tone: BkTone.success,
              ),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Show'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 400));
    expect(find.text('Ready for review'), findsOneWidget);
    controller!.close();
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 400));
    expect(find.text('Ready for review'), findsNothing);
  });
}
