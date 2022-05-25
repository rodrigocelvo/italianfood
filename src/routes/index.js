import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Home } from '../pages/Home';

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}