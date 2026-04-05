import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthStorageService } from '../services/auth-storage.service';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authStorage = inject(AuthStorageService);
  return next(req);
};
