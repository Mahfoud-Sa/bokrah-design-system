# 3. Navigation Components

[Live web catalogue](https://mahfoud-sa.github.io/bokrah-design-system/#navigation) · [Flutter catalogue](https://mahfoud-sa.github.io/bokrah-design-system/flutter/)

## Contents

- [App Bar / Header](#app-bar--header)
- [Navigation Bar](#navigation-bar)
- [Sidebar / Navigation Drawer](#sidebar--navigation-drawer)
- [Bottom Navigation](#bottom-navigation)
- [Tabs](#tabs)
- [Breadcrumbs](#breadcrumbs)
- [Pagination](#pagination)
- [Stepper](#stepper)
- [Dropdown Menu](#dropdown-menu)
- [Context Menu](#context-menu)
- [Back Button](#back-button)
- [State, accessibility and integration](#state-accessibility-and-integration)

## App Bar / Header

Web: `.bk-app-bar` contains the product/page title and global actions. Use the application's single top-level header/banner landmark; catalogue previews are generic containers so they do not create duplicate page banners. Flutter: `BkAppBar(title:, leading:, actions:)` implements PreferredSizeWidget for Scaffold.appBar. `primary: false` supports embedded previews. Keep task actions distinct from navigation destinations.

## Navigation Bar

Web: a labeled nav with `.bk-navigation-bar` and real `.bk-nav-link` anchors. Mark the current destination with `aria-current="page"`. Flutter: `BkNavigationBar(items:, selectedIndex:, onSelected:)` uses `BkNavigationItem(label:, icon:)`. State and routing belong to the consumer; selection is controlled rather than hidden inside the component.

The catalogue destination links update illustrative content and the active item. Production applications supply route URLs, preserve normal link behavior, and derive selection from their router. Do not use menu roles for ordinary site navigation.

## Sidebar / Navigation Drawer

Web: `.bk-sidebar` for persistent links; `.bk-drawer` on a labeled native modal dialog for compact layouts. Provide a visible close button, initial focus, Escape dismissal and return focus. The example starts focus on Close navigation and updates the selected destination when a link is chosen.

Flutter: `BkSidebar` for a persistent destination list, `BkNavigationDrawer` for Scaffold.drawer. Both receive labels, items, selectedIndex and onSelected. Native Scaffold owns the drawer's modal route and focus behavior. The catalogue opens a dedicated drawer preview screen; use its app-bar menu to open the drawer. The consuming router closes the drawer and performs navigation. Do not remove a route accidentally while merely closing the drawer.

## Bottom Navigation

Web: `.bk-bottom-navigation` with labeled anchors and an active-page state. Icons supplement visible destination labels. Flutter: `BkBottomNavigation` delegates to Material NavigationBar and requires at least two destinations. Prefer a small set of stable top-level destinations. Keep content and controls above the bottom bar; account for device safe areas in the consuming layout.

## Tabs

Web: `.bk-tab-list`, `.bk-tab`, `.bk-tab-panel`, and `bindBokrahTabs(root, {onChange})`. Use a labeled tablist, unique tab/panel IDs, aria-controls, aria-labelledby, and aria-selected. Each content panel has role tabpanel. The helper maintains one Tab stop in the horizontal tablist, toggles panels, and uses automatic activation for preloaded content. Arrow keys move and activate; Home/End select the first/last enabled tab. Left/right visual movement follows RTL direction. Panels with nonfocusable initial content have tabindex 0.

The returned function removes event listeners when the group unmounts. Tab state is local DOM state; applications may observe onChange. Do not use this helper for vertical tabs or slow-loading panels without implementing the corresponding interaction model. See the [WAI-ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) for the semantic and keyboard model.

Flutter: `BkTabs(controller:, labels:)` delegates to native TabBar. Pair it with TabBarView using the same TabController. The consumer owns and disposes the controller, or uses DefaultTabController as in the example. Native tab behavior owns focus, keyboard and swipe interaction.

## Breadcrumbs

Web: labeled nav, ordered list, actual ancestor links, and a noninteractive current item with aria-current page. `.bk-breadcrumbs` supplies layout and decorative separators. Flutter: `BkBreadcrumbs(items:)` with `BkBreadcrumb(label:, onPressed:)`; the final item is current and never invokes an ancestor action. Separators mirror direction. Breadcrumbs show location hierarchy, not the browser's visit history. Keep labels brief and allow wrapping.

## Pagination

Web: `.bk-pagination`, named previous/next buttons and a current-page status. Disable previous on page 1 and next on the last page. The example is bounded to five illustrative pages. Consumers own fetching, URL query parameters, total counts, pending state and error recovery.

Flutter: `BkPagination(page:, pageCount:, label:, previousLabel:, nextLabel:, onChanged:)`. Pages are one-based; pageCount must be positive and the current page must be valid. Labels are supplied by the consumer for localization. Boundary callbacks cannot fire from disabled controls. When real data changes, validate the current page against the new total.

## Stepper

Web: `.bk-stepper` on an ordered list with exactly one aria-current step, a visible content region, and previous/next controls. Completed, current and upcoming steps have text/numbers as well as visual indicators. Flutter: `BkStepper(steps:, currentStep:, onStepTapped:, onContinue:, onCancel:)` delegates to Material Stepper with native localized controls and StepState.

The catalogue allows movement among three sample steps and never saves records. In production, the consumer validates before advancing, decides whether earlier/future steps are reachable, and preserves form state. Do not use a stepper as a substitute for top-level navigation.

## Dropdown Menu

Web: a real button, aria-haspopup menu and aria-expanded state, with a labeled `.bk-menu` and native buttons bearing role menuitem. `bindBokrahMenu(trigger, menu, {onSelect})` provides opening, focus, arrow/Home/End movement, first-character search, Escape dismissal, Tab exit and outside-pointer dismissal. Enter/Space use native button activation. Escape restores focus to the trigger. Menus are flat action menus, not nested menubars or select inputs.

Use aria-disabled true for a focusable unavailable action; the helper prevents activation. Native disabled buttons are skipped because they cannot receive focus. The example includes one unavailable export action. See the [WAI menu button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) and [menu keyboard pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

The controller returns open, openAt, close and destroy. Call destroy when unmounting; it removes document-level listeners. The consumer supplies unique IDs and aria-controls, plus real command behavior through onSelect(value, item). Positions are bounded to the viewport. Close or re-position an open menu when your application changes its anchor layout.

Flutter: `BkDropdownMenu<T>` with `BkMenuAction<T>(value:, label:, enabled:)`, label and onSelected. Native PopupMenuButton supplies menu focus and dismissal. The consumer owns the command and permission checks; disabled presentation alone does not authorize anything.

## Context Menu

Web: the same menu controller can open at a context point. The sample transaction supports right-click, the Context Menu key, Shift+F10, and a visible Transaction actions button. The context surface is keyboard-focusable; Escape returns to the invoking surface. The visible button provides touch and keyboard access without relying on right-click or browser long-press behavior.

Flutter: `BkContextMenu<T>(label:, child:, actions:, onSelected:)` supports secondary click and long press through native showMenu, and always provides a visible BkDropdownMenu fallback. Do not hide essential actions exclusively behind a gesture. The example copy command is a preview; it does not access the clipboard or accounting data.

## Back Button

Web: `.bk-back-button` on an anchor with an explicit destination works for direct visits, refreshes and new tabs. The example points back to the navigation overview. If a product chooses history.back, verify a meaningful in-application prior route and provide a safe fallback.

Flutter: `BkBackButton(label:, onPressed:)` uses the native BackButtonIcon, which follows text direction. A null callback is disabled; it never blindly pops a route. Consumers can use Navigator.canPop/maybePop with a safe destination. Localize the accessible label, and distinguish Back from closing a drawer or dialog.

## State, accessibility and integration

All components use shared colors, typography, focus styles and 48px interactive targets, including light, dark and high contrast. Localize destination names, control labels, menu commands, pagination and step content together. Keep current destination, current tab and current step distinct. Use actual routing state in production; the catalogue demonstrates local preview state only.

The web navigation catalogue gives each landmark a distinct accessible name. Menus and tabs follow their specialized keyboard models; ordinary links retain normal Tab behavior. Only one tab panel is visible at a time. Modal drawers contain focus; nonmodal menus close predictably. Keep focus visible, support larger text, and test narrow layouts, RTL, native back behavior and assistive technology in the consuming product.

```js
import {bindBokrahTabs, bindBokrahMenu} from '@bokrah/design-system';
const disposeTabs = bindBokrahTabs(tabGroup, {onChange: index => selectReport(index)});
const menu = bindBokrahMenu(trigger, menuElement, {onSelect: value => runCommand(value)});
// On unmount:
disposeTabs();
menu.destroy();
```

```dart
Scaffold(
  appBar: BkAppBar(title: 'Bokrah'),
  drawer: BkNavigationDrawer(label: 'Workspace', items: destinations,
    selectedIndex: index, onSelected: navigate),
  bottomNavigationBar: BkBottomNavigation(items: destinations,
    selectedIndex: index, onSelected: navigate),
);
```

Source examples: `examples/web/navigation.js` and `examples/flutter/lib/navigation.dart`. The package does not fetch data, decide permissions, alter accounting records or choose your routing framework.
