import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { GoogleMapsModule } from 'src/google-maps/google-maps.module';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
  imports: [GoogleMapsModule],
})
export class RestaurantModule {}
