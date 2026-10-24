# Bokrah design system

Shared visual language for Bokrah, based on the [Bokrah website](https://mahfoud-sa.github.io/bokrah-website/). Arabic and English, light, dark and high contrast, Flutter and web.

[Live web catalogue](https://mahfoud-sa.github.io/bokrah-design-system/) · [Flutter catalogue](https://mahfoud-sa.github.io/bokrah-design-system/flutter/) · [الدليل العربي](docs/README.ar.md)

[Complete foundations: all 10 categories](docs/foundations.md)

[2. UI Components: Buttons & Actions, Feedback & Status](docs/ui-components.md)

[3. Navigation Components: all eleven patterns](docs/navigation.md)

[4. Data Display Components: all ten groups](docs/data-display.md)

## Contents

- [Repository](#repository)
- [Web](#web)
- [Flutter](#flutter)
- [Development](#development)

## Repository

- `tokens/`: canonical shared design tokens.
- `packages/flutter/`: `bokrah_design_system` Flutter package.
- `examples/flutter/`: runnable Flutter component catalogue (Windows and web).
- `packages/web/`: `@bokrah/design-system` framework-independent CSS and JS package.
- `examples/web/`: interactive web showcase.
- `docs/design-system.md`: foundations, component contracts, accessibility and rollout.

## Web

Node 22+; no npm dependencies are needed for development.

```sh
npm run generate
npm run check
npm run dev
```

Open http://127.0.0.1:4180/examples/web/index.html. `npm run build` produces the static showcase in `build/site`.

Clone this repository, then install its web package in your consuming app with `npm install /path/to/bokrah-design-system/packages/web`. Import `@bokrah/design-system/styles.css`. Use native semantic elements with the `bk-` classes. The package exports tokens and optional `setBokrahTheme` / `setBokrahLanguage` helpers. See the showcase source for complete patterns. Use `npm pack --workspace @bokrah/design-system` to create a local distributable; nothing is published to npm automatically.

## Flutter

```sh
cd packages/flutter
flutter pub get
flutter analyze
flutter test
cd ../../examples/flutter
flutter pub get
flutter run -d windows
# Or flutter run -d chrome
```

Use a Git dependency:

```yaml
dependencies:
  bokrah_design_system:
    git:
      url: https://github.com/Mahfoud-Sa/bokrah-design-system.git
      path: packages/flutter
      ref: main
```

Pin a reviewed commit or release tag for production. Import `package:bokrah_design_system/bokrah_design_system.dart` and use `BkTheme.light()`, `BkTheme.dark()`, and the exported components. Somar Sans is shared by English and Arabic. Pass `arabic: true` for Arabic typography metrics; the app owns locale and Directionality. See `examples/flutter/lib/main.dart`.

## Development

Edit JSON tokens and run `npm run generate`. CI checks generated drift, contrast, helper behavior, Flutter analysis and widget tests, and builds the example for web. On pushes to main, the included GitHub Actions workflow deploys both catalogues to GitHub Pages after every check passes. Registry publishing is deliberately manual.

Read [the design guide](docs/design-system.md) and [the component usage guide](docs/components.md). Fonts retain their SIL licenses in both packages. Project code has no open-source license grant until the owner chooses one; do not infer an MIT license from repository visibility.

[Layout components: web and Flutter](docs/layout.md)

[6. Component States: definitions, examples and applicability](docs/component-states.md)

[7. Design Patterns: all nine experience recipes](docs/design-patterns.md)

[8. Documentation requirements](docs/documentation-requirements.md) · [All component references](docs/component-reference.md)
