import 'package:flutter/material.dart';
import 'tokens.g.dart';
import 'theme.dart';

enum BkButtonVariant { primary, secondary, danger }

enum BkTone { neutral, success, warning, danger, info }

class BkButton extends StatelessWidget {
  const BkButton({
    super.key,
    required this.label,
    this.onPressed,
    this.icon,
    this.loading = false,
    this.loadingLabel = 'Loading',
    this.variant = BkButtonVariant.primary,
  });
  final String label;
  final VoidCallback? onPressed;
  final IconData? icon;
  final bool loading;
  final String loadingLabel;
  final BkButtonVariant variant;

  @override
  Widget build(BuildContext context) {
    final action = loading ? null : onPressed;
    final content = Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        if (loading) ...[
          const ExcludeSemantics(
            child: SizedBox(
              width: 16,
              height: 16,
              child: CircularProgressIndicator(strokeWidth: 2),
            ),
          ),
          const SizedBox(width: BkSpace.sm),
        ] else if (icon != null) ...[
          Icon(icon, size: 18),
          const SizedBox(width: BkSpace.sm),
        ],
        Flexible(child: Text(label)),
      ],
    );
    final button = variant == BkButtonVariant.secondary
        ? OutlinedButton(onPressed: action, child: content)
        : FilledButton(
            onPressed: action,
            style: variant == BkButtonVariant.danger
                ? FilledButton.styleFrom(
                    backgroundColor: Theme.of(context).colorScheme.error,
                    foregroundColor: Theme.of(context).colorScheme.onError,
                  )
                : null,
            child: content,
          );
    return Semantics(
      liveRegion: loading,
      value: loading ? loadingLabel : null,
      child: button,
    );
  }
}

class BkCard extends StatelessWidget {
  const BkCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(BkSpace.xl),
    this.tinted = false,
  });
  final Widget child;
  final EdgeInsetsGeometry padding;
  final bool tinted;
  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Material(
      color: tinted ? scheme.surfaceContainerLow : scheme.surface,
      shape: RoundedRectangleBorder(
        side: BorderSide(color: scheme.outlineVariant),
        borderRadius: BorderRadius.circular(BkRadius.lg),
      ),
      child: Padding(padding: padding, child: child),
    );
  }
}

(Color, Color) _tone(BuildContext context, BkTone tone) {
  final c = BkThemeTokens.of(context);
  if (tone == BkTone.neutral) return (c['surfaceAlt']!, c['text']!);
  return (c['${tone.name}Surface']!, c[tone.name]!);
}

class BkBadge extends StatelessWidget {
  const BkBadge({super.key, required this.label, this.tone = BkTone.neutral});
  final String label;
  final BkTone tone;
  @override
  Widget build(BuildContext context) {
    final (background, foreground) = _tone(context, tone);
    return DecoratedBox(
      decoration: BoxDecoration(
        color: background,
        borderRadius: BorderRadius.circular(BkRadius.pill),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: BkSpace.md,
          vertical: BkSpace.xs,
        ),
        child: Text(
          label,
          style: TextStyle(
            color: foreground,
            fontSize: BkFontSize.caption,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}

class BkTextField extends StatelessWidget {
  const BkTextField({
    super.key,
    required this.label,
    this.controller,
    this.helperText,
    this.errorText,
    this.onChanged,
    this.enabled = true,
    this.keyboardType,
  });
  final String label;
  final TextEditingController? controller;
  final String? helperText;
  final String? errorText;
  final ValueChanged<String>? onChanged;
  final bool enabled;
  final TextInputType? keyboardType;
  @override
  Widget build(BuildContext context) => TextField(
    controller: controller,
    enabled: enabled,
    keyboardType: keyboardType,
    onChanged: onChanged,
    decoration: InputDecoration(
      labelText: label,
      helperText: helperText,
      errorText: errorText,
    ),
  );
}

class BkAlert extends StatelessWidget {
  const BkAlert({
    super.key,
    required this.title,
    required this.message,
    this.tone = BkTone.info,
  });
  final String title;
  final String message;
  final BkTone tone;
  @override
  Widget build(BuildContext context) {
    final (background, foreground) = _tone(context, tone);
    final icon = switch (tone) {
      BkTone.success => Icons.check_circle_outline,
      BkTone.warning => Icons.warning_amber_outlined,
      BkTone.danger => Icons.error_outline,
      _ => Icons.info_outline,
    };
    return DecoratedBox(
      decoration: BoxDecoration(
        color: background,
        borderRadius: BorderRadius.circular(BkRadius.md),
      ),
      child: Padding(
        padding: const EdgeInsets.all(BkSpace.lg),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, color: foreground),
            const SizedBox(width: BkSpace.md),
            Expanded(
              child: DefaultTextStyle.merge(
                style: TextStyle(color: foreground),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(fontWeight: FontWeight.w700),
                    ),
                    const SizedBox(height: BkSpace.xs),
                    Text(message),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class BkStatCard extends StatelessWidget {
  const BkStatCard({
    super.key,
    required this.label,
    required this.value,
    this.detail,
    this.tinted = false,
  });
  final String label;
  final String value;
  final String? detail;
  final bool tinted;
  @override
  Widget build(BuildContext context) => BkCard(
    tinted: tinted,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: TextStyle(
            color: Theme.of(context).colorScheme.onSurfaceVariant,
          ),
        ),
        const SizedBox(height: BkSpace.sm),
        Text(
          value,
          textDirection: TextDirection.ltr,
          style: Theme.of(context).textTheme.headlineMedium,
        ),
        if (detail != null) ...[
          const SizedBox(height: BkSpace.sm),
          Text(detail!, style: Theme.of(context).textTheme.bodySmall),
        ],
      ],
    ),
  );
}

class BkEmptyState extends StatelessWidget {
  const BkEmptyState({
    super.key,
    required this.title,
    required this.message,
    this.action,
  });
  final String title;
  final String message;
  final Widget? action;
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.all(BkSpace.xxl),
    child: Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Icon(Icons.inbox_outlined, size: 36),
        const SizedBox(height: BkSpace.lg),
        Text(
          title,
          textAlign: TextAlign.center,
          style: Theme.of(context).textTheme.titleLarge,
        ),
        const SizedBox(height: BkSpace.sm),
        Text(message, textAlign: TextAlign.center),
        if (action != null) ...[const SizedBox(height: BkSpace.lg), action!],
      ],
    ),
  );
}
