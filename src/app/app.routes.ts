import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'app',
    loadChildren: () => import('./layout/layout.routes').then((m) => m.layoutRoutes),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
