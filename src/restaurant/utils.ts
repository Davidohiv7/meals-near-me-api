import { mockImages, mockRestaurants } from 'assets/mockData';
import { capitalize } from 'lodash';
import { GoogleRestaurant } from './types/Restaurant';
import { HttpException, HttpStatus } from '@nestjs/common';
import {
  PlacesNearbyResponse,
  PlaceData,
} from '@googlemaps/google-maps-services-js';

export const mockRestaurantsTransform = ({
  results = [],
}: {
  results: any[];
}): GoogleRestaurant[] =>
  results.map((restaurant) => {
    return {
      placeId: restaurant?.place_id || 0,
      name: restaurant?.name || '',
      icon: restaurant?.icon || '',
      rating: restaurant?.rating || 1,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      photos: restaurant.photos.map(() => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      }),
      address: capitalize(restaurant?.vicinity?.split(',')?.[0]),
      geometry: restaurant?.geometry,
    };
  });

export const mockRestaurantsRequest = (
  location: string,
): GoogleRestaurant[] => {
  const mock = mockRestaurants[location];
  if (!mock) {
    throw new HttpException('Restaurant not found', HttpStatus.NOT_FOUND);
  }
  return mockRestaurantsTransform(mock);
};

const getMockPhotos = () =>
  Array.from({ length: 1 })?.map(() => {
    return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  });

const getGooglePhotos = (restaurant: Partial<PlaceData>, apiKey) => {
  const ref = restaurant?.photos?.[0].photo_reference;
  if (!ref) {
    return getMockPhotos();
  }
  return [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${apiKey}`,
  ];
};

export const googleRestaurantsTransform = (
  response: PlacesNearbyResponse,
  apiKey: string,
): GoogleRestaurant[] => {
  const results = response?.data.results;
  return results.map((restaurant) => ({
    placeId: restaurant?.place_id,
    name: restaurant?.name || '',
    icon: restaurant?.icon || '',
    rating: restaurant?.rating || 1,
    isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    photos: getGooglePhotos(restaurant, apiKey),
    address: capitalize(restaurant?.vicinity?.split(',')?.[0]),
    geometry: restaurant?.geometry,
  }));
};
