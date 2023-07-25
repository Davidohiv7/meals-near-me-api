import { mockLocations } from 'assets/mockData/location';
import { Geometry } from './types/Location';

export const transformCityIndex = (city: string) => {
  if (!city) return '';
  return city.toLocaleLowerCase().replaceAll(' ', '_').replaceAll('-', '_');
};

export const locationTransform = (result: any): Geometry => {
  const { geometry = {} } = result.results[0];
  const location: Geometry = geometry;
  return location;
};

export const locationRequest = (searchTerm: string): Geometry => {
  const locationMock = mockLocations[searchTerm];
  if (!locationMock) {
    throw Error('Location not found');
  }
  return locationTransform(locationMock);
};
