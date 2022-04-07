import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style='auto' />
    </View>
  );
}
