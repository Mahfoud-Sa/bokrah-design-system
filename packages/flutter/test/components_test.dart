import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  testWidgets('loading and disabled actions cannot invoke callbacks', (
    tester,
  ) async {
    var calls = 0;
    await tester.pumpWidget(
      MaterialApp(
        theme: BkTheme.light(),
        home: Scaffold(
          body: Column(
            children: [
              BkButton(label: 'Save', loading: true, onPressed: () => calls++),
              const BkButton(label: 'Disabled'),
              BkButton(label: 'Active', onPressed: () => calls++),
            ],
          ),
        ),
      ),
    );
    await tester.tap(find.text('Save'));
    await tester.tap(find.text('Disabled'));
    expect(calls, 0);
    await tester.tap(find.text('Active'));
    expect(calls, 1);
  });
  testWidgets('Arabic components support narrow screens and large text', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(360, 800);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(
      MaterialApp(
        theme: BkTheme.dark(arabic: true),
        home: MediaQuery(
          data: const MediaQueryData(textScaler: TextScaler.linear(1.8)),
          child: Directionality(
            textDirection: TextDirection.rtl,
            child: Scaffold(
              body: ListView(
                children: const [
                  BkAlert(
                    title: 'سجلاتك محدثة',
                    message: 'تمت مراجعة جميع المعاملات.',
                    tone: BkTone.success,
                  ),
                  BkTextField(
                    label: 'المبلغ',
                    errorText: 'أدخل مبلغاً أكبر من صفر.',
                  ),
                  BkStatCard(label: 'مبيعات اليوم', value: '1,240.00'),
                ],
              ),
            ),
          ),
        ),
      ),
    );
    await tester.pump();
    expect(find.text('أدخل مبلغاً أكبر من صفر.'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
