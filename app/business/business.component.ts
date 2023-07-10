// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-business',
//   templateUrl: './business.component.html',
//   styleUrls: ['./business.component.css']
// })
// export class BusinessComponent {
//   bankForm: FormGroup;

//   constructor(private formBuilder: FormBuilder, private router: Router) {
//     this.bankForm = this.formBuilder.group({
//       email: ['', Validators.email],
//       'account-holder-name': ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
//       'account-number': ['', [Validators.required, Validators.pattern('[0-9]+')]],
//       'ifsc-code': ['', [Validators.required, Validators.pattern('[A-Za-z]{4}[0][A-Za-z0-9]{6}')]],
//       'account-type': ['', Validators.required],
//       'from-bank': ['', Validators.required],
//       'to-bank': ['', Validators.required],
//       country: ['', Validators.required],
//       city: ['', Validators.required],
//       'recipient-address': ['', Validators.required],
//       'post-code': ['', Validators.required]
//     });
//   }
//   submitBankDetailsForm() {
//     if (this.bankForm.invalid) {
//       return;
//     }
  
//     // Store the form values in a variable
//     const formValues = {
//       email: this.bankForm.value.email,
//       accountHolderName: this.bankForm.value['account-holder-name'],
//       accountNumber: this.bankForm.value['account-number'],
//       ifscCode: this.bankForm.value['ifsc-code'],
//       accountType: this.bankForm.value['account-type'],
//       fromBank: this.bankForm.value['from-bank'],
//       toBank: this.bankForm.value['to-bank'],
//       country: this.bankForm.value.country,
//       city: this.bankForm.value.city,
//       recipientAddress: this.bankForm.value['recipient-address'],
//       postCode: this.bankForm.value['post-code']
//     };
  
//     // Navigate to the review component and pass the form values as route data
//     this.router.navigate(['/review'], { state: { formData: formValues } });
//   }
// }


import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  bankForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private router: Router) {
  //   this.bankForm = this.formBuilder.group({
  //     email: ['', Validators.email],
  //     'account-holder-name': ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
  //     'account-number': ['', [Validators.required, Validators.pattern('[0-9]+')]],
  //     'ifsc-code': ['', [Validators.required, Validators.pattern('[A-Za-z]{4}[0][A-Za-z0-9]{6}')]],
  //     'account-type': ['', Validators.required],
  //     'from-bank': ['', Validators.required],
  //     'to-bank': ['', Validators.required],
  //     country: ['', Validators.required],
  //     city: ['', Validators.required],
  //     'recipient-address': ['', Validators.required],
  //     'post-code': ['', Validators.required]
  //   });
  // }


  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.bankForm = this.formBuilder.group({
      email: ['', Validators.email],
      'account-holder-name': ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      'account-number': ['', [Validators.required, Validators.pattern('[0-9]+')]],
      'ifsc-code': ['', [Validators.required, Validators.pattern('[A-Za-z]{4}[0][A-Za-z0-9]{6}')]],
      'account-type': ['', Validators.required],
      'from-bank': ['', Validators.required],
      'to-bank': ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      'recipient-address': ['', Validators.required],
      'post-code': ['', Validators.required]
    });
  
    const queryParams = this.router.getCurrentNavigation()?.extras.queryParams;
    if (queryParams) {
      this.bankForm.patchValue(queryParams);
    }
  }
  
  submitBankDetailsForm() {
    if (this.bankForm.invalid) {
      return;
    }
  
    // Get the form values
    const formValues = this.bankForm.value;
  
    // Navigate to the review component with the form values as query parameters
    this.router.navigate(['/review'], { queryParams: formValues });
  }
}