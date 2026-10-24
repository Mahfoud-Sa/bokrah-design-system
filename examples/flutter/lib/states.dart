import 'dart:async';
import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

class StatesCatalogue extends StatefulWidget {
  const StatesCatalogue({super.key, required this.arabic});
  final bool arabic;
  @override
  State<StatesCatalogue> createState() => _StatesCatalogueState();
}

class _StatesCatalogueState extends State<StatesCatalogue> {
  final amount = TextEditingController(text: '0'),
      name = TextEditingController(text: 'Bokrah'),
      reference = TextEditingController(text: 'BK-2026-001');
  bool busy = false, completed = false, selected = true, nameValid = true;
  bool? amountValid = false;
  Timer? timer;
  String t(String en, String ar) => widget.arabic ? ar : en;
  @override
  void dispose() {
    timer?.cancel();
    amount.dispose();
    name.dispose();
    reference.dispose();
    super.dispose();
  }

  Widget sample(String title, String description, Widget child) => Padding(
    padding: const EdgeInsets.only(bottom: BkSpace.xl),
    child: BkCard(
      child: BkColumn(
        children: [
          BkSectionHeader(title: title, description: description),
          child,
        ],
      ),
    ),
  );
  @override
  Widget build(BuildContext context) => BkColumn(
    children: [
      BkSectionHeader(
        title: t('6. Component States', '٦. حالات المكونات'),
        description: t(
          'Use pointer, keyboard and touch. State belongs to the application.',
          'استخدم المؤشر ولوحة المفاتيح واللمس. يدير التطبيق الحالة.',
        ),
      ),
      sample(
        t('Default', 'افتراضي'),
        t('Normal appearance', 'المظهر الطبيعي'),
        BkButton(
          label: t('Preview default action', 'معاينة الإجراء الافتراضي'),
          onPressed: () => BkToast.show(
            context,
            message: t('Preview activated.', 'تم تفعيل المعاينة.'),
          ),
        ),
      ),
      sample(
        t('Hover', 'التحويم'),
        t(
          'Move a mouse pointer over this action. Touch has no hover.',
          'مرر مؤشر الفأرة فوق الإجراء. اللمس لا يتضمن التحويم.',
        ),
        BkButton(
          label: t('Hover this control', 'مرر المؤشر فوق الزر'),
          variant: BkButtonVariant.secondary,
          onPressed: () => BkToast.show(
            context,
            message: t('Hover preview activated.', 'تم تفعيل معاينة التحويم.'),
          ),
        ),
      ),
      sample(
        t('Focused', 'التركيز'),
        t(
          'Use Tab or Shift+Tab to focus this action.',
          'استخدم Tab أو Shift+Tab للتركيز على الزر.',
        ),
        BkButton(
          label: t('Focus this control', 'ركز على هذا الزر'),
          variant: BkButtonVariant.secondary,
          onPressed: () => BkToast.show(
            context,
            message: t(
              'Focused action activated.',
              'تم تفعيل الإجراء المركّز.',
            ),
          ),
        ),
      ),
      sample(
        t('Pressed', 'الضغط'),
        t(
          'Press and hold, then release to activate.',
          'اضغط باستمرار ثم ارفع يدك للتفعيل.',
        ),
        BkButton(
          label: t('Press and hold', 'اضغط باستمرار'),
          onPressed: () => BkToast.show(
            context,
            message: t('Pressed action activated.', 'تم تفعيل إجراء الضغط.'),
          ),
        ),
      ),
      sample(
        t('Disabled', 'معطل'),
        t(
          'Unavailable while the shift is closed.',
          'غير متاح عندما تكون الوردية مغلقة.',
        ),
        BkButton(label: t('Unavailable action', 'إجراء غير متاح')),
      ),
      sample(
        t('Loading', 'التحميل'),
        t(
          'Processing an operation; repeated activation is blocked.',
          'معالجة عملية؛ يُمنع التفعيل المتكرر.',
        ),
        BkColumn(
          children: [
            BkButton(
              label: busy
                  ? t('Processing…', 'جارٍ المعالجة…')
                  : t('Run sample operation', 'تشغيل عملية تجريبية'),
              loading: busy,
              loadingLabel: t(
                'Sample operation in progress',
                'العملية التجريبية قيد التنفيذ',
              ),
              onPressed: () {
                if (busy) return;
                setState(() {
                  busy = true;
                  completed = false;
                });
                timer = Timer(const Duration(milliseconds: 1200), () {
                  if (mounted)
                    setState(() {
                      busy = false;
                      completed = true;
                    });
                });
              },
            ),
            Semantics(
              liveRegion: true,
              child: Text(
                completed
                    ? t(
                        'Sample operation completed. No data saved.',
                        'اكتملت العملية التجريبية. لم تُحفظ بيانات.',
                      )
                    : busy
                    ? t(
                        'Sample operation in progress.',
                        'العملية التجريبية قيد التنفيذ.',
                      )
                    : t('Ready', 'جاهز'),
              ),
            ),
          ],
        ),
      ),
      sample(
        t('Error', 'خطأ'),
        t('Validation or operation failure', 'فشل التحقق أو العملية'),
        BkColumn(
          children: [
            BkTextField(
              label: t('Sample amount', 'المبلغ التجريبي'),
              controller: amount,
              keyboardType: const TextInputType.numberWithOptions(
                decimal: true,
              ),
              errorText: amountValid == false
                  ? t(
                      'Error: enter an amount greater than zero.',
                      'خطأ: أدخل مبلغاً أكبر من صفر.',
                    )
                  : null,
              successText: amountValid == true
                  ? t(
                      'Success: amount accepted for this preview.',
                      'نجاح: تم قبول المبلغ في المعاينة.',
                    )
                  : null,
              helperText: t(
                'Validate after changing the value.',
                'تحقق بعد تغيير القيمة.',
              ),
              onChanged: (_) => setState(() => amountValid = null),
            ),
            BkButton(
              label: t('Validate amount', 'التحقق من المبلغ'),
              onPressed: () => setState(() {
                final value = double.tryParse(amount.text);
                amountValid = value != null && value.isFinite && value > 0;
              }),
            ),
          ],
        ),
      ),
      sample(
        t('Success', 'نجاح'),
        t('Successful validation or operation', 'نجاح التحقق أو العملية'),
        BkTextField(
          label: t('Sample restaurant name', 'اسم المطعم التجريبي'),
          controller: name,
          successText: nameValid
              ? t('Success: name is valid.', 'نجاح: الاسم صالح.')
              : null,
          helperText: t(
            'Changed — validate again in your application.',
            'تم التغيير — تحقق مجدداً في التطبيق.',
          ),
          onChanged: (_) => setState(() => nameValid = false),
        ),
      ),
      sample(
        t('Selected', 'محدد'),
        t('Active or selected item', 'عنصر نشط أو محدد'),
        Align(
          alignment: AlignmentDirectional.centerStart,
          child: FilterChip(
            label: Text(t('Pin summary', 'تثبيت الملخص')),
            selected: selected,
            onSelected: (value) => setState(() => selected = value),
          ),
        ),
      ),
      sample(
        t('Read-only', 'للقراءة فقط'),
        t(
          'Visible and selectable, but not editable.',
          'ظاهر وقابل للتحديد دون تعديل.',
        ),
        BkTextField(
          label: t('Read-only reference', 'مرجع للقراءة فقط'),
          controller: reference,
          readOnly: true,
          helperText: t(
            'Focus and copy this value.',
            'يمكنك التركيز ونسخ القيمة.',
          ),
        ),
      ),
    ],
  );
}
