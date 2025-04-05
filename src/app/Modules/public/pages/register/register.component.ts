import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandlerErrorService } from '../../../../shared/services/handler-error.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private handlerErrorService: HandlerErrorService
  ) {}

  private fb: FormBuilder = inject(FormBuilder);
  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  public registerNewUser(): void {
    const { confirmPassword, ...sendData } = this.registerForm.value;
    this.userService.registerNewUser(sendData).subscribe({
      next: (resp) =>
        this.messageService.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: resp.message,
        }),
      error: (err) => this.handlerErrorService.handlerError(err),
    });
  }
}
