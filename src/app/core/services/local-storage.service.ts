import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): string | null {
    const value = localStorage.getItem(key);
    return value;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
