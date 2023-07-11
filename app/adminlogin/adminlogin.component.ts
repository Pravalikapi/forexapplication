import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    // Check if the admin exists in local storage
    const adminData = localStorage.getItem(this.username);
    if (adminData) {
      const admin = JSON.parse(adminData);
      if (admin.password === this.password) {
        // Store the logged-in admin in local storage or session
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        // Redirect to the home page or desired route
        this.router.navigate(['/adminhome']);
      } else {
        this.error = 'Invalid username or password';
      }
    } else {
      this.error = 'Admin does not exist.';
    }
  }
}








