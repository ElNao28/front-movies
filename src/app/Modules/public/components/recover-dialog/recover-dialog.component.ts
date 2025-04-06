import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';
import { HandlerErrorService } from '../../../../shared/services/handler-error.service';

@Component({
  selector: 'app-recover-dialog',
  standalone: false,
  templateUrl: './recover-dialog.component.html',
  styleUrls: [
    './recover-dialog.component.css',
    '../../pages/login/login.component.css',
  ],
})
export class RecoverDialogComponent {
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private handlerErrorService: HandlerErrorService
  ) {}
  @Input()
  public isRecoverPassword: boolean = false;

  @Output()
  public closeDialog = new EventEmitter<boolean>();

  private fb: FormBuilder = inject(FormBuilder);
  public submitted: boolean = false;

  public recoverForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public checkEmailToRecoverPassword(): void {
    if (this.recoverForm.invalid) return;
    const { email } = this.recoverForm.value;
    this.submitted = true;
    this.recoverForm.disable();
    this.userService.sendEmailToRecoverPassword(email).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Recuperación exitosa',
          detail:
            'Te hemos enviado un email con las instrucciones para recuperar tu contraseña.',
        });
        this.closeDialogEvent();
      },
      error: (err) => {
        this.submitted = false;
        this.recoverForm.enable();
        this.handlerErrorService.handlerError(err);
      },
    });
  }
  public closeDialogEvent() {
    this.isRecoverPassword = false;
    this.recoverForm.reset();
    this.recoverForm.enable();
    this.closeDialog.emit(false);
    this.submitted = false;
  }
}
