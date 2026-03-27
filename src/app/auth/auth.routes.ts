import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },
  {
    path: 'signup',
    loadComponent: () => import('./sign-up/sign-up').then((c) => c.SignUp),
  },
];
