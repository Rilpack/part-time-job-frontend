import { useCallback, useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

interface ICoordinations {
  lat: number;
  lon: number;
  accuracy?: number;
}

export function useCurrentLocation(runOnMount = true) {
  const [coordinations, setCoordinations] = useState<ICoordinations | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    setIsLoading(true);
    setIsError(null);

    Geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setCoordinations({ lat: latitude, lon: longitude, accuracy });
        setIsLoading(false);
      },
      (err) => {
        setIsError(err?.message || 'Не удалось получить геолокацию');
        setIsLoading(false);
      },
      {
        accuracy: { ios: 'best' },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
        forceRequestLocation: true,
        showLocationDialog: true,
      },
    );
  }, []);

  useEffect(() => {
    if (runOnMount) refresh();
  }, [runOnMount]);

  return { coordinations, isLoading, isError, refresh };
}
