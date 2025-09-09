import { useState, useCallback } from 'react';
import { Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
  type Permission,
  type PermissionStatus,
} from 'react-native-permissions';

type Status = 'checking' | 'granted' | 'denied' | 'blocked' | 'unavailable';

export const useLocationPermission = () => {
  const [status, setStatus] = useState<Status>('checking');

  const FINE: Permission =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  const COARSE: Permission | null = Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION : null;

  useFocusEffect(
    useCallback(() => {
      let alive = true;

      const setCurrentStatus = (status: Status) => {
        if (alive) setStatus(status);
      };

      const startGetPermission = async () => {
        try {
          // Проверка разрешения
          const fine = await check(FINE);
          if (fine === RESULTS.GRANTED || fine === RESULTS.LIMITED) return setCurrentStatus('granted');

          if (Platform.OS === 'android' && COARSE) {
            const coarse = await check(COARSE);
            if (coarse === RESULTS.GRANTED) return setCurrentStatus('granted');
            if (fine === RESULTS.BLOCKED || coarse === RESULTS.BLOCKED) return setCurrentStatus('blocked');
            if (fine === RESULTS.UNAVAILABLE && coarse === RESULTS.UNAVAILABLE) return setCurrentStatus('unavailable');
          } else {
            if (fine === RESULTS.BLOCKED) return setCurrentStatus('blocked');
            if (fine === RESULTS.UNAVAILABLE) return setCurrentStatus('unavailable');
          }

          // Запрос разрешения
          const askedFine: PermissionStatus = await request(FINE);
          if (askedFine === RESULTS.GRANTED || askedFine === RESULTS.LIMITED) return setCurrentStatus('granted');

          if (Platform.OS === 'android' && COARSE) {
            const askedCoarse: PermissionStatus = await request(COARSE);
            if (askedCoarse === RESULTS.GRANTED) return setCurrentStatus('granted');
            if (askedFine === RESULTS.BLOCKED || askedCoarse === RESULTS.BLOCKED) return setCurrentStatus('blocked');
            if (askedFine === RESULTS.UNAVAILABLE && askedCoarse === RESULTS.UNAVAILABLE)
              return setCurrentStatus('unavailable');
          }

          setCurrentStatus('denied');
        } catch {
          setCurrentStatus('unavailable');
        }
      };

      startGetPermission();

      return () => {
        alive = false;
      };
    }, [FINE, COARSE]),
  );

  return {
    status,
    openAppSettings: openSettings,
  };
};
