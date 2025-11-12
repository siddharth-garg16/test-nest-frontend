import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthStorage } from '../services/auth-storage';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authStorage = inject(AuthStorage);
  return next(req);
};
