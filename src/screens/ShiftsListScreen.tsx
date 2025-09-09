import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ShiftsListScreen = () => {
  return (
    <View style={s.wrap}>
      <Text>Список смен проверка</Text>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff', padding: 16 },
});
