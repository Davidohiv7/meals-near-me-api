import { Geometry } from 'src/location/types/Location';

export type GoogleRestaurant = {
  placeId: number | string;
  name: string;
  icon?: any;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
  geometry: Geometry;
};

export type GetRestaurantByLocationResponse = GoogleRestaurant[] | string;
