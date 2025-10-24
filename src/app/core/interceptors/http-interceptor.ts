import { HttpInterceptorFn } from '@angular/common/http';
import { AuthStorage } from '../services/auth-storage';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authStorage = inject(AuthStorage);
  return next(req);
};
