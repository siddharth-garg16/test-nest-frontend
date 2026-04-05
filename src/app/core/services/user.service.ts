import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../constants/endpoint-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpClient = inject(HttpClient);

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

  public logout(): Observable<{ status: number; message: string }> {
    return this.httpClient.post<{ status: number; message: string }>(this.logoutUrl, {});
  }

  public refreshToken(expiredAccessToken: string): Observable<{ accessToken: string }> {
    return this.httpClient.post<{ accessToken: string }>(this.refreshTokenUrl, {
      refreshToken: expiredAccessToken,
    });
  }
}
