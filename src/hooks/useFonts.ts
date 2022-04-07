/* eslint-disable camelcase */
import * as Font from 'expo-font';
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

const useFonts = async () => {
  await Font.loadAsync({
    Inter_300Light,
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
  });
};

export default useFonts;
