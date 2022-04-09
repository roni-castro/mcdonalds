import React from 'react';
import { BaseText } from './styles';
import { TypographyProps } from './interface';

export function Typography({
  size = 'paragraphMedium',
  weight = 'regular',
  color = 'neutral100',
  children,
  ...props
}: TypographyProps) {
  return (
    <BaseText
      size={size}
      weight={weight}
      color={color}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </BaseText>
  );
}
