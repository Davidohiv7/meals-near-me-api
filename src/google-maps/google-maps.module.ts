import { Module } from '@nestjs/common';
import { GoogleMapsController } from './google-maps.controller';
import { GoogleMapsService } from './google-maps.service';
import { ConfigModule } from '@nestjs/config';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';

@Module({
  controllers: [GoogleMapsController],
  providers: [GoogleMapsService, GoogleMapsClient],
  imports: [ConfigModule],
  exports: [GoogleMapsService],
})
export class GoogleMapsModule {}
