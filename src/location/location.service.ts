import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetLocationResponse } from 'src/location/types/Location';
import { mockLocationRequest } from './utils';
import { GoogleMapsService } from 'src/google-maps/google-maps.service';

@Injectable()
export class LocationService {
  constructor(private googleMapsService: GoogleMapsService) {}
  async getMockLocation(city: string): Promise<GetLocationResponse> {
    const mockLocation = mockLocationRequest(city);
    if (mockLocation) {
      return mockLocation;
    }
    throw new HttpException(
      'Location not found',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  async getGoogleMapsLocation(city: string): Promise<GetLocationResponse> {
    const googleLocation = this.googleMapsService.getGoogleMapLocation(city);
    if (googleLocation) {
      return googleLocation;
    }
    throw new HttpException(
      'Location not found',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
