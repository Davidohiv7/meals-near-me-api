import { IsIn, IsOptional, IsString } from 'class-validator';

export default class GetByLocationParams {
  @IsString()
  location: string;

  @IsOptional()
  @IsIn(['true', 'false'])
  mock: string;
}
