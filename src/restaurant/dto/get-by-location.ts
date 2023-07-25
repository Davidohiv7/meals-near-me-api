import { IsString } from 'class-validator';

export default class GetByLocationParams {
  @IsString()
  location: string;
}
