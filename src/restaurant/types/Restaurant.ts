import { Geometry } from 'src/location/types/Location';

export type GoogleRestaurant = {
  placeId: number;
  name: string;
  icon?: any;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
  geometry: Geometry;
};
