import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

class LayoutCatalogue extends StatelessWidget {
  const LayoutCatalogue({super.key, required this.arabic});
  final bool arabic;
  String t(String en, String ar) => arabic ? ar : en;
  Widget box(String value) => Container(
    padding: const EdgeInsets.all(BkSpace.lg),
    decoration: BoxDecoration(border: Border.all(color: Colors.grey)),
    child: Text(value),
  );
  Widget sample(String title, Widget child) => Padding(
    padding: const EdgeInsets.only(bottom: BkSpace.xl),
    child: BkCard(
      child: BkColumn(
        children: [
          BkSectionHeader(title: title),
          child,
        ],
      ),
    ),
  );
  @override
  Widget build(BuildContext context) => BkColumn(
    children: [
      BkSectionHeader(
        title: t('5. Layout Components', '٥. مكونات التخطيط'),
        description: t(
          'Shared spacing, responsive structure and accessible modal routes.',
          'مسافات مشتركة وبنية متجاوبة وحوارات قابلة للوصول.',
        ),
      ),
      sample(
        t('Container', 'الحاوية'),
        BkContainer(
          child: box(
            t(
              'Centered content with responsive margins',
              'محتوى مركزي بهوامش متجاوبة',
            ),
          ),
        ),
      ),
      sample(
        t('Row / Column', 'الصف والعمود'),
        BkColumn(
          children: [
            BkRow(
              children: [
                box(t('Sales', 'المبيعات')),
                box(t('Expenses', 'المصروفات')),
              ],
            ),
            box(t('Vertical flow · 16px gap', 'تدفق عمودي · فجوة ١٦ بكسل')),
          ],
        ),
      ),
      sample(
        t('Grid', 'الشبكة'),
        BkResponsiveGrid(
          children: List.generate(
            12,
            (i) => Container(
              padding: const EdgeInsets.all(BkSpace.xs),
              color: Theme.of(context).colorScheme.surfaceContainerHighest,
              child: Text((i + 1).toString(), textAlign: TextAlign.center),
            ),
          ),
        ),
      ),
      sample(
        t('Divider', 'الفاصل'),
        BkColumn(
          children: [
            Text(t('Current period', 'الفترة الحالية')),
            const BkDivider(),
            Text(t('Previous period', 'الفترة السابقة')),
          ],
        ),
      ),
      sample(
        t('Spacer', 'المسافة'),
        BkColumn(
          gap: 0,
          children: [
            box(t('Before', 'قبل')),
            const BkSpacer(size: BkSpace.xxl),
            box(t('After · 32px space', 'بعد · مسافة ٣٢ بكسل')),
          ],
        ),
      ),
      sample(
        t('Stack', 'التراكب'),
        BkStack(
          children: [
            SizedBox(
              width: double.infinity,
              height: 120,
              child: box(t('Summary preview', 'معاينة الملخص')),
            ),
            PositionedDirectional(
              top: 8,
              end: 8,
              child: BkBadge(label: t('Draft', 'مسودة')),
            ),
          ],
        ),
      ),
      sample(
        t('Modal / Bottom Sheet', 'الحوار واللوحة السفلية'),
        BkRow(
          children: [
            BkButton(
              label: t('Open layout modal', 'فتح حوار التخطيط'),
              onPressed: () => showBkModal<void>(
                context: context,
                title: t('Layout preview', 'معاينة التخطيط'),
                closeLabel: t('Close layout preview', 'إغلاق المعاينة'),
                builder: (_) => Text(
                  t(
                    'Escape or close returns to the catalogue.',
                    'اضغط Escape أو أغلق للعودة إلى الكتالوج.',
                  ),
                ),
              ),
            ),
            BkButton(
              label: t('Open bottom sheet', 'فتح اللوحة السفلية'),
              variant: BkButtonVariant.secondary,
              onPressed: () => showBkBottomSheet<void>(
                context: context,
                title: t('Review summary', 'مراجعة الملخص'),
                closeLabel: t('Close layout preview', 'إغلاق المعاينة'),
                builder: (_) => Text(
                  t(
                    'Scrollable content, safe areas and keyboard insets.',
                    'محتوى قابل للتمرير مع مناطق آمنة ومساحة لوحة المفاتيح.',
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
      sample(
        t('Responsive Layout', 'التخطيط المتجاوب'),
        BkResponsiveLayout(
          compact: (_) =>
              box(t('Compact · below 760px', 'صغير · أقل من ٧٦٠ بكسل')),
          medium: (_) =>
              box(t('Medium · 760px and above', 'متوسط · من ٧٦٠ بكسل')),
          wide: (_) => box(t('Wide · 1200px and above', 'واسع · من ١٢٠٠ بكسل')),
        ),
      ),
      sample(
        t('Page Scaffold', 'هيكل الصفحة'),
        BkButton(
          label: t('Open sample page', 'فتح صفحة تجريبية'),
          onPressed: () => Navigator.of(context).push(
            MaterialPageRoute<void>(
              builder: (_) => BkPageScaffold(
                appBar: AppBar(title: Text(t('Sample page', 'صفحة تجريبية'))),
                body: ListView(
                  children: [
                    BkContainer(
                      child: BkSectionHeader(
                        title: t('Daily overview', 'نظرة يومية'),
                        description: t(
                          'This page owns its scroll view. Use Back to return.',
                          'هذه الصفحة تدير التمرير. استخدم الرجوع للعودة.',
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
      sample(
        t('Section Header', 'عنوان القسم'),
        BkSectionHeader(
          title: t('Monthly overview', 'نظرة شهرية'),
          description: t(
            'Title, description and optional action.',
            'عنوان ووصف وإجراء اختياري.',
          ),
          action: BkButton(
            label: t('Preview section action', 'معاينة إجراء القسم'),
            onPressed: () => BkToast.show(
              context,
              message: t(
                'Section action previewed.',
                'تمت معاينة إجراء القسم.',
              ),
            ),
          ),
        ),
      ),
    ],
  );
}
