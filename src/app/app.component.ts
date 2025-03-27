// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  // We import RouterOutlet so that route components can be displayed,
  // and RouterLink so we can use [routerLink] in a template if needed.
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/products">Product List</a>
      <a routerLink="/product-form">Add Product</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
