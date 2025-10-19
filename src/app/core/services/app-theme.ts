import { Injectable, signal } from '@angular/core';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class AppTheme {
  // Reactive signal for theme
  readonly isDarkMode = signal<boolean>(false);
  private readonly THEME_STORAGE_KEY = 'theme';

  constructor() {
    this.loadInitialTheme();
  }

  private loadInitialTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);

    if (savedTheme && (savedTheme === Theme.LIGHT || savedTheme === Theme.DARK)) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(Theme.LIGHT); // fallback to light theme
    }
  }

  setTheme(theme: Theme): void {
    this.isDarkMode.set(theme === Theme.DARK); // set true, if dark theme is to be set
    document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK); // remove theme instances, and add prefered theme classes again
    document.documentElement.classList.add(theme);
    localStorage.setItem(this.THEME_STORAGE_KEY, theme);
  }
}
