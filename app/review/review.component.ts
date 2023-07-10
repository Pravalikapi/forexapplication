





// // Dialogur box ---

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-review',
//   templateUrl: './review.component.html',
//   styleUrls: ['./review.component.css']
// })
// export class ReviewComponent implements OnInit {
//   formData: any;
//   transactionSuccessful: boolean = false;

//   constructor(private route: ActivatedRoute, private router: Router) {}

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       this.formData = params;
//     });
//   }

//   confirmAccountDetails() {
//     console.log('Account details confirmed');
//     this.transactionSuccessful = true;
//     // You can perform additional actions or navigate to another page
//   }

//   goBack() {
//     this.router.navigate(['/business']);
//   }
// }













// Dialogur box ---

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  formData: any;
  transactionSuccessful: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.formData = params;
    });
  }

  confirmAccountDetails() {
    console.log('Account details confirmed');
    this.transactionSuccessful = true;
  }
  
  

  generatePDF(event: Event) {
    event.preventDefault(); 
    const doc = new jsPDF();
    
    doc.text('Review Account Details:', 10, 10);
    doc.text('Account Holder Name: ' + this.formData['account-holder-name'], 10, 20);
    doc.text('Account Number: ' + this.formData['account-number'], 10, 30);
    doc.text('IFSC Code: ' + this.formData['ifsc-code'], 10, 40);
    doc.text('Account Type: ' + this.formData['account-type'], 10, 50);
    doc.text('From Bank: ' + this.formData['from-bank'], 10, 60);
    doc.text('To Bank: ' + this.formData['to-bank'], 10, 70);
    // Add more text or content as needed based on the form data
    
    const pdfBlob = doc.output('blob'); // Generate a Blob from the PDF content
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = 'review.pdf';
    downloadLink.click(); // Trigger the download
  }
  
 


  goBack() {
    this.router.navigate(['/business'], { queryParams: this.formData });
  }

  // goBack() {
  //   window.history.back();
  // }

 
  
  
  
  
}









