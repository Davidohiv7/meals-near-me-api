import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { transformCityIndex } from '../utils';

@Injectable()
export class TransformLocationNamePipe implements PipeTransform {
  transform(values) {
    return transformCityIndex(values);
  }
}
