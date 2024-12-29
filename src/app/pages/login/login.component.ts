import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class LoginComponent {
  username: string = 'abc';
  password: string = 'abc123';
  loginValid: boolean = true; // Initialize loginValid to true

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginValid = true; // Reset the error state when the component loads
  }

  onLogin() {
    console.log('Username entered:', this.username); // Debug log
    console.log('Password entered:', this.password); // Debug log
  
    // Check for correct credentials
    if (this.username === 'abc' && this.password === 'abc123') {
      this.loginValid = true; // Credentials are correct
      this.authService.login(); // Update login state
      this.router.navigate(['/home']); // Redirect to home
    } else {
      this.loginValid = false; // Invalid credentials
    }
  }
}  