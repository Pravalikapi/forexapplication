import { Component } from '@angular/core';


@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent {
  sendAmount: number | null = null;
  fromCountry: string | null = null;
  toCountry: string | null = null;
  exchangeRates: { [key: string]: number } = {
    USD: 1,
    INR: 80,  // USD to INR
    GBP: 0.9, // USD to GBP
    EUR: 0.8, // USD to EUR
    AUD: 1.2  // USD to AUD
  };

  calculateReceiveAmount(): number | null {
    if (this.sendAmount && this.fromCountry && this.toCountry) {
      const fromExchangeRate = this.exchangeRates[this.fromCountry];
      const toExchangeRate = this.exchangeRates[this.toCountry];
      return (this.sendAmount / fromExchangeRate) * toExchangeRate;
    } else {
      return null;
    }
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-maincontent',
//   templateUrl: './maincontent.component.html',
//   styleUrls: ['./maincontent.component.css']
// })
// export class MaincontentComponent {
//   sendAmount: number | null = null;
//   fromCountry: string | null = null;
//   toCountry: string | null = null;
//   exchangeRates: { [key: string]: number } = {
//     USD: 1,
//     INR: 80,  // USD to INR
//     GBP: 0.9, // USD to GBP
//     EUR: 0.8, // USD to EUR
//     AUD: 1.2  // USD to AUD
//   };

//   constructor(private router: Router) {}

//   navigateToConversion(): void {
//     this.router.navigate(['/conversion']);
//   }

//   calculateReceiveAmount(): number | null {
//     if (this.sendAmount && this.fromCountry && this.toCountry) {
//       const fromExchangeRate = this.exchangeRates[this.fromCountry];
//       const toExchangeRate = this.exchangeRates[this.toCountry];
//       return (this.sendAmount / fromExchangeRate) * toExchangeRate;
//     } else {
//       return null;
//     }
//   }
// }
