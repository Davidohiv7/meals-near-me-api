import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import GetByLocationParams from './dto/get-by-location';
import { GetRestaurantByLocationResponse } from './types/Restaurant';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
  @Get()
  async getRestaurants(
    @Query() queryParams: GetByLocationParams,
  ): Promise<GetRestaurantByLocationResponse> {
    const { location, mock = 'true' } = queryParams;
    const isMock = mock === 'true';
    if (isMock) {
      return this.restaurantService.getMockRestaurantByLocation(location);
    }
    return await this.restaurantService.getGoogleRestaurantByLocation(location);
  }
}
