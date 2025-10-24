import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthStorage } from '../services/auth-storage';

export const authGuard: CanActivateFn = (route, state) => {
  const authStorage = inject(AuthStorage);

  return true;
};
