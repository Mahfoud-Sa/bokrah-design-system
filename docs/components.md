# Component usage

[2. UI Components — Buttons & Actions / Feedback & Status](ui-components.md)

[3. Navigation Components: all eleven patterns](navigation.md)

[4. Data Display Components: all ten groups](data-display.md)

## Flutter

```dart
MaterialApp(
  theme: BkTheme.light(arabic: locale.languageCode == 'ar'),
  darkTheme: BkTheme.dark(arabic: locale.languageCode == 'ar'),
  home: BkCard(child: BkButton(label: 'Save', onPressed: save)),
);
```

`BkButton` accepts `label`, `onPressed`, optional `icon`, `variant` (`primary`, `secondary`, `tertiary`, `danger`), `loading` and a localized `loadingLabel`. A null callback is disabled; loading also disables activation. Keep business state in the consuming app. Do not attach financial side effects to a showcase.

`BkTextField` exposes controller, label, helper/error text, keyboard type and change callback. It does not parse or round money. `BkBadge` and `BkAlert` accept `BkTone` and always have visible textual meaning. Alerts do not announce automatically: consumers choose live-region behavior appropriate to actual events.

`BkCard`, `BkStatCard`, and `BkEmptyState` accept content or formatted display strings. Consumers own currency, localization, table sorting, dialog routes and loading/error state.

## Web

```html
<html lang="en" dir="ltr" data-bk-theme="light">
<body class="bk-root">
  <button class="bk-button" type="button">Save</button>
  <label class="bk-field" for="name">Name
    <input class="bk-input" id="name" aria-describedby="name-help">
    <span class="bk-helper" id="name-help">Use a recognizable name.</span>
  </label>
</body>
</html>
```

Use a real button for an action and an anchor for navigation. Disabled actions use the native `disabled` attribute. For asynchronous work, the consumer sets `disabled` and `aria-busy="true"`, then restores both on completion; do not rely on visual opacity or `aria-disabled` alone to block actions. Use `aria-invalid="true"` and an associated error description for invalid fields. Do not add a live `role="alert"` to static preview content.

Cards are generic containers; add headings or landmarks appropriate to their actual content. Tables require caption and column headers. Native dialogs use `showModal()`, a labeled heading and an explicit close button. The browser provides modal focus containment and Escape handling. Restore focus when closing in the consuming flow.

The library is opt-in via `.bk-root`, but `@font-face` declarations and generated `:root` tokens are global definitions. Theme overrides can be applied to a subtree. Reduced motion is honored inside the root.
## Web package distribution

The CSS package includes type declarations for the optional JS helpers and keeps native HTML semantics. Install the directory from a local clone, or pack it with npm. Both approaches include fonts and tokens. The package name is reserved in this source tree only; a registry name is not claimed by this repository.

[5. Layout Components: all ten groups](layout.md)

[6. Component States: definitions, examples and applicability](component-states.md)
