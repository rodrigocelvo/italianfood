import React from 'react'

import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Damion_400Regular } from '@expo-google-fonts/damion';
import { ThemeProvider } from 'styled-components/native';


import { Routes } from './src/routes';



import theme from './src/theme';
import { SafeAreaView } from 'react-native';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_600SemiBold,
    Damion_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <SafeAreaView backgroundColor="#c11e2b">
        <StatusBar style="light" translucent backgroundColor='transparent' />
      </SafeAreaView>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

