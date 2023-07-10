// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {

  
// constructor(private router: Router) {}

// logout() {
 

//   localStorage.removeItem('currentUser');
//   this.router.navigate(['/']);
// }

// }

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkAuthentication();

    // Subscribe to router events to detect changes in route navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkAuthentication();
      }
    });
  }

  checkAuthentication() {
    // Check if the user is authenticated/logged in
    // Replace this with your authentication logic
    const currentUser = localStorage.getItem('currentUser');
    this.isLoggedIn = !!currentUser;
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
  
  logout() {
    // Perform the logout logic and redirect to the home page
    // ...
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}

