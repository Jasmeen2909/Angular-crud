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
    <a routerLink="/products">Products</a>
    <a routerLink="/product-form">New Product</a>

    <button *ngIf="AuthService.isAuthenticated()" (click)="logout()">Logout</button>
    </nav>
    <hr/>
    <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent {}
