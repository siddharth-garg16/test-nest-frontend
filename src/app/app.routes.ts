import { Routes } from '@angular/router';

export const routes: Routes = [
  // login route
  {
    path: 'login',
    loadComponent: () => import('./core/components/login/login').then((c) => c.Login),
  },
  // signup route
  {
    path: 'signup',
    loadComponent: () => import('./core/components/sign-up/sign-up').then((c) => c.SignUp),
  },
];
