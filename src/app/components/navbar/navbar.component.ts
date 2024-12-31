import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true, // Ensure it's a standalone component
  imports: [CommonModule, RouterModule], // Import CommonModule and RouterModule
})
export class NavbarComponent {
  isLoggedIn = false;
  isExpanded = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status; // Update the local state
    });
  }

  toggleNavbar() {
    this.isExpanded = !this.isExpanded; // Toggle navbar expansion state
  }

  onLogout() {
    this.authService.logout(); // Set login state to false
    this.router.navigate(['/home']); // Redirect to Home page
  }
}
