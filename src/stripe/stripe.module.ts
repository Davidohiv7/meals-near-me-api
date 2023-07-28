import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import StripClient from 'stripe';

@Module({
  providers: [StripeService, StripClient],
  imports: [ConfigModule],
  exports: [StripeService],
})
export class StripeModule {}
