import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  constructor(private config: ConfigService, private stripe: Stripe) {}
  private readonly apiKey = this.config.get<string>('apiKeys.stripe');
  private readonly client = new Stripe(this.apiKey, {
    apiVersion: '2022-11-15',
  });

  async pay({ amount, currency, token, description }: PayArgs) {
    try {
      const response = await this.client.charges.create({
        amount,
        currency,
        source: token,
        description,
      });
      return response;
    } catch (err) {
      throw new HttpException(
        'Error on transaction, please try again',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
