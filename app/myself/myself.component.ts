


import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css']
})
export class MyselfComponent {
  bankForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private router: Router) {
  //   this.bankForm = this.formBuilder.group({
  //     'account-holder-name': ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
  //     'account-number': ['', [Validators.required, Validators.pattern('[0-9]+')]],
  //     'ifsc-code': ['', [Validators.required, Validators.pattern('[A-Za-z]{4}[0][A-Za-z0-9]{6}')]],
  //     'account-type': ['', Validators.required],
  //     'from-bank': ['', Validators.required],
  //     'to-bank': ['', Validators.required]
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


