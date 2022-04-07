import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import theme from './theme';

const Text = styled.Text({
  color: theme.colors.primaryDefault,
  fontFamily: theme.fontFamily.interRegular,
  fontSize: theme.fontSizes.titleXLarge,
  lineHeight: theme.lineHeights.titleXLarge,
});

function App() {
  const [IsReady, SetIsReady] = useState(false);

  const FontLoading = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={FontLoading}
        onFinish={() => SetIsReady(true)}
        onError={() => {
          // eslint-disable-next-line no-console
          console.error('Error loading fonts');
        }}
      />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style='auto' />
      </View>
    </ThemeProvider>
  );
}

export default registerRootComponent(App);
