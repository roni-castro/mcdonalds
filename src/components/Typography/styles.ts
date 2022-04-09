import styled from 'styled-components/native';
import { BaseTextProps } from './interface';

export const BaseText = styled.Text(({ size, weight, theme }: BaseTextProps) => ({
  fontSize: theme.fontSize[size],
  fontWeight: theme.fontWeight[weight],
}));
