# bokrah_design_system

Bokrah semantic tokens, Material 3 themes and reusable Flutter presentation components. Includes locally bundled DM Sans, Manrope and Noto Sans Arabic with original font licenses.

```dart
import 'package:bokrah_design_system/bokrah_design_system.dart';

MaterialApp(
  theme: BkTheme.light(),
  darkTheme: BkTheme.dark(),
  home: BkCard(child: BkButton(label: 'Save', onPressed: save)),
);
```

The consuming application supplies locale, Directionality, translations, money formatting and business behavior. Pass `arabic: true` to the theme for Arabic typography. Use `BkSpace`, `BkRadius`, and semantic `BkLightColors` / `BkDarkColors` for custom layouts.

Read the repository's `docs/components.md` for API contracts and `examples/flutter` for the runnable bilingual catalogue. Use a Git dependency with `path: packages/flutter`, pinned to a reviewed commit for production. Not published to pub.dev.
