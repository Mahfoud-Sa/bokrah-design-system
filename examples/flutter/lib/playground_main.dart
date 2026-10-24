import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';
import 'accounting/accounting.dart';

void main() => runApp(const AccountingPlaygroundApp());

class AccountingPlaygroundApp extends StatelessWidget {
  const AccountingPlaygroundApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Bokrah Accounting Playground',
    debugShowCheckedModeBanner: false,
    supportedLocales: const [Locale('en'), Locale('ar')],
    localizationsDelegates: GlobalMaterialLocalizations.delegates,
    theme: BkTheme.light(),
    darkTheme: BkTheme.dark(),
    home: const AccountingPlaygroundPage(),
  );
}
