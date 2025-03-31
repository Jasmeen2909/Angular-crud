// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
    <form (ngSubmit)="onLogin()">
      <div>
        <label>Username:</label>
        <input [(ngModel)]="username" name="username" required />
      </div>
      <div>
        <label>Password:</label>
        <input [(ngModel)]="password" name="password" type="password" required />
      </div>

      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      // Navigate to a protected route
      this.errorMessage = '';
      this.router.navigate(['/products']);
    } else {
      // Show an error
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
