import 'navigation.dart';
import 'ui_components.dart';
import 'foundations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

void main() => runApp(const BokrahCatalog());

class BokrahCatalog extends StatefulWidget {
  const BokrahCatalog({super.key});
  @override
  State<BokrahCatalog> createState() => _BokrahCatalogState();
}

class _BokrahCatalogState extends State<BokrahCatalog> {
  bool arabic = false;
  int themeIndex = 0;
  String text(String en, String ar) => arabic ? ar : en;
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Bokrah Design System',
    debugShowCheckedModeBanner: false,
    locale: Locale(arabic ? 'ar' : 'en'),
    supportedLocales: const [Locale('en'), Locale('ar')],
    localizationsDelegates: GlobalMaterialLocalizations.delegates,
    theme: themeIndex == 2
        ? BkTheme.highContrast(arabic: arabic)
        : BkTheme.light(arabic: arabic),
    darkTheme: BkTheme.dark(arabic: arabic),
    highContrastTheme: BkTheme.highContrast(arabic: arabic),
    highContrastDarkTheme: BkTheme.highContrast(arabic: arabic),
    themeMode: themeIndex == 1 ? ThemeMode.dark : ThemeMode.light,
    home: Builder(
      builder: (context) => Scaffold(
        appBar: AppBar(
          title: const Text('Bokrah'),
          actions: [
            TextButton(
              onPressed: () => setState(() => arabic = !arabic),
              child: Text(arabic ? 'English' : 'العربية'),
            ),
            IconButton(
              tooltip: text('Toggle theme', 'تغيير المظهر'),
              onPressed: () =>
                  setState(() => themeIndex = (themeIndex + 1) % 3),
              icon: Icon(
                themeIndex == 2
                    ? Icons.contrast
                    : themeIndex == 1
                    ? Icons.light_mode_outlined
                    : Icons.dark_mode_outlined,
              ),
            ),
          ],
        ),
        body: Align(
          alignment: Alignment.topCenter,
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 960),
            child: ListView(
              padding: const EdgeInsets.all(BkSpace.xl),
              children: [
                Text(
                  text('Made for a clearer tomorrow.', 'مصمم لغد أكثر وضوحاً.'),
                  style: Theme.of(context).textTheme.headlineLarge,
                ),
                const SizedBox(height: BkSpace.lg),
                Text(
                  text(
                    'Bokrah design system · Flutter catalogue · v0.4.0',
                    'نظام تصميم بكرة · مكتبة فلاتر · 0.4.0',
                  ),
                ),
                const SizedBox(height: BkSpace.xxl),
                UIComponentsCatalogue(arabic: arabic),
                NavigationCatalogue(arabic: arabic),
                FoundationCatalogue(arabic: arabic),
                const SizedBox(height: BkSpace.xxl),
                Wrap(
                  spacing: BkSpace.lg,
                  runSpacing: BkSpace.lg,
                  children: [
                    SizedBox(
                      width: 260,
                      child: BkStatCard(
                        label: text('Today’s sales', 'مبيعات اليوم'),
                        value: '1,240.00',
                        detail: text(
                          'Sample data · JOD',
                          'بيانات تجريبية · دينار',
                        ),
                        tinted: true,
                      ),
                    ),
                    SizedBox(
                      width: 260,
                      child: BkStatCard(
                        label: text('Expenses', 'المصروفات'),
                        value: '380.00',
                        detail: text(
                          'Sample data · JOD',
                          'بيانات تجريبية · دينار',
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: BkSpace.xxl),
                Text(
                  text('Actions', 'الإجراءات'),
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: BkSpace.lg),
                Wrap(
                  spacing: BkSpace.md,
                  runSpacing: BkSpace.md,
                  children: [
                    BkButton(
                      label: text('Preview dialog', 'معاينة الحوار'),
                      icon: Icons.add,
                      onPressed: () => showDialog<void>(
                        context: context,
                        builder: (context) => AlertDialog(
                          title: Text(text('Ready for tomorrow', 'جاهز لبكرة')),
                          content: Text(
                            text(
                              'This is a component preview. No accounting data is saved.',
                              'هذه معاينة للمكون. لا يتم حفظ بيانات محاسبية.',
                            ),
                          ),
                          actions: [
                            TextButton(
                              onPressed: () => Navigator.pop(context),
                              child: Text(text('Close', 'إغلاق')),
                            ),
                          ],
                        ),
                      ),
                    ),
                    BkButton(
                      label: text('Secondary', 'ثانوي'),
                      variant: BkButtonVariant.secondary,
                      onPressed: () =>
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text(
                                text('Action preview', 'معاينة الإجراء'),
                              ),
                            ),
                          ),
                    ),
                    BkButton(label: text('Disabled', 'معطل')),
                    BkButton(
                      label: text('Saving', 'جارٍ الحفظ'),
                      loading: true,
                      loadingLabel: text('Loading', 'جارٍ التحميل'),
                    ),
                  ],
                ),
                const SizedBox(height: BkSpace.xxl),
                BkCard(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        text('Form controls', 'حقول الإدخال'),
                        style: Theme.of(context).textTheme.titleLarge,
                      ),
                      const SizedBox(height: BkSpace.lg),
                      BkTextField(
                        label: text('Restaurant name', 'اسم المطعم'),
                        helperText: text(
                          'A visible label in both languages.',
                          'عنوان واضح بكلتا اللغتين.',
                        ),
                      ),
                      const SizedBox(height: BkSpace.xl),
                      BkTextField(
                        label: text('Amount', 'المبلغ'),
                        errorText: text(
                          'Enter an amount greater than zero.',
                          'أدخل مبلغاً أكبر من صفر.',
                        ),
                        keyboardType: TextInputType.number,
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: BkSpace.xxl),
                Wrap(
                  spacing: BkSpace.sm,
                  runSpacing: BkSpace.sm,
                  children: [
                    BkBadge(label: text('Paid', 'مدفوع'), tone: BkTone.success),
                    BkBadge(
                      label: text('Pending', 'قيد الانتظار'),
                      tone: BkTone.warning,
                    ),
                    BkBadge(
                      label: text('Overdue', 'متأخر'),
                      tone: BkTone.danger,
                    ),
                    BkBadge(label: text('Draft', 'مسودة')),
                  ],
                ),
                const SizedBox(height: BkSpace.xl),
                BkAlert(
                  title: text('Your records are up to date', 'سجلاتك محدثة'),
                  message: text(
                    'Status always includes text, alongside color.',
                    'تتضمن الحالة نصاً توضيحياً بجانب اللون.',
                  ),
                  tone: BkTone.success,
                ),
                const SizedBox(height: BkSpace.xl),
                BkCard(
                  child: BkEmptyState(
                    title: text('A fresh start', 'بداية جديدة'),
                    message: text(
                      'Your first transaction will appear here.',
                      'ستظهر معاملتك الأولى هنا.',
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}
