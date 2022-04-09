const primary = {
  primaryDefault: '#FFC72C',
} as const;

const secondary = {
  secondaryDefault: '#DA291C',
} as const;

const neutral = {
  neutralWhite: '#FFF',
  neutral15: '#DBE1DD',
  neutral20: '#D8D8D8',
  neutral100: '#000000',
} as const;

const feedback = {
  feedbackDanger: '#DE1212',
  feedbackInfo: '#3395FF',
} as const;

export default { ...primary, ...secondary, ...neutral, ...feedback } as const;
