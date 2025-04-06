import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-view-error-form',
  standalone: false,
  templateUrl: './view-error-form.component.html',
  styleUrl: './view-error-form.component.css',
})
export class ViewErrorFormComponent {
  @Input()
  controlForm: any;
  @Input()
  colorText: string = 'text-red-500';

  public handlerErrorForm(): string | undefined {
    const error: ValidationErrors = this.controlForm.errors!;
    if (!error) return;
    if (error['required']) {
      return 'Este campo es requerido.';
    } else if (error['email']) {
      return 'Ingrese un email válido.';
    } else if (error['minlength']) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    } else {
      return '';
    }
  }
}
