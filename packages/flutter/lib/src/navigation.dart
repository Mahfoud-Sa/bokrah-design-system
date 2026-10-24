import 'package:flutter/material.dart';
import 'tokens.g.dart';

class BkNavigationItem {
  const BkNavigationItem({required this.label, required this.icon});
  final String label;
  final IconData icon;
}

class BkAppBar extends StatelessWidget implements PreferredSizeWidget {
  const BkAppBar({
    super.key,
    required this.title,
    this.leading,
    this.actions = const [],
    this.primary = true,
  });
  final String title;
  final Widget? leading;
  final bool primary;
  final List<Widget> actions;
  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
  @override
  Widget build(BuildContext context) => AppBar(
    title: Text(title),
    leading: leading,
    actions: actions,
    primary: primary,
  );
}

class BkNavigationBar extends StatelessWidget {
  const BkNavigationBar({
    super.key,
    required this.items,
    required this.selectedIndex,
    required this.onSelected,
  }) : assert(selectedIndex >= 0 && selectedIndex < items.length);
  final List<BkNavigationItem> items;
  final int selectedIndex;
  final ValueChanged<int> onSelected;
  @override
  Widget build(BuildContext context) => Wrap(
    spacing: BkSpace.sm,
    runSpacing: BkSpace.sm,
    children: [
      for (var i = 0; i < items.length; i++)
        Semantics(
          selected: i == selectedIndex,
          child: TextButton.icon(
            onPressed: () => onSelected(i),
            style: TextButton.styleFrom(
              minimumSize: const Size(48, 48),
              backgroundColor: i == selectedIndex
                  ? Theme.of(context).colorScheme.surfaceContainerLow
                  : null,
            ),
            icon: Icon(items[i].icon, size: 20),
            label: Text(items[i].label),
          ),
        ),
    ],
  );
}

class BkSidebar extends StatelessWidget {
  const BkSidebar({
    super.key,
    required this.label,
    required this.items,
    required this.selectedIndex,
    required this.onSelected,
  }) : assert(selectedIndex >= 0 && selectedIndex < items.length);
  final String label;
  final List<BkNavigationItem> items;
  final int selectedIndex;
  final ValueChanged<int> onSelected;
  @override
  Widget build(BuildContext context) => Material(
    color: Theme.of(context).colorScheme.surface,
    child: Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Padding(
          padding: const EdgeInsets.all(BkSpace.lg),
          child: Text(label, style: Theme.of(context).textTheme.titleMedium),
        ),
        for (var i = 0; i < items.length; i++)
          ListTile(
            selected: i == selectedIndex,
            selectedColor: Theme.of(context).colorScheme.primary,
            selectedTileColor: Theme.of(
              context,
            ).colorScheme.surfaceContainerLow,
            leading: Icon(items[i].icon),
            title: Text(items[i].label),
            onTap: () => onSelected(i),
          ),
      ],
    ),
  );
}

class BkNavigationDrawer extends StatelessWidget {
  const BkNavigationDrawer({
    super.key,
    required this.label,
    required this.items,
    required this.selectedIndex,
    required this.onSelected,
  });
  final String label;
  final List<BkNavigationItem> items;
  final int selectedIndex;
  final ValueChanged<int> onSelected;
  @override
  Widget build(BuildContext context) => Drawer(
    child: SafeArea(
      child: SingleChildScrollView(
        child: BkSidebar(
          label: label,
          items: items,
          selectedIndex: selectedIndex,
          onSelected: onSelected,
        ),
      ),
    ),
  );
}

class BkBottomNavigation extends StatelessWidget {
  const BkBottomNavigation({
    super.key,
    required this.items,
    required this.selectedIndex,
    required this.onSelected,
  }) : assert(items.length >= 2),
       assert(selectedIndex >= 0 && selectedIndex < items.length);
  final List<BkNavigationItem> items;
  final int selectedIndex;
  final ValueChanged<int> onSelected;
  @override
  Widget build(BuildContext context) => NavigationBar(
    selectedIndex: selectedIndex,
    onDestinationSelected: onSelected,
    destinations: [
      for (final item in items)
        NavigationDestination(icon: Icon(item.icon), label: item.label),
    ],
  );
}

/// Pair with TabBarView using the same controller. Caller owns its lifetime.
class BkTabs extends StatelessWidget implements PreferredSizeWidget {
  const BkTabs({super.key, required this.controller, required this.labels})
    : assert(controller.length == labels.length);
  final TabController controller;
  final List<String> labels;
  @override
  Size get preferredSize => const Size.fromHeight(48);
  @override
  Widget build(BuildContext context) => TabBar(
    controller: controller,
    isScrollable: true,
    tabAlignment: TabAlignment.start,
    tabs: [for (final label in labels) Tab(text: label, height: 48)],
  );
}

class BkBreadcrumb {
  const BkBreadcrumb({required this.label, this.onPressed});
  final String label;
  final VoidCallback? onPressed;
}

class BkBreadcrumbs extends StatelessWidget {
  const BkBreadcrumbs({super.key, required this.items})
    : assert(items.length > 0);
  final List<BkBreadcrumb> items;
  @override
  Widget build(BuildContext context) => Wrap(
    crossAxisAlignment: WrapCrossAlignment.center,
    children: [
      for (var i = 0; i < items.length; i++) ...[
        if (i > 0)
          ExcludeSemantics(
            child: Icon(
              Directionality.of(context) == TextDirection.rtl
                  ? Icons.chevron_left
                  : Icons.chevron_right,
              size: 18,
            ),
          ),
        if (i == items.length - 1)
          Semantics(
            selected: true,
            child: Padding(
              padding: const EdgeInsets.all(BkSpace.sm),
              child: Text(items[i].label),
            ),
          )
        else
          TextButton(
            onPressed: items[i].onPressed,
            child: Text(items[i].label),
          ),
      ],
    ],
  );
}

class BkPagination extends StatelessWidget {
  const BkPagination({
    super.key,
    required this.page,
    required this.pageCount,
    required this.label,
    required this.previousLabel,
    required this.nextLabel,
    required this.onChanged,
  }) : assert(pageCount > 0),
       assert(page >= 1 && page <= pageCount);
  final int page, pageCount;
  final String label, previousLabel, nextLabel;
  final ValueChanged<int> onChanged;
  @override
  Widget build(BuildContext context) => Wrap(
    spacing: BkSpace.md,
    crossAxisAlignment: WrapCrossAlignment.center,
    children: [
      OutlinedButton(
        onPressed: page > 1 ? () => onChanged(page - 1) : null,
        child: Text(previousLabel),
      ),
      Semantics(liveRegion: true, child: Text(label)),
      OutlinedButton(
        onPressed: page < pageCount ? () => onChanged(page + 1) : null,
        child: Text(nextLabel),
      ),
    ],
  );
}

class BkStepper extends StatelessWidget {
  const BkStepper({
    super.key,
    required this.steps,
    required this.currentStep,
    this.onStepTapped,
    this.onContinue,
    this.onCancel,
  }) : assert(currentStep >= 0 && currentStep < steps.length);
  final List<Step> steps;
  final int currentStep;
  final ValueChanged<int>? onStepTapped;
  final VoidCallback? onContinue, onCancel;
  @override
  Widget build(BuildContext context) => Stepper(
    physics: const NeverScrollableScrollPhysics(),
    steps: steps,
    currentStep: currentStep,
    onStepTapped: onStepTapped,
    onStepContinue: onContinue,
    onStepCancel: onCancel,
  );
}

class BkMenuAction<T extends Object> {
  const BkMenuAction({
    required this.value,
    required this.label,
    this.enabled = true,
  });
  final T value;
  final String label;
  final bool enabled;
  PopupMenuEntry<T> entry() =>
      PopupMenuItem<T>(value: value, enabled: enabled, child: Text(label));
}

class BkDropdownMenu<T extends Object> extends StatelessWidget {
  const BkDropdownMenu({
    super.key,
    required this.label,
    required this.actions,
    required this.onSelected,
  });
  final String label;
  final List<BkMenuAction<T>> actions;
  final ValueChanged<T> onSelected;
  @override
  Widget build(BuildContext context) => PopupMenuButton<T>(
    tooltip: label,
    onSelected: onSelected,
    itemBuilder: (_) => [for (final action in actions) action.entry()],
    child: ConstrainedBox(
      constraints: const BoxConstraints(minHeight: 48, minWidth: 48),
      child: Padding(
        padding: const EdgeInsets.all(BkSpace.md),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Flexible(child: Text(label)),
            const Icon(Icons.arrow_drop_down),
          ],
        ),
      ),
    ),
  );
}

/// Right click / long press plus an always-visible keyboard and touch fallback.
class BkContextMenu<T extends Object> extends StatelessWidget {
  const BkContextMenu({
    super.key,
    required this.label,
    required this.child,
    required this.actions,
    required this.onSelected,
  });
  final String label;
  final Widget child;
  final List<BkMenuAction<T>> actions;
  final ValueChanged<T> onSelected;
  Future<void> _show(BuildContext context, Offset point) async {
    final overlay =
        Overlay.of(context).context.findRenderObject()! as RenderBox;
    final local = overlay.globalToLocal(point);
    final result = await showMenu<T>(
      context: context,
      position: RelativeRect.fromRect(
        local & const Size(1, 1),
        Offset.zero & overlay.size,
      ),
      items: [for (final action in actions) action.entry()],
      requestFocus: true,
    );
    if (result != null && context.mounted) onSelected(result);
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      GestureDetector(
        onSecondaryTapDown: (details) => _show(context, details.globalPosition),
        onLongPressStart: (details) => _show(context, details.globalPosition),
        child: child,
      ),
      BkDropdownMenu<T>(label: label, actions: actions, onSelected: onSelected),
    ],
  );
}

class BkBackButton extends StatelessWidget {
  const BkBackButton({super.key, required this.label, this.onPressed});
  final String label;
  final VoidCallback? onPressed;
  @override
  Widget build(BuildContext context) => IconButton(
    tooltip: label,
    onPressed: onPressed,
    icon: const BackButtonIcon(),
    constraints: const BoxConstraints(minWidth: 48, minHeight: 48),
  );
}
