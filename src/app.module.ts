import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ConfigModule } from '@nestjs/config';
import { LocationModule } from './location/location.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';

@Module({
  imports: [ConfigModule.forRoot(), RestaurantModule, LocationModule, GoogleMapsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
