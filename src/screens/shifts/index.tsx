import { useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocationPermission } from '@/features/permission-location/api/useLocationPermission';
import { useNavigation } from '@react-navigation/native';
import { useCurrentLocation } from '@/features/current-location/api/useCurrentLocation';

export const ShiftsListScreen = () => {
  const navigation = useNavigation();
  const { status, openAppSettings } = useLocationPermission();
  const { coordinations, refresh, isLoading } = useCurrentLocation();

  useEffect(() => {
    refresh();
  }, [status]);

  if (status === 'checking' || isLoading) {
    return <ActivityIndicator style={{ marginTop: 24 }} />;
  }

  if (status === 'blocked' || status === 'denied') {
    return (
      <View style={s.wrap}>
        <Text style={s.title}>Доступ к геолокации не предоставлен</Text>
        <Text style={s.sub}>Разрешите доступ в настройках, чтобы отображать смены рядом.</Text>
        <Button title="Открыть настройки" onPress={() => openAppSettings('application')} />
      </View>
    );
  }

  if (status === 'unavailable') {
    return (
      <View style={s.wrap}>
        <Text style={s.title}>Геолокация недоступна</Text>
        <Text style={s.sub}>Проверьте настройки устройства.</Text>
      </View>
    );
  }

  return (
    <View style={s.wrap}>
      <Text style={s.title}>
        Полученные координаты: {coordinations?.lat}, {coordinations?.lon}
      </Text>
      <Text style={s.title}>Список смен</Text>
      <FlatList
        data={['test shift', 'test shift', 'test shift', 'test shift', 'test shift']}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: string }) => (
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ShiftDetails')}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 18, fontWeight: '700' },
  sub: { marginTop: 8, color: '#666' },
});
