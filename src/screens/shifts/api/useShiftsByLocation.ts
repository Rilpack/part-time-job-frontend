import { useState } from 'react';
import { ICoordinates, IShift } from '../../../entities/shifts/model/types';
import { fetchByLocation } from './fetchByLocation';

export const useShiftsByLocation = () => {
  const [data, setData] = useState<IShift[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const getShifts = ({ latitude, longitude }: ICoordinates) => {
    setIsLoading(true);
    setIsError(null);

    fetchByLocation({ latitude: latitude, longitude: longitude })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setIsError(error?.message || 'Не удалось загрузить список смен');
        console.log(error?.message || 'Не удалось загрузить список смен');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { shifts: data, getShifts, isLoadingShifts: isLoading, isErrorShifts: isError };
};
