import { IShift } from '@/entities/shifts/model/types';

export type RootStackParamList = {
  ShiftsList: undefined;
  ShiftDetails: { shift: IShift };
};
