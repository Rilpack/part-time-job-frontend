import { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useLocationPermission } from '@/features/permission-location/api/useLocationPermission';
import { useCurrentLocation } from '@/features/current-location/api/useCurrentLocation';
import { ShiftsWidget } from '@/widgets/shifts/ui/ShiftsWidget';
import { useShiftsByLocation } from '../api/useShiftsByLocation';
import { CoordinatesWidget } from '@/widgets/coordinates/ui/CoordinatesWidget';

export const ShiftsListScreen = () => {
  const { status, openAppSettings } = useLocationPermission(); // Запрос на разрешение геолокации
  const { coordinations, refresh } = useCurrentLocation(); // Запрос на получение геопозиции
  const { shifts, isLoadingShifts, getShifts } = useShiftsByLocation(); // Запрос на получение подработок

  // Обновление геопозиции, если изменился статус разрешения
  useEffect(() => {
    refresh();
  }, [status]);

  // Получение списка подработок, если есть координаты
  useEffect(() => {
    if (coordinations) {
      getShifts({ latitude: coordinations.lat, longitude: coordinations.lon });
    }
  }, [coordinations]);

  return (
    <View style={s.wrap}>
      <CoordinatesWidget longitude={coordinations?.lon} latitude={coordinations?.lat} />
      <ShiftsWidget
        isLoadingShifts={isLoadingShifts}
        shifts={shifts || []}
        status={status}
        openSettings={openAppSettings}
      />
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff', paddingInline: 16 },
  title: { fontSize: 18, fontWeight: '700' },
  sub: { color: '#666' },
});
