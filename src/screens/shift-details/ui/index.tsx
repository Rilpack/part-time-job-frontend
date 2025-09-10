import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import type { ShiftDetailsRoute } from '@/app/navigation/types';

export const ShiftDetailsScreen = () => {
  const { params } = useRoute<ShiftDetailsRoute>();
  const shift = params.shift;

  const workTypes = shift.workTypes.map((type) => type?.name).join('; ');

  const Detail = ({ label, value }: { label: string; value?: string }) => (
    <View style={s.row}>
      <Text style={s.label}>{label}</Text>
      <Text style={s.value} numberOfLines={3}>
        {value || '—'}
      </Text>
    </View>
  );

  return (
    <ScrollView style={s.wrap} contentContainerStyle={s.content}>
      <View style={s.logoWrap}>
        <Image source={{ uri: shift.logo }} style={s.logo} resizeMode="contain" />
      </View>

      <Text style={s.h1} numberOfLines={2}>
        {shift.companyName}
      </Text>

      {shift.address && <Text style={s.sub}>{shift.address}</Text>}

      <Detail label="Типы работ" value={workTypes || '—'} />
      <Detail label="Выплата" value={`${shift.priceWorker} ₽`} />
      <Detail label="Бонус" value={`${shift.bonusPriceWorker} ₽`} />
      <Detail label="Рейтинг" value={`${shift.customerRating ?? 0} (${shift.customerFeedbacksCount ?? 0})`} />
      <Detail label="Набрано / План" value={`${shift.currentWorkers}/${shift.planWorkers}`} />
      <Detail label="Начало" value={`${shift.dateStartByCity} ${shift.timeStartByCity}`} />
      <Detail label="Окончание" value={shift.timeEndByCity} />
      <Detail
        label="Координаты"
        value={`${shift.coordinates?.latitude ?? '—'}, ${shift.coordinates?.longitude ?? '—'}`}
      />
      <Detail label="Промо" value={shift.isPromotionEnabled ? 'да' : 'нет'} />
    </ScrollView>
  );
};

const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, gap: 8 },
  logoWrap: { height: 72, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  logo: { width: 72, height: 72 },
  h1: { fontSize: 18, fontWeight: '700', color: '#111827' },
  h2: { marginTop: 12, fontSize: 14, fontWeight: '700', color: '#111827' },
  sub: { color: '#6B7280', marginTop: 4 },
  row: { flexDirection: 'row', gap: 8, alignItems: 'flex-start' },
  label: { width: 140, color: '#6B7280' },
  value: { flex: 1, color: '#111827' },
  code: { marginTop: 8, fontFamily: 'Menlo', fontSize: 12, color: '#111827' },
});
