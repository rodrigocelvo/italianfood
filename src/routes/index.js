import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../pages/SignIn';
import { UserStackRoutes } from './user.stack.routes';
import { UserTabRoutes } from './user.tab.routes';

export function Routes() {


  return (
    <NavigationContainer>
      <UserStackRoutes />
    </NavigationContainer>
  );
}
