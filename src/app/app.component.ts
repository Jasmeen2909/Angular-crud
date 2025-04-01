// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <nav>

    <button *ngIf="authService.isAuthenticated()" (click)="logout()">Logout</button>
    </nav>
    <hr/>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout(): void{
    this.authService.logout;
    this.router.navigate(['/login']);
  }
}
