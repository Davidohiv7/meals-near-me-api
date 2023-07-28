import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { GoogleMapsModule } from 'src/google-maps/google-maps.module';

@Module({
  controllers: [LocationController],
  providers: [LocationService],
  imports: [GoogleMapsModule],
})
export class LocationModule {}
