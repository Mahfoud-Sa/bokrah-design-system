import 'package:flutter/material.dart';
import 'tokens.g.dart';

abstract final class BkTheme {
  static ThemeData light({bool arabic = false}) => _build(false, arabic);
  static ThemeData dark({bool arabic = false}) => _build(true, arabic);

  static ThemeData _build(bool dark, bool arabic) {
    final primary = dark ? BkDarkColors.primary : BkLightColors.primary;
    final text = dark ? BkDarkColors.text : BkLightColors.text;
    final surface = dark ? BkDarkColors.surface : BkLightColors.surface;
    final border = dark
        ? BkDarkColors.controlBorder
        : BkLightColors.controlBorder;
    final scheme =
        ColorScheme.fromSeed(
          seedColor: primary,
          brightness: dark ? Brightness.dark : Brightness.light,
        ).copyWith(
          primary: primary,
          onPrimary: dark ? BkDarkColors.onPrimary : BkLightColors.onPrimary,
          surface: surface,
          onSurface: text,
          onSurfaceVariant: dark ? BkDarkColors.muted : BkLightColors.muted,
          surfaceContainerLow: dark
              ? BkDarkColors.surfaceAlt
              : BkLightColors.surfaceAlt,
          outline: border,
          outlineVariant: dark ? BkDarkColors.border : BkLightColors.border,
          error: dark ? BkDarkColors.danger : BkLightColors.danger,
          onError: dark ? BkDarkColors.onDanger : BkLightColors.onDanger,
          errorContainer: dark
              ? BkDarkColors.dangerSurface
              : BkLightColors.dangerSurface,
        );
    final family =
        'packages/bokrah_design_system/${arabic ? 'Bokrah Arabic' : 'Bokrah Sans'}';
    final heading =
        'packages/bokrah_design_system/${arabic ? 'Bokrah Arabic' : 'Bokrah Heading'}';
    final base = ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      fontFamily: family,
    );
    final radius = RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(BkRadius.md),
    );
    return base.copyWith(
      scaffoldBackgroundColor: dark
          ? BkDarkColors.background
          : BkLightColors.background,
      textTheme: base.textTheme.copyWith(
        headlineLarge: base.textTheme.headlineLarge?.copyWith(
          fontFamily: heading,
          fontWeight: FontWeight.w800,
        ),
        headlineMedium: base.textTheme.headlineMedium?.copyWith(
          fontFamily: heading,
          fontWeight: FontWeight.w700,
        ),
        titleLarge: base.textTheme.titleLarge?.copyWith(
          fontFamily: heading,
          fontWeight: FontWeight.w700,
        ),
        bodyLarge: base.textTheme.bodyLarge?.copyWith(
          fontSize: BkFontSize.body,
          height: arabic ? 1.8 : 1.6,
        ),
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: surface,
        foregroundColor: text,
        elevation: 0,
        scrolledUnderElevation: 0,
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size(48, 48),
          padding: const EdgeInsets.symmetric(
            horizontal: BkSpace.xl,
            vertical: BkSpace.md,
          ),
          shape: radius,
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size(48, 48),
          foregroundColor: text,
          side: BorderSide(color: border),
          shape: radius,
          padding: const EdgeInsets.symmetric(
            horizontal: BkSpace.xl,
            vertical: BkSpace.md,
          ),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: surface,
        contentPadding: const EdgeInsetsDirectional.symmetric(
          horizontal: BkSpace.lg,
          vertical: BkSpace.lg,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(BkRadius.md),
          borderSide: BorderSide(color: border),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(BkRadius.md),
          borderSide: BorderSide(color: border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(BkRadius.md),
          borderSide: BorderSide(
            color: dark ? BkDarkColors.focus : BkLightColors.focus,
            width: 2,
          ),
        ),
      ),
      dividerColor: scheme.outlineVariant,
    );
  }
}
