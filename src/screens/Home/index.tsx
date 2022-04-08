import { Button, View } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const Text = styled.Text({
  color: theme.colors.primaryDefault,
  fontFamily: theme.fontFamily.interRegular,
  fontSize: theme.fontSizes.titleXLarge,
  lineHeight: theme.lineHeights.titleXLarge,
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='click' onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}
