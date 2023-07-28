import { IsNotEmpty, IsString, IsIn, IsNumber } from 'class-validator';

export class CreditCardPaymentDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsIn(['USD', 'false'])
  currency: string;

  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
