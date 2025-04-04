import { Component, ErrorHandler, inject } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  private fb: FormBuilder = inject(FormBuilder);
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public loginUser(): void {
    if (this.loginForm.invalid) return;
    this.authService
      .authUser(this.loginForm.value)
      .pipe(map((resp) => resp.token))
      .subscribe({
        next: (token) => {
          // Save token to local storage or API endpoint
          console.log('Logged in successfully!', token);
        },
        error: (err) => {
          console.error(err.status);
        },
      });
  }
}
