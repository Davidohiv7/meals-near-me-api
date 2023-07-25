import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import GetByLocationParams from './dto/get-by-location';
import { GoogleRestaurant } from './types/Restaurant';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
  @Get()
  getRestaurants(
    @Query() queryParams: GetByLocationParams,
  ): GoogleRestaurant[] {
    const { location } = queryParams;
    return this.restaurantService.getRestaurantByLocation(location);
  }
}
