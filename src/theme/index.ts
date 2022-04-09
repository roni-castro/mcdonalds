import color from './colors';
import font from './fonts';
import spacingSize from './spacingSizes';

const theme = {
  color,
  spacingSize,
  ...font,
};

export default theme;

export type ThemeType = typeof theme;
export type TColor = typeof color;
export type TFontSize = typeof font.fontSize;
export type TFontFamily = typeof font.fontFamily;
export type TFontWeigth = typeof font.fontWeight;
export type TLineHeight = typeof font.lineHeight;
export type TSpacingSize = typeof spacingSize;
