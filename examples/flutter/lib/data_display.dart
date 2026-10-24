import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

class DataDisplayCatalogue extends StatefulWidget {
  const DataDisplayCatalogue({super.key, required this.arabic});
  final bool arabic;
  @override
  State<DataDisplayCatalogue> createState() => _DataDisplayCatalogueState();
}

class _DataDisplayCatalogueState extends State<DataDisplayCatalogue> {
  final filter = TextEditingController(), search = TextEditingController();
  int sort = 0;
  bool ascending = true, imageFailed = false;
  final Set<int> removedTags = {};
  String text(String en, String ar) => widget.arabic ? ar : en;
  @override
  void dispose() {
    filter.dispose();
    search.dispose();
    super.dispose();
  }

  Widget card(String title, Widget child) => Padding(
    padding: const EdgeInsets.only(bottom: BkSpace.xl),
    child: BkCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: BkSpace.lg),
          child,
        ],
      ),
    ),
  );
  void preview(String message) => BkToast.show(context, message: message);
  @override
  Widget build(BuildContext context) {
    final data = [
      ['BK-001', text('Lunch', 'غداء'), '240.00'],
      ['BK-002', text('Supplies', 'مستلزمات'), '80.00'],
      ['BK-003', text('Dinner', 'عشاء'), '1200.00'],
      ['BK-004', text('Breakfast', 'إفطار'), '45.00'],
      ['BK-005', text('Takeaway', 'طلبات خارجية'), '200.00'],
    ];
    final rows =
        data
            .where(
              (row) => row
                  .join(' ')
                  .toLowerCase()
                  .contains(filter.text.trim().toLowerCase()),
            )
            .toList()
          ..sort((a, b) {
            final order = sort == 2
                ? double.parse(a[2]).compareTo(double.parse(b[2]))
                : a[sort].compareTo(b[sort]);
            return ascending ? order : -order;
          });
    final categoryNames = [
      text('Lunch', 'غداء'),
      text('Supplies', 'مستلزمات'),
      text('Dinner', 'عشاء'),
    ];
    final matches = categoryNames
        .where(
          (name) =>
              name.toLowerCase().contains(search.text.trim().toLowerCase()),
        )
        .toList();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          text('4. Data Display Components', '4. مكونات عرض البيانات'),
          style: Theme.of(context).textTheme.headlineMedium,
        ),
        Text(
          text(
            'All records and statistics are illustrative.',
            'جميع السجلات والإحصاءات توضيحية.',
          ),
        ),
        const SizedBox(height: BkSpace.lg),
        card(
          text('Cards and List Tiles', 'البطاقات وعناصر القائمة'),
          Column(
            children: [
              BkListTile(
                title: text('Lunch service', 'خدمة الغداء'),
                subtitle: text(
                  'Sample transaction · BK-001',
                  'معاملة تجريبية · BK-001',
                ),
                leading: const Icon(Icons.receipt_long_outlined),
                trailing: const Icon(Icons.chevron_right),
                onTap: () => preview(
                  text('Selected lunch service.', 'تم اختيار خدمة الغداء.'),
                ),
              ),
              BkListTile(
                title: text('Kitchen supplies', 'مستلزمات المطبخ'),
                subtitle: text(
                  'Sample transaction · BK-002',
                  'معاملة تجريبية · BK-002',
                ),
                leading: const Icon(Icons.inventory_2_outlined),
                onTap: () => preview(
                  text(
                    'Selected kitchen supplies.',
                    'تم اختيار مستلزمات المطبخ.',
                  ),
                ),
              ),
            ],
          ),
        ),
        card(
          text('Data Tables and Data Grids', 'الجداول وشبكات البيانات'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              BkTextField(
                label: text('Filter sample records', 'تصفية السجلات التجريبية'),
                controller: filter,
                onChanged: (_) => setState(() {}),
              ),
              const SizedBox(height: BkSpace.lg),
              BkDataGrid(
                caption: text(
                  'Sample restaurant records · JOD',
                  'سجلات مطعم تجريبية · دينار',
                ),
                columns: [
                  text('Reference', 'المرجع'),
                  text('Category', 'الفئة'),
                  text('Amount (JOD)', 'المبلغ (دينار)'),
                ],
                rows: rows,
                emptyLabel: text(
                  'No matching records.',
                  'لا توجد سجلات مطابقة.',
                ),
                numericColumns: const {2},
                sortColumnIndex: sort,
                sortAscending: ascending,
                onSort: (column, direction) => setState(() {
                  sort = column;
                  ascending = direction;
                }),
              ),
              if (rows.isEmpty)
                BkButton(
                  label: text('Clear table filter', 'مسح تصفية الجدول'),
                  variant: BkButtonVariant.secondary,
                  onPressed: () => setState(filter.clear),
                ),
            ],
          ),
        ),
        card(
          text('Avatars and Images', 'الصور الرمزية والصور'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Wrap(
                spacing: BkSpace.md,
                children: [
                  BkAvatar(
                    label: text('Bokrah restaurant', 'مطعم بكرة'),
                    initials: 'BK',
                  ),
                  BkAvatar(
                    label: text('Sample team member', 'عضو فريق تجريبي'),
                    initials: 'MA',
                  ),
                ],
              ),
              const SizedBox(height: BkSpace.lg),
              BkImage(
                image: imageFailed
                    ? MemoryImage(Uint8List(0))
                    : const AssetImage('assets/dining-room.png')
                          as ImageProvider,
                label: text(
                  'Illustration of two restaurant table settings',
                  'رسم توضيحي لطاولتين في مطعم',
                ),
                loadingLabel: text('Loading illustration', 'تحميل الرسم'),
                errorLabel: text(
                  'Image could not be displayed.',
                  'تعذر عرض الصورة.',
                ),
              ),
              const SizedBox(height: BkSpace.md),
              BkButton(
                label: text(
                  imageFailed ? 'Restore sample image' : 'Preview image error',
                  imageFailed
                      ? 'استعادة الصورة التجريبية'
                      : 'معاينة خطأ الصورة',
                ),
                variant: BkButtonVariant.secondary,
                onPressed: () => setState(() => imageFailed = !imageFailed),
              ),
            ],
          ),
        ),
        card(
          text('Badges and Tags', 'الشارات والوسوم'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Wrap(
                spacing: BkSpace.sm,
                runSpacing: BkSpace.sm,
                children: [
                  BkBadge(label: text('Paid', 'مدفوع'), tone: BkTone.success),
                  BkBadge(
                    label: text('Pending', 'قيد الانتظار'),
                    tone: BkTone.warning,
                  ),
                  for (var i = 0; i < 2; i++)
                    if (!removedTags.contains(i))
                      BkTag(
                        label: [
                          text('Lunch', 'غداء'),
                          text('Takeaway', 'طلبات خارجية'),
                        ][i],
                        deleteLabel: text('Remove tag', 'إزالة الوسم'),
                        onDeleted: () => setState(() => removedTags.add(i)),
                      ),
                ],
              ),
              BkButton(
                label: text('Restore tags', 'استعادة الوسوم'),
                variant: BkButtonVariant.secondary,
                onPressed: () => setState(removedTags.clear),
              ),
            ],
          ),
        ),
        card(
          text('Tooltips and Popovers', 'التلميحات والنوافذ التوضيحية'),
          Wrap(
            spacing: BkSpace.md,
            runSpacing: BkSpace.md,
            children: [
              BkTooltip(
                label: text('Illustrative data only.', 'بيانات توضيحية فقط.'),
                child: OutlinedButton(
                  onPressed: () => preview(
                    text('This is sample data.', 'هذه بيانات تجريبية.'),
                  ),
                  child: Text(text('About this sample', 'عن هذا المثال')),
                ),
              ),
              BkPopover(
                label: text('Open metric details', 'افتح تفاصيل المؤشر'),
                title: text('How to read this metric', 'كيف تقرأ هذا المؤشر'),
                message: text(
                  'Values and comparison periods come from the application. The details appear in an anchored, nonmodal popover.',
                  'القيم وفترات المقارنة من التطبيق. تظهر التفاصيل في نافذة توضيحية مرتبطة بالزر.',
                ),
                closeLabel: text('Close metric details', 'إغلاق تفاصيل المؤشر'),
              ),
            ],
          ),
        ),
        card(
          text('Accordion / Expansion Panel', 'لوحات التوسيع'),
          Column(
            children: [
              BkAccordion(
                title: text('Transaction details', 'تفاصيل المعاملة'),
                children: [
                  Text(
                    text(
                      'Reference BK-001 · Sample record.',
                      'المرجع BK-001 · سجل تجريبي.',
                    ),
                  ),
                ],
              ),
              BkAccordion(
                title: text('Display rules', 'قواعد العرض'),
                children: [
                  Text(
                    text(
                      'Expanded content remains accessible.',
                      'يبقى المحتوى الموسع متاحاً.',
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
        card(
          text('Timeline', 'التسلسل الزمني'),
          BkTimeline(
            entries: [
              BkTimelineEntry(
                title: text('Shift opened', 'بداية الوردية'),
                detail: text('Sample morning activity.', 'نشاط صباحي تجريبي.'),
                time: '09:00',
              ),
              BkTimelineEntry(
                title: text('Lunch service recorded', 'تسجيل خدمة الغداء'),
                detail: text('Illustrative transaction.', 'معاملة توضيحية.'),
                time: '12:30',
              ),
              BkTimelineEntry(
                title: text('Daily review', 'مراجعة اليوم'),
                detail: text(
                  'No production records changed.',
                  'لم تتغير سجلات فعلية.',
                ),
                time: '18:00',
              ),
            ],
          ),
        ),
        card(
          text('Charts and Statistics', 'المخططات والإحصاءات'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              BkBarChart(
                label: text(
                  'Sample orders by day · count',
                  'الطلبات التجريبية حسب اليوم · عدد',
                ),
                emptyLabel: text('No chart data', 'لا توجد بيانات للمخطط'),
                values: [
                  for (var i = 0; i < 5; i++)
                    BkChartValue(
                      label: [
                        text('Monday', 'الاثنين'),
                        text('Tuesday', 'الثلاثاء'),
                        text('Wednesday', 'الأربعاء'),
                        text('Thursday', 'الخميس'),
                        text('Friday', 'الجمعة'),
                      ][i],
                      value: [120.0, 80.0, 160.0, 100.0, 0.0][i],
                      displayValue: ['120', '80', '160', '100', '0'][i],
                    ),
                ],
              ),
              Text(
                text(
                  'Total: 460 sample orders. Maximum: 160.',
                  'الإجمالي: 460 طلباً تجريبياً. الحد الأقصى: 160.',
                ),
              ),
            ],
          ),
        ),
        card(
          text('KPI Cards', 'بطاقات مؤشرات الأداء'),
          Wrap(
            spacing: BkSpace.lg,
            runSpacing: BkSpace.lg,
            children: [
              SizedBox(
                width: 260,
                child: BkKpiCard(
                  label: text('Today’s sales · JOD', 'مبيعات اليوم · دينار'),
                  value: '1,240.00',
                  comparison: text(
                    '+12% vs previous sample day',
                    'زيادة 12٪ مقارنة باليوم التجريبي السابق',
                  ),
                  comparisonTone: BkTone.success,
                ),
              ),
              SizedBox(
                width: 260,
                child: BkKpiCard(
                  label: text('Expenses · JOD', 'المصروفات · دينار'),
                  value: '380.00',
                  comparison: text(
                    '8 sample transactions',
                    '8 معاملات تجريبية',
                  ),
                ),
              ),
            ],
          ),
        ),
        card(
          text('Empty State and No Results', 'الحالة الفارغة وعدم وجود نتائج'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              BkEmptyState(
                title: text('No transactions yet', 'لا توجد معاملات بعد'),
                message: text(
                  'A new account has no activity.',
                  'الحساب الجديد بلا نشاط.',
                ),
              ),
              BkTextField(
                label: text(
                  'Search example categories',
                  'ابحث في الفئات التجريبية',
                ),
                controller: search,
                onChanged: (_) => setState(() {}),
              ),
              if (matches.isEmpty)
                BkNoResults(
                  title: text('No results', 'لا توجد نتائج'),
                  message: text(
                    'Nothing matches the current search. Your data is still there.',
                    'لا شيء يطابق البحث الحالي. بياناتك ما زالت موجودة.',
                  ),
                  clearLabel: text('Clear search', 'مسح البحث'),
                  onClear: () => setState(search.clear),
                )
              else
                for (final match in matches) BkListTile(title: match),
            ],
          ),
        ),
        const SizedBox(height: BkSpace.xxl),
      ],
    );
  }
}
