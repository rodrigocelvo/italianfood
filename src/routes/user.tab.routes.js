import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const { Navigator, Screen, Group } = createBottomTabNavigator();

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';


export function UserTabRoutes() {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.BACKGROUND,
          height: 100

        },
        tabBarActiveTintColor: COLORS.PRIMARY_100,
        tabBarInactiveTintColor: COLORS.SECONDARY_900,
      }}
    >
      <Group>
        <Screen name="Home" component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />

        <Screen name="Favoritos" component={Favorites}
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color, size }) => (
              <Feather name="heart" color={color} size={size} />
            ),
          }}
        />

        <Screen name="Pedidos" component={Orders}
          options={{
            title: 'Pedidos',
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-bag" color={color} size={size} />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
}
