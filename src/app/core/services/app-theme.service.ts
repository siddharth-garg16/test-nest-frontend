import { inject, Injectable, signal } from '@angular/core';
import { Theme } from '../enums/theme.enum';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  // Reactive signal for theme
  readonly isDarkMode = signal<boolean>(false);

  // provides encapsulation on direct hard coded localstorage access
  private readonly THEME_STORAGE_KEY = 'theme';

  private readonly localStorageService = inject(LocalStorageService);

  constructor() {
    this.loadInitialTheme();
  }

  private loadInitialTheme(): void {
    const savedTheme = this.localStorageService.getItem(this.THEME_STORAGE_KEY);

    if (savedTheme && (savedTheme === Theme.LIGHT || savedTheme === Theme.DARK)) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(Theme.LIGHT); // fallback to light theme
    }
  }

  public setTheme(theme: Theme): void {
    this.isDarkMode.set(theme === Theme.DARK); // set true, if dark theme is to be set
    document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK); // remove theme instances, and add prefered theme classes again
    document.documentElement.classList.add(theme);
    this.localStorageService.setItem(this.THEME_STORAGE_KEY, theme);
  }
}
