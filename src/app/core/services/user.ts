import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../constants/endpoint-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly signupUrl: string = ENDPOINTS['USER']['SIGNUP_URL'].url;
  private readonly loginUrl: string = ENDPOINTS['USER']['LOGIN_URL'].url;
  private readonly logoutUrl: string = ENDPOINTS['USER']['LOGOUT_URL'].url;
  private readonly refreshTokenUrl: string = ENDPOINTS['USER']['REFRESH_TOKEN_URL'].url;

  public signup() {
    return;
  }

  public login() {
    return;
  }

  public logout() {
    return;
  }

  public refreshToken() {
    return;
  }
}
