import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserStackRoutes } from './user.stack.routes';
import { SignIn } from '../pages/SignIn';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ?
        (
          <>
            <SafeAreaView backgroundColor="#c11e2b">
              <StatusBar style="light" translucent backgroundColor='transparent' />
            </SafeAreaView>
            <UserStackRoutes />
          </>

        )
        :
        (
          <>
            <StatusBar hidden style="light" translucent backgroundColor='transparent' />
            <SignIn />
          </>
        )
      }
    </NavigationContainer>
  );
}
