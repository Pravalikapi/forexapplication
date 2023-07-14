
import { Component } from '@angular/core';

interface ExchangeRate {
  country: string;
  code: string;
  rate: number;
}

@Component({
  selector: 'app-currencyrate',
  templateUrl: './currencyrate.component.html',
  styleUrls: ['./currencyrate.component.css']
})
export class CurrencyrateComponent {
  exchangeRates: ExchangeRate[] = [
    { country: 'India', code: 'INR', rate: 80.0 },
    { country: 'USA', code: 'USD', rate: 1.0 },
    { country: 'UK', code: 'GBP', rate: 0.75 },
    { country: 'France', code: 'EUR', rate: 0.85 },
    { country: 'Japan', code: 'JPY', rate: 110.0 }
  ];

  amount: number | null = null;
  fromCountry: string = '';
  toCountry: string = '';
  totalFee: number | null = null;
  recipientAmount: number | null = null;

  onCountryChange(type: string): void {
    if (this.fromCountry && this.toCountry && this.amount) {
      const fromRate = this.exchangeRates.find(rate => rate.code === this.fromCountry)?.rate;
      const toRate = this.exchangeRates.find(rate => rate.code === this.toCountry)?.rate;

      if (fromRate && toRate) {
        const ourFee = this.amount * 0.1; // Calculate our fee as 10% of the "You Send Exactly" amount
        this.totalFee = this.amount - ourFee; // Calculate the total fee as (You Send Exactly - Our Fee)
        const recipientReceives = (this.totalFee / fromRate) * toRate; // Calculate the amount the recipient receives
        this.recipientAmount = recipientReceives;
      } else {
        console.error('Invalid country selection.');
      }
    }
  }

  getCurrencySymbol(currencyCode: string): string {
    switch (currencyCode) {
      case 'INR':
        return '₹';
      case 'USD':
        return '$';
      case 'GBP':
        return '£';
      case 'EUR':
        return '€';
      case 'JPY':
        return '¥';
      default:
        return '';
    }
  }
}
