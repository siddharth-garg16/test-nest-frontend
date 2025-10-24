import { Injectable } from '@angular/core';
import { AuthStorage as AuthStorageInterface } from '../interfaces/auth-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthStorage {
  // provides encapsulation on direct hard coded localstorage access
  private readonly AUTH_STORAGE_KEY = 'app_auth';

  // private utility function to encode auth data
  private encodeAuthData(authData: AuthStorageInterface): string {
    const json = JSON.stringify(authData);
    return btoa(encodeURIComponent(json));
  }

  // private utility function to decode auth data
  private decodeAuthData(encodedString: string): AuthStorageInterface | null {
    try {
      const authData = JSON.parse(decodeURIComponent(atob(encodedString)));
      return authData;
    } catch (e) {
      return null;
    }
  }

  // set auth data in the local storage in encoded format
  setAuthData(authData: AuthStorageInterface): void {
    localStorage.setItem(this.AUTH_STORAGE_KEY, this.encodeAuthData(authData));
  }

  // get auth data from the local storage in decoded format
  getAuthData(): AuthStorageInterface | null {
    const encodedString = localStorage.getItem(this.AUTH_STORAGE_KEY);
    if (!encodedString) return null;

    return this.decodeAuthData(encodedString);
  }

  // clears auth data from local storage
  clearAuthData(): void {
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
  }
}
