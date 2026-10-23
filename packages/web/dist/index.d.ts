export interface BokrahTokens {
  version: string;
  color: Record<'light' | 'dark', Record<string, string>>;
  space: Record<string, number>;
  radius: Record<string, number>;
  font: Record<string, string>;
  fontSize: Record<string, number>;
  layout: Record<string, number>;
  motion: Record<string, number>;
}
export const tokens: Readonly<BokrahTokens>;
export function setBokrahTheme(theme: 'light' | 'dark', root?: Pick<HTMLElement, 'dataset'>): void;
export function setBokrahLanguage(language: 'en' | 'ar', root?: Pick<HTMLElement, 'lang' | 'dir'>): void;
