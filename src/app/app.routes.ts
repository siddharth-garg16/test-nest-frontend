import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.authRoutes),
  },
  {
    path: 'app',
    loadChildren: () => import('./layout/layout.routes').then((r) => r.layoutRoutes),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
