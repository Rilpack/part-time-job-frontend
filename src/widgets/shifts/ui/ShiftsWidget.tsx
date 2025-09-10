import { FC } from 'react';
import { ActivityIndicator, View, Text, Button, StyleSheet } from 'react-native';
import { ShiftsList } from '@/features/shifts/ui/ShiftList';
import { useNavigation } from '@react-navigation/native';
import { shiftsTest } from '@/shared/constants/shiftsTest';
import { IShiftsWidget } from '../model';

export const ShiftsWidget: FC<IShiftsWidget> = ({ status, openSettings }: IShiftsWidget) => {
  const navigation = useNavigation();

  if (status === 'checking') {
    return <ActivityIndicator style={{ marginTop: 24 }} />;
  }

  if (status === 'blocked' || status === 'denied') {
    return (
      <View style={s.wrap}>
        <Text style={s.title}>Доступ к геолокации не предоставлен</Text>
        <Text style={s.sub}>Разрешите доступ в настройках, чтобы отображать смены рядом.</Text>
        <Button title="Открыть настройки" onPress={() => openSettings('application')} />
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
      <Text style={s.title}>Список смен</Text>
      <ShiftsList shifts={shiftsTest} onClick={() => navigation.navigate('ShiftDetails')} />
    </View>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1 },
  title: { fontSize: 18, fontWeight: '700' },
  sub: { marginTop: 8, color: '#666' },
});
