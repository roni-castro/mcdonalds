import colors from './colors';
import fonts from './fonts';
import spacingSizes from './spacingSizes';

const theme = {
  ...colors,
  ...fonts,
  ...spacingSizes,
};

export default theme;

export type ThemeType = typeof theme;
