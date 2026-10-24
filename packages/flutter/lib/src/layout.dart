import 'package:flutter/material.dart';
import 'tokens.g.dart';

/// Centered content with responsive margins. Requires bounded width.
class BkContainer extends StatelessWidget {
  const BkContainer({super.key, required this.child, this.maxWidth = 1200});
  final Widget child;
  final double maxWidth;
  @override
  Widget build(BuildContext context) => LayoutBuilder(
    builder: (context, c) {
      assert(c.hasBoundedWidth, 'BkContainer requires bounded width.');
      final band = c.maxWidth >= BkGrid.breakpoint['wide']!
          ? 'wide'
          : c.maxWidth >= BkGrid.breakpoint['medium']!
          ? 'medium'
          : 'compact';
      return Padding(
        padding: EdgeInsets.symmetric(
          horizontal: BkGrid.margin[band]!.toDouble(),
        ),
        child: Align(
          alignment: Alignment.topCenter,
          heightFactor: 1,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: maxWidth),
            child: SizedBox(width: double.infinity, child: child),
          ),
        ),
      );
    },
  );
}

/// Wrapping row with intrinsic-width children; no Expanded children.
class BkRow extends StatelessWidget {
  const BkRow({super.key, required this.children, this.gap = BkSpace.lg});
  final List<Widget> children;
  final double gap;
  @override
  Widget build(BuildContext context) => Wrap(
    spacing: gap,
    runSpacing: gap,
    crossAxisAlignment: WrapCrossAlignment.center,
    children: children,
  );
}

class BkColumn extends StatelessWidget {
  const BkColumn({super.key, required this.children, this.gap = BkSpace.lg});
  final List<Widget> children;
  final double gap;
  @override
  Widget build(BuildContext context) => Column(
    mainAxisSize: MainAxisSize.min,
    crossAxisAlignment: CrossAxisAlignment.stretch,
    spacing: gap,
    children: children,
  );
}

class BkDivider extends StatelessWidget {
  const BkDivider({super.key});
  @override
  Widget build(BuildContext context) =>
      const Divider(height: BkSpace.xl, thickness: 1);
}

/// Fixed space, safe inside an unbounded scroll axis.
class BkSpacer extends StatelessWidget {
  const BkSpacer({
    super.key,
    this.size = BkSpace.lg,
    this.axis = Axis.vertical,
  });
  final double size;
  final Axis axis;
  @override
  Widget build(BuildContext context) => SizedBox(
    width: axis == Axis.horizontal ? size : 0,
    height: axis == Axis.vertical ? size : 0,
  );
}

/// Visual overlay. Positioned children require a bounded parent height.
class BkStack extends StatelessWidget {
  const BkStack({
    super.key,
    required this.children,
    this.alignment = AlignmentDirectional.topStart,
  });
  final List<Widget> children;
  final AlignmentGeometry alignment;
  @override
  Widget build(BuildContext context) =>
      Stack(alignment: alignment, children: children);
}

/// Selects only one branch using available parent width.
class BkResponsiveLayout extends StatelessWidget {
  const BkResponsiveLayout({
    super.key,
    required this.compact,
    required this.medium,
    required this.wide,
  });
  final WidgetBuilder compact, medium, wide;
  @override
  Widget build(BuildContext context) => LayoutBuilder(
    builder: (context, c) {
      assert(c.hasBoundedWidth, 'BkResponsiveLayout requires bounded width.');
      return (c.maxWidth >= BkGrid.breakpoint['wide']!
          ? wide
          : c.maxWidth >= BkGrid.breakpoint['medium']!
          ? medium
          : compact)(context);
    },
  );
}

/// Route shell. Body owns scrolling; avoid nesting in another Scaffold.
class BkPageScaffold extends StatelessWidget {
  const BkPageScaffold({
    super.key,
    required this.body,
    this.appBar,
    this.drawer,
    this.bottomNavigationBar,
    this.floatingActionButton,
  });
  final Widget body;
  final PreferredSizeWidget? appBar;
  final Widget? drawer, bottomNavigationBar, floatingActionButton;
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: appBar,
    drawer: drawer,
    bottomNavigationBar: bottomNavigationBar,
    floatingActionButton: floatingActionButton,
    body: SafeArea(child: body),
  );
}

class BkSectionHeader extends StatelessWidget {
  const BkSectionHeader({
    super.key,
    required this.title,
    this.description,
    this.action,
  });
  final String title;
  final String? description;
  final Widget? action;
  @override
  Widget build(BuildContext context) => BkColumn(
    children: [
      Semantics(
        header: true,
        child: Text(title, style: Theme.of(context).textTheme.titleLarge),
      ),
      if (description != null) Text(description!),
      if (action != null)
        Align(alignment: AlignmentDirectional.centerStart, child: action),
    ],
  );
}

/// Native modal routes contain focus, dismiss on Escape/back, and restore focus.
Future<T?> showBkModal<T>({
  required BuildContext context,
  required String title,
  required String closeLabel,
  required WidgetBuilder builder,
}) => showDialog<T>(
  context: context,
  builder: (dialogContext) => AlertDialog(
    title: Text(title),
    scrollable: true,
    content: builder(dialogContext),
    actions: [
      TextButton(
        onPressed: () => Navigator.of(dialogContext).pop(),
        child: Text(closeLabel),
      ),
    ],
  ),
);
Future<T?> showBkBottomSheet<T>({
  required BuildContext context,
  required String title,
  required String closeLabel,
  required WidgetBuilder builder,
}) => showModalBottomSheet<T>(
  context: context,
  isScrollControlled: true,
  useSafeArea: true,
  showDragHandle: true,
  requestFocus: true,
  builder: (sheetContext) => Padding(
    padding: EdgeInsets.only(
      bottom: MediaQuery.viewInsetsOf(sheetContext).bottom,
    ),
    child: FractionallySizedBox(
      heightFactor: .85,
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(BkSpace.xl),
        child: BkColumn(
          children: [
            BkSectionHeader(title: title),
            builder(sheetContext),
            Align(
              alignment: AlignmentDirectional.centerEnd,
              child: TextButton(
                onPressed: () => Navigator.of(sheetContext).pop(),
                child: Text(closeLabel),
              ),
            ),
          ],
        ),
      ),
    ),
  ),
);
