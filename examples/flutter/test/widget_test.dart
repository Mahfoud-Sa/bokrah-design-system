import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_catalog/main.dart';

void main() {
  testWidgets('language switch sets RTL and theme can change', (tester) async {
    await tester.pumpWidget(const BokrahCatalog());
    await tester.tap(find.text('العربية'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 500));
    expect(find.text('مصمم لغد أكثر وضوحاً.'), findsOneWidget);
    final context = tester.element(find.byType(Scaffold));
    expect(Directionality.of(context), TextDirection.rtl);
    await tester.tap(find.byTooltip('تغيير المظهر'));
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 500));
    expect(
      Theme.of(tester.element(find.byType(Scaffold))).brightness,
      Brightness.dark,
    );
    expect(tester.takeException(), isNull);
  });
}
