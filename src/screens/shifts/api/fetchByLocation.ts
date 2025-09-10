import { api } from '@/app/api';
import { ICoordinates, IShift } from '../../../entities/shifts/model/types';

export async function fetchByLocation({ latitude, longitude }: ICoordinates): Promise<IShift[]> {
  const res = await api.get<{ data: IShift[] }>('api/shifts/map-list-unauthorized', {
    params: { latitude: latitude, longitude: longitude },
  });
  return res.data.data;
}
