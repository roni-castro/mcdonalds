const primary = {
  primaryDefault: '#FFC72C',
} as const;

const secondary = {
  secondaryDefault: '#DA291C',
} as const;

const neutral = {
  neutral100: '#000000',
} as const;

export default { colors: { ...primary, ...secondary, ...neutral } };
