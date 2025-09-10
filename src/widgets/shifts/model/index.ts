import { TypeStatus } from '@/features/permission-location/model';

export interface IShiftsWidget {
  status: TypeStatus;
  openSettings: (type?: 'application' | 'alarms' | 'fullscreen' | 'notifications') => Promise<void>;
}
