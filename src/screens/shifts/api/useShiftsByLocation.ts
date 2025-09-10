import { useState } from 'react';
import { ICoordinates } from '../../../entities/shift/model/types';
import { fetchByLocation } from './fetchByLocation';

export const useShiftsByLocation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const getShifts = ({ latitude, longitude }: ICoordinates) => {
    setIsLoading(true);
    setIsError(null);

    fetchByLocation({ latitude: latitude, longitude: longitude })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setIsError(error?.message || 'Не удалось загрузить список смен');
        console.log(error?.message || 'Не удалось загрузить список смен');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { getShifts, isLoadingShifts: isLoading, isErrorShifts: isError };
};
