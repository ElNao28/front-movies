import { Component, ErrorHandler, inject } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}
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
          this.authService.setTokenInLocalStorage(token);
          this.messageService.add({
            severity: 'success',
            summary: 'Autenticación exitosa',
            detail: 'Bienvenido.',
          });
        },
        error: (err) => {
          const statusCode: number = err.status;
          switch (statusCode) {
            case 404:
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Usuario no registrado.',
              });
              break;
            case 401:
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Contraseña incorrecta.',
              });
              break;
            default:
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Ha ocurrido un error.',
              });
              break;
          }
        },
      });
  }
}
