import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen, Group } = createStackNavigator();

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';
import { Food } from '../pages/Food';
import { Product } from '../pages/Product';

import { UserTabRoutes } from './user.tab.routes';

export function UserStackRoutes() {
  const user = {
    isAdmin: true
  }

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user?.isAdmin ? (
        <Group>
          <Screen name="Home" component={Home} />
          <Screen name="Product" component={Product} />
        </Group>
      ) : (
        <Group>
          <Screen name="UserTabRoutes" component={UserTabRoutes} />
          <Screen name="Home" component={Home} />
          <Screen name="Food" component={Food} />
          <Screen name="Favorites" component={Favorites} />
          <Screen name="Orders" component={Orders} />
        </Group>
      )
      }
    </Navigator>
  );
}
