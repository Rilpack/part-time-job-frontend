import { FC } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ShiftCard } from '@/entities/shifts/ui/ShiftCard';
import { IShiftsListProps } from '../model';
import { useNavigation } from '@react-navigation/native';

export const ShiftsList: FC<IShiftsListProps> = ({ shifts }: IShiftsListProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={shifts}
      style={{ marginTop: 12 }}
      showsVerticalScrollIndicator={false}
      renderItem={(item) => (
        <TouchableOpacity
          style={{ marginBottom: 12 }}
          activeOpacity={1}
          onPress={() => navigation.navigate('ShiftList', { shift: item.item })}
        >
          <ShiftCard shift={item.item} />
        </TouchableOpacity>
      )}
    />
  );
};
