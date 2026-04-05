import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthStorageService } from '../services/auth-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authStorage = inject(AuthStorageService);

  return true;
};
