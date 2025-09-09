import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { RootStackParamList } from './types';

export function AppNavigation({ isDark }: { isDark: boolean }) {
  const navigationRef = createNavigationContainerRef<RootStackParamList>();

  return (
    <NavigationContainer
      theme={isDark ? DarkTheme : DefaultTheme}
      ref={navigationRef}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
