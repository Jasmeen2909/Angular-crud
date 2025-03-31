import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent, canActivate: [authGuard] },
  { path: 'product-form', component: ProductFormComponent, canActivate: [authGuard] },
  { path: 'product-form/:id', component: ProductFormComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent}
];
