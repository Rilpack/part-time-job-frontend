import React from 'react';
import type { RootStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShiftsListScreen } from '@/screens/ShiftsListScreen';
import { ShiftDetailsScreen } from '@/screens/ShiftDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ShiftsList"
      screenOptions={{
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen
        name="ShiftsList"
        component={ShiftsListScreen}
        options={{ title: 'Смены' }}
      />
      <Stack.Screen
        name="ShiftDetails"
        component={ShiftDetailsScreen}
        options={{ title: 'Детали смены' }}
      />
    </Stack.Navigator>
  );
}
