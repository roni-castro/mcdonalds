import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import useFonts from './hooks/useFonts';
import HomeStack from './navigation/home';
import theme from './theme';

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
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' />
          <HomeStack />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
