import { IShift } from '@/entities/shifts/model/types';
import { TypeStatus } from '@/features/permission-location/model';

export interface IShiftsWidget {
  isLoadingShifts: boolean;
  shifts: IShift[];
  status: TypeStatus;
  openSettings: (type?: 'application' | 'alarms' | 'fullscreen' | 'notifications') => Promise<void>;
}
