import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

class UIComponentsCatalogue extends StatefulWidget {
  const UIComponentsCatalogue({super.key, required this.arabic});
  final bool arabic;
  @override
  State<UIComponentsCatalogue> createState() => _UIComponentsCatalogueState();
}

class _UIComponentsCatalogueState extends State<UIComponentsCatalogue> {
  bool busy = false;
  double progress = .4;
  String text(String en, String ar) => widget.arabic ? ar : en;
  void toast(String message) => BkToast.show(context, message: message);
  Future<void> previewLoading() async {
    setState(() => busy = true);
    await Future<void>.delayed(const Duration(seconds: 1));
    if (!mounted) return;
    setState(() => busy = false);
    toast(text('Loading preview complete.', 'اكتملت معاينة التحميل.'));
  }

  Future<void> confirm() async {
    final result = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(
          text('Confirm example action?', 'هل تؤكد الإجراء التجريبي؟'),
        ),
        content: Text(text('No records will be deleted.', 'لن تُحذف سجلات.')),
        actions: [
          TextButton(
            autofocus: true,
            onPressed: () => Navigator.pop(context, false),
            child: Text(text('Cancel', 'إلغاء')),
          ),
          BkButton(
            label: text('Confirm preview', 'تأكيد المعاينة'),
            variant: BkButtonVariant.danger,
            onPressed: () => Navigator.pop(context, true),
          ),
        ],
      ),
    );
    if (mounted && result == true)
      toast(
        text(
          'Confirmation complete. Nothing was deleted.',
          'اكتمل التأكيد. لم يتم حذف شيء.',
        ),
      );
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        text('2. UI Components', '2. مكونات الواجهة'),
        style: Theme.of(context).textTheme.headlineMedium,
      ),
      const SizedBox(height: BkSpace.lg),
      BkCard(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              text('Buttons & Actions', 'الأزرار والإجراءات'),
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: BkSpace.lg),
            BkButtonGroup(
              label: text('Example actions', 'إجراءات تجريبية'),
              children: [
                BkButton(
                  label: text('Save example', 'حفظ المثال'),
                  onPressed: () =>
                      toast(text('Example saved.', 'تم حفظ المثال.')),
                ),
                BkButton(
                  label: text('Secondary action', 'إجراء ثانوي'),
                  variant: BkButtonVariant.secondary,
                  onPressed: () => toast(
                    text('Secondary preview.', 'معاينة الإجراء الثانوي.'),
                  ),
                ),
                BkButton(
                  label: text('More details', 'تفاصيل إضافية'),
                  variant: BkButtonVariant.tertiary,
                  onPressed: () => toast(
                    text(
                      'Use tertiary actions for lower emphasis.',
                      'استخدم الإجراء النصي للأولوية الأقل.',
                    ),
                  ),
                ),
                BkIconButton(
                  label: text('Add example', 'إضافة مثال'),
                  icon: Icons.add,
                  onPressed: () => toast(
                    text('Add action preview.', 'معاينة إجراء الإضافة.'),
                  ),
                ),
                BkButton(label: text('Unavailable', 'غير متاح')),
                BkButton(
                  label: text('Try loading', 'جرّب التحميل'),
                  loading: busy,
                  loadingLabel: text('Working', 'جارٍ التنفيذ'),
                  onPressed: previewLoading,
                ),
                BkButton(
                  label: text('Destructive confirmation', 'تأكيد الحذف'),
                  variant: BkButtonVariant.danger,
                  onPressed: confirm,
                ),
              ],
            ),
          ],
        ),
      ),
      const SizedBox(height: BkSpace.xl),
      BkCard(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              text('Feedback & Status', 'التنبيهات والحالة'),
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: BkSpace.lg),
            Wrap(
              spacing: BkSpace.sm,
              runSpacing: BkSpace.sm,
              children: [
                BkBadge(label: text('Complete', 'مكتمل'), tone: BkTone.success),
                BkBadge(
                  label: text('Needs review', 'يحتاج مراجعة'),
                  tone: BkTone.warning,
                ),
                BkBadge(
                  label: text('Could not save', 'تعذر الحفظ'),
                  tone: BkTone.danger,
                ),
                BkBadge(
                  label: text('Information', 'معلومة'),
                  tone: BkTone.info,
                ),
              ],
            ),
            const SizedBox(height: BkSpace.lg),
            for (final tone in [
              BkTone.success,
              BkTone.warning,
              BkTone.danger,
              BkTone.info,
            ])
              Padding(
                padding: const EdgeInsets.only(bottom: BkSpace.md),
                child: BkAlert(
                  title: text(
                    {
                      'success': 'Complete',
                      'warning': 'Needs review',
                      'danger': 'Could not save',
                      'info': 'Information',
                    }[tone.name]!,
                    {
                      'success': 'مكتمل',
                      'warning': 'يحتاج مراجعة',
                      'danger': 'تعذر الحفظ',
                      'info': 'معلومة',
                    }[tone.name]!,
                  ),
                  message: text(
                    'Persistent feedback includes a clear explanation.',
                    'تنبيه مستمر يتضمن تفسيراً واضحاً.',
                  ),
                  tone: tone,
                ),
              ),
            BkButton(
              label: text('Show toast', 'عرض إشعار'),
              variant: BkButtonVariant.secondary,
              onPressed: () => toast(
                text(
                  'Changes are ready for review.',
                  'التغييرات جاهزة للمراجعة.',
                ),
              ),
            ),
            const SizedBox(height: BkSpace.xl),
            BkProgress(
              label: text('Example import progress', 'تقدم الاستيراد التجريبي'),
              value: progress,
            ),
            const SizedBox(height: BkSpace.md),
            BkButton(
              label: text('Advance progress', 'زيادة التقدم'),
              variant: BkButtonVariant.secondary,
              onPressed: () => setState(
                () =>
                    progress = progress >= 1 ? 0 : (progress + .2).clamp(0, 1),
              ),
            ),
            const SizedBox(height: BkSpace.xl),
            Semantics(
              label: text('Loading transactions', 'جارٍ تحميل المعاملات'),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  BkSkeleton(),
                  SizedBox(height: BkSpace.sm),
                  BkSkeleton(width: 180),
                  SizedBox(height: BkSpace.sm),
                  BkSkeleton(width: 120),
                ],
              ),
            ),
            const SizedBox(height: BkSpace.lg),
            BkEmptyState(
              title: text('No transactions yet', 'لا توجد معاملات بعد'),
              message: text(
                'Your first transaction will appear here.',
                'ستظهر معاملتك الأولى هنا.',
              ),
              action: BkButton(
                label: text('Create example', 'إنشاء مثال'),
                variant: BkButtonVariant.secondary,
                onPressed: () => toast(
                  text('Create action preview.', 'معاينة إجراء الإنشاء.'),
                ),
              ),
            ),
            Text(
              text(
                'Persistent alerts for important errors; toasts for brief informational feedback. Loading placeholders are decorative.',
                'تنبيهات مستمرة للأخطاء المهمة وإشعارات للمعلومات العابرة. عناصر التحميل زخرفية.',
              ),
            ),
          ],
        ),
      ),
      const SizedBox(height: BkSpace.xxl),
    ],
  );
}
