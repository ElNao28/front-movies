import { Component, ErrorHandler, inject } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { MessageService } from 'primeng/api';
import { HandlerErrorService } from '../../../../shared/services/handler-error.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private handlerErrorService: HandlerErrorService
  ) {}
  private fb: FormBuilder = inject(FormBuilder);
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public loginUser(): void {
    if (this.loginForm.invalid)
      return this.messageService.add({
        severity: 'info',
        summary: 'Error',
        detail: 'Por favor, complete los campos correctamente.',
      });
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
        error: (err) => this.handlerErrorService.handlerError(err),
      });
  }
  public getControl(path: string): AbstractControl {
    return this.loginForm.controls[path];
  }
}
