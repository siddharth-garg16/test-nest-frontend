import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {
  hidePassword = signal<boolean>(true);

  togglePasswordVisibility(event: MouseEvent): void {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }
}
