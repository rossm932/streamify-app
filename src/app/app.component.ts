import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'streamify-app';
  isExpanded = false; 
  isHomePage: boolean | undefined;
  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/home';
    });
  }
  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
