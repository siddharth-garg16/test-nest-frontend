import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../constants/endpoint-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  LoginRequestDTO,
  LoginResponseDTO,
  SignupRequestDTO,
  SignupResponseDTO,
} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpClient = inject(HttpClient);

  private readonly signupUrl: string = ENDPOINTS['USER']['SIGNUP_URL'].url;
  private readonly loginUrl: string = ENDPOINTS['USER']['LOGIN_URL'].url;
  private readonly logoutUrl: string = ENDPOINTS['USER']['LOGOUT_URL'].url;
  private readonly refreshTokenUrl: string = ENDPOINTS['USER']['REFRESH_TOKEN_URL'].url;

  public signup(signupRequestDto: SignupRequestDTO): Observable<SignupResponseDTO> {
    return this.httpClient.post<SignupResponseDTO>(this.signupUrl, signupRequestDto);
  }

  public login(loginRequestDto: LoginRequestDTO): Observable<LoginResponseDTO> {
    return this.httpClient.post<LoginResponseDTO>(this.loginUrl, loginRequestDto);
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
