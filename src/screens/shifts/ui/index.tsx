import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useLocationPermission } from '@/features/permission-location/api/useLocationPermission';
import { useCurrentLocation } from '@/features/current-location/api/useCurrentLocation';
import { ShiftsWidget } from '@/widgets/shifts/ui/ShiftsWidget';

export const ShiftsListScreen = () => {
  const { status, openAppSettings } = useLocationPermission();
  const { coordinations, refresh, isLoading } = useCurrentLocation();

  useEffect(() => {
    refresh();
  }, [status]);

  return (
    <View style={s.wrap}>
      <Text style={s.title}>
        Полученные координаты:{' '}
        <Text style={s.sub}>
          {coordinations?.lat}, {coordinations?.lon}
        </Text>
      </Text>
      <ShiftsWidget status={status} openSettings={openAppSettings} />
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff', paddingInline: 16 },
  title: { fontSize: 18, fontWeight: '700' },
  sub: { color: '#666' },
});
