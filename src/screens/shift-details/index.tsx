import { View, StyleSheet, Text } from 'react-native';

export const ShiftDetailsScreen = () => {
  return (
    <View style={s.wrap}>
      <Text>Смена</Text>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff', padding: 16 },
});
