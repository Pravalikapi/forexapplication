// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-someonelse',
//   templateUrl: './someonelse.component.html',
//   styleUrls: ['./someonelse.component.css']
// })
// export class SomeonelseComponent {


//   bankForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.bankForm = this.formBuilder.group({
//       'account-holder-name': ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
//       'account-number': ['', [Validators.required, Validators.pattern('[0-9]+')]],
//       'ifsc-code': ['', [Validators.required, Validators.pattern('[A-Za-z]{4}[0][A-Za-z0-9]{6}')]],
//       'account-type': ['', Validators.required],
//       'from-bank': ['', Validators.required],
//       'to-bank': ['', Validators.required]
//     });
//   }

//   submitBankDetailsForm() {
//     if (this.bankForm.invalid) {
//       return;
//     }

//     // Handle form submission logic here
//     console.log('Form submitted');
//     console.log('Account Holder Name:', this.bankForm.value['account-holder-name']);
//     console.log('Account Number:', this.bankForm.value['account-number']);
//     console.log('IFSC Code:', this.bankForm.value['ifsc-code']);
//     console.log('Account Type:', this.bankForm.value['account-type']);
//     console.log('From Bank:', this.bankForm.value['from-bank']);
//     console.log('To Bank:', this.bankForm.value['to-bank']);

//     // Reset the form
//     this.bankForm.reset();
//   }
// }


import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-someonelse',
  templateUrl: './someonelse.component.html',
  styleUrls: ['./someonelse.component.css']
})
export class SomeonelseComponent {
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