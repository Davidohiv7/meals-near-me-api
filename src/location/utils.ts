import { mockLocations } from 'assets/mockData/location';
import { Geometry } from './types/Location';

const transformCityIndex = (city: string) => {
  if (!city) return '';
  return city.toLocaleLowerCase().replaceAll(' ', '_').replaceAll('-', '_');
};

export const locationTransform = (result: any): Geometry => {
  const { geometry = {} } = result.results[0];
  const location: Geometry = geometry;
  return location;
};

export const mockLocationRequest = (searchTerm: string): Geometry => {
  const fixedTerm = transformCityIndex(searchTerm);
  const locationMock = mockLocations[fixedTerm];
  if (locationMock) {
    return locationTransform(locationMock);
  }
};
