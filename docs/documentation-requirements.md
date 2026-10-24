# 8. Documentation Requirements / متطلبات التوثيق

Every released component must have the ten sections below. The [component index](component-reference.md) links to one bilingual reference per component, and the [website reference](https://mahfoud-sa.github.io/bokrah-design-system/#documentation) supports searching by name, Arabic name, API symbol and component family.

يجب أن يتضمن توثيق كل مكون الأقسام العشرة أدناه. يتضمن الفهرس مرجعاً باللغتين لكل مكون ويتيح الموقع البحث بالاسم العربي أو الإنجليزي أو اسم الواجهة أو الفئة.

## Table of contents

1. [Required sections](#required-sections)
2. [Coverage and scope](#coverage-and-scope)
3. [Authoring workflow](#authoring-workflow)
4. [Verification](#verification)
5. [Review checklist](#review-checklist)

## Required sections

| # | Section | What must be documented |
| --- | --- | --- |
| 1 | Component name and description | Public name/symbol, purpose and platform counterparts. |
| 2 | Usage guidelines and when to use it | Appropriate tasks and differences from nearby alternatives. |
| 3 | Variants and sizes | Actual supported variants, size/default tokens and unsupported presets. Do not document planned features as shipped. |
| 4 | Properties / API parameters | Real constructor/function signature, required/optional arguments, defaults, types, callback ownership, related data models, native HTML attributes and exported bindings. |
| 5 | States and interactions | Supported default/hover/focus/pressed/disabled/loading/error/success/selected/read-only behavior; explicitly identify inapplicable or unexposed states. Explain controlled vs internal state, cleanup, dismissal and keyboard behavior where relevant. |
| 6 | Accessibility requirements | Names, roles/current/selected/expanded relationships, focus/keyboard behavior, status announcements, contrast, target size and passive vs interactive semantics. |
| 7 | Responsive behavior | Constraints, wrapping/scrolling, breakpoints, fixed vs content height, overlay limits and enlarged text. |
| 8 | RTL and localization support | Directionality, logical alignment, mirroring rules, translated labels and application-owned formatting. |
| 9 | Code implementation examples | Both Flutter and semantic HTML, with JavaScript initialization/cleanup for exported bindings; setup/context/asset assumptions stated. |
| 10 | Do’s and Don’ts | A recommended practice and concrete misuse to avoid for that component. |

الأقسام تشمل الاسم والوصف والاستخدام والأنواع والأحجام والواجهة والحالات والوصول والتجاوب والعربية والأمثلة والممارسات الصحيحة والخاطئة. لا يكفي وضع عناوين فارغة أو نص عام يخفي حدود التنفيذ.

## Coverage and scope

The reference covers all 46 public Flutter widgets (including the generic menu wrappers), plus toast, modal dialog and bottom sheet helpers: 49 entries. Web counterparts are grouped with their Flutter component. The generated index is the authority for the exact entry count; coverage tests derive the widget inventory from source rather than a handwritten count.

Value types such as BkNavigationItem, BkBreadcrumb, BkMenuAction, BkTimelineEntry and BkChartValue are included in the API sections of their consuming components. BkButtonVariant, BkTone and BkIconName enums are included where used. Shared token classes, BkTheme and BkThemeTokens are foundational APIs, covered in the setup and existing Foundations guide; they are not interactive UI components. Application patterns remain in [Design Patterns](design-patterns.md).

Some platform capabilities deliberately differ. Examples include native Flutter navigation versus semantic HTML links, scrollable Flutter TabBar versus a web keyboard binding, and web container queries versus Flutter LayoutBuilder. Every reference describes the implemented contract instead of promising an identical API. A style class never supplies arbitrary application behavior by itself.

يشمل المرجع جميع مكونات فلاتر العامة مع الأمثلة المقابلة في الويب والمساعدات المرتبطة بها. توثق نماذج القيم والتعدادات مع المكونات التي تستخدمها، بينما تبقى السمات والرموز في دليل الأسس. تُذكر فروق المنصتين بدقة ولا تمنح أصناف CSS سلوك التطبيق تلقائياً.

## Authoring workflow

1. Edit curated bilingual guidance and examples in [reference-catalog.mjs](reference-catalog.mjs). Each entry names the source file, public Flutter symbol and corresponding web CSS/API.
2. For a new component, add its entry in the same change as implementation. For a changed API, update the guidance/examples and let signatures regenerate from source.
3. Run `npm run generate`. The documentation generator writes the index, individual Markdown references, website data and compile-checkable Flutter examples.
4. Run `npm run check` and `npm run build`; then run Flutter analysis in packages/flutter. Review both English/Arabic views and representative narrow/large-text layouts for changed components.
5. Commit both the curated source and generated outputs. Do not hand-edit generated Markdown, website reference data or documentation_examples.dart.

حرر المصدر المنسق ثم شغل التوليد والتحقق. أضف التوثيق مع المكون الجديد وعدّل الأمثلة مع تغير الواجهة. راجع اللغتين والتخطيط الضيق، والتزم بعدم تحرير المخرجات المولدة مباشرة.

## Verification

- The generator reads actual constructor/function signatures, public field types and related value types from Flutter source. It links to the implementation's verified line and checks each documented web binding against index.d.ts.
- Root checks reject generated documentation drift, missing public widget coverage, missing bilingual sections/examples, unknown source symbols and unrecognized web component classes.
- Generated Flutter snippets are analyzed alongside the package's test sources. This verifies API names and argument types without claiming every snippet is a standalone application or a complete automated accessibility test.
- Existing widget/flow tests continue to validate component behavior. Documentation changes must not weaken native semantics to make an example look correct.
- Manual review remains necessary for visual layout, screen-reader phrasing, touch behavior and integration-specific routing/formatting. Generated signatures cannot validate editorial quality or application policies.

يستخرج التوليد التواقيع ويتحقق من التغطية والانجراف ويحلل أمثلة فلاتر. تظل المراجعة البشرية لازمة لجودة النص والمظهر وقارئ الشاشة واللمس والتكامل.

## Review checklist

- Are all ten sections substantive and both languages present?
- Do the parameters/defaults/states describe the current implementation?
- Are platform differences and unavailable variants explicit?
- Do snippets use exported APIs, genuine controls and valid labels/IDs?
- Are application-owned callbacks, controllers, localization and async state clearly identified?
- Are cleanup, focus return, scrolling and error/empty behavior explained where applicable?
- Do the do/don’t examples identify real usage decisions rather than vague advice?
- Have generation, coverage checks, Flutter analysis and relevant browser checks passed?

راجع اكتمال الأقسام ودقة الواجهة وفروق المنصتين وصحة الأمثلة والمسؤوليات والتنظيف والتركيز والسلوك وحالات الخطأ مع اجتياز التحقق.
