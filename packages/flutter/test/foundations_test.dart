import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  test('English and Arabic themes use Somar Sans for body and headings', () {
    for (final arabic in [false, true]) {
      for (final theme in [
        BkTheme.light(arabic: arabic),
        BkTheme.dark(arabic: arabic),
        BkTheme.highContrast(arabic: arabic),
      ]) {
        expect(
          theme.textTheme.bodyMedium!.fontFamily,
          'packages/bokrah_design_system/Somar Sans',
        );
        expect(
          theme.textTheme.headlineLarge!.fontFamily,
          'packages/bokrah_design_system/Somar Sans',
        );
      }
    }
  });
  testWidgets(
    'high contrast reaches semantic components and every vector paints in RTL',
    (tester) async {
      await tester.pumpWidget(
        MaterialApp(
          theme: BkTheme.highContrast(arabic: true),
          home: Directionality(
            textDirection: TextDirection.rtl,
            child: Scaffold(
              body: Column(
                children: [
                  const BkBadge(label: 'Paid', tone: BkTone.success),
                  Wrap(
                    children: [
                      for (final icon in BkIconName.values) BkIcon(icon),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      );
      final text = tester.widget<Text>(find.text('Paid'));
      expect(text.style!.color, BkHighContrastColors.success);
      final palette = BkThemeTokens.of(tester.element(find.byType(BkBadge)));
      expect(palette['background'], Colors.black);
      expect(tester.takeException(), isNull);
    },
  );
  testWidgets(
    'grid switches columns, gutters and margins at defined breakpoints',
    (tester) async {
      tester.view.physicalSize = const Size(1400, 900);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      for (final (width, columns, gap, margin) in [
        (700.0, 4, 16, 16),
        (1000.0, 8, 24, 24),
        (1300.0, 12, 32, 48),
      ]) {
        await tester.pumpWidget(
          MaterialApp(
            home: Scaffold(
              body: Align(
                alignment: Alignment.topCenter,
                child: SizedBox(
                  width: width,
                  child: BkResponsiveGrid(
                    children: [
                      for (var i = 0; i < 24; i++)
                        SizedBox(key: ValueKey('cell$i'), height: 48),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
        expect(
          tester.getSize(find.byKey(const ValueKey('cell0'))).width,
          closeTo((width - 2 * margin - (columns - 1) * gap) / columns, .01),
        );
        expect(
          tester.getTopLeft(find.byKey(ValueKey('cell$columns'))).dy,
          greaterThan(
            tester.getTopLeft(find.byKey(const ValueKey('cell0'))).dy,
          ),
        );
        expect(tester.takeException(), isNull);
      }
    },
  );
}
