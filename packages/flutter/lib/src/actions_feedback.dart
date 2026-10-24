import 'package:flutter/material.dart';
import 'components.dart';
import 'tokens.g.dart';
import 'theme.dart';

/// A named icon action; the label also supplies the tooltip.
class BkIconButton extends StatelessWidget {
  const BkIconButton({
    super.key,
    required this.label,
    required this.icon,
    this.onPressed,
  });
  final String label;
  final IconData icon;
  final VoidCallback? onPressed;
  @override
  Widget build(BuildContext context) => IconButton.outlined(
    onPressed: onPressed,
    tooltip: label,
    icon: Icon(icon),
    constraints: const BoxConstraints(minWidth: 48, minHeight: 48),
  );
}

/// Related independent actions. Does not imply single selection or toolbar keys.
class BkButtonGroup extends StatelessWidget {
  const BkButtonGroup({super.key, required this.label, required this.children});
  final String label;
  final List<Widget> children;
  @override
  Widget build(BuildContext context) => Semantics(
    container: true,
    label: label,
    child: Wrap(
      spacing: BkSpace.sm,
      runSpacing: BkSpace.sm,
      children: children,
    ),
  );
}

class BkProgress extends StatelessWidget {
  const BkProgress({super.key, required this.label, this.value})
    : assert(value == null || (value >= 0 && value <= 1));
  final String label;

  /// Null means progress cannot yet be measured; otherwise a fraction 0–1.
  final double? value;
  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(value == null ? label : '$label · ${(value! * 100).round()}%'),
      const SizedBox(height: BkSpace.sm),
      LinearProgressIndicator(
        value: value,
        semanticsLabel: label,
        minHeight: BkSpace.sm,
        borderRadius: BorderRadius.circular(BkRadius.pill),
      ),
    ],
  );
}

/// Decorative placeholder. Its parent supplies a single localized loading status.
class BkSkeleton extends StatelessWidget {
  const BkSkeleton({super.key, this.width, this.height = BkSpace.lg});
  final double? width;
  final double height;
  @override
  Widget build(BuildContext context) => ExcludeSemantics(
    child: Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.outlineVariant,
        borderRadius: BorderRadius.circular(BkRadius.sm),
      ),
    ),
  );
}

abstract final class BkToast {
  /// Informational feedback; important errors should remain in a persistent alert.
  static ScaffoldFeatureController<SnackBar, SnackBarClosedReason> show(
    BuildContext context, {
    required String message,
    BkTone tone = BkTone.info,
    Duration duration = const Duration(seconds: 8),
  }) {
    final colors = BkThemeTokens.of(context);
    final foreground = colors[tone == BkTone.neutral ? 'text' : tone.name]!;
    final background =
        colors[tone == BkTone.neutral ? 'surfaceAlt' : '${tone.name}Surface']!;
    final messenger = ScaffoldMessenger.of(context);
    messenger.hideCurrentSnackBar();
    return messenger.showSnackBar(
      SnackBar(
        content: Text(message, style: TextStyle(color: foreground)),
        backgroundColor: background,
        showCloseIcon: true,
        closeIconColor: foreground,
        behavior: SnackBarBehavior.floating,
        duration: duration,
      ),
    );
  }
}
