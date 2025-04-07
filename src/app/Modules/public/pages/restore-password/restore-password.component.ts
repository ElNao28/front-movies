import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { HandlerErrorService } from '../../../../shared/services/handler-error.service';
import { UserService } from '../../services/user.service';
import { passwordMatchValidation } from '../../../../shared/services/validations.service';

@Component({
  selector: 'app-restore-password',
  standalone: false,
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css',
})
export class RestorePasswordComponent implements OnInit {
  constructor(
    private activateRouter: ActivatedRoute,
    private messageService: MessageService,
    private handlerErrorService: HandlerErrorService,
    private userService: UserService,
    private router: Router
  ) {}
  private token: string = '';
  public subbmited: boolean = false;
  ngOnInit(): void {
    this.geTokenByRouter();
  }
  private fb: FormBuilder = inject(FormBuilder);

  public restorePasswordForm: FormGroup = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  },
  {
    validators: [passwordMatchValidation('password','confirmPassword')],
  }
);

  public getControl(path: string): AbstractControl {
    return this.restorePasswordForm.controls[path];
  }

  public updatePassword(): void {
    if (this.restorePasswordForm.invalid)
      return this.messageService.add({
        severity: 'info',
        summary: 'Error',
        detail: 'Por favor, complete los campos correctamente.',
      });
    this.restorePasswordForm.disable();
    this.subbmited = true;
    const password = this.restorePasswordForm.controls['password'].value;

    this.userService.updatePassword(this.token, password).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Contraseña actualizada exitosamente',
          detail: 'Puedes iniciar sesión con tu nueva contraseña.',
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        this.restorePasswordForm.enable();
        this.subbmited = false;
        this.handlerErrorService.handlerError(error);
      },
    });
  }
  private geTokenByRouter(): void {
    this.activateRouter.data
      .pipe(map((data) => data['token']))
      .subscribe((token) => {
        this.token = token;
      });
  }
}
