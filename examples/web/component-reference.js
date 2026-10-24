// Generated component reference; do not edit.
export const referenceSections = [{"id":"description","en":"Component name and description","ar":"اسم المكون ووصفه"},{"id":"usage","en":"Usage guidelines","ar":"إرشادات الاستخدام"},{"id":"variants","en":"Variants and sizes","ar":"الأنواع والأحجام"},{"id":"api","en":"Properties / API parameters","ar":"الخصائص ومعاملات الواجهة"},{"id":"states","en":"States and interactions","ar":"الحالات والتفاعلات"},{"id":"accessibility","en":"Accessibility requirements","ar":"متطلبات إمكانية الوصول"},{"id":"responsive","en":"Responsive behavior","ar":"السلوك المتجاوب"},{"id":"rtl","en":"RTL and localization","ar":"دعم العربية والترجمة"},{"id":"examples","en":"Code implementation examples","ar":"أمثلة التنفيذ البرمجي"},{"id":"guidance","en":"Do’s and Don’ts","ar":"ما يُنصح به وما يجب تجنبه"}];
export const componentReference = [
  {
    "id": "button",
    "name": {
      "en": "Button",
      "ar": "الزر"
    },
    "symbol": "BkButton",
    "file": "components.dart",
    "web": ".bk-button",
    "family": "action",
    "description": {
      "en": "A labelled command with optional icon and busy feedback.",
      "ar": "إجراء مسمى مع رمز اختياري ومؤشر انشغال."
    },
    "usage": {
      "en": "Use one primary action for the main task; use secondary/tertiary for alternatives and danger for destructive commands.",
      "ar": "استخدم إجراءً أساسياً للمهمة الرئيسية وثانوياً أو نصياً للبدائل وخطراً للإجراءات الحذفية."
    },
    "variants": {
      "en": "primary (default), secondary, tertiary, danger. No size parameter; minimum target 48px.",
      "ar": "أساسي افتراضياً وثانوي ونصي وخطر. لا يوجد معامل حجم؛ مساحة اللمس الدنيا ٤٨ بكسل."
    },
    "states": {
      "en": "Native default/hover/focus/pressed; onPressed=null disables. loading=true suppresses the callback and exposes loadingLabel (default Loading) in a live semantic region. No selected/error/success/read-only parameters. Web loading combines disabled, aria-busy and a persistent status message.",
      "ar": "حالات تفاعل أصلية؛ تعطل onPressed الفارغة الزر. يمنع loading التفعيل ويعلن loadingLabel. لا توجد معاملات للتحديد أو الخطأ أو النجاح أو القراءة فقط. على الويب يجتمع disabled مع aria-busy ورسالة حالة."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkButton(label: 'Save', onPressed: () {})",
      "web": "<button type=\"button\" class=\"bk-button\">Save</button>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep a specific verb and a clear hierarchy.",
        "ar": "استخدم فعلاً محدداً وتسلسلاً واضحاً للأهمية."
      },
      "dont": {
        "en": "Do not use color alone to explain destructive intent.",
        "ar": "لا تعتمد على اللون وحده لتوضيح الحذف."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkButton extends StatelessWidget\nconst BkButton({\n    super.key,\n    required this.label,\n    this.onPressed,\n    this.icon,\n    this.loading = false,\n    this.loadingLabel = 'Loading',\n    this.variant = BkButtonVariant.primary,\n  });\nfinal String label;\nfinal VoidCallback? onPressed;\nfinal IconData? icon;\nfinal bool loading;\nfinal String loadingLabel;\nfinal BkButtonVariant variant;",
      "support": "enum BkButtonVariant { primary, secondary, tertiary, danger }",
      "web": ".bk-button",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 9,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L9"
    }
  },
  {
    "id": "icon-button",
    "name": {
      "en": "Icon Button",
      "ar": "زر الأيقونة"
    },
    "symbol": "BkIconButton",
    "file": "actions_feedback.dart",
    "web": ".bk-icon-button",
    "family": "action",
    "description": {
      "en": "A named, icon-only outlined action.",
      "ar": "إجراء محدد الاسم يعرض أيقونة ضمن إطار."
    },
    "usage": {
      "en": "Use for familiar compact actions such as add or close, with an explicit accessible label.",
      "ar": "للإجراءات المألوفة الموجزة كالإضافة والإغلاق مع تسمية واضحة."
    },
    "variants": {
      "en": "Outlined Flutter control; 48×48px minimum. No variant, size or loading property.",
      "ar": "زر بإطار في فلاتر؛ حد أدنى ٤٨×٤٨ بكسل دون معامل نوع أو حجم أو تحميل."
    },
    "states": {
      "en": "Default, hover, focus and pressed use native controls. A null Flutter callback/native HTML disabled blocks activation. Loading, validation and selection are available only where explicitly listed; visual attributes alone are not authorization.",
      "ar": "تعتمد الحالات الافتراضية والتحويم والتركيز والضغط على التحكم الأصلي. تمنع callback فارغة أو disabled التفعيل. يتوفر التحميل والتحقق والتحديد فقط حيث يُذكر صراحة؛ المظهر ليس تحققاً من الصلاحية."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkIconButton(label: 'Add record', icon: Icons.add, onPressed: () {})",
      "web": "<button type=\"button\" class=\"bk-button bk-icon-button\" aria-label=\"Add record\">+</button>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Name the action, not the icon shape.",
        "ar": "سمِّ الإجراء لا شكل الأيقونة."
      },
      "dont": {
        "en": "Do not depend on a tooltip as the only visible explanation for an unfamiliar icon.",
        "ar": "لا تجعل التلميح الشرح الوحيد لأيقونة غير مألوفة."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkIconButton extends StatelessWidget\nconst BkIconButton({\n    super.key,\n    required this.label,\n    required this.icon,\n    this.onPressed,\n  });\nfinal String label;\nfinal IconData icon;\nfinal VoidCallback? onPressed;",
      "support": "",
      "web": ".bk-icon-button",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/actions_feedback.dart",
      "line": 7,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/actions_feedback.dart#L7"
    }
  },
  {
    "id": "button-group",
    "name": {
      "en": "Button Group",
      "ar": "مجموعة الأزرار"
    },
    "symbol": "BkButtonGroup",
    "file": "actions_feedback.dart",
    "web": ".bk-button-group",
    "family": "action",
    "description": {
      "en": "A wrapping group of related independent actions.",
      "ar": "مجموعة ملتفة من إجراءات مستقلة ذات علاقة."
    },
    "usage": {
      "en": "Use for related commands with ordinary Tab navigation; not a segmented single-selection control.",
      "ar": "للأوامر ذات العلاقة مع تنقل Tab العادي وليست أداة اختيار مفرد."
    },
    "variants": {
      "en": "One wrapping layout, 8px gap; child button variants remain independent.",
      "ar": "تخطيط ملتف بفجوة ٨ بكسل؛ أنواع الأزرار الداخلية مستقلة."
    },
    "states": {
      "en": "The wrapper has no state; each child owns enabled/loading/pressed/selected behavior.",
      "ar": "لا حالة للمجموعة؛ يدير كل عنصر حالاته الخاصة."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkButtonGroup(label: 'Record actions', children: [BkButton(label: 'Save', onPressed: () {})])",
      "web": "<div class=\"bk-button-group\" role=\"group\" aria-label=\"Record actions\"><button class=\"bk-button\" type=\"button\">Save</button></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Give the group a useful name.",
        "ar": "امنح المجموعة اسماً مفيداً."
      },
      "dont": {
        "en": "Do not apply toolbar arrow-key behavior without implementing a toolbar.",
        "ar": "لا تطبق تنقل الأسهم الخاص بشريط الأدوات دون تنفيذ شريط أدوات."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkButtonGroup extends StatelessWidget\nconst BkButtonGroup({super.key, required this.label, required this.children});\nfinal String label;\nfinal List<Widget> children;",
      "support": "",
      "web": ".bk-button-group",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/actions_feedback.dart",
      "line": 27,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/actions_feedback.dart#L27"
    }
  },
  {
    "id": "text-field",
    "name": {
      "en": "Text Field",
      "ar": "حقل النص"
    },
    "symbol": "BkTextField",
    "file": "components.dart",
    "web": ".bk-input / .bk-field",
    "family": "action",
    "description": {
      "en": "A labelled text input with helper, error, success and read-only presentation.",
      "ar": "إدخال نص مسمى مع إرشادات وخطأ ونجاح ووضع قراءة فقط."
    },
    "usage": {
      "en": "Use for short editable values. Application code owns parsing, validation, controller lifetime and sensitive-input configuration.",
      "ar": "للقيم القصيرة القابلة للتحرير؛ يدير التطبيق التحليل والتحقق وعمر controller وضبط الإدخال الحساس."
    },
    "variants": {
      "en": "Single-line native field; no size or password variant. Flutter wrapper does not expose obscureText; use a properly configured native TextField for passwords.",
      "ar": "حقل أصلي أحادي السطر؛ لا أنواع حجم أو كلمة مرور. لا يعرض الغلاف obscureText؛ استخدم TextField مضبوطاً لكلمات المرور."
    },
    "states": {
      "en": "enabled=false disables. readOnly=true keeps focus/selection but prevents editing. errorText wins over successText; success shows a check icon and helper text. onChanged does not validate automatically. Web uses readonly/disabled, aria-invalid + aria-describedby, and data-bk-validation=success plus success text.",
      "ar": "يعطّل enabled=false الحقل. تحافظ readOnly على التركيز والتحديد دون تحرير. يتقدم errorText على successText. لا تنفذ onChanged تحققاً تلقائياً. على الويب استخدم readonly وdisabled وaria-invalid وربط الإرشاد ونص نجاح واضح."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkTextField(label: 'Restaurant name', helperText: 'Used in your profile', onChanged: (value) {})",
      "web": "<label for=\"doc-name\">Restaurant name</label>\n<input id=\"doc-name\" class=\"bk-input\" aria-describedby=\"doc-name-help\">\n<span id=\"doc-name-help\" class=\"bk-helper\">Used in your profile</span>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Associate persistent helper/error text with the field and clear stale validation after editing.",
        "ar": "اربط الإرشادات والخطأ بالحقل وامسح نتيجة التحقق القديمة عند التعديل."
      },
      "dont": {
        "en": "Do not use placeholder text as the only label or use disabled instead of read-only.",
        "ar": "لا تستبدل التسمية بـ placeholder ولا القراءة فقط بالتعطيل."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkTextField extends StatelessWidget\nconst BkTextField({\n    super.key,\n    required this.label,\n    this.controller,\n    this.helperText,\n    this.errorText,\n    this.successText,\n    this.readOnly = false,\n    this.onChanged,\n    this.enabled = true,\n    this.keyboardType,\n  });\nfinal String label;\nfinal TextEditingController? controller;\nfinal String? helperText;\nfinal String? errorText;\nfinal String? successText;\nfinal bool readOnly;\nfinal ValueChanged<String>? onChanged;\nfinal bool enabled;\nfinal TextInputType? keyboardType;",
      "support": "",
      "web": ".bk-input / .bk-field",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 140,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L140"
    }
  },
  {
    "id": "card",
    "name": {
      "en": "Card",
      "ar": "البطاقة"
    },
    "symbol": "BkCard",
    "file": "components.dart",
    "web": ".bk-card",
    "family": "display",
    "description": {
      "en": "A Material surface grouping related content.",
      "ar": "سطح Material يجمع محتوى ذا علاقة."
    },
    "usage": {
      "en": "Use to group a single topic; compose named actions inside rather than making arbitrary content clickable.",
      "ar": "لجمع موضوع واحد؛ أضف إجراءات مسماة داخله بدلاً من جعل المحتوى كله قابلاً للنقر."
    },
    "variants": {
      "en": "Default or tinted; default padding 24px and 12px radius. No size presets.",
      "ar": "عادية أو ملونة؛ حشوة افتراضية ٢٤ بكسل ونصف قطر ١٢ بكسل دون أحجام جاهزة."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkCard(tinted: true, child: Text('Daily summary'))",
      "web": "<article class=\"bk-card bk-card--tinted\"><h3>Daily summary</h3><p>Sample content</p></article>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use an appropriate heading when the card starts a section.",
        "ar": "استخدم عنواناً مناسباً عندما تبدأ البطاقة قسماً."
      },
      "dont": {
        "en": "Do not add button roles to a passive surface.",
        "ar": "لا تضف دور زر إلى سطح عرض ساكن."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkCard extends StatelessWidget\nconst BkCard({\n    super.key,\n    required this.child,\n    this.padding = const EdgeInsets.all(BkSpace.xl),\n    this.tinted = false,\n  });\nfinal Widget child;\nfinal EdgeInsetsGeometry padding;\nfinal bool tinted;",
      "support": "",
      "web": ".bk-card",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 80,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L80"
    }
  },
  {
    "id": "badge",
    "name": {
      "en": "Badge",
      "ar": "الشارة"
    },
    "symbol": "BkBadge",
    "file": "components.dart",
    "web": ".bk-badge",
    "family": "display",
    "description": {
      "en": "A small textual status marker.",
      "ar": "مؤشر حالة نصي صغير."
    },
    "usage": {
      "en": "Use for concise status beside its related record; not as a command.",
      "ar": "لحالة موجزة بجوار سجلها وليست أمراً."
    },
    "variants": {
      "en": "neutral, success, warning, danger, info tones. No size parameter; badge uses 12px text.",
      "ar": "درجات محايدة ونجاح وتحذير وخطر ومعلومة. لا معامل حجم؛ نص الشارة ١٢ بكسل."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkBadge(label: 'Paid', tone: BkTone.success)",
      "web": "<span class=\"bk-badge bk-tone-success\">Paid</span>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Pair color with clear words.",
        "ar": "اجمع اللون مع كلمات واضحة."
      },
      "dont": {
        "en": "Do not announce static content repeatedly or use color as the only signal.",
        "ar": "لا تعلن المحتوى الثابت باستمرار ولا تعتمد على اللون وحده."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkBadge extends StatelessWidget\nconst BkBadge({super.key, required this.label, this.tone = BkTone.neutral});\nfinal String label;\nfinal BkTone tone;",
      "support": "enum BkTone { neutral, success, warning, danger, info }",
      "web": ".bk-badge",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 110,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L110"
    }
  },
  {
    "id": "alert",
    "name": {
      "en": "Alert",
      "ar": "التنبيه"
    },
    "symbol": "BkAlert",
    "file": "components.dart",
    "web": ".bk-alert",
    "family": "display",
    "description": {
      "en": "Persistent inline feedback with an icon, title and message.",
      "ar": "تنبيه مستمر ضمن الصفحة مع رمز وعنوان ورسالة."
    },
    "usage": {
      "en": "Use for important success, warning, error or information that must remain visible.",
      "ar": "لرسالة نجاح أو تحذير أو خطأ أو معلومة تحتاج البقاء ظاهرة."
    },
    "variants": {
      "en": "neutral, success, warning, danger, info tones. No size parameter; badge uses 12px text.",
      "ar": "درجات محايدة ونجاح وتحذير وخطر ومعلومة. لا معامل حجم؛ نص الشارة ١٢ بكسل."
    },
    "states": {
      "en": "The tone is supplied by the caller, not inferred. BkAlert does not automatically create a live region; consumers choose appropriate live announcements for actual changes.",
      "ar": "يوفر المستدعي درجة التنبيه ولا تُستنتج تلقائياً. لا ينشئ BkAlert منطقة إعلان تلقائية؛ يختار التطبيق الإعلان المناسب للتغييرات الفعلية."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkAlert(title: 'Review required', message: 'Check the sample details.', tone: BkTone.warning)",
      "web": "<div class=\"bk-alert bk-tone-warning\"><strong>Review required</strong><p>Check the sample details.</p></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Pair color with clear words.",
        "ar": "اجمع اللون مع كلمات واضحة."
      },
      "dont": {
        "en": "Do not announce static content repeatedly or use color as the only signal.",
        "ar": "لا تعلن المحتوى الثابت باستمرار ولا تعتمد على اللون وحده."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkAlert extends StatelessWidget\nconst BkAlert({\n    super.key,\n    required this.title,\n    required this.message,\n    this.tone = BkTone.info,\n  });\nfinal String title;\nfinal String message;\nfinal BkTone tone;",
      "support": "enum BkTone { neutral, success, warning, danger, info }",
      "web": ".bk-alert",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 186,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L186"
    }
  },
  {
    "id": "progress",
    "name": {
      "en": "Progress",
      "ar": "التقدم"
    },
    "symbol": "BkProgress",
    "file": "actions_feedback.dart",
    "web": ".bk-progress",
    "family": "display",
    "description": {
      "en": "Named determinate or indeterminate operation progress.",
      "ar": "تقدم عملية مسماة بقيمة محددة أو غير محددة."
    },
    "usage": {
      "en": "Use during an operation with meaningful progress; supply null when completion cannot be measured.",
      "ar": "أثناء عملية ذات تقدم مفيد؛ استخدم null عندما لا يمكن قياس الإنجاز."
    },
    "variants": {
      "en": "Flutter value null or fraction 0–1; 8px bar. HTML progress uses explicit max (example 100).",
      "ar": "قيمة فلاتر null أو نسبة بين ٠ و١؛ شريط ٨ بكسل. يحدد HTML قيمة max صراحة."
    },
    "states": {
      "en": "Loading display only. Null value is indeterminate; finite values must be between 0 and 1. Completion/error text comes from the owning operation.",
      "ar": "عرض تحميل فقط. null للتقدم غير المحدد؛ القيمة بين ٠ و١. توفر العملية نص الاكتمال أو الخطأ."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkProgress(label: 'Import progress', value: .4)",
      "web": "<label for=\"doc-progress\">Import progress</label><progress id=\"doc-progress\" class=\"bk-progress\" max=\"100\" value=\"40\">40%</progress>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Name the operation and show real measured values.",
        "ar": "سمِّ العملية واعرض قيماً مقاسة فعلياً."
      },
      "dont": {
        "en": "Do not report fake percentages or imply completion from an elapsed timer.",
        "ar": "لا تعرض نسباً وهمية ولا تستنتج الاكتمال من الوقت فقط."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkProgress extends StatelessWidget\nconst BkProgress({super.key, required this.label, this.value})\n    : assert(value == null || (value >= 0 && value <= 1));\nfinal String label;\nfinal double? value;",
      "support": "",
      "web": ".bk-progress",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/actions_feedback.dart",
      "line": 43,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/actions_feedback.dart#L43"
    }
  },
  {
    "id": "skeleton",
    "name": {
      "en": "Skeleton",
      "ar": "الهيكل المؤقت"
    },
    "symbol": "BkSkeleton",
    "file": "actions_feedback.dart",
    "web": ".bk-skeleton",
    "family": "display",
    "description": {
      "en": "A decorative placeholder for content that is loading.",
      "ar": "عنصر مؤقت زخرفي أثناء تحميل المحتوى."
    },
    "usage": {
      "en": "Use when the approximate layout is known; expose one parent loading description.",
      "ar": "عندما يكون التخطيط التقريبي معروفاً؛ وفّر وصف تحميل واحداً للحاوية."
    },
    "variants": {
      "en": "Optional width; height defaults to 16px. Web animation respects reduced motion; Flutter is static.",
      "ar": "عرض اختياري وارتفاع افتراضي ١٦ بكسل. تحترم حركة الويب تقليل الحركة؛ فلاتر ثابت."
    },
    "states": {
      "en": "Loading placeholder only; the owning view replaces it on success/error. BkSkeleton excludes its own semantics.",
      "ar": "عنصر تحميل فقط؛ تستبدله الواجهة عند النجاح أو الخطأ ويستبعد BkSkeleton دلالاته الخاصة."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkSkeleton(width: 160, height: 16)",
      "web": "<div role=\"status\" aria-label=\"Loading records\"><span class=\"bk-skeleton\" aria-hidden=\"true\"></span></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep the placeholder hidden from individual semantic announcements.",
        "ar": "أخفِ العناصر المؤقتة عن الإعلان الدلالي الفردي."
      },
      "dont": {
        "en": "Do not expose each decorative bar as a separate loading control.",
        "ar": "لا تجعل كل شريط زخرفي عنصراً منفصلاً يعلن التحميل."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkSkeleton extends StatelessWidget\nconst BkSkeleton({super.key, this.width, this.height = BkSpace.lg});\nfinal double? width;\nfinal double height;",
      "support": "",
      "web": ".bk-skeleton",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/actions_feedback.dart",
      "line": 67,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/actions_feedback.dart#L67"
    }
  },
  {
    "id": "toast",
    "name": {
      "en": "Toast",
      "ar": "الرسالة العائمة"
    },
    "symbol": "BkToast",
    "file": "actions_feedback.dart",
    "web": ".bk-toast",
    "family": "overlay",
    "description": {
      "en": "Dismissible transient feedback presented through ScaffoldMessenger.",
      "ar": "رسالة مؤقتة قابلة للإغلاق عبر ScaffoldMessenger."
    },
    "usage": {
      "en": "Use for low-priority operation feedback; keep important failures in persistent alerts.",
      "ar": "لنتيجة عملية منخفضة الأهمية؛ أبقِ الأخطاء المهمة في تنبيهات مستمرة."
    },
    "variants": {
      "en": "BkTone variants; Flutter duration defaults to 8 seconds. Web example persists until dismissed; CSS alone supplies no timer or behavior.",
      "ar": "درجات BkTone؛ مدة فلاتر الافتراضية ٨ ثوانٍ. مثال الويب يبقى حتى الإغلاق؛ CSS وحده لا يوفر مؤقتاً أو سلوكاً."
    },
    "states": {
      "en": "show hides the previous Flutter SnackBar, then returns ScaffoldFeatureController<SnackBar, SnackBarClosedReason>. Visible/dismissed states are native. Web consumers implement close/timing; no bindBokrahToast API exists.",
      "ar": "تخفي show الرسالة السابقة ثم تعيد ScaffoldFeatureController. حالات الإظهار والإغلاق أصلية. ينفذ مستهلك الويب الإغلاق والتوقيت؛ لا توجد bindBokrahToast."
    },
    "accessibility": {
      "en": "Announce a meaningful operation result without stealing keyboard focus. Native SnackBar provides its feedback semantics and close icon. Web consumers name the close button and choose role=status/live timing; keep critical feedback persistent elsewhere.",
      "ar": "أعلن نتيجة مفيدة دون سحب التركيز. يوفر SnackBar الأصلي دلالاته وزر إغلاقه. يسمّي مستهلك الويب زر الإغلاق ويحدد إعلان الحالة وتوقيته؛ تبقى النتائج الحرجة متاحة في موضع مستمر."
    },
    "responsive": {
      "en": "Constrain the surface to the viewport, account for safe areas/keyboard insets and scroll long content. Avoid a fixed height that hides the close action.",
      "ar": "احصر السطح داخل الشاشة وراعِ المناطق الآمنة ومساحة لوحة المفاتيح ومرّر المحتوى الطويل. تجنب ارتفاعاً ثابتاً يخفي زر الإغلاق."
    },
    "rtl": {
      "en": "Translate the message and web close action. Flutter uses its Material localizations for the close icon; configure the application locale/delegates. Web positioning uses logical inline end.",
      "ar": "ترجم الرسالة وزر إغلاق الويب. تستخدم فلاتر ترجمة Material لزر الإغلاق؛ اضبط لغة التطبيق ومفوضات الترجمة. يستخدم الويب النهاية المنطقية للموضع."
    },
    "examples": {
      "flutter": "BkToast.show(context, message: 'Sample saved');",
      "web": "<div class=\"bk-toast bk-card\" role=\"status\"><p>Sample saved</p><button type=\"button\" aria-label=\"Dismiss message\">×</button></div>",
      "kind": "statement"
    },
    "guidance": {
      "do": {
        "en": "Provide a close action and keep critical information available elsewhere.",
        "ar": "وفّر إغلاقاً وأبقِ المعلومات الحرجة متاحة في موضع آخر."
      },
      "dont": {
        "en": "Do not use a transient toast as the only validation error.",
        "ar": "لا تجعل الرسالة المؤقتة خطأ التحقق الوحيد."
      }
    },
    "kind": "statement",
    "version": "0.10.0",
    "api": {
      "flutter": "// BkToast\nstatic ScaffoldFeatureController<SnackBar, SnackBarClosedReason> show(\n    BuildContext context, {\n    required String message,\n    BkTone tone = BkTone.info,\n    Duration duration = const Duration(seconds: 8),\n  });",
      "support": "enum BkTone { neutral, success, warning, danger, info }",
      "web": ".bk-toast",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/actions_feedback.dart",
      "line": 84,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/actions_feedback.dart#L84"
    }
  },
  {
    "id": "stat-card",
    "name": {
      "en": "Statistic Card",
      "ar": "بطاقة الإحصاء"
    },
    "symbol": "BkStatCard",
    "file": "components.dart",
    "web": ".bk-stat",
    "family": "display",
    "description": {
      "en": "A labelled, preformatted numeric statistic.",
      "ar": "إحصاء رقمي مسمى ومنسق مسبقاً."
    },
    "usage": {
      "en": "Use for a simple metric with optional detail; use KPI Card when a comparison is required.",
      "ar": "لمؤشر بسيط مع تفصيل اختياري؛ استخدم بطاقة KPI عند الحاجة لمقارنة."
    },
    "variants": {
      "en": "Default/tinted, optional detail. No size parameter; value uses heading typography.",
      "ar": "عادية أو ملونة مع تفصيل اختياري؛ لا معامل حجم وتستخدم القيمة خط العنوان."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Labels/details inherit direction. Flutter value is explicitly LTR, so supply a numeric/identifier value and keep translated units in detail. Web bdi isolates numeric values.",
      "ar": "تتبع التسمية والتفصيل الاتجاه. قيمة فلاتر باتجاه LTR صراحة؛ ضع الأرقام أو المعرّفات فيها والوحدات المترجمة في التفصيل. يعزل bdi قيم الويب."
    },
    "examples": {
      "flutter": "BkStatCard(label: 'Sales', value: '240.00', detail: 'JOD · sample')",
      "web": "<div class=\"bk-card bk-stat\"><span class=\"bk-stat__label\">Sales</span><bdi class=\"bk-stat__value\">240.00</bdi><span class=\"bk-stat__detail\">JOD · sample</span></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Supply units and already-formatted values.",
        "ar": "وفّر الوحدة والقيمة المنسقة مسبقاً."
      },
      "dont": {
        "en": "Do not treat this widget as a calculator or audited report.",
        "ar": "لا تعتبر المكون آلة حساب أو تقريراً مدققاً."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkStatCard extends StatelessWidget\nconst BkStatCard({\n    super.key,\n    required this.label,\n    required this.value,\n    this.detail,\n    this.tinted = false,\n  });\nfinal String label;\nfinal String value;\nfinal String? detail;\nfinal bool tinted;",
      "support": "",
      "web": ".bk-stat",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 240,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L240"
    }
  },
  {
    "id": "empty-state",
    "name": {
      "en": "Empty State",
      "ar": "الحالة الفارغة"
    },
    "symbol": "BkEmptyState",
    "file": "components.dart",
    "web": ".bk-empty",
    "family": "display",
    "description": {
      "en": "Explains a collection with no content yet and an optional next action.",
      "ar": "شرح لمجموعة لم تُضف إليها بيانات بعد مع إجراء اختياري."
    },
    "usage": {
      "en": "Use for a new empty account/collection; use No Results when filtering hides existing content.",
      "ar": "لحساب أو مجموعة جديدة فارغة؛ استخدم «لا نتائج» عندما تخفي التصفية بيانات موجودة."
    },
    "variants": {
      "en": "Title, message, optional action slot. Fixed inset 32px, no size variants.",
      "ar": "عنوان ورسالة وإجراء اختياري مع حشوة ٣٢ بكسل ودون أنواع حجم."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkEmptyState(title: 'No records yet', message: 'Create your first record.', action: BkButton(label: 'Create', onPressed: () {}))",
      "web": "<section class=\"bk-empty\"><h3>No records yet</h3><p>Create your first record.</p><button class=\"bk-button\" type=\"button\">Create</button></section>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Explain the first useful next step.",
        "ar": "وضّح أول خطوة مفيدة."
      },
      "dont": {
        "en": "Do not show an empty state while content is still loading.",
        "ar": "لا تعرض الحالة الفارغة بينما لا يزال المحتوى قيد التحميل."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkEmptyState extends StatelessWidget\nconst BkEmptyState({\n    super.key,\n    required this.title,\n    required this.message,\n    this.action,\n  });\nfinal String title;\nfinal String message;\nfinal Widget? action;",
      "support": "",
      "web": ".bk-empty",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/components.dart",
      "line": 279,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/components.dart#L279"
    }
  },
  {
    "id": "app-bar",
    "name": {
      "en": "App Bar / Header",
      "ar": "شريط التطبيق"
    },
    "symbol": "BkAppBar",
    "file": "navigation.dart",
    "web": ".bk-app-bar",
    "family": "navigation",
    "description": {
      "en": "A page title with optional leading and action slots.",
      "ar": "عنوان صفحة مع عناصر بداية وإجراءات اختيارية."
    },
    "usage": {
      "en": "Use as the route-level appBar; avoid duplicate banner landmarks in embedded previews.",
      "ar": "استخدمه في appBar للصفحة وتجنب تكرار معلم رأس الصفحة في المعاينات."
    },
    "variants": {
      "en": "Native toolbar preferred height. primary defaults true; no size/variant parameter.",
      "ar": "ارتفاع شريط الأدوات الأصلي وprimary=true افتراضياً؛ لا معامل حجم أو نوع."
    },
    "states": {
      "en": "The bar is structural; child actions own their states. Title does not imply an interactive destination.",
      "ar": "الشريط هيكلي؛ تدير الإجراءات الداخلية حالاتها ولا يعد العنوان وجهة تفاعلية."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Wrap destinations when appropriate; preserve minimum touch targets and provide scrolling or a drawer for constrained screens. Test long translated labels.",
      "ar": "اسمح بالتفاف الوجهات عند الحاجة وحافظ على مساحات اللمس؛ استخدم التمرير أو درج التنقل للشاشات الضيقة واختبر النصوص المترجمة الطويلة."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkPageScaffold(appBar: BkAppBar(title: 'Records', actions: [BkIconButton(label: 'Add', icon: Icons.add, onPressed: () {})]), body: Text('Records'))",
      "web": "<header class=\"bk-app-bar\"><h1>Records</h1><button class=\"bk-button\" type=\"button\">Add record</button></header>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep the route title and global actions concise.",
        "ar": "اجعل عنوان الصفحة والإجراءات العامة موجزة."
      },
      "dont": {
        "en": "Do not place a second route Scaffold inside the app bar.",
        "ar": "لا تضع Scaffold آخر داخل شريط التطبيق."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkAppBar extends StatelessWidget implements PreferredSizeWidget\nconst BkAppBar({\n    super.key,\n    required this.title,\n    this.leading,\n    this.actions = const [],\n    this.primary = true,\n  });\nfinal String title;\nfinal Widget? leading;\nfinal bool primary;\nfinal List<Widget> actions;",
      "support": "",
      "web": ".bk-app-bar",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 10,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L10"
    }
  },
  {
    "id": "navigation-bar",
    "name": {
      "en": "Navigation Bar",
      "ar": "شريط التنقل"
    },
    "symbol": "BkNavigationBar",
    "file": "navigation.dart",
    "web": ".bk-navigation-bar",
    "family": "navigation",
    "description": {
      "en": "Wrapping horizontal destination choices.",
      "ar": "خيارات وجهات أفقية قابلة للالتفاف."
    },
    "usage": {
      "en": "Use for a small set of peer destinations at the same hierarchy.",
      "ar": "لمجموعة صغيرة من الوجهات النظيرة."
    },
    "variants": {
      "en": "One component style; no size presets. Selection is controlled by selectedIndex/onSelected.",
      "ar": "نمط واحد دون أحجام جاهزة؛ يدير selectedIndex وonSelected التحديد."
    },
    "states": {
      "en": "Selected index is application-controlled. Current Flutter wrappers do not expose per-item disabled/loading/read-only parameters; handle unavailable destinations in the surrounding app. Web destinations use aria-current and genuine links.",
      "ar": "يتحكم التطبيق بالفهرس المحدد. لا توفر أغلفة فلاتر الحالية تعطيل عنصر أو تحميله أو وضع القراءة فقط؛ يدير التطبيق الوجهات غير المتاحة. تستخدم روابط الويب aria-current."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Flutter uses Wrap; web links wrap. Do not force many destinations into one small row.",
      "ar": "تستخدم فلاتر Wrap وتلتف روابط الويب؛ لا تحشر وجهات كثيرة في صف ضيق."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkNavigationBar(items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) {})",
      "web": "<nav class=\"bk-navigation-bar\" aria-label=\"Workspace\"><a class=\"bk-nav-link\" href=\"#overview\" aria-current=\"page\">Overview</a><a class=\"bk-nav-link\" href=\"#records\">Records</a></nav>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep selectedIndex within the nonempty item list and route from onSelected.",
        "ar": "أبقِ selectedIndex ضمن قائمة غير فارغة ونفّذ التنقل من onSelected."
      },
      "dont": {
        "en": "Do not assume the component owns routes or per-destination authorization.",
        "ar": "لا تفترض أن المكون يدير المسارات أو صلاحيات الوجهات."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkNavigationBar extends StatelessWidget\nconst BkNavigationBar({\n    super.key,\n    required this.items,\n    required this.selectedIndex,\n    required this.onSelected,\n  }) : assert(selectedIndex >= 0 && selectedIndex < items.length);\nfinal List<BkNavigationItem> items;\nfinal int selectedIndex;\nfinal ValueChanged<int> onSelected;",
      "support": "// class BkNavigationItem\nconst BkNavigationItem({required this.label, required this.icon});\nfinal String label;\nfinal IconData icon;",
      "web": ".bk-navigation-bar",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 33,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L33"
    }
  },
  {
    "id": "sidebar",
    "name": {
      "en": "Sidebar",
      "ar": "الشريط الجانبي"
    },
    "symbol": "BkSidebar",
    "file": "navigation.dart",
    "web": ".bk-sidebar",
    "family": "navigation",
    "description": {
      "en": "A labelled vertical destination list.",
      "ar": "قائمة وجهات عمودية مسماة."
    },
    "usage": {
      "en": "Use on wide screens with persistent route context.",
      "ar": "للشاشات الواسعة مع إبقاء سياق الوجهة ظاهراً."
    },
    "variants": {
      "en": "One component style; no size presets. Selection is controlled by selectedIndex/onSelected.",
      "ar": "نمط واحد دون أحجام جاهزة؛ يدير selectedIndex وonSelected التحديد."
    },
    "states": {
      "en": "Selected index is application-controlled. Current Flutter wrappers do not expose per-item disabled/loading/read-only parameters; handle unavailable destinations in the surrounding app. Web destinations use aria-current and genuine links.",
      "ar": "يتحكم التطبيق بالفهرس المحدد. لا توفر أغلفة فلاتر الحالية تعطيل عنصر أو تحميله أو وضع القراءة فقط؛ يدير التطبيق الوجهات غير المتاحة. تستخدم روابط الويب aria-current."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Place long menus in a bounded scroll region; the Flutter sidebar itself is a non-scrolling Column.",
      "ar": "ضع القوائم الطويلة داخل تمرير محدود؛ الشريط الجانبي في فلاتر Column لا يدير التمرير بنفسه."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkSidebar(label: 'Workspace', items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) {})",
      "web": "<nav class=\"bk-sidebar\" aria-label=\"Workspace\"><a class=\"bk-nav-link\" href=\"#overview\" aria-current=\"page\">Overview</a><a class=\"bk-nav-link\" href=\"#records\">Records</a></nav>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep selectedIndex within the nonempty item list and route from onSelected.",
        "ar": "أبقِ selectedIndex ضمن قائمة غير فارغة ونفّذ التنقل من onSelected."
      },
      "dont": {
        "en": "Do not assume the component owns routes or per-destination authorization.",
        "ar": "لا تفترض أن المكون يدير المسارات أو صلاحيات الوجهات."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkSidebar extends StatelessWidget\nconst BkSidebar({\n    super.key,\n    required this.label,\n    required this.items,\n    required this.selectedIndex,\n    required this.onSelected,\n  }) : assert(selectedIndex >= 0 && selectedIndex < items.length);\nfinal String label;\nfinal List<BkNavigationItem> items;\nfinal int selectedIndex;\nfinal ValueChanged<int> onSelected;",
      "support": "// class BkNavigationItem\nconst BkNavigationItem({required this.label, required this.icon});\nfinal String label;\nfinal IconData icon;",
      "web": ".bk-sidebar",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 67,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L67"
    }
  },
  {
    "id": "navigation-drawer",
    "name": {
      "en": "Navigation Drawer",
      "ar": "درج التنقل"
    },
    "symbol": "BkNavigationDrawer",
    "file": "navigation.dart",
    "web": ".bk-drawer",
    "family": "navigation",
    "description": {
      "en": "An on-demand navigation surface.",
      "ar": "سطح تنقل يظهر عند الطلب."
    },
    "usage": {
      "en": "Use instead of a persistent sidebar when width is constrained. Caller closes the Flutter drawer after selection.",
      "ar": "بديل للشريط الجانبي عند ضيق العرض؛ يغلق المستدعي درج فلاتر بعد الاختيار."
    },
    "variants": {
      "en": "One component style; no size presets. Selection is controlled by selectedIndex/onSelected.",
      "ar": "نمط واحد دون أحجام جاهزة؛ يدير selectedIndex وonSelected التحديد."
    },
    "states": {
      "en": "Selected index is application-controlled. Current Flutter wrappers do not expose per-item disabled/loading/read-only parameters; handle unavailable destinations in the surrounding app. Web destinations use aria-current and genuine links.",
      "ar": "يتحكم التطبيق بالفهرس المحدد. لا توفر أغلفة فلاتر الحالية تعطيل عنصر أو تحميله أو وضع القراءة فقط؛ يدير التطبيق الوجهات غير المتاحة. تستخدم روابط الويب aria-current."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Flutter Drawer uses SafeArea and a scrolling menu. Web drawer is at most 340px/90vw and scrolls vertically.",
      "ar": "يستخدم درج فلاتر SafeArea وقائمة قابلة للتمرير. يبلغ درج الويب ٣٤٠ بكسل أو ٩٠٪ من العرض كحد أقصى ويمرر عمودياً."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkPageScaffold(appBar: BkAppBar(title: 'Records'), drawer: BkNavigationDrawer(label: 'Workspace', items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) { Navigator.of(context).maybePop(); }), body: Text('Records'))",
      "web": "<button id=\"doc-drawer-open\" type=\"button\">Open navigation</button>\n<dialog id=\"doc-drawer\" class=\"bk-modal bk-drawer\" aria-label=\"Workspace\"><nav class=\"bk-sidebar\" aria-label=\"Workspace\"><a class=\"bk-nav-link\" href=\"#overview\">Overview</a></nav><button data-bk-close type=\"button\">Close navigation</button></dialog>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep selectedIndex within the nonempty item list and route from onSelected.",
        "ar": "أبقِ selectedIndex ضمن قائمة غير فارغة ونفّذ التنقل من onSelected."
      },
      "dont": {
        "en": "Do not assume the component owns routes or per-destination authorization.",
        "ar": "لا تفترض أن المكون يدير المسارات أو صلاحيات الوجهات."
      }
    },
    "webBindings": [
      "bindBokrahModal"
    ],
    "javascript": "const destroy = bindBokrahModal(document.querySelector('#doc-drawer-open'), document.querySelector('#doc-drawer'));\n// Call destroy() before removing the trigger/dialog.",
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkNavigationDrawer extends StatelessWidget\nconst BkNavigationDrawer({\n    super.key,\n    required this.label,\n    required this.items,\n    required this.selectedIndex,\n    required this.onSelected,\n  });\nfinal String label;\nfinal List<BkNavigationItem> items;\nfinal int selectedIndex;\nfinal ValueChanged<int> onSelected;",
      "support": "// class BkNavigationItem\nconst BkNavigationItem({required this.label, required this.icon});\nfinal String label;\nfinal IconData icon;",
      "web": ".bk-drawer",
      "bindings": "export declare function bindBokrahModal(trigger: HTMLElement, dialog: HTMLDialogElement): () => void;"
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 106,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L106"
    }
  },
  {
    "id": "bottom-navigation",
    "name": {
      "en": "Bottom Navigation",
      "ar": "التنقل السفلي"
    },
    "symbol": "BkBottomNavigation",
    "file": "navigation.dart",
    "web": ".bk-bottom-navigation",
    "family": "navigation",
    "description": {
      "en": "Persistent primary destinations at the bottom edge.",
      "ar": "وجهات أساسية مستمرة في أسفل الصفحة."
    },
    "usage": {
      "en": "Use for a few frequently visited peer destinations, not sequential form steps.",
      "ar": "لوجهات نظيرة يتكرر استخدامها وليست خطوات نموذج متسلسلة."
    },
    "variants": {
      "en": "One component style; no size presets. Selection is controlled by selectedIndex/onSelected.",
      "ar": "نمط واحد دون أحجام جاهزة؛ يدير selectedIndex وonSelected التحديد."
    },
    "states": {
      "en": "Selected index is application-controlled. Current Flutter wrappers do not expose per-item disabled/loading/read-only parameters; handle unavailable destinations in the surrounding app. Web destinations use aria-current and genuine links.",
      "ar": "يتحكم التطبيق بالفهرس المحدد. لا توفر أغلفة فلاتر الحالية تعطيل عنصر أو تحميله أو وضع القراءة فقط؛ يدير التطبيق الوجهات غير المتاحة. تستخدم روابط الويب aria-current."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Flutter requires at least two items; preserve native target sizes. Web wraps; consider a drawer if labels/destinations no longer fit.",
      "ar": "تتطلب فلاتر عنصرين على الأقل مع الحفاظ على مساحات اللمس. يلتف الويب؛ استخدم درجاً عند عدم ملاءمة الوجهات والنصوص."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkBottomNavigation(items: const [BkNavigationItem(label: 'Overview', icon: Icons.home_outlined), BkNavigationItem(label: 'Records', icon: Icons.receipt_outlined)], selectedIndex: 0, onSelected: (index) {})",
      "web": "<nav class=\"bk-bottom-navigation\" aria-label=\"Primary\"><a class=\"bk-nav-link\" href=\"#overview\" aria-current=\"page\">Overview</a><a class=\"bk-nav-link\" href=\"#records\">Records</a></nav>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep selectedIndex within the nonempty item list and route from onSelected.",
        "ar": "أبقِ selectedIndex ضمن قائمة غير فارغة ونفّذ التنقل من onSelected."
      },
      "dont": {
        "en": "Do not assume the component owns routes or per-destination authorization.",
        "ar": "لا تفترض أن المكون يدير المسارات أو صلاحيات الوجهات."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkBottomNavigation extends StatelessWidget\nconst BkBottomNavigation({\n    super.key,\n    required this.items,\n    required this.selectedIndex,\n    required this.onSelected,\n  }) : assert(items.length >= 2),\n       assert(selectedIndex >= 0 && selectedIndex < items.length);\nfinal List<BkNavigationItem> items;\nfinal int selectedIndex;\nfinal ValueChanged<int> onSelected;",
      "support": "// class BkNavigationItem\nconst BkNavigationItem({required this.label, required this.icon});\nfinal String label;\nfinal IconData icon;",
      "web": ".bk-bottom-navigation",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 133,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L133"
    }
  },
  {
    "id": "tabs",
    "name": {
      "en": "Tabs",
      "ar": "علامات التبويب"
    },
    "symbol": "BkTabs",
    "file": "navigation.dart",
    "web": ".bk-tab-list / .bk-tab / .bk-tab-panel",
    "family": "navigation",
    "description": {
      "en": "Switches related content panels within one context.",
      "ar": "تبديل لوحات محتوى مترابطة ضمن سياق واحد."
    },
    "usage": {
      "en": "Use for peer panels, with TabBarView sharing the same Flutter controller.",
      "ar": "للوحات النظيرة مع TabBarView يستخدم controller نفسه في فلاتر."
    },
    "variants": {
      "en": "Scrollable native TabBar; no size or per-tab disabled property in BkTabs.",
      "ar": "TabBar أصلي قابل للتمرير؛ لا معامل حجم أو تعطيل تبويب في BkTabs."
    },
    "states": {
      "en": "Web binding uses roving tab stops, arrows (RTL aware), Home/End and automatic selection of preloaded panels; disabled/aria-disabled tabs cannot be selected. Flutter uses its controller; BkTabs has no per-tab disabled API. Panel loading/errors belong to the app.",
      "ar": "يدير ربط الويب Tab والأسهم باتجاه العربية وHome وEnd واختيار اللوحات المحملة مسبقاً؛ لا يُحدد التبويب المعطل. يستخدم فلاتر controller ولا يوفر BkTabs تعطيل تبويب منفرد. يدير التطبيق تحميل اللوحات وأخطاءها."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Wrap destinations when appropriate; preserve minimum touch targets and provide scrolling or a drawer for constrained screens. Test long translated labels.",
      "ar": "اسمح بالتفاف الوجهات عند الحاجة وحافظ على مساحات اللمس؛ استخدم التمرير أو درج التنقل للشاشات الضيقة واختبر النصوص المترجمة الطويلة."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "DefaultTabController(length: 2, child: Builder(builder: (context) => Column(mainAxisSize: MainAxisSize.min, children: [BkTabs(controller: DefaultTabController.of(context), labels: const ['Overview', 'Records']), const SizedBox(height: 120, child: TabBarView(children: [Text('Overview'), Text('Records')]))])))",
      "web": "<div id=\"doc-tabs\"><div class=\"bk-tab-list\" role=\"tablist\" aria-label=\"Reports\"><button id=\"doc-tab-a\" class=\"bk-tab\" type=\"button\" role=\"tab\" aria-selected=\"true\" aria-controls=\"doc-panel-a\">Overview</button><button id=\"doc-tab-b\" class=\"bk-tab\" type=\"button\" role=\"tab\" aria-selected=\"false\" aria-controls=\"doc-panel-b\" tabindex=\"-1\">Records</button></div><div id=\"doc-panel-a\" class=\"bk-tab-panel\" role=\"tabpanel\" aria-labelledby=\"doc-tab-a\" tabindex=\"0\">Overview</div><div id=\"doc-panel-b\" class=\"bk-tab-panel\" role=\"tabpanel\" aria-labelledby=\"doc-tab-b\" tabindex=\"0\" hidden>Records</div></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Match controller length to labels and dispose caller-created controllers.",
        "ar": "طابق طول controller مع العناوين وتخلص من controller الذي تنشئه."
      },
      "dont": {
        "en": "Do not present tabs as route links without changing their semantics.",
        "ar": "لا تعرض التبويبات كروابط مسار دون تغيير دلالاتها."
      }
    },
    "webBindings": [
      "bindBokrahTabs"
    ],
    "javascript": "const destroy = bindBokrahTabs(document.querySelector('#doc-tabs'), {onChange: index => console.log(index)});\n// Call destroy() before removing this group.",
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkTabs extends StatelessWidget implements PreferredSizeWidget\nconst BkTabs({super.key, required this.controller, required this.labels})\n    : assert(controller.length == labels.length);\nfinal TabController controller;\nfinal List<String> labels;",
      "support": "",
      "web": ".bk-tab-list / .bk-tab / .bk-tab-panel",
      "bindings": "export function bindBokrahTabs(root:HTMLElement,options?:{onChange?:(index:number)=>void}):()=>void;"
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 156,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L156"
    }
  },
  {
    "id": "breadcrumbs",
    "name": {
      "en": "Breadcrumbs",
      "ar": "مسار التنقل"
    },
    "symbol": "BkBreadcrumbs",
    "file": "navigation.dart",
    "web": ".bk-breadcrumbs",
    "family": "navigation",
    "description": {
      "en": "An ordered hierarchy ending at the current location.",
      "ar": "تسلسل هرمي ينتهي بالموقع الحالي."
    },
    "usage": {
      "en": "Use to show ancestry, not browsing history or a task progress sequence.",
      "ar": "لتوضيح التسلسل الأعلى لا تاريخ التصفح أو تقدم المهمة."
    },
    "variants": {
      "en": "Wrapping links and passive current item; requires at least one BkBreadcrumb.",
      "ar": "روابط ملتفة وعنصر حالي ساكن؛ يتطلب BkBreadcrumb واحداً على الأقل."
    },
    "states": {
      "en": "Ancestor actions use native buttons in Flutter/links on web. The last Flutter item is selected text and ignores its onPressed. Null ancestor callbacks disable them.",
      "ar": "تستخدم العناصر السابقة أزرار فلاتر أو روابط الويب. العنصر الأخير في فلاتر نص محدد ويتجاهل onPressed. يعطل callback الفارغ عناصر الأسلاف."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Wrap destinations when appropriate; preserve minimum touch targets and provide scrolling or a drawer for constrained screens. Test long translated labels.",
      "ar": "اسمح بالتفاف الوجهات عند الحاجة وحافظ على مساحات اللمس؛ استخدم التمرير أو درج التنقل للشاشات الضيقة واختبر النصوص المترجمة الطويلة."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkBreadcrumbs(items: [BkBreadcrumb(label: 'Workspace', onPressed: () {}), const BkBreadcrumb(label: 'Records')])",
      "web": "<nav class=\"bk-breadcrumbs\" aria-label=\"Breadcrumb\"><ol><li><a href=\"#workspace\">Workspace</a></li><li aria-current=\"page\">Records</li></ol></nav>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Render the current location as text and name the navigation region.",
        "ar": "اعرض الموقع الحالي كنص وسمِّ منطقة التنقل."
      },
      "dont": {
        "en": "Do not derive ancestry from untrusted browser history.",
        "ar": "لا تستنتج التسلسل الهرمي من تاريخ متصفح غير موثوق."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkBreadcrumbs extends StatelessWidget\nconst BkBreadcrumbs({super.key, required this.items})\n    : assert(items.length > 0);\nfinal List<BkBreadcrumb> items;",
      "support": "// class BkBreadcrumb\nconst BkBreadcrumb({required this.label, this.onPressed});\nfinal String label;\nfinal VoidCallback? onPressed;",
      "web": ".bk-breadcrumbs",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 178,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L178"
    }
  },
  {
    "id": "pagination",
    "name": {
      "en": "Pagination",
      "ar": "ترقيم الصفحات"
    },
    "symbol": "BkPagination",
    "file": "navigation.dart",
    "web": ".bk-pagination",
    "family": "navigation",
    "description": {
      "en": "Controlled navigation through a bounded set of result pages.",
      "ar": "تنقل مضبوط بين صفحات نتائج محدودة."
    },
    "usage": {
      "en": "Use for stable page counts; reset/clamp the page when filtering or deleting records.",
      "ar": "لعدد صفحات معروف؛ أعد ضبط الصفحة أو قيدها بعد التصفية والحذف."
    },
    "variants": {
      "en": "Previous/Next and supplied localized page label; no numbered-page or size variant.",
      "ar": "السابق والتالي مع تسمية صفحة مترجمة؛ لا أنواع صفحات مرقمة أو حجم."
    },
    "states": {
      "en": "Boundary actions disable automatically in Flutter; onChanged emits a new page without mutating parent data. label is a live semantic region. Web consumers implement bounded page changes.",
      "ar": "تعطل فلاتر إجراءات الحدود تلقائياً؛ يصدر onChanged الصفحة الجديدة دون تعديل بيانات الأصل. label منطقة إعلان. ينفذ مستهلك الويب تغيير الصفحات ضمن الحدود."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Wrap destinations when appropriate; preserve minimum touch targets and provide scrolling or a drawer for constrained screens. Test long translated labels.",
      "ar": "اسمح بالتفاف الوجهات عند الحاجة وحافظ على مساحات اللمس؛ استخدم التمرير أو درج التنقل للشاشات الضيقة واختبر النصوص المترجمة الطويلة."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkPagination(page: 1, pageCount: 3, label: 'Page 1 of 3', previousLabel: 'Previous', nextLabel: 'Next', onChanged: (page) {})",
      "web": "<nav class=\"bk-pagination\" aria-label=\"Results pages\"><button class=\"bk-button bk-button--secondary\" type=\"button\" disabled>Previous</button><span role=\"status\">Page 1 of 3</span><button class=\"bk-button bk-button--secondary\" type=\"button\">Next</button></nav>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use pageCount greater than zero and page in 1…pageCount.",
        "ar": "استخدم pageCount أكبر من صفر وصفحة ضمن النطاق."
      },
      "dont": {
        "en": "Do not leave stale out-of-range pages after filtering.",
        "ar": "لا تترك الصفحة خارج النطاق بعد التصفية."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkPagination extends StatelessWidget\nconst BkPagination({\n    super.key,\n    required this.page,\n    required this.pageCount,\n    required this.label,\n    required this.previousLabel,\n    required this.nextLabel,\n    required this.onChanged,\n  }) : assert(pageCount > 0),\n       assert(page >= 1 && page <= pageCount);\nfinal int page, pageCount;\nfinal String label, previousLabel, nextLabel;\nfinal ValueChanged<int> onChanged;",
      "support": "",
      "web": ".bk-pagination",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 214,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L214"
    }
  },
  {
    "id": "stepper",
    "name": {
      "en": "Stepper",
      "ar": "مؤشر الخطوات"
    },
    "symbol": "BkStepper",
    "file": "navigation.dart",
    "web": ".bk-stepper",
    "family": "navigation",
    "description": {
      "en": "A controlled sequence of task steps and their content.",
      "ar": "تسلسل مضبوط لخطوات مهمة ومحتواها."
    },
    "usage": {
      "en": "Use for multi-step tasks with a clear order and validation gates.",
      "ar": "للمهام متعددة الخطوات ذات الترتيب الواضح والتحقق قبل التقدم."
    },
    "variants": {
      "en": "Native vertical Flutter Stepper; web ordered progress indicator. No size/type parameter.",
      "ar": "Stepper عمودي أصلي في فلاتر ومؤشر مرتب على الويب؛ لا معامل حجم أو نوع."
    },
    "states": {
      "en": "currentStep is controlled and must index steps. Optional callbacks handle step taps/continue/cancel; Step state and enabled controls are supplied through native Step objects. Web indicator itself is passive.",
      "ar": "currentStep مضبوط ويجب أن يشير إلى خطوة موجودة. تدير callbacks الاختيارية النقر والمتابعة والإلغاء؛ توفر كائنات Step الحالات. المؤشر على الويب ساكن."
    },
    "accessibility": {
      "en": "Give the navigation region a localized name and expose the current item with role-appropriate selected/current semantics. Keep focus visible and use genuine destinations or buttons.",
      "ar": "سمِّ منطقة التنقل باسم مترجم وحدد العنصر الحالي بدلالات selected أو current المناسبة. حافظ على التركيز المرئي واستخدم روابط أو أزراراً حقيقية."
    },
    "responsive": {
      "en": "Wrap destinations when appropriate; preserve minimum touch targets and provide scrolling or a drawer for constrained screens. Test long translated labels.",
      "ar": "اسمح بالتفاف الوجهات عند الحاجة وحافظ على مساحات اللمس؛ استخدم التمرير أو درج التنقل للشاشات الضيقة واختبر النصوص المترجمة الطويلة."
    },
    "rtl": {
      "en": "Translate destination labels, inherit RTL and mirror directional navigation cues. Selection and route IDs stay stable when language changes.",
      "ar": "ترجم أسماء الوجهات واتبع اتجاه العربية واعكس إشارات التنقل الاتجاهية. تبقى هوية الوجهة والتحديد مستقرة عند تبديل اللغة."
    },
    "examples": {
      "flutter": "BkStepper(steps: const [Step(title: Text('Details'), content: Text('Enter details')), Step(title: Text('Review'), content: Text('Review details'))], currentStep: 0, onContinue: () {}, onCancel: () {})",
      "web": "<ol class=\"bk-stepper\" aria-label=\"Record workflow\"><li aria-current=\"step\">1 Details</li><li>2 Review</li></ol>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep draft state above the steps and validate before advancing.",
        "ar": "احفظ المسودة أعلى الخطوات وتحقق قبل الانتقال."
      },
      "dont": {
        "en": "Do not mark the workflow complete before persistence succeeds.",
        "ar": "لا تعلن اكتمال العملية قبل نجاح الحفظ الفعلي."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkStepper extends StatelessWidget\nconst BkStepper({\n    super.key,\n    required this.steps,\n    required this.currentStep,\n    this.onStepTapped,\n    this.onContinue,\n    this.onCancel,\n  }) : assert(currentStep >= 0 && currentStep < steps.length);\nfinal List<Step> steps;\nfinal int currentStep;\nfinal ValueChanged<int>? onStepTapped;\nfinal VoidCallback? onContinue, onCancel;",
      "support": "",
      "web": ".bk-stepper",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 246,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L246"
    }
  },
  {
    "id": "dropdown-menu",
    "name": {
      "en": "Dropdown Menu",
      "ar": "القائمة المنسدلة"
    },
    "symbol": "BkDropdownMenu",
    "file": "navigation.dart",
    "web": ".bk-menu",
    "family": "overlay",
    "description": {
      "en": "A labelled trigger opening a list of commands.",
      "ar": "زر مسمى يفتح قائمة أوامر."
    },
    "usage": {
      "en": "Use for several secondary commands, not form-value selection.",
      "ar": "لعدة أوامر ثانوية لا لاختيار قيمة نموذج."
    },
    "variants": {
      "en": "Typed BkMenuAction<T> entries; no size or whole-trigger enabled parameter in the Flutter wrapper.",
      "ar": "عناصر BkMenuAction<T> محددة النوع؛ لا حجم أو معامل تعطيل زر الفتح في غلاف فلاتر."
    },
    "states": {
      "en": "Native open/closed and per-action enabled states in Flutter. Context menu supports secondary tap/long press plus visible dropdown. Web helper supports arrows, Home/End, typeahead, Escape, outside dismissal and focus return; aria-disabled menu items remain discoverable but cannot activate. Trigger disabled/aria-disabled blocks open.",
      "ar": "حالات فتح وإغلاق وتعطيل أوامر أصلية في فلاتر. تدعم قائمة السياق النقر الثانوي والضغط الطويل وزراً ظاهراً. يدعم الويب الأسهم وHome وEnd والبحث الحرفي وEscape والإغلاق الخارجي وعودة التركيز. تبقى العناصر ذات aria-disabled قابلة للاكتشاف دون تفعيل وتعطل حالة زر الفتح فتح القائمة."
    },
    "accessibility": {
      "en": "Name the trigger and command list. Web uses aria-haspopup/aria-expanded and menu/menuitem semantics with arrows, Home/End, typeahead and Escape; Tab closes the menu. Native Flutter popup menus provide their own focus model. Keep the visible fallback trigger for context menus.",
      "ar": "سمِّ زر الفتح وقائمة الأوامر. يستخدم الويب aria-haspopup وaria-expanded ودلالات menu وmenuitem مع الأسهم وHome وEnd والبحث الحرفي وEscape؛ يغلق Tab القائمة. تدير قوائم فلاتر التركيز أصلياً. أبقِ زر السياق البديل ظاهراً."
    },
    "responsive": {
      "en": "Web menu is clamped within viewport edges with a 70dvh maximum height and scrollable content. Native Flutter popup menus fit the overlay; keep labels short and test large text.",
      "ar": "تُحصر قائمة الويب داخل الشاشة بارتفاع أقصى 70dvh ومحتوى قابل للتمرير. تتكيف قائمة فلاتر مع الطبقة؛ اجعل العناوين موجزة واختبر النص المكبر."
    },
    "rtl": {
      "en": "Translate command labels. Web opening reads the trigger direction and positions relative to inline start/end; Flutter uses native directional placement. Command values remain stable IDs.",
      "ar": "ترجم عناوين الأوامر. يقرأ موضع الويب اتجاه زر الفتح وتستخدم فلاتر الموضع الاتجاهي الأصلي. تبقى قيم الأوامر معرّفات مستقرة."
    },
    "examples": {
      "flutter": "BkDropdownMenu<String>(label: 'Record actions', actions: const [BkMenuAction(value: 'view', label: 'View'), BkMenuAction(value: 'delete', label: 'Delete', enabled: false)], onSelected: (value) {})",
      "web": "<button id=\"doc-dropdown-menu-trigger\" type=\"button\">Record actions</button>\n<div id=\"doc-dropdown-menu\" class=\"bk-menu\" role=\"menu\" aria-label=\"Record actions\" hidden><button role=\"menuitem\" type=\"button\" data-value=\"view\">View</button><button role=\"menuitem\" type=\"button\" aria-disabled=\"true\" data-value=\"delete\">Delete</button></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use short command names and guard the operation in application code.",
        "ar": "استخدم أسماء أوامر موجزة وتحقق من الإجراء في كود التطبيق."
      },
      "dont": {
        "en": "Do not hide the only command access behind right-click.",
        "ar": "لا تجعل النقر الأيمن طريق الوصول الوحيد للأوامر."
      }
    },
    "webBindings": [
      "bindBokrahMenu"
    ],
    "javascript": "const menu = bindBokrahMenu(document.querySelector('#doc-dropdown-menu-trigger'), document.querySelector('#doc-dropdown-menu'), {onSelect: value => console.log(value)});\n// Context surfaces can call menu.openAt(clientX, clientY, returnFocusElement).\n// Call menu.destroy() before removing the nodes.",
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkDropdownMenu<T extends Object> extends StatelessWidget\nconst BkDropdownMenu({\n    super.key,\n    required this.label,\n    required this.actions,\n    required this.onSelected,\n  });\nfinal String label;\nfinal List<BkMenuAction<T>> actions;\nfinal ValueChanged<T> onSelected;",
      "support": "// class BkMenuAction<T extends Object>\nconst BkMenuAction({\n    required this.value,\n    required this.label,\n    this.enabled = true,\n  });\nfinal T value;\nfinal String label;\nfinal bool enabled;",
      "web": ".bk-menu",
      "bindings": "export function bindBokrahMenu(trigger:HTMLElement,menu:HTMLElement,options?:{onSelect?:(value:string,item:HTMLElement)=>void}):{open():void;openAt(x:number,y:number,returnFocus?:HTMLElement):void;close(restoreFocus?:boolean):void;destroy():void};"
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 283,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L283"
    }
  },
  {
    "id": "context-menu",
    "name": {
      "en": "Context Menu",
      "ar": "قائمة السياق"
    },
    "symbol": "BkContextMenu",
    "file": "navigation.dart",
    "web": ".bk-menu",
    "family": "overlay",
    "description": {
      "en": "Contextual commands with a visible fallback trigger.",
      "ar": "أوامر سياقية مع زر ظاهر بديل."
    },
    "usage": {
      "en": "Use for commands scoped to a target, always retaining keyboard/touch access.",
      "ar": "لأوامر مرتبطة بعنصر مع إبقاء الوصول بلوحة المفاتيح واللمس."
    },
    "variants": {
      "en": "Typed BkMenuAction<T> entries; no size or whole-trigger enabled parameter in the Flutter wrapper.",
      "ar": "عناصر BkMenuAction<T> محددة النوع؛ لا حجم أو معامل تعطيل زر الفتح في غلاف فلاتر."
    },
    "states": {
      "en": "Native open/closed and per-action enabled states in Flutter. Context menu supports secondary tap/long press plus visible dropdown. Web helper supports arrows, Home/End, typeahead, Escape, outside dismissal and focus return; aria-disabled menu items remain discoverable but cannot activate. Trigger disabled/aria-disabled blocks open.",
      "ar": "حالات فتح وإغلاق وتعطيل أوامر أصلية في فلاتر. تدعم قائمة السياق النقر الثانوي والضغط الطويل وزراً ظاهراً. يدعم الويب الأسهم وHome وEnd والبحث الحرفي وEscape والإغلاق الخارجي وعودة التركيز. تبقى العناصر ذات aria-disabled قابلة للاكتشاف دون تفعيل وتعطل حالة زر الفتح فتح القائمة."
    },
    "accessibility": {
      "en": "Name the trigger and command list. Web uses aria-haspopup/aria-expanded and menu/menuitem semantics with arrows, Home/End, typeahead and Escape; Tab closes the menu. Native Flutter popup menus provide their own focus model. Keep the visible fallback trigger for context menus.",
      "ar": "سمِّ زر الفتح وقائمة الأوامر. يستخدم الويب aria-haspopup وaria-expanded ودلالات menu وmenuitem مع الأسهم وHome وEnd والبحث الحرفي وEscape؛ يغلق Tab القائمة. تدير قوائم فلاتر التركيز أصلياً. أبقِ زر السياق البديل ظاهراً."
    },
    "responsive": {
      "en": "Web menu is clamped within viewport edges with a 70dvh maximum height and scrollable content. Native Flutter popup menus fit the overlay; keep labels short and test large text.",
      "ar": "تُحصر قائمة الويب داخل الشاشة بارتفاع أقصى 70dvh ومحتوى قابل للتمرير. تتكيف قائمة فلاتر مع الطبقة؛ اجعل العناوين موجزة واختبر النص المكبر."
    },
    "rtl": {
      "en": "Translate command labels. Web opening reads the trigger direction and positions relative to inline start/end; Flutter uses native directional placement. Command values remain stable IDs.",
      "ar": "ترجم عناوين الأوامر. يقرأ موضع الويب اتجاه زر الفتح وتستخدم فلاتر الموضع الاتجاهي الأصلي. تبقى قيم الأوامر معرّفات مستقرة."
    },
    "examples": {
      "flutter": "BkContextMenu<String>(label: 'Record actions', actions: const [BkMenuAction(value: 'view', label: 'View')], onSelected: (value) {}, child: Text('Sample record'))",
      "web": "<button id=\"doc-context-menu-trigger\" type=\"button\">Record actions</button>\n<div id=\"doc-context-menu\" class=\"bk-menu\" role=\"menu\" aria-label=\"Record actions\" hidden><button role=\"menuitem\" type=\"button\" data-value=\"view\">View</button><button role=\"menuitem\" type=\"button\" aria-disabled=\"true\" data-value=\"delete\">Delete</button></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use short command names and guard the operation in application code.",
        "ar": "استخدم أسماء أوامر موجزة وتحقق من الإجراء في كود التطبيق."
      },
      "dont": {
        "en": "Do not hide the only command access behind right-click.",
        "ar": "لا تجعل النقر الأيمن طريق الوصول الوحيد للأوامر."
      }
    },
    "webBindings": [
      "bindBokrahMenu"
    ],
    "javascript": "const menu = bindBokrahMenu(document.querySelector('#doc-context-menu-trigger'), document.querySelector('#doc-context-menu'), {onSelect: value => console.log(value)});\n// Context surfaces can call menu.openAt(clientX, clientY, returnFocusElement).\n// Call menu.destroy() before removing the nodes.",
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkContextMenu<T extends Object> extends StatelessWidget\nconst BkContextMenu({\n    super.key,\n    required this.label,\n    required this.child,\n    required this.actions,\n    required this.onSelected,\n  });\nfinal String label;\nfinal Widget child;\nfinal List<BkMenuAction<T>> actions;\nfinal ValueChanged<T> onSelected;",
      "support": "// class BkMenuAction<T extends Object>\nconst BkMenuAction({\n    required this.value,\n    required this.label,\n    this.enabled = true,\n  });\nfinal T value;\nfinal String label;\nfinal bool enabled;",
      "web": ".bk-menu",
      "bindings": "export function bindBokrahMenu(trigger:HTMLElement,menu:HTMLElement,options?:{onSelect?:(value:string,item:HTMLElement)=>void}):{open():void;openAt(x:number,y:number,returnFocus?:HTMLElement):void;close(restoreFocus?:boolean):void;destroy():void};"
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 315,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L315"
    }
  },
  {
    "id": "back-button",
    "name": {
      "en": "Back Button",
      "ar": "زر الرجوع"
    },
    "symbol": "BkBackButton",
    "file": "navigation.dart",
    "web": ".bk-back-button",
    "family": "action",
    "description": {
      "en": "A named directional action returning to a known context.",
      "ar": "إجراء اتجاهي مسمى يعود إلى سياق معروف."
    },
    "usage": {
      "en": "Use an explicit destination or history-back only when the application has a valid prior route.",
      "ar": "لوجهة معلومة أو رجوع تاريخي عندما يتوفر مسار سابق صالح في التطبيق."
    },
    "variants": {
      "en": "Native 48px icon control; no variants or loading parameter.",
      "ar": "تحكم أيقونة أصلي بمساحة ٤٨ بكسل دون أنواع أو معامل تحميل."
    },
    "states": {
      "en": "Default, hover, focus and pressed use native controls. A null Flutter callback/native HTML disabled blocks activation. Loading, validation and selection are available only where explicitly listed; visual attributes alone are not authorization.",
      "ar": "تعتمد الحالات الافتراضية والتحويم والتركيز والضغط على التحكم الأصلي. تمنع callback فارغة أو disabled التفعيل. يتوفر التحميل والتحقق والتحديد فقط حيث يُذكر صراحة؛ المظهر ليس تحققاً من الصلاحية."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkBackButton(label: 'Back to records', onPressed: () {})",
      "web": "<a href=\"#records\" class=\"bk-back-button\">Back to records</a>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Name the destination and provide a safe fallback for direct visits.",
        "ar": "سمِّ الوجهة ووفّر بديلاً آمناً للزيارات المباشرة."
      },
      "dont": {
        "en": "Do not call history.back blindly on an entry page.",
        "ar": "لا تستخدم history.back دون تحقق في صفحة الدخول المباشر."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkBackButton extends StatelessWidget\nconst BkBackButton({super.key, required this.label, this.onPressed});\nfinal String label;\nfinal VoidCallback? onPressed;",
      "support": "",
      "web": ".bk-back-button",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/navigation.dart",
      "line": 357,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/navigation.dart#L357"
    }
  },
  {
    "id": "list-tile",
    "name": {
      "en": "List Tile",
      "ar": "عنصر القائمة"
    },
    "symbol": "BkListTile",
    "file": "data_display.dart",
    "web": ".bk-list-tile",
    "family": "action",
    "description": {
      "en": "A row of primary/secondary content with optional leading/trailing widgets.",
      "ar": "صف محتوى رئيسي وثانوي مع عناصر بداية ونهاية اختيارية."
    },
    "usage": {
      "en": "Use for compact lists; make it actionable only when it performs a meaningful operation.",
      "ar": "للقوائم الموجزة؛ اجعله تفاعلياً فقط عندما ينفذ عملية مفيدة."
    },
    "variants": {
      "en": "One style; optional subtitle/leading/trailing. No size or explicit selected property.",
      "ar": "نمط واحد مع عنوان ثانوي وعناصر جانبية اختيارية؛ لا معامل حجم أو تحديد صريح."
    },
    "states": {
      "en": "onTap enables native interaction; null makes a passive tile. No built-in loading/error/success/selected/read-only parameters. Child content and owning operation supply feedback.",
      "ar": "يفعّل onTap التفاعل الأصلي ويجعل null العنصر ساكناً. لا معاملات تحميل أو تحقق أو تحديد أو قراءة فقط؛ يوفر المحتوى والعملية التنبيه المناسب."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkListTile(title: 'Lunch service', subtitle: 'Sample record', onTap: () {})",
      "web": "<button type=\"button\" class=\"bk-list-tile\"><span class=\"bk-list-tile__content\"><strong>Lunch service</strong><small>Sample record</small></span></button>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use a native button/link for actionable web tiles and a div/list item for passive tiles.",
        "ar": "استخدم زر ويب أو رابطاً للعنصر التفاعلي وعنصر قائمة أو div للعرض."
      },
      "dont": {
        "en": "Do not imply that onTap=null exposes a disabled-button API; it creates a passive Flutter tile.",
        "ar": "لا تعتبر onTap الفارغة زرّاً معطلاً؛ فهي تنشئ عنصراً ساكناً في فلاتر."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkListTile extends StatelessWidget\nconst BkListTile({\n    super.key,\n    required this.title,\n    this.subtitle,\n    this.leading,\n    this.trailing,\n    this.onTap,\n  });\nfinal String title;\nfinal String? subtitle;\nfinal Widget? leading, trailing;\nfinal VoidCallback? onTap;",
      "support": "",
      "web": ".bk-list-tile",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 8,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L8"
    }
  },
  {
    "id": "data-grid",
    "name": {
      "en": "Data Table / Data Grid",
      "ar": "جدول البيانات"
    },
    "symbol": "BkDataGrid",
    "file": "data_display.dart",
    "web": ".bk-table / .bk-table-wrap",
    "family": "display",
    "description": {
      "en": "A semantic read-only data table with optional controlled sorting.",
      "ar": "جدول بيانات دلالي للعرض مع ترتيب اختياري مضبوط."
    },
    "usage": {
      "en": "Use to compare structured records; the current grid is not a spreadsheet or editable-cell implementation.",
      "ar": "لمقارنة السجلات المنظمة؛ الشبكة الحالية ليست جدولاً حسابياً أو تحرير خلايا."
    },
    "variants": {
      "en": "Nonempty columns; row lengths must match. numericColumns marks indexes, not parsed numeric values. No density/size variants.",
      "ar": "أعمدة غير فارغة وصفوف مطابقة لها؛ يحدد numericColumns فهارس الأعمدة لا القيم المحللة. لا أنواع كثافة أو حجم."
    },
    "states": {
      "en": "onSort notifies the parent; rows are never sorted or filtered internally. sortColumnIndex/sortAscending are controlled. Empty rows show emptyLabel. Loading, retry, row selection and editing are not built in.",
      "ar": "يبلغ onSort الأصل ولا تُرتب أو تُصفى الصفوف داخلياً. يتحكم الأصل بمعاملات الترتيب. تعرض الصفوف الفارغة emptyLabel. لا تحميل أو إعادة محاولة أو اختيار صف أو تحرير مدمج."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Both implementations allow horizontal overflow instead of compressing columns. Give the table bounded width and keep its scroll region keyboard-accessible; the page owns vertical scrolling.",
      "ar": "يسمح التنفيذان بالتمرير الأفقي بدلاً من ضغط الأعمدة. حدّد عرض الجدول واجعل منطقة التمرير متاحة للوحة المفاتيح؛ تدير الصفحة التمرير العمودي."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkDataGrid(caption: 'Sample records', columns: const ['Name', 'Amount'], rows: const [['Lunch', '240.00']], emptyLabel: 'No records', numericColumns: const {1}, sortColumnIndex: 1, onSort: (index, ascending) {})",
      "web": "<div class=\"bk-table-wrap\" role=\"region\" aria-label=\"Scrollable sample records\" tabindex=\"0\"><table class=\"bk-table\"><caption>Sample records</caption><thead><tr><th scope=\"col\">Name</th><th scope=\"col\" aria-sort=\"ascending\"><button type=\"button\">Amount</button></th></tr></thead><tbody><tr><td>Lunch</td><td class=\"bk-number\"><bdi>240.00</bdi></td></tr></tbody></table></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Provide a caption, column headers and visible numeric units.",
        "ar": "وفّر وصف جدول وعناوين أعمدة ووحدات أرقام واضحة."
      },
      "dont": {
        "en": "Do not add role=grid unless implementing the required grid keyboard model.",
        "ar": "لا تضف role=grid دون تنفيذ نموذج لوحة مفاتيح الشبكة."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkDataGrid extends StatelessWidget\nBkDataGrid({\n    super.key,\n    required this.caption,\n    required this.columns,\n    required this.rows,\n    required this.emptyLabel,\n    this.numericColumns = const {},\n    this.sortColumnIndex,\n    this.sortAscending = true,\n    this.onSort,\n  }) : assert(columns.isNotEmpty),\n       assert(rows.every((row) => row.length == columns.length)),\n       assert(\n         sortColumnIndex == null ||\n             (sortColumnIndex >= 0 && sortColumnIndex < columns.length),\n       );\nfinal String caption, emptyLabel;\nfinal List<String> columns;\nfinal List<List<String>> rows;\nfinal Set<int> numericColumns;\nfinal int? sortColumnIndex;\nfinal bool sortAscending;\nfinal void Function(int, bool)? onSort;",
      "support": "",
      "web": ".bk-table / .bk-table-wrap",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 35,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L35"
    }
  },
  {
    "id": "avatar",
    "name": {
      "en": "Avatar",
      "ar": "الصورة الرمزية"
    },
    "symbol": "BkAvatar",
    "file": "data_display.dart",
    "web": ".bk-avatar",
    "family": "display",
    "description": {
      "en": "A labelled circular image with an initials fallback.",
      "ar": "صورة دائرية مسماة مع حروف بديلة."
    },
    "usage": {
      "en": "Use to identify a person/restaurant without replacing their readable name.",
      "ar": "لتعريف شخص أو مطعم دون استبدال الاسم المقروء."
    },
    "variants": {
      "en": "Flutter size defaults 48; optional ImageProvider. Web CSS defaults 48px. No named size variants.",
      "ar": "حجم فلاتر الافتراضي ٤٨ مع ImageProvider اختياري؛ الويب ٤٨ بكسل افتراضياً دون أحجام مسماة."
    },
    "states": {
      "en": "Initials render when no image is supplied or loading the Flutter image fails. No interaction states; added avatar actions must be separate labelled controls. Web image fallback needs application error handling.",
      "ar": "تظهر الحروف عند غياب الصورة أو فشل تحميلها في فلاتر. لا حالات تفاعل؛ الإجراءات الإضافية تحتاج تحكماً مسمى. يتطلب بديل صورة الويب معالجة خطأ من التطبيق."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkAvatar(label: 'Bokrah restaurant', initials: 'BK')",
      "web": "<span class=\"bk-avatar\" role=\"img\" aria-label=\"Bokrah restaurant\"><span aria-hidden=\"true\">BK</span></span>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep initials readable and supply a meaningful image label.",
        "ar": "اجعل الحروف واضحة ووفّر وصف صورة مفيداً."
      },
      "dont": {
        "en": "Do not communicate permissions or identity verification through an avatar alone.",
        "ar": "لا توضح الصلاحيات أو تحقق الهوية بالصورة وحدها."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkAvatar extends StatelessWidget\nconst BkAvatar({\n    super.key,\n    required this.label,\n    required this.initials,\n    this.image,\n    this.size = 48,\n  });\nfinal String label, initials;\nfinal ImageProvider? image;\nfinal double size;",
      "support": "",
      "web": ".bk-avatar",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 102,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L102"
    }
  },
  {
    "id": "image",
    "name": {
      "en": "Image",
      "ar": "الصورة"
    },
    "symbol": "BkImage",
    "file": "data_display.dart",
    "web": ".bk-image / .bk-image-error",
    "family": "display",
    "description": {
      "en": "A content image with loading and failure presentation.",
      "ar": "صورة محتوى مع عرض التحميل والفشل."
    },
    "usage": {
      "en": "Use for meaningful visual content with labels and a predictable aspect ratio.",
      "ar": "لمحتوى مرئي ذي معنى مع وصف ونسبة أبعاد متوقعة."
    },
    "variants": {
      "en": "aspectRatio defaults 16/9; image is an ImageProvider; cover fit. No arbitrary fit or radius property.",
      "ar": "نسبة الأبعاد ١٦:٩ افتراضياً مع ImageProvider وملاءمة cover؛ لا معامل fit أو نصف قطر."
    },
    "states": {
      "en": "Flutter shows BkSkeleton before the first frame and a scrollable error label on failure. Native HTML image alt is the baseline; web consumers add their own loading/error handling (see the catalogue example).",
      "ar": "تعرض فلاتر BkSkeleton قبل أول إطار ووصف خطأ قابل للتمرير عند الفشل. alt هو الأساس على الويب ويضيف المستهلك معالجة التحميل والخطأ."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Width follows parent constraints with a fixed aspect ratio. Long Flutter error labels scroll inside the image area. Test cropping and enlarged fallback text.",
      "ar": "يتبع العرض قيود الأصل مع نسبة أبعاد ثابتة. يمرّر وصف الخطأ الطويل في مساحة الصورة بفلاتر. اختبر القص والنص البديل المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkImage(image: const AssetImage('assets/dining-room.png'), label: 'Restaurant illustration', loadingLabel: 'Loading illustration', errorLabel: 'Illustration unavailable')",
      "web": "<img class=\"bk-image\" src=\"./assets/dining-room.svg\" alt=\"Restaurant illustration\" width=\"640\" height=\"360\">",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Declare the asset in the consuming app and provide localized loading/error labels.",
        "ar": "عرّف الأصل في تطبيقك ووفّر وصف تحميل وخطأ مترجمين."
      },
      "dont": {
        "en": "Do not assume the package bundles the catalogue restaurant image.",
        "ar": "لا تفترض أن الحزمة تتضمن صورة المطعم الخاصة بالكتالوج."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkImage extends StatelessWidget\nconst BkImage({\n    super.key,\n    required this.image,\n    required this.label,\n    required this.loadingLabel,\n    required this.errorLabel,\n    this.aspectRatio = 16 / 9,\n  });\nfinal ImageProvider image;\nfinal String label, loadingLabel, errorLabel;\nfinal double aspectRatio;",
      "support": "",
      "web": ".bk-image / .bk-image-error",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 148,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L148"
    }
  },
  {
    "id": "tag",
    "name": {
      "en": "Tag",
      "ar": "الوسم"
    },
    "symbol": "BkTag",
    "file": "data_display.dart",
    "web": ".bk-tag",
    "family": "action",
    "description": {
      "en": "A compact label with an optional removal action.",
      "ar": "تسمية موجزة مع إجراء إزالة اختياري."
    },
    "usage": {
      "en": "Use for applied categories/filters; removal changes application state, not the widget itself.",
      "ar": "للفئات أو المرشحات المطبقة؛ تغير الإزالة حالة التطبيق لا المكون نفسه."
    },
    "variants": {
      "en": "Native InputChip; optional onDeleted and required deleteLabel when removable. No size/selected property.",
      "ar": "InputChip أصلي مع onDeleted اختياري وdeleteLabel مطلوب عند الإزالة؛ لا حجم أو معامل تحديد."
    },
    "states": {
      "en": "onDeleted=null removes the delete affordance. A supplied callback enables native removal interaction. The parent removes the tag; no loading/selected/read-only API exists.",
      "ar": "تخفي onDeleted الفارغة إجراء الحذف. يفعّل callback الإزالة الأصلية ويزيل الأصل الوسم؛ لا تحميل أو تحديد أو قراءة فقط."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkTag(label: 'Lunch', deleteLabel: 'Remove Lunch filter', onDeleted: () {})",
      "web": "<span class=\"bk-tag\">Lunch<button type=\"button\" aria-label=\"Remove Lunch filter\">×</button></span>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Include the tag name in the removal label and restore focus to another useful action.",
        "ar": "ضمّن اسم الوسم في تسمية الإزالة وأعد التركيز لإجراء مفيد."
      },
      "dont": {
        "en": "Do not describe this wrapper as a selected FilterChip; it has no selection API.",
        "ar": "لا تصف الغلاف كـ FilterChip محدد؛ لا يوفر واجهة اختيار."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkTag extends StatelessWidget\nconst BkTag({\n    super.key,\n    required this.label,\n    this.onDeleted,\n    this.deleteLabel,\n  }) : assert(onDeleted == null || deleteLabel != null);\nfinal String label;\nfinal VoidCallback? onDeleted;\nfinal String? deleteLabel;",
      "support": "",
      "web": ".bk-tag",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 196,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L196"
    }
  },
  {
    "id": "tooltip",
    "name": {
      "en": "Tooltip",
      "ar": "التلميح"
    },
    "symbol": "BkTooltip",
    "file": "data_display.dart",
    "web": ".bk-tooltip",
    "family": "overlay",
    "description": {
      "en": "Brief noninteractive help associated with a trigger.",
      "ar": "مساعدة موجزة غير تفاعلية مرتبطة بعنصر."
    },
    "usage": {
      "en": "Use for supplemental descriptions, not critical information or interactive links.",
      "ar": "لشرح إضافي لا للمعلومات الحرجة أو الروابط التفاعلية."
    },
    "variants": {
      "en": "One native Flutter Tooltip; web max width 300px/viewport. No delay/position/size API in wrapper.",
      "ar": "Tooltip أصلي واحد في فلاتر؛ حد عرض الويب ٣٠٠ بكسل أو الشاشة. لا تحكم بالتأخير أو الموضع أو الحجم في الغلاف."
    },
    "states": {
      "en": "Flutter uses native tooltip hover/long-press behavior. Web binding shows on pointer/focus, permits hovering the tooltip, hides on Escape and restores the original aria-describedby on cleanup. Tooltip content is not focusable.",
      "ar": "تستخدم فلاتر التحويم والضغط الطويل الأصليين. يظهر ربط الويب بالمؤشر والتركيز ويسمح بتحويم التلميح ويخفيه بـ Escape ويعيد aria-describedby الأصلي عند التنظيف. محتواه غير قابل للتركيز."
    },
    "accessibility": {
      "en": "Keep a named trigger and a noninteractive tooltip. Web requires a unique tooltip id and aria-describedby; Escape hides it. Do not move focus into tooltip content or hide essential instructions inside it.",
      "ar": "أبقِ زر الفتح مسمى والتلميح غير تفاعلي. يحتاج الويب معرّفاً فريداً وaria-describedby ويخفيه Escape. لا تنقل التركيز لمحتواه ولا تخفِ التعليمات الأساسية داخله."
    },
    "responsive": {
      "en": "Web tooltip width is limited to min(300px, viewport minus 16px), with viewport-aware positioning. Flutter uses native tooltip positioning. Keep the description brief.",
      "ar": "يحد الويب العرض بـ ٣٠٠ بكسل أو عرض الشاشة ناقص ١٦ ويحدد موضعاً مناسباً. تستخدم فلاتر الموضع الأصلي. اجعل الوصف موجزاً."
    },
    "rtl": {
      "en": "Translate the description and preserve the trigger name. Web positioning reads the trigger direction; Flutter inherits Directionality. No separate close button is required.",
      "ar": "ترجم الوصف واحفظ اسم زر الفتح. يقرأ موضع الويب اتجاه الزر وترث فلاتر Directionality. لا يلزم زر إغلاق منفصل."
    },
    "examples": {
      "flutter": "BkTooltip(label: 'Sample data only', child: TextButton(onPressed: () {}, child: Text('About metric')))",
      "web": "<button id=\"doc-help\" type=\"button\">About metric</button><div id=\"doc-tooltip\" class=\"bk-tooltip\">Sample data only</div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Expose the same help through keyboard focus and preserve existing descriptions.",
        "ar": "أتح المساعدة عند التركيز واحفظ الأوصاف الموجودة."
      },
      "dont": {
        "en": "Do not put essential instructions only in a hover tooltip.",
        "ar": "لا تضع التعليمات الضرورية فقط داخل تلميح تحويم."
      }
    },
    "webBindings": [
      "bindBokrahTooltip"
    ],
    "javascript": "const destroy = bindBokrahTooltip(document.querySelector('#doc-help'), document.querySelector('#doc-tooltip'));\n// Call destroy() before removing either node.",
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkTooltip extends StatelessWidget\nconst BkTooltip({super.key, required this.label, required this.child});\nfinal String label;\nfinal Widget child;",
      "support": "",
      "web": ".bk-tooltip",
      "bindings": "export function bindBokrahTooltip(trigger:HTMLElement,tooltip:HTMLElement):()=>void;"
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 215,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L215"
    }
  },
  {
    "id": "popover",
    "name": {
      "en": "Popover",
      "ar": "النافذة التوضيحية"
    },
    "symbol": "BkPopover",
    "file": "data_display.dart",
    "web": ".bk-popover",
    "family": "overlay",
    "description": {
      "en": "An anchored nonmodal details surface with a close action.",
      "ar": "سطح تفاصيل مثبت غير مشروط مع زر إغلاق."
    },
    "usage": {
      "en": "Use for short supplementary details with interactions; use a modal for decisions requiring a contained workflow.",
      "ar": "لتفاصيل تكميلية قصيرة وتفاعلية؛ استخدم حواراً مشروطاً لقرار يحتاج مساراً محصوراً."
    },
    "variants": {
      "en": "Flutter width at most 320px with viewport-aware height; web 340px/viewport and 75dvh height. No size parameter.",
      "ar": "عرض فلاتر الأقصى ٣٢٠ بكسل وارتفاع حسب الشاشة؛ الويب ٣٤٠ بكسل أو الشاشة وارتفاع 75dvh. لا معامل حجم."
    },
    "states": {
      "en": "Open/closed. Escape/Close restore trigger focus; outside interaction dismisses. Flutter wrapper has no disabled/selected parameter. Web binding guards unavailable triggers, uses native Popover API when available and falls back to a positioned surface.",
      "ar": "فتح وإغلاق. يعيد Escape والإغلاق التركيز إلى زر الفتح ويغلق التفاعل الخارجي السطح. لا يوفر غلاف فلاتر تعطيل الزر أو تحديده. يحمي ربط الويب الفتح ويستخدم Popover الأصلي عند توفره مع بديل موضّع."
    },
    "accessibility": {
      "en": "Provide a labelled trigger and a titled surface with an explicit localized close action. Check keyboard focus, Escape dismissal and focus return; modal and nonmodal surfaces have different contracts.",
      "ar": "وفّر زر فتح مسمى وسطحاً ذا عنوان وزر إغلاق مترجماً. اختبر التركيز وEscape وعودة التركيز؛ يختلف سلوك الحوار المشروط عن النافذة غير المشروطة."
    },
    "responsive": {
      "en": "Constrain the surface to the viewport, account for safe areas/keyboard insets and scroll long content. Avoid a fixed height that hides the close action.",
      "ar": "احصر السطح داخل الشاشة وراعِ المناطق الآمنة ومساحة لوحة المفاتيح ومرّر المحتوى الطويل. تجنب ارتفاعاً ثابتاً يخفي زر الإغلاق."
    },
    "rtl": {
      "en": "Translate trigger, title, content and close text. Use logical alignment; verify the anchor and focus return in RTL as well as LTR.",
      "ar": "ترجم زر الفتح والعنوان والمحتوى والإغلاق. استخدم المحاذاة المنطقية واختبر الموضع وعودة التركيز في الاتجاهين."
    },
    "examples": {
      "flutter": "BkPopover(label: 'Metric details', title: 'About this metric', message: 'Sample values only.', closeLabel: 'Close details')",
      "web": "<button id=\"doc-popover-open\" type=\"button\">Metric details</button><div id=\"doc-popover\" class=\"bk-popover\" aria-labelledby=\"doc-popover-title\"><h3 id=\"doc-popover-title\">About this metric</h3><p>Sample values only.</p><button type=\"button\" data-bk-close>Close details</button></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Keep it nonmodal and provide an explicit close label.",
        "ar": "أبقِ النافذة غير مشروطة ووفّر إغلاقاً واضحاً."
      },
      "dont": {
        "en": "Do not claim it traps focus or makes the background inert.",
        "ar": "لا تدّعِ أنها تحصر التركيز أو تعطل خلفية الصفحة."
      }
    },
    "webBindings": [
      "bindBokrahPopover"
    ],
    "javascript": "const popover = bindBokrahPopover(document.querySelector('#doc-popover-open'), document.querySelector('#doc-popover'));\n// popover.open(); popover.close();\n// Call popover.destroy() before removing its nodes.",
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkPopover extends StatefulWidget\nconst BkPopover({\n    super.key,\n    required this.label,\n    required this.title,\n    required this.message,\n    required this.closeLabel,\n  });\nfinal String label, title, message, closeLabel;",
      "support": "",
      "web": ".bk-popover",
      "bindings": "export function bindBokrahPopover(trigger:HTMLElement,popover:HTMLElement):{open():void;close(restoreFocus?:boolean):void;destroy():void};"
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 224,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L224"
    }
  },
  {
    "id": "accordion",
    "name": {
      "en": "Accordion / Expansion Panel",
      "ar": "لوحة التوسيع"
    },
    "symbol": "BkAccordion",
    "file": "data_display.dart",
    "web": ".bk-accordion",
    "family": "action",
    "description": {
      "en": "A disclosure that shows or hides related content.",
      "ar": "عنصر إفصاح يظهر المحتوى ذا العلاقة أو يخفيه."
    },
    "usage": {
      "en": "Use to reduce visual density when content can be discovered by a descriptive heading.",
      "ar": "لتقليل كثافة العرض عندما يوضح العنوان المحتوى القابل للكشف."
    },
    "variants": {
      "en": "initiallyExpanded defaults false. No controlled expanded/disabled parameter in Flutter wrapper.",
      "ar": "initiallyExpanded=false افتراضياً؛ لا معامل expanded مضبوط أو disabled في الغلاف."
    },
    "states": {
      "en": "Native expanded/collapsed disclosure and focus/pressed states. initiallyExpanded is an initial value, not a controlled expansion state. Web details uses open; no JS binding is required.",
      "ar": "توسيع وطي وتفاعل أصلي. initiallyExpanded قيمة ابتدائية وليست حالة توسع مضبوطة. يستخدم details على الويب open ولا يحتاج ربط JavaScript."
    },
    "accessibility": {
      "en": "Use a meaningful localized accessible name, visible keyboard focus and at least a 48px touch target. Native buttons activate with Enter/Space. Explain unavailable actions nearby.",
      "ar": "استخدم اسماً واضحاً ومترجماً وتركيزاً مرئياً ومساحة لمس لا تقل عن ٤٨ بكسل. تُفعّل الأزرار بـ Enter أو Space. وضّح سبب عدم الإتاحة بجوار الإجراء."
    },
    "responsive": {
      "en": "Allow labels and surrounding action groups to wrap. Test narrow parent constraints and enlarged text; do not reduce the touch target to fit.",
      "ar": "اسمح بالتفاف النصوص ومجموعات الأزرار. اختبر العرض الضيق والنص المكبر دون تقليص مساحة اللمس."
    },
    "rtl": {
      "en": "Supply translated labels from the application and inherit document dir/Flutter Directionality. Use directional padding; mirror navigation arrows, not logos or arbitrary icons.",
      "ar": "زوّد النصوص المترجمة من التطبيق واتبع اتجاه المستند أو Directionality. استخدم هوامش اتجاهية واعكس أسهم التنقل دون الشعارات أو الرموز الأخرى."
    },
    "examples": {
      "flutter": "BkAccordion(title: 'Record details', children: const [Text('Sample record BK-001')])",
      "web": "<details class=\"bk-accordion\"><summary>Record details</summary><div class=\"bk-accordion__content\">Sample record BK-001</div></details>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use a descriptive disclosure label and native expanded semantics.",
        "ar": "استخدم وصفاً واضحاً ودلالة التوسيع الأصلية."
      },
      "dont": {
        "en": "Do not use an accordion to hide a blocking validation error.",
        "ar": "لا تخفِ خطأ تحقق يمنع التقدم داخل لوحة مطوية."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkAccordion extends StatelessWidget\nconst BkAccordion({\n    super.key,\n    required this.title,\n    required this.children,\n    this.initiallyExpanded = false,\n  });\nfinal String title;\nfinal List<Widget> children;\nfinal bool initiallyExpanded;",
      "support": "",
      "web": ".bk-accordion",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 368,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L368"
    }
  },
  {
    "id": "timeline",
    "name": {
      "en": "Timeline",
      "ar": "التسلسل الزمني"
    },
    "symbol": "BkTimeline",
    "file": "data_display.dart",
    "web": ".bk-timeline",
    "family": "display",
    "description": {
      "en": "A vertical sequence of labelled events and times.",
      "ar": "تسلسل عمودي لأحداث مسماة مع الوقت."
    },
    "usage": {
      "en": "Use for activity/history already ordered by the application.",
      "ar": "لنشاط أو تاريخ رتبه التطبيق مسبقاً."
    },
    "variants": {
      "en": "List<BkTimelineEntry>; no sorting, grouping, size or interactive event API.",
      "ar": "قائمة BkTimelineEntry دون ترتيب أو تجميع أو حجم أو تفاعل أحداث مدمج."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkTimeline(entries: const [BkTimelineEntry(title: 'Shift opened', detail: 'Sample activity', time: '09:00')])",
      "web": "<ol class=\"bk-timeline\"><li><time datetime=\"09:00\">09:00</time><strong>Shift opened</strong><span>Sample activity</span></li></ol>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Provide already-formatted local times and preserve chronological order.",
        "ar": "وفّر أوقاتاً محلية منسقة وحافظ على الترتيب الزمني."
      },
      "dont": {
        "en": "Do not use the visual timeline as the authoritative audit log.",
        "ar": "لا تعتبر التسلسل المرئي سجل التدقيق المعتمد."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkTimeline extends StatelessWidget\nconst BkTimeline({super.key, required this.entries});\nfinal List<BkTimelineEntry> entries;",
      "support": "// class BkTimelineEntry\nconst BkTimelineEntry({\n    required this.title,\n    required this.detail,\n    required this.time,\n  });\nfinal String title, detail, time;",
      "web": ".bk-timeline",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 400,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L400"
    }
  },
  {
    "id": "bar-chart",
    "name": {
      "en": "Bar Chart / Statistics",
      "ar": "المخطط والإحصاءات"
    },
    "symbol": "BkBarChart",
    "file": "data_display.dart",
    "web": ".bk-chart / .bk-bars",
    "family": "display",
    "description": {
      "en": "A labelled comparison of nonnegative values with visible text.",
      "ar": "مقارنة مسماة لقيم غير سالبة مع نص واضح."
    },
    "usage": {
      "en": "Use for a small series where labels and values can remain readable.",
      "ar": "لسلسلة صغيرة تسمح بوضوح العناوين والقيم."
    },
    "variants": {
      "en": "Horizontal bars normalized to the maximum; emptyLabel for no values; zero series safe. No chart type/size variants.",
      "ar": "أشرطة أفقية نسبةً إلى القيمة القصوى مع emptyLabel ووجود معالجة للصفر؛ لا أنواع مخطط أو حجم."
    },
    "states": {
      "en": "Values must be finite and nonnegative. Empty data shows emptyLabel; all-zero values produce zero-length bars. There are no hover tooltips, selection or filtering APIs.",
      "ar": "يجب أن تكون القيم غير سالبة ومحدودة. تُظهر البيانات الفارغة emptyLabel وتعالج الأصفار بأشرطة صفرية. لا تلميحات تحويم أو اختيار أو تصفية مدمجة."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkBarChart(label: 'Sample orders', emptyLabel: 'No data', values: const [BkChartValue(label: 'Lunch', value: 80, displayValue: '80 orders')])",
      "web": "<figure class=\"bk-chart\"><figcaption>Sample orders</figcaption><ol class=\"bk-bars\"><li><span>Lunch</span><span class=\"bk-bar-track\" aria-hidden=\"true\"><span class=\"bk-bar\" style=\"width:100%\"></span></span><strong>80 orders</strong></li></ol></figure>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Provide units and a text value for every bar.",
        "ar": "وفّر الوحدة والقيمة النصية لكل شريط."
      },
      "dont": {
        "en": "Do not feed negative/nonfinite values or rely only on color/length.",
        "ar": "لا تمرر قيماً سالبة أو غير محدودة ولا تعتمد على اللون أو الطول وحده."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkBarChart extends StatelessWidget\nconst BkBarChart({\n    super.key,\n    required this.label,\n    required this.values,\n    required this.emptyLabel,\n  });\nfinal String label, emptyLabel;\nfinal List<BkChartValue> values;",
      "support": "// class BkChartValue\nconst BkChartValue({\n    required this.label,\n    required this.value,\n    required this.displayValue,\n  }) : assert(value >= 0 && value < double.infinity);\nfinal String label, displayValue;\nfinal double value;",
      "web": ".bk-chart / .bk-bars",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 472,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L472"
    }
  },
  {
    "id": "kpi-card",
    "name": {
      "en": "KPI Card",
      "ar": "بطاقة مؤشر الأداء"
    },
    "symbol": "BkKpiCard",
    "file": "data_display.dart",
    "web": ".bk-kpi",
    "family": "display",
    "description": {
      "en": "A metric with an explicit comparison and semantic tone.",
      "ar": "مؤشر مع مقارنة صريحة ودرجة دلالية."
    },
    "usage": {
      "en": "Use when a value needs a period/change comparison rather than a standalone statistic.",
      "ar": "عندما تحتاج القيمة مقارنة بفترة أو تغير لا إحصاءً منفرداً."
    },
    "variants": {
      "en": "comparisonTone defaults neutral; BkTone values supported. No automatic percent calculation or size variants.",
      "ar": "comparisonTone محايد افتراضياً ويدعم BkTone؛ لا حساب نسبة تلقائي أو أحجام."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Labels/comparison inherit RTL; Flutter value is explicitly LTR. Supply a formatted numeric value and place translated units in surrounding label/comparison. Web bdi isolates values.",
      "ar": "تتبع التسمية والمقارنة العربية وتكون قيمة فلاتر LTR صراحة. وفّر رقماً منسقاً ووحدات مترجمة حوله؛ يعزل bdi قيم الويب."
    },
    "examples": {
      "flutter": "BkKpiCard(label: 'Sales', value: '240.00', comparison: '+12% vs previous sample day', comparisonTone: BkTone.success)",
      "web": "<div class=\"bk-card bk-kpi\"><span>Sales · JOD</span><bdi class=\"bk-kpi__value\">240.00</bdi><span class=\"bk-badge bk-tone-success\">+12% vs previous sample day</span></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "State the comparison baseline and units.",
        "ar": "وضّح أساس المقارنة والوحدة."
      },
      "dont": {
        "en": "Do not imply green means a financially positive result without domain context.",
        "ar": "لا تفترض أن الأخضر نتيجة مالية جيدة دون سياق المجال."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkKpiCard extends StatelessWidget\nconst BkKpiCard({\n    super.key,\n    required this.label,\n    required this.value,\n    required this.comparison,\n    this.comparisonTone = BkTone.neutral,\n  });\nfinal String label, value, comparison;\nfinal BkTone comparisonTone;",
      "support": "enum BkTone { neutral, success, warning, danger, info }",
      "web": ".bk-kpi",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 528,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L528"
    }
  },
  {
    "id": "no-results",
    "name": {
      "en": "No Results",
      "ar": "لا توجد نتائج"
    },
    "symbol": "BkNoResults",
    "file": "data_display.dart",
    "web": ".bk-no-results",
    "family": "display",
    "description": {
      "en": "Explains that the active query/filter matches no records.",
      "ar": "توضيح أن البحث أو التصفية الحالية لا تطابق سجلات."
    },
    "usage": {
      "en": "Use when source content may exist but the current query hides it.",
      "ar": "عندما قد توجد بيانات لكن الاستعلام الحالي يخفيها."
    },
    "variants": {
      "en": "Title/message/clearLabel with optional onClear. No size variants.",
      "ar": "عنوان ورسالة وclearLabel مع onClear اختياري دون أحجام."
    },
    "states": {
      "en": "No-results display; onClear=null omits the reset button in Flutter. The parent resets filters/data; there is no built-in search operation.",
      "ar": "عرض عدم المطابقة؛ يحذف onClear الفارغ زر إعادة الضبط في فلاتر. يعيد الأصل ضبط المرشحات ولا ينفذ المكون بحثاً."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Translate supplied text and inherit RTL. Format dates, currency and numbers in the application; isolate mixed-direction identifiers and keep reading order meaningful.",
      "ar": "ترجم النصوص واتبع اتجاه العربية. نسّق التواريخ والعملات والأرقام في التطبيق واعزل المعرّفات المختلطة الاتجاه مع الحفاظ على ترتيب القراءة."
    },
    "examples": {
      "flutter": "BkNoResults(title: 'No matches', message: 'Try another category.', clearLabel: 'Clear filters', onClear: () {})",
      "web": "<section class=\"bk-no-results\"><h3>No matches</h3><p>Try another category.</p><button type=\"button\" class=\"bk-button bk-button--secondary\">Clear filters</button></section>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve search context and offer a useful reset action.",
        "ar": "حافظ على سياق البحث ووفّر إعادة ضبط مفيدة."
      },
      "dont": {
        "en": "Do not describe missing search matches as a network failure or new account.",
        "ar": "لا تصف عدم المطابقة كفشل اتصال أو حساب جديد."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkNoResults extends StatelessWidget\nconst BkNoResults({\n    super.key,\n    required this.title,\n    required this.message,\n    required this.clearLabel,\n    this.onClear,\n  });\nfinal String title, message, clearLabel;\nfinal VoidCallback? onClear;",
      "support": "",
      "web": ".bk-no-results",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/data_display.dart",
      "line": 557,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/data_display.dart#L557"
    }
  },
  {
    "id": "icon",
    "name": {
      "en": "Icon",
      "ar": "الأيقونة"
    },
    "symbol": "BkIcon",
    "file": "foundations.dart",
    "web": ".bk-icon",
    "family": "display",
    "description": {
      "en": "A vector icon from the shared Bokrah Outline geometry.",
      "ar": "أيقونة متجهة من هندسة Bokrah Outline المشتركة."
    },
    "usage": {
      "en": "Use for consistent supporting visuals; interactive icons still need a named button.",
      "ar": "للصور الداعمة المتسقة؛ الأيقونة التفاعلية تحتاج زراً مسمى."
    },
    "variants": {
      "en": "8 BkIconName values. size defaults 24, strokeWidth defaults 2; shared size tokens 16/20/24/32/48. Optional color/semanticLabel.",
      "ar": "ثماني قيم BkIconName وحجم افتراضي ٢٤ وسماكة ٢؛ أحجام الرموز المشتركة ١٦ و٢٠ و٢٤ و٣٢ و٤٨ مع لون ووصف اختياريين."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Keep meaningful text in reading order and preserve text contrast in all themes. This display surface is not automatically a button or live region; added actions need their own semantics.",
      "ar": "حافظ على ترتيب قراءة واضح وتباين النص في جميع المظاهر. عنصر العرض ليس زراً أو منطقة إعلان تلقائياً؛ الإجراءات المضافة تحتاج دلالاتها الخاصة."
    },
    "responsive": {
      "en": "Size to the available parent width and let text grow vertically. Put long collections in a scroll view owned by the page; avoid fixed heights that clip enlarged text.",
      "ar": "التزم بعرض الحاوية المتاح واسمح بامتداد النص عمودياً. ضع المجموعات الطويلة داخل تمرير تديره الصفحة وتجنب ارتفاعات تقطع النص المكبر."
    },
    "rtl": {
      "en": "Flutter automatically mirrors only arrowForward in RTL. Web consumers add bk-icon--directional only to appropriate directional icons.",
      "ar": "تعكس فلاتر arrowForward فقط تلقائياً في العربية. يضيف مستهلك الويب bk-icon--directional للرموز الاتجاهية المناسبة فقط."
    },
    "examples": {
      "flutter": "BkIcon(BkIconName.receipt, semanticLabel: 'Receipt')",
      "web": "<svg class=\"bk-icon\" role=\"img\" aria-label=\"Receipt\" viewBox=\"0 0 24 24\"><path d=\"M 5 3 L 19 3 L 19 21 L 15.5 19 L 12 21 L 8.5 19 L 5 21 Z\"/><path d=\"M 8 8 L 16 8\"/><path d=\"M 8 12 L 14 12\"/></svg>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Use semanticLabel only when the icon communicates meaning not already named by its control.",
        "ar": "استخدم semanticLabel عندما يحمل الرمز معنى لا يوضحه اسم التحكم."
      },
      "dont": {
        "en": "Do not mirror every icon in RTL.",
        "ar": "لا تعكس جميع الرموز في العربية."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkIcon extends StatelessWidget\nconst BkIcon(\n    this.name, {\n    super.key,\n    this.size = BkIconSize.standard,\n    this.strokeWidth = BkIconStroke.standard,\n    this.color,\n    this.semanticLabel,\n  });\nfinal BkIconName name;\nfinal double size;\nfinal double strokeWidth;\nfinal Color? color;\nfinal String? semanticLabel;",
      "support": "enum BkIconName {\n  add,\n  check,\n  close,\n  search,\n  download,\n  arrowForward,\n  receipt,\n  menu,\n}",
      "web": ".bk-icon",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/foundations.dart",
      "line": 17,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/foundations.dart#L17"
    }
  },
  {
    "id": "container",
    "name": {
      "en": "Container",
      "ar": "الحاوية"
    },
    "symbol": "BkContainer",
    "file": "layout.dart",
    "web": ".bk-container",
    "family": "layout",
    "description": {
      "en": "Centers a bounded content area with responsive page margins.",
      "ar": "توسيط مساحة محتوى محدودة بهوامش صفحة متجاوبة."
    },
    "usage": {
      "en": "Use once at the page boundary rather than stacking nested page margins.",
      "ar": "استخدمها مرة عند حد الصفحة بدلاً من تكرار الهوامش."
    },
    "variants": {
      "en": "maxWidth defaults 1200 inner pixels. Margins 16/24/48 at compact/medium/wide.",
      "ar": "عرض داخلي أقصى ١٢٠٠ افتراضياً وهوامش ١٦ و٢٤ و٤٨ حسب النطاق."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Require bounded parent width; Flutter uses parent constraints, web margins follow viewport media queries. Web outer maximum is 1296px including wide margins.",
      "ar": "يتطلب عرض أصل محدوداً؛ تستخدم فلاتر قيود الأصل وهوامش الويب عرض الشاشة. حد الويب الخارجي ١٢٩٦ بكسل مع الهوامش الواسعة."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkContainer(child: Text('Page content'))",
      "web": "<div class=\"bk-container\"><p>Page content</p></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkContainer extends StatelessWidget\nconst BkContainer({super.key, required this.child, this.maxWidth = 1200});\nfinal Widget child;\nfinal double maxWidth;",
      "support": "",
      "web": ".bk-container",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 5,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L5"
    }
  },
  {
    "id": "row",
    "name": {
      "en": "Row",
      "ar": "الصف"
    },
    "symbol": "BkRow",
    "file": "layout.dart",
    "web": ".bk-row",
    "family": "layout",
    "description": {
      "en": "Wrapping horizontal flow with consistent gaps.",
      "ar": "تدفق أفقي ملتف بفجوات متسقة."
    },
    "usage": {
      "en": "Use for actions or short items whose intrinsic widths can wrap.",
      "ar": "للإجراءات أو العناصر القصيرة التي يمكن أن تلتف بعرضها الطبيعي."
    },
    "variants": {
      "en": "Flutter gap defaults 16; web bk-row gap is 12px. No alignment/size API beyond native composition.",
      "ar": "فجوة فلاتر الافتراضية ١٦ وفجوة bk-row على الويب ١٢ بكسل دون واجهة محاذاة أو حجم إضافية."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Flutter uses Wrap, not Row. Do not supply Expanded/Flexible as direct children; constrain long text deliberately.",
      "ar": "تستخدم فلاتر Wrap لا Row. لا تمرر Expanded أو Flexible مباشرة وحدد عرض النص الطويل بوضوح."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkRow(children: const [Text('Sales'), Text('Expenses')])",
      "web": "<div class=\"bk-row\"><span>Sales</span><span>Expenses</span></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkRow extends StatelessWidget\nconst BkRow({super.key, required this.children, this.gap = BkSpace.lg});\nfinal List<Widget> children;\nfinal double gap;",
      "support": "",
      "web": ".bk-row",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 36,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L36"
    }
  },
  {
    "id": "column",
    "name": {
      "en": "Column",
      "ar": "العمود"
    },
    "symbol": "BkColumn",
    "file": "layout.dart",
    "web": ".bk-column",
    "family": "layout",
    "description": {
      "en": "Vertical flow with a shared gap.",
      "ar": "تدفق عمودي بفجوة مشتركة."
    },
    "usage": {
      "en": "Use to stack content that should grow naturally with text.",
      "ar": "لتكديس محتوى يتمدد طبيعياً مع النص."
    },
    "variants": {
      "en": "gap defaults 16px. Flutter children stretch horizontally and mainAxisSize is min.",
      "ar": "الفجوة ١٦ بكسل افتراضياً؛ تتمدد عناصر فلاتر أفقياً ويكون mainAxisSize أصغر حجم."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "No automatic scrolling. Use the page scroll view for long content and avoid unbounded Expanded children.",
      "ar": "لا تمرير تلقائياً؛ استخدم تمرير الصفحة للمحتوى الطويل وتجنب Expanded غير المحدود."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkColumn(children: const [Text('Title'), Text('Description')])",
      "web": "<div class=\"bk-column\"><h3>Title</h3><p>Description</p></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkColumn extends StatelessWidget\nconst BkColumn({super.key, required this.children, this.gap = BkSpace.lg});\nfinal List<Widget> children;\nfinal double gap;",
      "support": "",
      "web": ".bk-column",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 49,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L49"
    }
  },
  {
    "id": "grid",
    "name": {
      "en": "Grid",
      "ar": "الشبكة"
    },
    "symbol": "BkResponsiveGrid",
    "file": "foundations.dart",
    "web": ".bk-layout-grid",
    "family": "layout",
    "description": {
      "en": "Equal-width layout cells using shared grid bands.",
      "ar": "خلايا تخطيط متساوية العرض وفق النطاقات المشتركة."
    },
    "usage": {
      "en": "Use for compact equal-span items; use Responsive Layout for larger main/sidebar regions.",
      "ar": "لعناصر موجزة متساوية الامتداد؛ استخدم التخطيط المتجاوب لمناطق المحتوى والجانب الكبيرة."
    },
    "variants": {
      "en": "4/8/12 columns; 16/24/32 gutters at below 760 / 760+ / 1200+ widths. No span or item-count parameter.",
      "ar": "٤ و٨ و١٢ عموداً وفجوات ١٦ و٢٤ و٣٢ عند أقل من ٧٦٠ ومن ٧٦٠ ومن ١٢٠٠؛ لا معامل span أو عدد عناصر."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Requires bounded width. Flutter selects bands by parent width and includes shared margins; web uses viewport bands and can be composed inside bk-container.",
      "ar": "يتطلب عرضاً محدوداً. تختار فلاتر النطاق حسب الأصل وتضيف الهوامش؛ يستخدم الويب عرض الشاشة ويمكن تركيبه داخل bk-container."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkResponsiveGrid(children: const [Text('1'), Text('2'), Text('3'), Text('4')])",
      "web": "<div class=\"bk-layout-grid\"><span>1</span><span>2</span><span>3</span><span>4</span></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkResponsiveGrid extends StatelessWidget\nconst BkResponsiveGrid({super.key, required this.children});\nfinal List<Widget> children;",
      "support": "",
      "web": ".bk-layout-grid",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/foundations.dart",
      "line": 100,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/foundations.dart#L100"
    }
  },
  {
    "id": "divider",
    "name": {
      "en": "Divider",
      "ar": "الفاصل"
    },
    "symbol": "BkDivider",
    "file": "layout.dart",
    "web": ".bk-divider",
    "family": "layout",
    "description": {
      "en": "A theme-colored separator between related regions.",
      "ar": "فاصل بلون المظهر بين مناطق مرتبطة."
    },
    "usage": {
      "en": "Use to distinguish groups without inventing another card for every section.",
      "ar": "لتمييز المجموعات دون إضافة بطاقة لكل قسم."
    },
    "variants": {
      "en": "Flutter Divider height 24, thickness 1; web 1px rule with 24px block margins. No parameters except key.",
      "ar": "ارتفاع فلاتر ٢٤ وسماكة ١؛ قاعدة الويب ١ بكسل مع هوامش عمودية ٢٤. لا معاملات سوى key."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Follows available width. It does not provide headings or scroll behavior.",
      "ar": "يتبع العرض المتاح ولا يوفر عناوين أو سلوك تمرير."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkDivider()",
      "web": "<hr class=\"bk-divider\">",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkDivider extends StatelessWidget\nconst BkDivider({super.key});\n",
      "support": "",
      "web": ".bk-divider",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 62,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L62"
    }
  },
  {
    "id": "spacer",
    "name": {
      "en": "Spacer",
      "ar": "المسافة"
    },
    "symbol": "BkSpacer",
    "file": "layout.dart",
    "web": ".bk-spacer / .bk-spacer--inline",
    "family": "layout",
    "description": {
      "en": "A fixed nonsemantic gap along one axis.",
      "ar": "مسافة ثابتة غير دلالية على محور واحد."
    },
    "usage": {
      "en": "Use for a deliberate one-off gap; prefer parent gap for repeated spacing.",
      "ar": "لفجوة مقصودة منفردة ويفضل gap في الأصل للمسافات المتكررة."
    },
    "variants": {
      "en": "size defaults 16, axis defaults vertical. Web --bk-gap overrides the default; inline modifier is horizontal.",
      "ar": "size=16 وaxis عمودي افتراضياً؛ يغير --bk-gap مسافة الويب ويجعل inline المحور أفقياً."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Fixed space is safe in an unbounded scroll axis; unlike native Flutter Spacer it does not expand to consume flex space.",
      "ar": "المسافة الثابتة مناسبة داخل محور تمرير غير محدود؛ ولا تتمدد لاستهلاك الفراغ مثل Spacer الأصلي."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkSpacer(size: BkSpace.xxl)",
      "web": "<span class=\"bk-spacer\" style=\"--bk-gap:32px\" aria-hidden=\"true\"></span>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkSpacer extends StatelessWidget\nconst BkSpacer({\n    super.key,\n    this.size = BkSpace.lg,\n    this.axis = Axis.vertical,\n  });\nfinal double size;\nfinal Axis axis;",
      "support": "",
      "web": ".bk-spacer / .bk-spacer--inline",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 70,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L70"
    }
  },
  {
    "id": "stack",
    "name": {
      "en": "Stack",
      "ar": "التراكب"
    },
    "symbol": "BkStack",
    "file": "layout.dart",
    "web": ".bk-overlay-stack",
    "family": "layout",
    "description": {
      "en": "Visual layering with meaningful source order.",
      "ar": "طبقات مرئية مع ترتيب مصدر ذي معنى."
    },
    "usage": {
      "en": "Use for a badge over a preview or other deliberate overlay.",
      "ar": "لشارة فوق معاينة أو طبقات مقصودة أخرى."
    },
    "variants": {
      "en": "alignment defaults AlignmentDirectional.topStart. Web children share one grid cell; badge modifier aligns inline-end.",
      "ar": "المحاذاة الافتراضية بداية علوية اتجاهية. تشترك عناصر الويب في خلية واحدة وتوضع الشارة في النهاية المنطقية."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Positioned Flutter children need a bounded height. Web bk-stack remains the older vertical-flow utility; use bk-overlay-stack for visual overlay.",
      "ar": "تحتاج عناصر Positioned في فلاتر ارتفاعاً محدوداً. يبقى bk-stack في الويب تدفقاً عمودياً؛ استخدم bk-overlay-stack للتراكب المرئي."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "SizedBox(height: 120, child: BkStack(children: [const SizedBox.expand(child: ColoredBox(color: Colors.green)), const PositionedDirectional(top: 8, end: 8, child: Text('Draft'))]))",
      "web": "<div class=\"bk-overlay-stack\"><div class=\"bk-card\">Summary preview</div><span class=\"bk-badge bk-overlay-stack__badge\">Draft</span></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkStack extends StatelessWidget\nconst BkStack({\n    super.key,\n    required this.children,\n    this.alignment = AlignmentDirectional.topStart,\n  });\nfinal List<Widget> children;\nfinal AlignmentGeometry alignment;",
      "support": "",
      "web": ".bk-overlay-stack",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 86,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L86"
    }
  },
  {
    "id": "responsive-layout",
    "name": {
      "en": "Responsive Layout",
      "ar": "التخطيط المتجاوب"
    },
    "symbol": "BkResponsiveLayout",
    "file": "layout.dart",
    "web": ".bk-responsive-layout",
    "family": "layout",
    "description": {
      "en": "Chooses content arrangement by available width.",
      "ar": "اختيار ترتيب المحتوى حسب العرض المتاح."
    },
    "usage": {
      "en": "Use for materially different compact/medium/wide arrangements while keeping state above the branches.",
      "ar": "لتخطيطات مختلفة فعلياً بين أحجام العرض مع إبقاء الحالة أعلى الفروع."
    },
    "variants": {
      "en": "Flutter compact/medium/wide WidgetBuilders at 760/1200 parent width. Web body changes from one column to 1:2 split at a 760px container query.",
      "ar": "دوال compact وmedium وwide عند عرض أصل ٧٦٠ و١٢٠٠. يتحول جسم الويب من عمود واحد إلى نسبة ١:٢ عندما تبلغ الحاوية ٧٦٠."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Flutter requires bounded width and builds one branch only. Web requires CSS container-query support; older browsers retain one column.",
      "ar": "تتطلب فلاتر عرضاً محدوداً وتبني فرعاً واحداً. تتطلب الويب دعم استعلام الحاوية؛ يبقى عمود واحد في المتصفحات الأقدم."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkResponsiveLayout(compact: (context) => const Text('Compact'), medium: (context) => const Text('Medium'), wide: (context) => const Text('Wide'))",
      "web": "<div class=\"bk-responsive-layout\"><div class=\"bk-responsive-layout__body\"><aside>Filters</aside><div>Results</div></div></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkResponsiveLayout extends StatelessWidget\nconst BkResponsiveLayout({\n    super.key,\n    required this.compact,\n    required this.medium,\n    required this.wide,\n  });\nfinal WidgetBuilder compact, medium, wide;",
      "support": "",
      "web": ".bk-responsive-layout",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 100,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L100"
    }
  },
  {
    "id": "page-scaffold",
    "name": {
      "en": "Page Scaffold",
      "ar": "هيكل الصفحة"
    },
    "symbol": "BkPageScaffold",
    "file": "layout.dart",
    "web": ".bk-page-scaffold",
    "family": "layout",
    "description": {
      "en": "A route-level shell with safe content and navigation slots.",
      "ar": "هيكل صفحة مع محتوى آمن ومواضع تنقل."
    },
    "usage": {
      "en": "Use once per route; let body own its scroll view.",
      "ar": "استخدمه مرة لكل مسار واجعل body يدير التمرير."
    },
    "variants": {
      "en": "body required; appBar/drawer/bottomNavigationBar/floatingActionButton optional. Web header/main/footer with 100dvh minimum.",
      "ar": "body مطلوب ومواضع شريط التطبيق والدرج والتنقل السفلي والزر العائم اختيارية. رأس ومحتوى وتذييل على الويب بحد أدنى 100dvh."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Flutter body is wrapped in SafeArea. Web includes bottom safe-area padding; document/main content owns vertical scrolling.",
      "ar": "تغلف SafeArea جسم فلاتر وتضيف الويب مساحة الأمان السفلية؛ يدير المستند أو المحتوى الرئيسي التمرير."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkPageScaffold(appBar: BkAppBar(title: 'Records'), body: ListView(children: const [Text('Record content')]))",
      "web": "<div class=\"bk-page-scaffold\"><header><h1>Records</h1></header><main id=\"doc-main\">Record content</main><footer>End of page</footer></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkPageScaffold extends StatelessWidget\nconst BkPageScaffold({\n    super.key,\n    required this.body,\n    this.appBar,\n    this.drawer,\n    this.bottomNavigationBar,\n    this.floatingActionButton,\n  });\nfinal Widget body;\nfinal PreferredSizeWidget? appBar;\nfinal Widget? drawer, bottomNavigationBar, floatingActionButton;",
      "support": "",
      "web": ".bk-page-scaffold",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 122,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L122"
    }
  },
  {
    "id": "section-header",
    "name": {
      "en": "Section Header",
      "ar": "عنوان القسم"
    },
    "symbol": "BkSectionHeader",
    "file": "layout.dart",
    "web": ".bk-section-header",
    "family": "layout",
    "description": {
      "en": "A section title with optional description and action.",
      "ar": "عنوان قسم مع وصف وإجراء اختياريين."
    },
    "usage": {
      "en": "Use to introduce a coherent content group with one relevant action.",
      "ar": "لتقديم مجموعة محتوى مترابطة مع إجراء مناسب."
    },
    "variants": {
      "en": "title required, description/action optional. Flutter stacks its action below copy; web can wrap action beside it.",
      "ar": "title مطلوب وdescription وaction اختياريان. تضع فلاتر الإجراء تحت النص ويمكن أن تضعه الويب بجواره مع الالتفاف."
    },
    "states": {
      "en": "Passive content: no hover/focus/pressed/disabled/loading or selection API. Model loading, errors and success in the owning view; any child action follows its own component contract.",
      "ar": "محتوى للعرض: لا توجد واجهة للتحويم أو التركيز أو الضغط أو التعطيل أو التحميل أو التحديد. تدير الواجهة المالكة التحميل والخطأ والنجاح؛ وتتبع الإجراءات الداخلية قواعد مكوناتها."
    },
    "accessibility": {
      "en": "Layout creates no interactive semantics. Preserve source/reading order, meaningful headings and focus order; children remain responsible for labels and touch targets.",
      "ar": "التخطيط لا يضيف دلالات تفاعل. حافظ على ترتيب المصدر والقراءة والتركيز والعناوين الصحيحة؛ المكونات الداخلية مسؤولة عن تسمياتها ومساحات لمسها."
    },
    "responsive": {
      "en": "Text height grows. Choose the correct HTML heading level; Flutter title has header semantics.",
      "ar": "يتمدد ارتفاع النص. اختر مستوى عنوان HTML المناسب ويحمل عنوان فلاتر دلالة header."
    },
    "rtl": {
      "en": "Use logical start/end alignment and preserve source order. Directionality controls visual direction; the application still supplies translated child content.",
      "ar": "استخدم محاذاة البداية والنهاية المنطقية وحافظ على ترتيب المصدر. يتحكم Directionality في الاتجاه المرئي ويوفر التطبيق ترجمة المحتوى."
    },
    "examples": {
      "flutter": "BkSectionHeader(title: 'Monthly overview', description: 'Sample period', action: BkButton(label: 'Export preview', onPressed: () {}))",
      "web": "<div class=\"bk-section-header\"><div><h2>Monthly overview</h2><p>Sample period</p></div><button class=\"bk-button\" type=\"button\">Export preview</button></div>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Preserve meaningful reading order and honor parent constraints.",
        "ar": "حافظ على ترتيب قراءة مفيد واحترم قيود الأصل."
      },
      "dont": {
        "en": "Do not use layout as an interaction or hide overflow by clipping important content.",
        "ar": "لا تجعل التخطيط بديلاً للتفاعل ولا تقطع محتوى مهماً لإخفاء تجاوز العرض."
      }
    },
    "version": "0.10.0",
    "api": {
      "flutter": "// class BkSectionHeader extends StatelessWidget\nconst BkSectionHeader({\n    super.key,\n    required this.title,\n    this.description,\n    this.action,\n  });\nfinal String title;\nfinal String? description;\nfinal Widget? action;",
      "support": "",
      "web": ".bk-section-header",
      "bindings": ""
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 144,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L144"
    }
  },
  {
    "id": "modal",
    "name": {
      "en": "Modal Dialog",
      "ar": "الحوار المشروط"
    },
    "symbol": "showBkModal",
    "file": "layout.dart",
    "web": ".bk-modal",
    "family": "overlay",
    "description": {
      "en": "A modal surface containing a short focused workflow.",
      "ar": "سطح مشروط يحصر مسار عمل قصيراً."
    },
    "usage": {
      "en": "Use when the user must handle a focused decision before returning to the parent context.",
      "ar": "عندما يحتاج المستخدم إتمام قرار محدد قبل العودة للسياق السابق."
    },
    "variants": {
      "en": "Native scrollable AlertDialog; no persistent/non-dismissible or size parameter in helper.",
      "ar": "AlertDialog أصلي قابل للتمرير؛ لا معامل لحوار غير قابل للإغلاق أو حجم."
    },
    "states": {
      "en": "Returns Future<T?>; cancellation/close returns null unless application code pops a result. Native modal routes contain focus and handle back/Escape. Web showModal makes the rest of the page inert; the binding restores a connected trigger on close. Web trigger disabled/aria-disabled blocks opening.",
      "ar": "تعيد Future<T?> ويعيد الإلغاء null ما لم يرجع التطبيق نتيجة. تحصر المسارات الأصلية التركيز وتدعم الرجوع وEscape. تعطل showModal خلفية الويب ويعيد الربط التركيز إلى زر متصل بعد الإغلاق ويمنع فتح الزر المعطل."
    },
    "accessibility": {
      "en": "Provide a labelled trigger and a titled surface with an explicit localized close action. Check keyboard focus, Escape dismissal and focus return; modal and nonmodal surfaces have different contracts.",
      "ar": "وفّر زر فتح مسمى وسطحاً ذا عنوان وزر إغلاق مترجماً. اختبر التركيز وEscape وعودة التركيز؛ يختلف سلوك الحوار المشروط عن النافذة غير المشروطة."
    },
    "responsive": {
      "en": "Constrain the surface to the viewport, account for safe areas/keyboard insets and scroll long content. Avoid a fixed height that hides the close action.",
      "ar": "احصر السطح داخل الشاشة وراعِ المناطق الآمنة ومساحة لوحة المفاتيح ومرّر المحتوى الطويل. تجنب ارتفاعاً ثابتاً يخفي زر الإغلاق."
    },
    "rtl": {
      "en": "Translate trigger, title, content and close text. Use logical alignment; verify the anchor and focus return in RTL as well as LTR.",
      "ar": "ترجم زر الفتح والعنوان والمحتوى والإغلاق. استخدم المحاذاة المنطقية واختبر الموضع وعودة التركيز في الاتجاهين."
    },
    "examples": {
      "flutter": "Builder(builder: (context) => BkButton(label: 'Review', onPressed: () { showBkModal<void>(context: context, title: 'Review sample', closeLabel: 'Close review', builder: (dialogContext) => const Text('Sample details')); }))",
      "web": "<button id=\"doc-modal-open\" type=\"button\">Review</button><dialog id=\"doc-modal\" class=\"bk-modal\" aria-labelledby=\"doc-modal-title\"><h3 id=\"doc-modal-title\">Review sample</h3><p>Sample details</p><button type=\"button\" data-bk-close autofocus>Close review</button></dialog>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Supply localized close text and use the builder context when returning a result.",
        "ar": "وفّر نص إغلاق مترجماً واستخدم سياق builder لإرجاع نتيجة."
      },
      "dont": {
        "en": "Do not nest routine dialogs or treat dismissal as confirmation.",
        "ar": "لا تكدس الحوارات الروتينية ولا تعتبر الإغلاق تأكيداً."
      }
    },
    "webBindings": [
      "bindBokrahModal"
    ],
    "javascript": "const destroy = bindBokrahModal(document.querySelector('#doc-modal-open'), document.querySelector('#doc-modal'));\n// Call destroy() before removing the trigger/dialog.",
    "version": "0.10.0",
    "api": {
      "flutter": "Future<T?> showBkModal<T>({\n  required BuildContext context,\n  required String title,\n  required String closeLabel,\n  required WidgetBuilder builder,\n});",
      "support": "",
      "web": ".bk-modal",
      "bindings": "export declare function bindBokrahModal(trigger: HTMLElement, dialog: HTMLDialogElement): () => void;"
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 169,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L169"
    }
  },
  {
    "id": "bottom-sheet",
    "name": {
      "en": "Bottom Sheet",
      "ar": "اللوحة السفلية"
    },
    "symbol": "showBkBottomSheet",
    "file": "layout.dart",
    "web": ".bk-modal bk-modal--sheet",
    "family": "overlay",
    "description": {
      "en": "A modal surface containing a short focused workflow.",
      "ar": "سطح مشروط يحصر مسار عمل قصيراً."
    },
    "usage": {
      "en": "Use when the user must handle a focused decision before returning to the parent context.",
      "ar": "عندما يحتاج المستخدم إتمام قرار محدد قبل العودة للسياق السابق."
    },
    "variants": {
      "en": "Native modal bottom sheet with drag handle, SafeArea, keyboard inset and 85% height. No height/drag parameter.",
      "ar": "لوحة سفلية مشروطة أصلية مع مقبض سحب وSafeArea ومساحة لوحة مفاتيح وارتفاع ٨٥٪؛ لا معامل ارتفاع أو سحب."
    },
    "states": {
      "en": "Returns Future<T?>; cancellation/close returns null unless application code pops a result. Native modal routes contain focus and handle back/Escape. Web showModal makes the rest of the page inert; the binding restores a connected trigger on close. Web trigger disabled/aria-disabled blocks opening.",
      "ar": "تعيد Future<T?> ويعيد الإلغاء null ما لم يرجع التطبيق نتيجة. تحصر المسارات الأصلية التركيز وتدعم الرجوع وEscape. تعطل showModal خلفية الويب ويعيد الربط التركيز إلى زر متصل بعد الإغلاق ويمنع فتح الزر المعطل."
    },
    "accessibility": {
      "en": "Provide a labelled trigger and a titled surface with an explicit localized close action. Check keyboard focus, Escape dismissal and focus return; modal and nonmodal surfaces have different contracts.",
      "ar": "وفّر زر فتح مسمى وسطحاً ذا عنوان وزر إغلاق مترجماً. اختبر التركيز وEscape وعودة التركيز؛ يختلف سلوك الحوار المشروط عن النافذة غير المشروطة."
    },
    "responsive": {
      "en": "Constrain the surface to the viewport, account for safe areas/keyboard insets and scroll long content. Avoid a fixed height that hides the close action.",
      "ar": "احصر السطح داخل الشاشة وراعِ المناطق الآمنة ومساحة لوحة المفاتيح ومرّر المحتوى الطويل. تجنب ارتفاعاً ثابتاً يخفي زر الإغلاق."
    },
    "rtl": {
      "en": "Translate trigger, title, content and close text. Use logical alignment; verify the anchor and focus return in RTL as well as LTR.",
      "ar": "ترجم زر الفتح والعنوان والمحتوى والإغلاق. استخدم المحاذاة المنطقية واختبر الموضع وعودة التركيز في الاتجاهين."
    },
    "examples": {
      "flutter": "Builder(builder: (context) => BkButton(label: 'Review', onPressed: () { showBkBottomSheet<void>(context: context, title: 'Review sample', closeLabel: 'Close review', builder: (sheetContext) => const Text('Sample details')); }))",
      "web": "<button id=\"doc-bottom-sheet-open\" type=\"button\">Review</button><dialog id=\"doc-bottom-sheet\" class=\"bk-modal bk-modal--sheet\" aria-labelledby=\"doc-bottom-sheet-title\"><h3 id=\"doc-bottom-sheet-title\">Review sample</h3><p>Sample details</p><button type=\"button\" data-bk-close autofocus>Close review</button></dialog>",
      "kind": "widget"
    },
    "guidance": {
      "do": {
        "en": "Supply localized close text and use the builder context when returning a result.",
        "ar": "وفّر نص إغلاق مترجماً واستخدم سياق builder لإرجاع نتيجة."
      },
      "dont": {
        "en": "Do not nest routine dialogs or treat dismissal as confirmation.",
        "ar": "لا تكدس الحوارات الروتينية ولا تعتبر الإغلاق تأكيداً."
      }
    },
    "webBindings": [
      "bindBokrahModal"
    ],
    "javascript": "const destroy = bindBokrahModal(document.querySelector('#doc-bottom-sheet-open'), document.querySelector('#doc-bottom-sheet'));\n// Call destroy() before removing the trigger/dialog.",
    "version": "0.10.0",
    "api": {
      "flutter": "Future<T?> showBkBottomSheet<T>({\n  required BuildContext context,\n  required String title,\n  required String closeLabel,\n  required WidgetBuilder builder,\n});",
      "support": "",
      "web": ".bk-modal bk-modal--sheet",
      "bindings": "export declare function bindBokrahModal(trigger: HTMLElement, dialog: HTMLDialogElement): () => void;"
    },
    "source": {
      "path": "packages/flutter/lib/src/layout.dart",
      "line": 188,
      "url": "https://github.com/Mahfoud-Sa/bokrah-design-system/blob/main/packages/flutter/lib/src/layout.dart#L188"
    }
  }
];
