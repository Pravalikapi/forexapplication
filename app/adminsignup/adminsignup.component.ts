import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent {



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

    // Create an admin object
    const admin = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };

    // Store the admin in local storage
    localStorage.setItem(this.username, JSON.stringify(admin));
    console.log("Admin registration successful");

    // Redirect to the home page or desired route
    this.router.navigate(['/login']);
  }
}

