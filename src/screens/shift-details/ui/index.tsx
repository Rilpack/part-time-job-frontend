import { ShiftDetailsRoute } from '@/app/navigation/types';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

export const ShiftDetailsScreen = () => {
  const route = useRoute<ShiftDetailsRoute>();
  const { shift } = route.params;

  return (
    <View style={s.wrap}>
      <Text>{String(shift)}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff', padding: 16 },
});
