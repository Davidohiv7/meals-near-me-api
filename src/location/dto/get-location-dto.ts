import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetParamLocationDto {
  @IsNotEmpty()
  @IsString()
  city: string;
}

export class GetQueryLocationDto {
  @IsOptional()
  @IsIn(['true', 'false'])
  mock: string;
}
