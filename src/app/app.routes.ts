import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
    canActivate: [authGuard],
    title: 'About',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./all-products/all-products.component').then(
        (c) => c.AllProductsComponent
      ),
    canActivate: [authGuard],
    title: 'Products',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((c) => c.RegisterComponent),
    title: 'Register',
  },
  { path: '**', component: ErrorComponent, title: 'Error' },
];
