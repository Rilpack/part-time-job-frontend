import { ICoordinates } from '@/entities/shifts/model/types';
import { View, Text, StyleSheet } from 'react-native';

export const CoordinatesBlock = (coordinations?: ICoordinates | null) => {
  return (
    <View style={s.wrap}>
      <Text style={s.title}>
        Текущие координаты:{' '}
        <Text style={s.sub}>
          {coordinations?.latitude}, {coordinations?.longitude}
        </Text>
      </Text>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { marginBlock: 12 },
  title: { fontSize: 18, fontWeight: '700' },
  sub: { color: '#666' },
});
