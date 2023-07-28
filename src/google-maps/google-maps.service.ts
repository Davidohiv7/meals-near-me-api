import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  Client,
  GeocodeRequest,
  PlacesNearbyRequest,
} from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';
import { DEFAULT_RESTAURANT_RADIUS, GOOGLE_API_TIMEOUT } from './utils';
import { locationTransform } from 'src/location/utils';
import { PlacesNearByType } from './types/PlacesNearBy';
import { googleRestaurantsTransform } from 'src/restaurant/utils';

@Injectable()
export class GoogleMapsService {
  constructor(
    private config: ConfigService,
    private googleMapsService: Client,
  ) {}
  private readonly apiKey = this.config.get<string>('apiKeys.googleMaps');

  async getGoogleMapLocation(city: string) {
    const geocodeRequest: GeocodeRequest = {
      params: {
        address: city,
        key: this.apiKey,
      },
      timeout: GOOGLE_API_TIMEOUT,
    };
    const response = (await this.googleMapsService.geocode(geocodeRequest))
      ?.data;
    if (response) {
      return locationTransform(response);
    }
  }

  async getGoogleMapsRestaurants(location: string) {
    const placesNearbyRequest: PlacesNearbyRequest = {
      params: {
        location,
        radius: DEFAULT_RESTAURANT_RADIUS,
        key: this.apiKey,
        type: PlacesNearByType.restaurant,
      },
      timeout: GOOGLE_API_TIMEOUT,
    };
    const response = await this.googleMapsService.placesNearby(
      placesNearbyRequest,
    );
    if (!response?.data?.results?.length) {
      throw new HttpException(
        'Restaurant not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return googleRestaurantsTransform(response, this.apiKey);
  }
}
