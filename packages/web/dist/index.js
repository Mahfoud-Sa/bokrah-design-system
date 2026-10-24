export { tokens } from './tokens.js';
/** Apply a supported theme to any application root. No global side effects on import. */
export function setBokrahTheme(theme, root = document.documentElement) {
  if (!['light', 'dark', 'high-contrast'].includes(theme)) throw new TypeError('Theme must be light, dark or high-contrast');
  root.dataset.bkTheme = theme;
}
/** Set language and matching direction. */
export function setBokrahLanguage(language, root = document.documentElement) {
  if (!['en', 'ar'].includes(language)) throw new TypeError('Language must be en or ar');
  root.lang = language;
  root.dir = language === 'ar' ? 'rtl' : 'ltr';
}

export { foundations, icons } from './foundations.js';
export { bindBokrahTabs, bindBokrahMenu } from './navigation.js';
export { bindBokrahTooltip, bindBokrahPopover } from './data-display.js';

export { bindBokrahModal } from './layout.js';
