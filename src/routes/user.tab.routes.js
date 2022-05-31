import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-remix-icon';
import { useTheme } from 'styled-components';

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';

const { Navigator, Screen, Group } = createBottomTabNavigator();

export function UserTabRoutes() {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.BACKGROUND,

        },
        tabBarActiveTintColor: COLORS.PRIMARY_100,
        tabBarInactiveTintColor: COLORS.SECONDARY_900,
      }}
    >
      <Group>
        <Screen name="Home" component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name={focused ? 'home-fill' : 'home-line'} color={color} size={size} />
            ),
          }}
        />

        <Screen name="Favorites" component={Favorites}
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name={focused ? 'heart-fill' : 'heart-line'} color={color} size={size} />
            ),
          }}
        />

        <Screen name="Orders" component={Orders}
          options={{
            title: 'Pedidos',
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name={focused ? 'shopping-basket-fill' : 'shopping-basket-line'} color={color} size={size} />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
}
