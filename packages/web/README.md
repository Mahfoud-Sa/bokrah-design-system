# @bokrah/design-system

Framework-independent CSS, semantic tokens and optional JavaScript theme/language helpers for Bokrah. Arabic/English, RTL/LTR, light/dark. No runtime dependencies; TypeScript declarations included.

From a clone of `https://github.com/Mahfoud-Sa/bokrah-design-system`, install this directory in your application:

```sh
npm install /path/to/bokrah-design-system/packages/web
```

```js
import '@bokrah/design-system/styles.css';
import { setBokrahLanguage, setBokrahTheme } from '@bokrah/design-system';
setBokrahLanguage('ar');
setBokrahTheme('dark');
```

Use a `.bk-root` application container, native HTML elements, and the `bk-` component classes. See the repository's `docs/components.md` and `examples/web` for semantic markup, error/disabled/loading state responsibilities, and complete working patterns. JavaScript imports have no side effects; importing CSS defines global tokens/fonts and opt-in component styles. Local fonts retain their SIL licenses in `dist/fonts`.

This package is distributed through the repository; it has not been published to npm.
