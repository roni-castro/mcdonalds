import { TextProps } from 'react-native';
import { TColor, TFontFamily, TFontSize, TFontWeigth, ThemeType } from '../../theme';

export interface TypographyProps extends TextProps {
  size?: keyof TFontSize;
  weight?: keyof TFontWeigth;
  fontFamily?: keyof TFontFamily;
  color?: keyof TColor;
  children: Element | string;
}

export interface BaseTextProps extends TypographyProps {
  size: keyof TFontSize;
  weight: keyof TFontWeigth;
  theme: ThemeType;
}
