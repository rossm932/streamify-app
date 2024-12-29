import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false); // Observable boolean state
  public loggedIn$ = this.loggedInSubject.asObservable(); // Public observable for subscription

  login() {
    console.log('AuthService: Logging in...'); // Debug log
    this.loggedInSubject.next(true); // Update the observable state to 'true'
  }  

  logout() {
    console.log('AuthService: Logging out...'); // Debug log
    this.loggedInSubject.next(false); // Update the observable state to 'false'
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value; // Get the current value synchronously
  }
}

