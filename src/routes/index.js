import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserStackRoutes } from './user.stack.routes';
import { SignIn } from '../pages/SignIn';

export function Routes() {
  const { user } = 'useAuth()';

  return (
    <NavigationContainer>
      {user ? <UserStackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
