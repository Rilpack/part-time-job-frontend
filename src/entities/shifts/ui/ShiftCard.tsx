import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { IShift } from '../model/types';

export const ShiftCard: FC<{ shift: IShift }> = ({ shift }: { shift: IShift }) => {
  const { logo, companyName, workTypes, priceWorker, customerFeedbacksCount, customerRating } = shift;

  return (
    <View style={s.card}>
      <View style={s.logoWrap}>
        <Image source={{ uri: logo }} style={s.logo} resizeMode="contain" />
      </View>

      <View style={s.content}>
        {workTypes.map((type) => (
          <Text key={type.id} style={s.company} numberOfLines={1}>
            {type.name}
          </Text>
        ))}

        <Text style={s.types} numberOfLines={1}>
          {companyName}
        </Text>

        <View style={s.bottomRow}>
          <Text style={s.price}>{priceWorker} ₽</Text>

          <View style={s.rating}>
            <Text style={s.star}>★</Text>
            <Text style={s.ratingText}>{customerRating || 0}</Text>
            <Text style={s.reviews}>({customerFeedbacksCount || 0})</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  pressed: { opacity: 0.9 },
  logoWrap: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  logo: { width: '100%', height: '100%' },
  logoFallback: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFallbackText: { fontSize: 18, fontWeight: '700', color: '#6B7280' },
  content: { flex: 1 },
  company: { fontSize: 16, fontWeight: '700', color: '#111827' },
  types: { marginTop: 2, fontSize: 13, color: '#6B7280' },
  bottomRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  rating: { flexDirection: 'row', alignItems: 'center' },
  star: { fontSize: 14, color: '#F59E0B', marginRight: 4 },
  ratingText: { fontSize: 14, fontWeight: '600', color: '#111827' },
  reviews: { marginLeft: 4, fontSize: 13, color: '#6B7280' },
});
