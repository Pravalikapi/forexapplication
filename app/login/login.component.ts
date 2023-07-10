
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    // Check if the user exists in local storage
    const userData = localStorage.getItem(this.username);
    if (userData) {
      const user = JSON.parse(userData);
      if (user.password === this.password) {
        // Store the logged-in user in local storage or session
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to the home page or desired route
        this.router.navigate(['/graph']);
      } else {
        this.error = 'Invalid username or password';
      }
    } else {
      this.error = 'User does not exist. Please sign up.';
    }
  }
}






// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   error: string = '';

//   constructor(private router: Router) {}

//   login() {
//     // Check if the user exists in local storage
//     const userData = localStorage.getItem(this.username);
//     if (userData) {
//       const user = JSON.parse(userData);
//       if (user.password === this.password) {
//         // Store the logged-in user in local storage or session
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         // Redirect to the home page or desired route
//         this.router.navigate(['/graph']);
//       } else {
//         this.error = 'Invalid username or password';
//       }
//     } else {
//       this.error = 'User does not exist. Please sign up.';
//     }
//   }
// }








// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   error: string = '';
//   userType: string = 'user'; // Default user type is 'user'

//   constructor(private router: Router) {}

//   login() {
//     // Check user type and navigate accordingly
//     if (this.userType === 'user') {
//       // User login
//       // Check if the user exists in local storage
//       // ...
//       // Redirect to the 'graph' route
//       this.router.navigate(['/graph']);
//     } else if (this.userType === 'admin') {
//       // Admin login
//       // Check if the admin exists in local storage
//       // ...
//       // Redirect to the 'adminhome' route
//       this.router.navigate(['/adminhome']);
//     }
//   }

//   setUserType(userType: string) {
//     this.userType = userType;
//   }
// }






