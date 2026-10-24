import 'package:flutter/material.dart';
import 'foundations.g.dart';
import 'tokens.g.dart';

enum BkIconName {
  add,
  check,
  close,
  search,
  download,
  arrowForward,
  receipt,
  menu,
}

/// Shared 24-unit vector geometry, with directional arrows mirrored in RTL.
class BkIcon extends StatelessWidget {
  const BkIcon(
    this.name, {
    super.key,
    this.size = BkIconSize.standard,
    this.strokeWidth = BkIconStroke.standard,
    this.color,
    this.semanticLabel,
  });
  final BkIconName name;
  final double size;
  final double strokeWidth;
  final Color? color;
  final String? semanticLabel;
  @override
  Widget build(BuildContext context) {
    final child = SizedBox.square(
      dimension: size,
      child: CustomPaint(
        painter: _BkIconPainter(
          name,
          color ??
              IconTheme.of(context).color ??
              Theme.of(context).colorScheme.onSurface,
          strokeWidth,
          name == BkIconName.arrowForward &&
              Directionality.of(context) == TextDirection.rtl,
        ),
      ),
    );
    return semanticLabel == null
        ? ExcludeSemantics(child: child)
        : Semantics(label: semanticLabel, image: true, child: child);
  }
}

class _BkIconPainter extends CustomPainter {
  const _BkIconPainter(this.name, this.color, this.strokeWidth, this.mirror);
  final BkIconName name;
  final Color color;
  final double strokeWidth;
  final bool mirror;
  @override
  void paint(Canvas canvas, Size size) {
    canvas.save();
    canvas.scale(size.width / 24, size.height / 24);
    if (mirror) {
      canvas.translate(24, 0);
      canvas.scale(-1, 1);
    }
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;
    for (final commands in BkFoundations.icons[name.name]! as List) {
      final path = Path();
      for (final command in commands as List) {
        final c = command as List;
        switch (c[0]) {
          case 'M':
            path.moveTo((c[1] as num).toDouble(), (c[2] as num).toDouble());
          case 'L':
            path.lineTo((c[1] as num).toDouble(), (c[2] as num).toDouble());
          case 'Z':
            path.close();
        }
      }
      canvas.drawPath(path, paint);
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _BkIconPainter old) =>
      name != old.name ||
      color != old.color ||
      strokeWidth != old.strokeWidth ||
      mirror != old.mirror;
}

/// Equal-span grid with generated columns, gutters, margins and breakpoints.
class BkResponsiveGrid extends StatelessWidget {
  const BkResponsiveGrid({super.key, required this.children});
  final List<Widget> children;
  @override
  Widget build(BuildContext context) => LayoutBuilder(
    builder: (context, constraints) {
      final band = constraints.maxWidth >= BkGrid.breakpoint['wide']!
          ? 'wide'
          : constraints.maxWidth >= BkGrid.breakpoint['medium']!
          ? 'medium'
          : 'compact';
      final columns = BkGrid.columns[band]!;
      final gutter = BkGrid.gutter[band]!.toDouble();
      final margin = BkGrid.margin[band]!.toDouble();
      final width =
          ((constraints.maxWidth - margin * 2 - gutter * (columns - 1)) /
                  columns)
              .clamp(0.0, double.infinity);
      return Padding(
        padding: EdgeInsets.symmetric(horizontal: margin),
        child: Wrap(
          spacing: gutter,
          runSpacing: gutter,
          children: children
              .map((child) => SizedBox(width: width, child: child))
              .toList(),
        ),
      );
    },
  );
}
