import { Injectable } from '@nestjs/common';
import { City } from './types/cities';
import { Geometry } from 'src/location/types/Location';
import { locationRequest } from './utils';

@Injectable()
export class LocationService {
  getLocation(city: City): Geometry {
    return locationRequest(city);
  }
}
