const spacingSize = {
  spacing0: 0,
  spacing4: 4,
  spacing8: 8,
  spacing12: 12,
  spacing16: 16,
  spacing20: 20,
  spacing24: 24,
  spacing28: 28,
  spacing32: 32,
  spacing36: 36,
  spacing40: 40,
  spacing48: 48,
  spacing56: 56,
  spacing64: 64,
  spacing80: 80,
} as const;

export default {
  ...spacingSize,
} as const;
