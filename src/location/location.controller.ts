import { Controller, Get, Param, Query } from '@nestjs/common';
import { City } from './types/cities';
import { LocationService } from './location.service';
import { Geometry, GetLocationResponse } from 'src/location/types/Location';
import {
  GetParamLocationDto,
  GetQueryLocationDto,
} from './dto/get-location-dto';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get(':city')
  async getLocation(
    @Param() params: GetParamLocationDto,
    @Query() query: GetQueryLocationDto,
  ): Promise<GetLocationResponse> {
    const { mock = 'true' } = query;
    const isMock = mock === 'true';
    const { city } = params;
    if (isMock) {
      return await this.locationService.getMockLocation(city);
    }
    return await this.locationService.getGoogleMapsLocation(city);
  }
}
