import 'dart:math' as math;
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'components.dart';
import 'actions_feedback.dart';
import 'tokens.g.dart';

class BkListTile extends StatelessWidget {
  const BkListTile({
    super.key,
    required this.title,
    this.subtitle,
    this.leading,
    this.trailing,
    this.onTap,
  });
  final String title;
  final String? subtitle;
  final Widget? leading, trailing;
  final VoidCallback? onTap;
  @override
  Widget build(BuildContext context) => Material(
    color: Theme.of(context).colorScheme.surface,
    child: ListTile(
      title: Text(title),
      subtitle: subtitle == null ? null : Text(subtitle!),
      leading: leading,
      trailing: trailing,
      onTap: onTap,
    ),
  );
}

/// Semantic DataTable with horizontal overflow; sorting and filtering are controlled.
class BkDataGrid extends StatelessWidget {
  BkDataGrid({
    super.key,
    required this.caption,
    required this.columns,
    required this.rows,
    required this.emptyLabel,
    this.numericColumns = const {},
    this.sortColumnIndex,
    this.sortAscending = true,
    this.onSort,
  }) : assert(columns.isNotEmpty),
       assert(rows.every((row) => row.length == columns.length)),
       assert(
         sortColumnIndex == null ||
             (sortColumnIndex >= 0 && sortColumnIndex < columns.length),
       );
  final String caption, emptyLabel;
  final List<String> columns;
  final List<List<String>> rows;
  final Set<int> numericColumns;
  final int? sortColumnIndex;
  final bool sortAscending;
  final void Function(int, bool)? onSort;
  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(caption, style: Theme.of(context).textTheme.titleMedium),
      const SizedBox(height: BkSpace.md),
      if (rows.isEmpty)
        Text(emptyLabel)
      else
        LayoutBuilder(
          builder: (context, constraints) => SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: ConstrainedBox(
              constraints: BoxConstraints(
                minWidth: constraints.hasBoundedWidth
                    ? constraints.maxWidth
                    : 0,
              ),
              child: DataTable(
                sortColumnIndex: sortColumnIndex,
                sortAscending: sortAscending,
                columns: [
                  for (var i = 0; i < columns.length; i++)
                    DataColumn(
                      label: Text(columns[i]),
                      numeric: numericColumns.contains(i),
                      onSort: onSort,
                    ),
                ],
                rows: [
                  for (final row in rows)
                    DataRow(
                      cells: [for (final value in row) DataCell(Text(value))],
                    ),
                ],
              ),
            ),
          ),
        ),
    ],
  );
}

class BkAvatar extends StatelessWidget {
  const BkAvatar({
    super.key,
    required this.label,
    required this.initials,
    this.image,
    this.size = 48,
  });
  final String label, initials;
  final ImageProvider? image;
  final double size;
  @override
  Widget build(BuildContext context) {
    final fallback = ColoredBox(
      color: Theme.of(context).colorScheme.surfaceContainerLow,
      child: Center(
        child: Text(
          initials,
          style: TextStyle(
            fontWeight: FontWeight.w700,
            color: Theme.of(context).colorScheme.onSurface,
          ),
        ),
      ),
    );
    return Semantics(
      image: true,
      label: label,
      child: ExcludeSemantics(
        child: ClipOval(
          child: SizedBox.square(
            dimension: size,
            child: image == null
                ? fallback
                : Image(
                    image: image!,
                    fit: BoxFit.cover,
                    errorBuilder: (_, __, ___) => fallback,
                  ),
          ),
        ),
      ),
    );
  }
}

class BkImage extends StatelessWidget {
  const BkImage({
    super.key,
    required this.image,
    required this.label,
    required this.loadingLabel,
    required this.errorLabel,
    this.aspectRatio = 16 / 9,
  });
  final ImageProvider image;
  final String label, loadingLabel, errorLabel;
  final double aspectRatio;
  @override
  Widget build(BuildContext context) => ClipRRect(
    borderRadius: BorderRadius.circular(BkRadius.lg),
    child: AspectRatio(
      aspectRatio: aspectRatio,
      child: Image(
        image: image,
        fit: BoxFit.cover,
        semanticLabel: label,
        frameBuilder: (context, child, frame, synchronous) =>
            frame != null || synchronous
            ? child
            : Semantics(
                label: loadingLabel,
                child: const BkSkeleton(height: 160),
              ),
        errorBuilder: (_, __, ___) => Semantics(
          image: true,
          label: '$label · $errorLabel',
          child: ExcludeSemantics(
            child: ColoredBox(
              color: Theme.of(context).colorScheme.surfaceContainerLow,
              child: Center(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(BkSpace.lg),
                  child: Text(errorLabel, textAlign: TextAlign.center),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}

class BkTag extends StatelessWidget {
  const BkTag({
    super.key,
    required this.label,
    this.onDeleted,
    this.deleteLabel,
  }) : assert(onDeleted == null || deleteLabel != null);
  final String label;
  final VoidCallback? onDeleted;
  final String? deleteLabel;
  @override
  Widget build(BuildContext context) => InputChip(
    label: Text(label),
    onDeleted: onDeleted,
    deleteButtonTooltipMessage: deleteLabel,
    materialTapTargetSize: MaterialTapTargetSize.padded,
  );
}

class BkTooltip extends StatelessWidget {
  const BkTooltip({super.key, required this.label, required this.child});
  final String label;
  final Widget child;
  @override
  Widget build(BuildContext context) => Tooltip(message: label, child: child);
}

/// Anchored nonmodal details. Escape/Close restore focus; outside taps dismiss.
class BkPopover extends StatefulWidget {
  const BkPopover({
    super.key,
    required this.label,
    required this.title,
    required this.message,
    required this.closeLabel,
  });
  final String label, title, message, closeLabel;
  @override
  State<BkPopover> createState() => _BkPopoverState();
}

class _BkPopoverState extends State<BkPopover> {
  final portal = OverlayPortalController(), link = LayerLink();
  final anchor = GlobalKey();
  final triggerFocus = FocusNode(), closeFocus = FocusNode();
  bool opened = false, above = false, rtl = false;
  double width = 300, heightLimit = 300, dx = 0;
  void close([bool restore = true]) {
    if (!opened) return;
    portal.hide();
    setState(() => opened = false);
    if (restore) triggerFocus.requestFocus();
  }

  void toggle() {
    if (opened) {
      close();
      return;
    }
    final box = anchor.currentContext!.findRenderObject()! as RenderBox;
    final rect = box.localToGlobal(Offset.zero) & box.size;
    final screen = MediaQuery.sizeOf(context);
    rtl = Directionality.of(context) == TextDirection.rtl;
    width = math.min(320.0, math.max(80.0, screen.width - 32));
    final base = rtl ? rect.right - width : rect.left;
    final left = base.clamp(16.0, math.max(16.0, screen.width - width - 16));
    dx = left - base;
    above =
        screen.height - rect.bottom < 220 &&
        rect.top > screen.height - rect.bottom;
    heightLimit = math.max(
      80.0,
      math.min(360.0, above ? rect.top - 16 : screen.height - rect.bottom - 16),
    );
    setState(() => opened = true);
    portal.show();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted && opened) closeFocus.requestFocus();
    });
  }

  @override
  void dispose() {
    opened = false;
    triggerFocus.dispose();
    closeFocus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => OverlayPortal(
    controller: portal,
    overlayChildBuilder: (context) => Positioned(
      left: 0,
      top: 0,
      width: width,
      child: CompositedTransformFollower(
        link: link,
        showWhenUnlinked: false,
        targetAnchor: Alignment(rtl ? 1 : -1, above ? -1 : 1),
        followerAnchor: Alignment(rtl ? 1 : -1, above ? 1 : -1),
        offset: Offset(dx, above ? -8 : 8),
        child: TapRegion(
          groupId: this,
          onTapOutside: (_) => close(false),
          child: Focus(
            onFocusChange: (focused) {
              if (!focused && opened) close(false);
            },
            onKeyEvent: (_, event) {
              if (event is KeyDownEvent &&
                  event.logicalKey == LogicalKeyboardKey.escape) {
                close();
                return KeyEventResult.handled;
              }
              return KeyEventResult.ignored;
            },
            child: Material(
              color: Theme.of(context).colorScheme.surface,
              elevation: BkElevation.floating,
              shape: RoundedRectangleBorder(
                side: BorderSide(color: Theme.of(context).colorScheme.outline),
                borderRadius: BorderRadius.circular(BkRadius.lg),
              ),
              child: ConstrainedBox(
                constraints: BoxConstraints(maxHeight: heightLimit),
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(BkSpace.xl),
                  child: Semantics(
                    container: true,
                    label: widget.title,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          widget.title,
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const SizedBox(height: BkSpace.md),
                        Text(widget.message),
                        const SizedBox(height: BkSpace.md),
                        TextButton(
                          focusNode: closeFocus,
                          onPressed: close,
                          child: Text(widget.closeLabel),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    child: TapRegion(
      groupId: this,
      child: CompositedTransformTarget(
        link: link,
        child: OutlinedButton(
          key: anchor,
          focusNode: triggerFocus,
          onPressed: toggle,
          child: Text(widget.label),
        ),
      ),
    ),
  );
}

class BkAccordion extends StatelessWidget {
  const BkAccordion({
    super.key,
    required this.title,
    required this.children,
    this.initiallyExpanded = false,
  });
  final String title;
  final List<Widget> children;
  final bool initiallyExpanded;
  @override
  Widget build(BuildContext context) => Material(
    color: Theme.of(context).colorScheme.surface,
    child: ExpansionTile(
      title: Text(title),
      initiallyExpanded: initiallyExpanded,
      childrenPadding: const EdgeInsets.all(BkSpace.lg),
      expandedCrossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    ),
  );
}

class BkTimelineEntry {
  const BkTimelineEntry({
    required this.title,
    required this.detail,
    required this.time,
  });
  final String title, detail, time;
}

class BkTimeline extends StatelessWidget {
  const BkTimeline({super.key, required this.entries});
  final List<BkTimelineEntry> entries;
  @override
  Widget build(BuildContext context) => Column(
    children: [
      for (var i = 0; i < entries.length; i++)
        IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              SizedBox(
                width: 24,
                child: Column(
                  children: [
                    Container(
                      width: 12,
                      height: 12,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    if (i < entries.length - 1)
                      Expanded(
                        child: VerticalDivider(
                          color: Theme.of(context).colorScheme.outlineVariant,
                          thickness: 2,
                        ),
                      ),
                  ],
                ),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsetsDirectional.only(
                    start: BkSpace.sm,
                    bottom: BkSpace.xl,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        entries[i].time,
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                      Text(
                        entries[i].title,
                        style: const TextStyle(fontWeight: FontWeight.w700),
                      ),
                      Text(entries[i].detail),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
    ],
  );
}

class BkChartValue {
  const BkChartValue({
    required this.label,
    required this.value,
    required this.displayValue,
  }) : assert(value >= 0 && value < double.infinity);
  final String label, displayValue;
  final double value;
}

class BkBarChart extends StatelessWidget {
  const BkBarChart({
    super.key,
    required this.label,
    required this.values,
    required this.emptyLabel,
  });
  final String label, emptyLabel;
  final List<BkChartValue> values;
  @override
  Widget build(BuildContext context) {
    final maximum = values.fold<double>(
      0,
      (maximum, item) => item.value > maximum ? item.value : maximum,
    );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: Theme.of(context).textTheme.titleMedium),
        const SizedBox(height: BkSpace.lg),
        if (values.isEmpty) Text(emptyLabel),
        for (final item in values)
          Semantics(
            label: '${item.label}: ${item.displayValue}',
            child: ExcludeSemantics(
              child: Padding(
                padding: const EdgeInsets.only(bottom: BkSpace.lg),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Wrap(
                      spacing: BkSpace.md,
                      children: [
                        Text(item.label),
                        Text(
                          item.displayValue,
                          style: const TextStyle(fontWeight: FontWeight.w700),
                        ),
                      ],
                    ),
                    const SizedBox(height: BkSpace.xs),
                    LinearProgressIndicator(
                      value: maximum == 0 ? 0 : item.value / maximum,
                      minHeight: 12,
                      borderRadius: BorderRadius.circular(BkRadius.sm),
                    ),
                  ],
                ),
              ),
            ),
          ),
      ],
    );
  }
}

class BkKpiCard extends StatelessWidget {
  const BkKpiCard({
    super.key,
    required this.label,
    required this.value,
    required this.comparison,
    this.comparisonTone = BkTone.neutral,
  });
  final String label, value, comparison;
  final BkTone comparisonTone;
  @override
  Widget build(BuildContext context) => BkCard(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label),
        const SizedBox(height: BkSpace.sm),
        Text(
          value,
          textDirection: TextDirection.ltr,
          style: Theme.of(context).textTheme.headlineMedium,
        ),
        const SizedBox(height: BkSpace.md),
        BkBadge(label: comparison, tone: comparisonTone),
      ],
    ),
  );
}

class BkNoResults extends StatelessWidget {
  const BkNoResults({
    super.key,
    required this.title,
    required this.message,
    required this.clearLabel,
    this.onClear,
  });
  final String title, message, clearLabel;
  final VoidCallback? onClear;
  @override
  Widget build(BuildContext context) => BkEmptyState(
    title: title,
    message: message,
    action: onClear == null
        ? null
        : BkButton(
            label: clearLabel,
            variant: BkButtonVariant.secondary,
            onPressed: onClear,
          ),
  );
}
