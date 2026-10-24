import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() {
  testWidgets(
    'read-only field exposes its value and permits selection without editing',
    (tester) async {
      final controller = TextEditingController(text: 'BK-001');
      addTearDown(controller.dispose);
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: BkTextField(
              label: 'Reference',
              controller: controller,
              readOnly: true,
            ),
          ),
        ),
      );
      await tester.tap(find.byType(TextField));
      await tester.pump();
      final editable = tester.widget<EditableText>(find.byType(EditableText));
      expect(editable.readOnly, isTrue);
      expect(editable.enableInteractiveSelection, isTrue);
      expect(editable.focusNode.hasFocus, isTrue);
      expect(tester.testTextInput.isVisible, isFalse);
      expect(controller.text, 'BK-001');
      expect(tester.widget<TextField>(find.byType(TextField)).enabled, isTrue);
    },
  );
  testWidgets(
    'error takes precedence over success; clearing error reveals success feedback',
    (tester) async {
      Widget app(String? error) => MaterialApp(
        theme: BkTheme.highContrast(),
        home: Scaffold(
          body: BkTextField(
            label: 'Amount',
            errorText: error,
            successText: 'Success: accepted',
          ),
        ),
      );
      await tester.pumpWidget(app('Error: required'));
      expect(find.text('Error: required'), findsOneWidget);
      expect(find.text('Success: accepted'), findsNothing);
      expect(find.byIcon(Icons.check_circle_outline), findsNothing);
      await tester.pumpWidget(app(null));
      await tester.pumpAndSettle();
      expect(find.text('Success: accepted'), findsOneWidget);
      expect(find.byIcon(Icons.check_circle_outline), findsOneWidget);
    },
  );
}
