// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-rate',
//   templateUrl: './rate.component.html',
//   styleUrls: ['./rate.component.css']
// })
// export class RateComponent {


//   name!: string;
//   email!: string;
//   accountNumber!: string;
//   ifscCode!: string;
//   accountType!: string;
//   country!: string;
//   city!: string;
//   address!: string;
//   postalCode!: string;
//   recipientName: any;
//   bankDetails: any;
//   recipientType:any;
//   receiveAmount!: number;
  

//   selectRecipientType(type: string) {
//     this.recipientType = type;
//   }

//     isRecipientDetailsValid(): boolean {
//       return (
//         this.name !== '' &&
//         this.email !== '' &&
//         this.accountNumber !== '' &&
//         this.ifscCode !== '' &&
//         this.accountType !== '' &&
//         this.country !== '' &&
//         this.city !== '' &&
//         this.address !== '' &&
//         this.postalCode !== ''
//       );
//     }

// isInternationalTransfer: boolean = true;
// isSameCurrencyTransfer: boolean = false;
  
// currentStep = 1;
// isInternational = false;
// isSameCurrency = false;


// totalAmount!: number;
// amount!: number;

// transferType: string = 'international';

// sendAmount: number | null = 10000; 
// fromCountry: string = 'INR'; 
// toCountry: string = 'USD'; 

 


//   exchangeRates: { [key: string]: number } = {
//     USD: 1,
//     INR: 80,  // USD to INR
//     GBP: 0.9, // USD to GBP
//     EUR: 0.8, // USD to EUR
//     AUD: 1.2  // USD to AUD
//   };
  
//   fromAmount: any;

  
// selectTransferType(type: string) {
//   this.transferType = type;
// }



// getBankTransferFee(): string {
//   return '0'; // Replace with actual logic to get the bank transfer fee
// }

// getOurFee(): string {
//   const ourFee = this.sendAmount! * 0.1; // Calculate our fee as 10% of the send amount
//   return ourFee.toString();
// }

// getTotalFees(): string {
//   const bankTransferFee = parseInt(this.getBankTransferFee(), 10);
//   const ourFee = parseInt(this.getOurFee(), 10);
//   const totalFees = bankTransferFee + ourFee;
//   return totalFees.toString();
// }


// getTotalAmountConvert(): string {
//   const bankTransferFee = parseInt(this.getBankTransferFee(), 10);
//   const ourFee = parseInt(this.getOurFee(), 10);
//   const totalFees = this.sendAmount! - (bankTransferFee + ourFee);
//   return totalFees.toString();  
// }



//   calculateReceiveAmount(): number | null {
//     if (this.sendAmount && this.fromCountry && this.toCountry) {
//       const fromExchangeRate = this.exchangeRates[this.fromCountry];
//       const toExchangeRate = this.exchangeRates[this.toCountry];
//       return ((this.sendAmount! - (this.sendAmount! * 0.1 ))/fromExchangeRate ) * toExchangeRate;
//     } else {
//       return null;
//     }
//   }


//   nextStep() {
//     if (this.currentStep < 4) {
//       this.currentStep++;
//     } else {
     
//       const formData = {
//         fromCountry: this.fromCountry,
//         toCountry: this.toCountry,
//         totalAmount: this.totalAmount,
//         amount: this.amount,
//         recipientName: this.recipientName,
//         email: this.email,
//         bankDetails: this.bankDetails
//       };
//       console.log("saved data");
//       localStorage.setItem('formData', JSON.stringify(formData));


     
//         if (this.recipientType === 'myself') {
         
//           this.router.navigate(['/myself']);
//         } else if (this.recipientType === 'recipient') {
          
//           this.router.navigate(['/recipient']);
//         } else if (this.recipientType === 'business') {
          
//           this.router.navigate(['/business']);
        
//       }
//     }
    
    
    
//     }
  



// constructor(private router: Router) {}

// navigateToFormPage(page: string) {
//   this.router.navigate([page]);
// }

//   logout() {
   
//     localStorage.removeItem('currentUser');
//     this.router.navigate(['/']);
//   }





// }





import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ExchangeRate {
  country: string;
  code: string;
  rate: number;
}

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {
  name!: string;
  email!: string;
  accountNumber!: string;
  ifscCode!: string;
  accountType!: string;
  country!: string;
  city!: string;
  address!: string;
  postalCode!: string;
  recipientName: any;
  bankDetails: any;
  recipientType: any;
  receiveAmount!: number;
 


  selectRecipientType(type: string) {
    this.recipientType = type;
  }

  isRecipientDetailsValid(): boolean {
    return (
      this.name !== '' &&
      this.email !== '' &&
      this.accountNumber !== '' &&
      this.ifscCode !== '' &&
      this.accountType !== '' &&
      this.country !== '' &&
      this.city !== '' &&
      this.address !== '' &&
      this.postalCode !== ''
    );
  }

  isInternationalTransfer: boolean = true;
  isSameCurrencyTransfer: boolean = false;

  currentStep = 1;
  isInternational = false;
  isSameCurrency = false;

  totalAmount!: number;
  amount!: number;

  transferType: string = 'international';

  sendAmount: number | null = 10000;
  fromCountry: string = 'INR';
  toCountry: string = 'USD';

  exchangeRates: ExchangeRate[] = [
    { country: 'USA', code: 'USD', rate: 1.0 },
    { country: 'India', code: 'INR', rate: 80.0 },
    { country: 'GBP', code: 'GBP', rate: 0.9 },
    { country: 'Europe', code: 'EUR', rate: 0.8 },
    { country: 'Australia', code: 'AUD', rate: 1.2 }
  ];

  fromAmount: any;

  selectTransferType(type: string) {
    this.transferType = type;
  }

  getBankTransferFee(): string {
    return '0'; // Replace with actual logic to get the bank transfer fee
  }

  getOurFee(): string {
    const ourFee = this.sendAmount! * 0.1; // Calculate our fee as 10% of the send amount
    return ourFee.toString();
  }

  getTotalFees(): string {
    const bankTransferFee = parseInt(this.getBankTransferFee(), 10);
    const ourFee = parseInt(this.getOurFee(), 10);
    const totalFees = bankTransferFee + ourFee;
    return totalFees.toString();
  }

  getTotalAmountConvert(): string {
    const bankTransferFee = parseInt(this.getBankTransferFee(), 10);
    const ourFee = parseInt(this.getOurFee(), 10);
    const totalFees = this.sendAmount! - (bankTransferFee + ourFee);
    return totalFees.toString();
  }

  calculateReceiveAmount(): number | null {
    if (this.sendAmount && this.fromCountry && this.toCountry) {
      const fromExchangeRate = this.exchangeRates.find(rate => rate.code === this.fromCountry)?.rate || 1.0;
      const toExchangeRate = this.exchangeRates.find(rate => rate.code === this.toCountry)?.rate || 1.0;
      return ((this.sendAmount! - (this.sendAmount! * 0.1)) / fromExchangeRate) * toExchangeRate;
    } else {
      return null;
    }
  }

  // onCountryChange(type: string): void {
  //   if (type === 'from') {
  //     this.selectedFromCountry = this.exchangeRates.find(rate => rate.code === this.fromCountry) || null;
  //   } else if (type === 'to') {
  //     this.selectedToCountry = this.exchangeRates.find(rate => rate.code === this.toCountry) || null;
  //   }
  // }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    } else {
      const formData = {
        fromCountry: this.fromCountry,
        toCountry: this.toCountry,
        totalAmount: this.totalAmount,
        amount: this.amount,
        recipientName: this.recipientName,
        email: this.email,
        bankDetails: this.bankDetails
      };
      console.log("saved data");
      localStorage.setItem('formData', JSON.stringify(formData));

      if (this.recipientType === 'myself') {
        this.router.navigate(['/myself']);
      } else if (this.recipientType === 'recipient') {
        this.router.navigate(['/recipient']);
      } else if (this.recipientType === 'business') {
        this.router.navigate(['/business']);
      }
    }
  }

  navigateToFormPage(page: string) {
    this.router.navigate([page]);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  constructor(private router: Router) {}
}
