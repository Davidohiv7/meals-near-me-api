import { Injectable } from '@nestjs/common';
import { mockRestaurantsRequest } from './utils';
import { GoogleMapsService } from 'src/google-maps/google-maps.service';

@Injectable()
export class RestaurantService {
  constructor(private googleMapsService: GoogleMapsService) {}

  getMockRestaurantByLocation(location: string) {
    return mockRestaurantsRequest(location);
  }

  async getGoogleRestaurantByLocation(location: string) {
    return this.googleMapsService.getGoogleMapsRestaurants(location);
  }
}
