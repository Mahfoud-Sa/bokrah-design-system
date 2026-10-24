import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:bokrah_design_system/bokrah_design_system.dart';

class FoundationCatalogue extends StatefulWidget {
  const FoundationCatalogue({super.key, required this.arabic});
  final bool arabic;
  @override
  State<FoundationCatalogue> createState() => _FoundationCatalogueState();
}

class _FoundationCatalogueState extends State<FoundationCatalogue> {
  bool moved = false;
  String text(String en, String ar) => widget.arabic ? ar : en;
  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        text('Complete foundations', 'الأسس الكاملة'),
        style: Theme.of(context).textTheme.headlineMedium,
      ),
      Text(
        text(
          'Expand a category to inspect its shared values.',
          'افتح أي فئة لاستعراض قيمها المشتركة.',
        ),
      ),
      const SizedBox(height: BkSpace.lg),
      for (final category in BkFoundations.categories)
        Padding(
          padding: const EdgeInsets.only(bottom: BkSpace.md),
          child: BkCard(
            padding: EdgeInsets.zero,
            child: ExpansionTile(
              title: Text(category[widget.arabic ? 'ar' : 'en'] as String),
              subtitle: Text(
                (category[widget.arabic ? 'itemsAr' : 'itemsEn'] as List).join(
                  ' · ',
                ),
              ),
              childrenPadding: const EdgeInsets.all(BkSpace.lg),
              expandedCrossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SelectableText(
                  const JsonEncoder.withIndent('  ').convert(
                    category['id'] == 'colors'
                        ? BkThemeTokens.of(context).map(
                            (k, v) => MapEntry(
                              k,
                              '#${v.toARGB32().toRadixString(16).substring(2)}',
                            ),
                          )
                        : category['id'] == 'themes'
                        ? {
                            'light': 'BkTheme.light()',
                            'dark': 'BkTheme.dark()',
                            'high-contrast': 'BkTheme.highContrast()',
                          }
                        : category['id'] == 'borders'
                        ? {
                            'values': category['values'],
                            'borderColor': BkThemeTokens.of(
                              context,
                            )['controlBorder']!.toARGB32().toRadixString(16),
                          }
                        : category['values'],
                  ),
                  textDirection: TextDirection.ltr,
                  style: const TextStyle(fontSize: 12),
                ),
                const SizedBox(height: BkSpace.lg),
                if (category['id'] == 'icons')
                  Wrap(
                    spacing: BkSpace.xl,
                    runSpacing: BkSpace.lg,
                    children: [
                      for (final icon in BkIconName.values)
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            BkIcon(icon),
                            Text(
                              icon.name,
                              style: const TextStyle(fontSize: 12),
                            ),
                          ],
                        ),
                    ],
                  ),
                if (category['id'] == 'grid')
                  BkResponsiveGrid(
                    children: [
                      for (var i = 1; i <= 12; i++)
                        Container(
                          height: 48,
                          alignment: Alignment.center,
                          color: Theme.of(
                            context,
                          ).colorScheme.surfaceContainerLow,
                          child: Text('$i'),
                        ),
                    ],
                  ),
                if (category['id'] == 'shadows')
                  Wrap(
                    spacing: BkSpace.xl,
                    runSpacing: BkSpace.lg,
                    children: [
                      for (final entry in {
                        'raised': BkShadow.raised,
                        'floating': BkShadow.floating,
                        'overlay': BkShadow.overlay,
                      }.entries)
                        Container(
                          padding: const EdgeInsets.all(BkSpace.lg),
                          decoration: BoxDecoration(
                            color: Theme.of(context).colorScheme.surface,
                            borderRadius: BorderRadius.circular(BkRadius.md),
                            boxShadow: [entry.value],
                          ),
                          child: Text(entry.key),
                        ),
                      const Text(
                        'Drop shadow',
                        style: TextStyle(shadows: [BkDropShadow.subtle]),
                      ),
                      Material(
                        elevation: BkElevation.floating,
                        color: Theme.of(context).colorScheme.surface,
                        child: const Padding(
                          padding: EdgeInsets.all(BkSpace.lg),
                          child: Text('Elevation 4'),
                        ),
                      ),
                    ],
                  ),
                if (category['id'] == 'motion') ...[
                  BkButton(
                    label: text('Preview transition', 'معاينة الانتقال'),
                    onPressed: () => setState(() => moved = !moved),
                  ),
                  const SizedBox(height: BkSpace.md),
                  SizedBox(
                    width: 280,
                    height: 64,
                    child: AnimatedAlign(
                      alignment: moved
                          ? AlignmentDirectional.centerEnd
                          : AlignmentDirectional.centerStart,
                      duration: MediaQuery.disableAnimationsOf(context)
                          ? Duration.zero
                          : Duration(milliseconds: BkMotion.normal.round()),
                      curve: BkEasing.standard,
                      child: Container(
                        width: 48,
                        height: 48,
                        decoration: BoxDecoration(
                          color: Theme.of(context).colorScheme.primary,
                          borderRadius: BorderRadius.circular(BkRadius.md),
                        ),
                      ),
                    ),
                  ),
                ],
                if (category['id'] == 'accessibility')
                  Text(
                    text(
                      'Tab focus · 48px touch targets · RTL arrows · reduced motion. Text: 4.5:1, UI: 3:1, high contrast: 7:1.',
                      'تركيز لوحة المفاتيح · أهداف لمس 48 بكسلاً · أسهم RTL · تقليل الحركة. النص 4.5:1، والعناصر 3:1، والتباين العالي 7:1.',
                    ),
                  ),
                if (category['id'] == 'typography')
                  Text(
                    text(
                      'Sizes: logical px. Line heights: ratios. Letter spacing: em; multiply by font size for Flutter TextStyle. Arabic uses normal tracking.',
                      'الأحجام بالبكسل المنطقي. ارتفاع السطر نسبة. التباعد بوحدة em؛ اضربه في حجم الخط لفلاتر. العربية بتباعد طبيعي.',
                    ),
                  ),
              ],
            ),
          ),
        ),
    ],
  );
}
