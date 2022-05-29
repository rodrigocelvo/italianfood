import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../pages/SignIn';
import { UserStackRoutes } from './user.stack.routes';

export function Routes() {
  const user = 'asdsad';

  return (
    <NavigationContainer>
      {user ? <UserStackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
