import 'package:flutter/material.dart';
import 'tokens.g.dart';

/// Preserves the exact palette for custom components, including high contrast.
class BkThemeTokens extends ThemeExtension<BkThemeTokens> {
  const BkThemeTokens(this.mode);
  final String mode;
  Map<String, Color> get colors => BkPalettes.all[mode]!;
  static Map<String, Color> of(BuildContext context) =>
      Theme.of(context).extension<BkThemeTokens>()?.colors ??
      BkPalettes.all['light']!;
  @override
  BkThemeTokens copyWith({String? mode}) => BkThemeTokens(mode ?? this.mode);
  @override
  BkThemeTokens lerp(covariant BkThemeTokens? other, double t) =>
      t < .5 ? this : other ?? this;
}

abstract final class BkTheme {
  static ThemeData light({bool arabic = false}) => _build('light', arabic);
  static ThemeData dark({bool arabic = false}) => _build('dark', arabic);
  static ThemeData highContrast({bool arabic = false}) =>
      _build('high-contrast', arabic);

  static ThemeData _build(String mode, bool arabic) {
    final c = BkPalettes.all[mode]!;
    final scheme =
        ColorScheme.fromSeed(
          seedColor: c['primary']!,
          brightness: mode == 'light' ? Brightness.light : Brightness.dark,
        ).copyWith(
          primary: c['primary'],
          onPrimary: c['onPrimary'],
          secondary: c['secondary'],
          onSecondary: c['onSecondary'],
          secondaryContainer: c['secondarySurface'],
          onSecondaryContainer: c['secondary'],
          tertiary: c['accent'],
          onTertiary: c['onAccent'],
          tertiaryContainer: c['accentSurface'],
          onTertiaryContainer: c['accent'],
          surface: c['surface'],
          onSurface: c['text'],
          onSurfaceVariant: c['muted'],
          surfaceContainerLow: c['surfaceAlt'],
          outline: c['controlBorder'],
          outlineVariant: c['border'],
          error: c['danger'],
          onError: c['onDanger'],
          errorContainer: c['dangerSurface'],
          onErrorContainer: c['danger'],
        );
    final family =
        'packages/bokrah_design_system/${arabic ? BkFont.arabic : BkFont.body}';
    final heading =
        'packages/bokrah_design_system/${arabic ? BkFont.arabic : BkFont.heading}';
    final base = ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      fontFamily: family,
    );
    final shape = RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(BkRadius.md),
    );
    final bodyHeight = arabic ? BkLineHeight.arabic : BkLineHeight.body;
    final tracking = arabic
        ? BkLetterSpacing.normal
        : BkLetterSpacing.tight * BkFontSize.heading;
    return base.copyWith(
      extensions: [BkThemeTokens(mode)],
      scaffoldBackgroundColor: c['background'],
      textTheme: base.textTheme.copyWith(
        headlineLarge: base.textTheme.headlineLarge?.copyWith(
          fontFamily: heading,
          fontSize: BkFontSize.heading,
          height: arabic ? BkLineHeight.arabic : BkLineHeight.heading,
          letterSpacing: tracking,
          fontWeight: FontWeight.w800,
        ),
        headlineMedium: base.textTheme.headlineMedium?.copyWith(
          fontFamily: heading,
          fontSize: BkFontSize.heading,
          fontWeight: FontWeight.w700,
        ),
        titleLarge: base.textTheme.titleLarge?.copyWith(
          fontFamily: heading,
          fontSize: BkFontSize.title,
          fontWeight: FontWeight.w700,
        ),
        bodyLarge: base.textTheme.bodyLarge?.copyWith(
          fontSize: BkFontSize.body,
          height: bodyHeight,
        ),
        bodyMedium: base.textTheme.bodyMedium?.copyWith(
          fontSize: BkFontSize.body,
          height: bodyHeight,
        ),
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: c['surface'],
        foregroundColor: c['text'],
        elevation: BkElevation.flat,
        scrolledUnderElevation: 0,
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size(
            BkAccessibility.touchTarget,
            BkAccessibility.touchTarget,
          ),
          padding: const EdgeInsets.symmetric(
            horizontal: BkSpace.xl,
            vertical: BkSpace.md,
          ),
          shape: shape,
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size(
            BkAccessibility.touchTarget,
            BkAccessibility.touchTarget,
          ),
          foregroundColor: c['text'],
          side: BorderSide(
            color: c['controlBorder']!,
            width: BkBorderWidth.hairline,
          ),
          shape: shape,
          padding: const EdgeInsets.symmetric(
            horizontal: BkSpace.xl,
            vertical: BkSpace.md,
          ),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: c['surface'],
        contentPadding: const EdgeInsetsDirectional.symmetric(
          horizontal: BkSpace.lg,
          vertical: BkSpace.lg,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(BkRadius.md),
          borderSide: BorderSide(color: c['controlBorder']!),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(BkRadius.md),
          borderSide: BorderSide(color: c['controlBorder']!),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(BkRadius.md),
          borderSide: BorderSide(
            color: c['focus']!,
            width: BkBorderWidth.focus,
          ),
        ),
      ),
      dividerColor: c['border'],
    );
  }
}
