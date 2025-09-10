import { IShift } from '@/entities/shifts/model/types';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationShiftsList = NativeStackNavigationProp<RootStackParamList, 'ShiftsList'>;
export type NavigationShiftDetails = NativeStackNavigationProp<RootStackParamList, 'ShiftDetails'>;

export type ShiftDetailsRoute = RouteProp<RootStackParamList, 'ShiftDetails'>;

export type RootStackParamList = {
  ShiftsList: undefined;
  ShiftDetails: { shift: IShift };
};
