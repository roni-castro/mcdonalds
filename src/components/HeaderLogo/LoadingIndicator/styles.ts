import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const LoadingIndicatorStyled = styled(ActivityIndicator).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.secondaryDefault,
  size: size ?? 'large',
}))({});

export const LoadingIndicatorContainer = styled.View.attrs(() => ({
  flex: 1,
  justifyContent: 'center',
}))({});
