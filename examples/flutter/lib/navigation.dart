import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

class NavigationCatalogue extends StatefulWidget {
  const NavigationCatalogue({super.key, required this.arabic});
  final bool arabic;
  @override
  State<NavigationCatalogue> createState() => _NavigationCatalogueState();
}

class _NavigationCatalogueState extends State<NavigationCatalogue> {
  int selected = 0, page = 1, step = 0;
  String text(String en, String ar) => widget.arabic ? ar : en;
  void select(int index) => setState(() => selected = index);
  void action(String value) => BkToast.show(
    context,
    message:
        text('Selected action: ', 'الإجراء المختار: ') +
        ({
              'view': text('View details', 'عرض التفاصيل'),
              'copy': text('Copy reference preview', 'معاينة نسخ المرجع'),
            }[value] ??
            value),
  );
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
  @override
  Widget build(BuildContext context) {
    final items = [
      BkNavigationItem(
        label: text('Overview', 'نظرة عامة'),
        icon: Icons.dashboard_outlined,
      ),
      BkNavigationItem(
        label: text('Transactions', 'المعاملات'),
        icon: Icons.receipt_long_outlined,
      ),
      BkNavigationItem(
        label: text('Reports', 'التقارير'),
        icon: Icons.bar_chart_outlined,
      ),
    ];
    final actions = [
      BkMenuAction(value: 'view', label: text('View details', 'عرض التفاصيل')),
      BkMenuAction(
        value: 'copy',
        label: text('Copy reference preview', 'معاينة نسخ المرجع'),
      ),
      BkMenuAction(
        value: 'export',
        label: text('Export unavailable', 'التصدير غير متاح'),
        enabled: false,
      ),
    ];
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          text('3. Navigation Components', '3. مكونات التنقل'),
          style: Theme.of(context).textTheme.headlineMedium,
        ),
        const SizedBox(height: BkSpace.lg),
        card(
          text('App Bar / Header', 'شريط التطبيق / الترويسة'),
          SizedBox(
            height: 64,
            child: BkAppBar(
              title: 'Bokrah',
              primary: false,
              leading: BkBackButton(
                label: text('Back preview', 'معاينة الرجوع'),
                onPressed: () => BkToast.show(
                  context,
                  message: text('Back action preview.', 'معاينة إجراء الرجوع.'),
                ),
              ),
              actions: [
                BkIconButton(
                  label: text('Help', 'مساعدة'),
                  icon: Icons.help_outline,
                  onPressed: () => BkToast.show(
                    context,
                    message: text('Help preview.', 'معاينة المساعدة.'),
                  ),
                ),
              ],
            ),
          ),
        ),
        card(
          text('Navigation Bar', 'شريط التنقل'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              BkNavigationBar(
                items: items,
                selectedIndex: selected,
                onSelected: select,
              ),
              Text(items[selected].label),
            ],
          ),
        ),
        card(
          text('Sidebar / Navigation Drawer', 'الشريط الجانبي / درج التنقل'),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              BkSidebar(
                label: text('Workspace', 'مساحة العمل'),
                items: items,
                selectedIndex: selected,
                onSelected: select,
              ),
              const SizedBox(height: BkSpace.md),
              BkButton(
                label: text('Open drawer preview', 'افتح معاينة الدرج'),
                variant: BkButtonVariant.secondary,
                onPressed: () => Navigator.of(context).push(
                  MaterialPageRoute<void>(
                    builder: (context) => Scaffold(
                      appBar: BkAppBar(
                        title: text('Drawer preview', 'معاينة الدرج'),
                      ),
                      drawer: BkNavigationDrawer(
                        label: text('Workspace', 'مساحة العمل'),
                        items: items,
                        selectedIndex: selected,
                        onSelected: (index) {
                          select(index);
                          Navigator.of(context).pop();
                          Navigator.of(context).pop();
                        },
                      ),
                      body: Center(
                        child: Text(
                          text(
                            'Open the menu in the app bar.',
                            'افتح القائمة في شريط التطبيق.',
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
        card(
          text('Bottom Navigation', 'التنقل السفلي'),
          BkBottomNavigation(
            items: items,
            selectedIndex: selected,
            onSelected: select,
          ),
        ),
        card(
          text('Tabs', 'علامات التبويب'),
          DefaultTabController(
            length: 3,
            child: Builder(
              builder: (context) {
                final controller = DefaultTabController.of(context);
                return Column(
                  children: [
                    BkTabs(
                      controller: controller,
                      labels: items.map((item) => item.label).toList(),
                    ),
                    SizedBox(
                      height: 120,
                      child: TabBarView(
                        controller: controller,
                        children: [
                          for (final item in items)
                            Center(child: Text(item.label)),
                        ],
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
        card(
          text('Breadcrumbs', 'مسار التنقل'),
          BkBreadcrumbs(
            items: [
              BkBreadcrumb(
                label: text('Workspace', 'مساحة العمل'),
                onPressed: () => BkToast.show(
                  context,
                  message: text('Workspace preview.', 'معاينة مساحة العمل.'),
                ),
              ),
              BkBreadcrumb(
                label: text('Reports', 'التقارير'),
                onPressed: () => select(2),
              ),
              BkBreadcrumb(label: text('Daily summary', 'الملخص اليومي')),
            ],
          ),
        ),
        card(
          text('Pagination', 'ترقيم الصفحات'),
          BkPagination(
            page: page,
            pageCount: 5,
            label: text('Page $page of 5', 'الصفحة $page من 5'),
            previousLabel: text('Previous page', 'الصفحة السابقة'),
            nextLabel: text('Next page', 'الصفحة التالية'),
            onChanged: (value) => setState(() => page = value),
          ),
        ),
        card(
          text('Stepper', 'خطوات المهمة'),
          BkStepper(
            currentStep: step,
            onStepTapped: (index) => setState(() => step = index),
            onContinue: step < 2 ? () => setState(() => step++) : null,
            onCancel: step > 0 ? () => setState(() => step--) : null,
            steps: [
              for (var i = 0; i < 3; i++)
                Step(
                  title: Text(
                    [
                      text('Details', 'التفاصيل'),
                      text('Review', 'المراجعة'),
                      text('Complete', 'الإكمال'),
                    ][i],
                  ),
                  content: Text(
                    text(
                      'Example only. No records are saved.',
                      'مثال فقط. لا تُحفظ سجلات.',
                    ),
                  ),
                  isActive: i == step,
                  state: i < step ? StepState.complete : StepState.indexed,
                ),
            ],
          ),
        ),
        card(
          text('Dropdown Menu', 'قائمة منسدلة'),
          BkDropdownMenu<String>(
            label: text('Open actions menu', 'افتح قائمة الإجراءات'),
            actions: actions,
            onSelected: action,
          ),
        ),
        card(
          text('Context Menu', 'قائمة السياق'),
          BkContextMenu<String>(
            label: text('Transaction actions', 'إجراءات المعاملة'),
            actions: actions,
            onSelected: action,
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.all(BkSpace.xl),
              color: Theme.of(context).colorScheme.surfaceContainerLow,
              child: Text(
                text(
                  'Sample transaction: right-click, long press, or use the visible actions menu.',
                  'معاملة تجريبية: انقر بزر الفأرة الأيمن أو اضغط مطولاً أو استخدم قائمة الإجراءات الظاهرة.',
                ),
              ),
            ),
          ),
        ),
        card(
          text('Back Button', 'زر الرجوع'),
          BkBackButton(
            label: text('Back preview', 'معاينة الرجوع'),
            onPressed: () => BkToast.show(
              context,
              message: text(
                'Consumer chooses history or a safe fallback.',
                'يختار التطبيق السجل أو وجهة رجوع صالحة.',
              ),
            ),
          ),
        ),
        const SizedBox(height: BkSpace.xxl),
      ],
    );
  }
}
