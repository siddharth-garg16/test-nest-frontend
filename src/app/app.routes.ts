import { Routes } from '@angular/router';

export const routes: Routes = [
  // login route
  {
    path: 'login',
    loadComponent: () => import('./core/components/login/login').then((m) => m.Login),
  },
];
