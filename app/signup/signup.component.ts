
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  phone: string = '';
  passwordRepeat: string = ''; // Add this line

  constructor(private router: Router) {}

  signup() {
    // Check if the passwords match
    if (this.password !== this.passwordRepeat) {
      console.log("Passwords do not match");
      return;
    }

    // Create a user object
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };

    // Store the user in local storage
    localStorage.setItem(this.username, JSON.stringify(user));
    console.log("Success");

    // Redirect to the home page or desired route
    this.router.navigate(['/login']);
  }
}





// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   username: string = '';
//   password: string = '';
//   email: string = '';
//   phone: string = '';
//   passwordRepeat: string = ''; // Add this line
//   role: string = ''; // Add this line

//   constructor(private router: Router) {}

//   openSignupForm(role: string) {
//     this.role = role;
//   }

//   signup() {
//     // Check if the passwords match
//     if (this.password !== this.passwordRepeat) {
//       console.log("Passwords do not match");
//       return;
//     }

//     // Create a user object
//     const user = {
//       username: this.username,
//       password: this.password,
//       email: this.email,
//       phone: this.phone,
//       role: this.role // Include the role in the user object
//     };

//     // Store the user in local storage or perform other operations
//     // based on the role

//     console.log("Success");

//     // Redirect to the home page or desired route
//     this.router.navigate(['/login']);
//   }
// }


