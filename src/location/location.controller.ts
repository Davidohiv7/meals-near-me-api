import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseEnumPipe,
  ParseEnumPipeOptions,
  UsePipes,
} from '@nestjs/common';
import { City } from './types/cities';
import { LocationService } from './location.service';
import { TransformLocationNamePipe } from './pipes/transform-location-name';
import { Geometry } from 'src/location/types/Location';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get('/:city')
  @UsePipes(new TransformLocationNamePipe())
  getUser(
    @Param(
      'city',
      new ParseEnumPipe(City, {
        exceptionFactory: () => new BadRequestException('Location not found'),
      }),
    )
    city: City,
  ): Geometry {
    return this.locationService.getLocation(city);
  }
}
