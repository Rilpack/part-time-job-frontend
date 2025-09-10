import { FC } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ShiftCard } from '@/entities/shifts/ui/ShiftCard';
import { IShiftsListProps } from '../model';

export const ShiftsList: FC<IShiftsListProps> = ({ shifts, onClick }: IShiftsListProps) => {
  return (
    <FlatList
      data={shifts}
      style={{ marginTop: 12 }}
      showsVerticalScrollIndicator={false}
      renderItem={(item) => (
        <TouchableOpacity style={{ marginBottom: 12 }} activeOpacity={1} onPress={onClick}>
          <ShiftCard shift={item.item} />
        </TouchableOpacity>
      )}
    />
  );
};
