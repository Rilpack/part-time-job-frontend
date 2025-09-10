export interface ICoordinates {
  longitude: number;
  latitude: number;
}

interface IWorkType {
  id: number;
  name: string;
  nameGt5: string;
  nameLt5: string;
  nameOne: string;
}

export interface IShift {
  id: string;
  logo: string;
  coordinates: ICoordinates;
  address: string;
  companyName: string;
  dateStartByCity: string;
  timeStartByCity: string;
  timeEndByCity: string;
  currentWorkers: number;
  planWorkers: number;
  workTypes: IWorkType[];
  priceWorker: number;
  bonusPriceWorker: number;
  customerFeedbacksCount: string;
  customerRating: number | null;
  isPromotionEnabled: boolean;
}
