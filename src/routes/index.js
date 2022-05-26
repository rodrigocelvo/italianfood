import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';


const Tab = createBottomTabNavigator();

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLORS.SUCCESS_50,
            height: 100

          },
          tabBarActiveTintColor: COLORS.PRIMARY_900,
          tabBarInactiveTintColor: COLORS.SHAPE,
        }}
      >

        {/* <Tab.Screen name="SignIn" component={SignIn} options={{
          tabBarStyle: { display: 'none' },
        }} /> */}

        <Tab.Screen name="Home" component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}

        />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
