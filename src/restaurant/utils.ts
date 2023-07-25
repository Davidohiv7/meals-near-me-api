import { mockImages, mockRestaurants } from 'assets/mockData';
import { capitalize } from 'lodash';
import { GoogleRestaurant } from './types/Restaurant';
import { HttpException, HttpStatus } from '@nestjs/common';

export const restaurantsTransform = ({
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

export const restaurantsRequest = (location: string): GoogleRestaurant[] => {
  const mock = mockRestaurants[location];
  if (!mock) {
    throw new HttpException('Restaurant not found', HttpStatus.NOT_FOUND);
  }
  return restaurantsTransform(mock);
};
