import { api } from '@/shared/api';
import { ICoordinates, IShift } from '../../../entities/shift/model/types';

export async function fetchByLocation({ latitude, longitude }: ICoordinates): Promise<IShift[]> {
  const res = await api.get<IShift[]>('api/shifts/map-list-unauthorized', {
    params: { latitude: latitude, longitude: longitude },
  });
  return res.data;
}
