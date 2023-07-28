import { Body, Controller, Post } from '@nestjs/common';
import { CreditCardPaymentDto } from './dto/credit-card-payment-dto';
import { PaymentService } from './payment.service';
import Stripe from 'stripe';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('credit-card')
  creditCardPay(
    @Body() creditCardPaymentData: CreditCardPaymentDto,
  ): Promise<Stripe.Response<Stripe.Charge>> {
    return this.paymentService.creditCardPayment(creditCardPaymentData);
  }
}
