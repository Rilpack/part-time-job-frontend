import { CoordinatesBlock } from '@/entities/coordinates/ui/CoordinatesBlock';
import { ICoordinates } from '@/entities/shifts/model/types';
import { StyleSheet, Text, View } from 'react-native';

export const CoordinatesWidget = (coordinations?: ICoordinates | null) => {
  if (!coordinations || !coordinations.latitude || !coordinations.longitude) {
    return (
      <View style={s.wrap}>
        <Text style={s.sub}>Текущие координаты не получены</Text>
      </View>
    );
  }

  return <CoordinatesBlock latitude={coordinations?.latitude} longitude={coordinations?.longitude} />;
};

const s = StyleSheet.create({
  wrap: { marginBlock: 12 },
  title: { fontSize: 18, fontWeight: '700' },
  sub: { color: '#666' },
});
