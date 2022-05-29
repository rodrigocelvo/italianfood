import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen, Group } = createStackNavigator();

import { Home } from '../pages/Home';
import { Food } from '../pages/Food';
import { Product } from '../pages/Product';

import { UserTabRoutes } from './user.tab.routes';
import { useAuth } from '../hooks/auth';

export function UserStackRoutes() {
  const { user } = useAuth();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user.isAdmin ? (
        <Group>
          <Screen name="Home" component={Home} />
          <Screen name="Product" component={Product} />
        </Group>
      ) : (
        <Group>
          <Screen name="UserTabRoutes" component={UserTabRoutes} />
          <Screen name="Food" component={Food} />
        </Group>
      )
      }
    </Navigator>
  );
}
