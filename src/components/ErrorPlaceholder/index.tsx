import React from 'react';

import { Text, ErrorImage, ReloadButton, ReloadButtonText, Container } from './styles';
import { ErrorPlaceholderProps } from './interface';

export default function ErrorPlaceholder({ onPressReload }: ErrorPlaceholderProps) {
  return (
    <Container>
      <ErrorImage />
      <Text>An error has occured. Please try to reload</Text>
      <ReloadButton onPress={onPressReload}>
        <ReloadButtonText>Reload</ReloadButtonText>
      </ReloadButton>
    </Container>
  );
}
