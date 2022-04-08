import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderLogo from '../../components/HeaderLogo';
import HomeScreen from '../../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 108;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: HeaderLogo,
        headerTitleAlign: 'center',
        headerStyle: {
          height: headerHeight,
        },
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Screen2' component={HomeScreen} />
    </Stack.Navigator>
  );
}
