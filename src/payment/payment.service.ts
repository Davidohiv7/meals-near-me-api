import { Injectable } from '@nestjs/common';
import { StripeService } from 'src/stripe/stripe.service';
import { CreditCardPaymentDto } from './dto/credit-card-payment-dto';

@Injectable()
export class PaymentService {
  constructor(private stripe: StripeService) {}

  async creditCardPayment(data: CreditCardPaymentDto) {
    return await this.stripe.pay(data);
  }
}
