import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HandlerErrorService } from '../../../../shared/services/handler-error.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { map, tap, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private messageService: MessageService,
    private handlerErrorService: HandlerErrorService,
    private router: Router
  ) {}

  private fb: FormBuilder = inject(FormBuilder);
  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordtwo: ['', [Validators.required]],
  });
  public submitted: boolean = false;

  public getControl(path: string): AbstractControl {
    return this.registerForm.controls[path];
  }
  public registerNewUser(): void {
    if (this.registerForm.invalid)
      return this.messageService.add({
        severity: 'info',
        summary: 'Error',
        detail: 'Por favor, complete los campos correctamente.',
      });
    this.submitted = true;
    this.registerForm.disable();
    const { passwordtwo, ...sendData } = this.registerForm.value;
    this.userService.registerNewUser(sendData).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: resp.message,
        });
        setTimeout(() => {
          this.loginNewUser(sendData.username, passwordtwo);
        }, 500);
      },
      error: (err) => {
        this.submitted = false;
        this.registerForm.enable();
        this.handlerErrorService.handlerError(err);
      },
    });
  }
  private loginNewUser(username: string, password: string): void {
    this.authService.authUser({ username, password }).subscribe({
      next: (resp) => {
        this.authService.setTokenInLocalStorage(resp.token);
        this.router.navigate(['/home']);
        this.submitted = false;
      },
      error: (err) => this.handlerErrorService.handlerError(err),
    });
  }
}
