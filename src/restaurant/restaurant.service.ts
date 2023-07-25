import { Injectable } from '@nestjs/common';
import { restaurantsRequest } from './utils';

@Injectable()
export class RestaurantService {
  getRestaurantByLocation(location: string) {
    return restaurantsRequest(location);
  }
}
