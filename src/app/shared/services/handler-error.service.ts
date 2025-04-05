import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class HandlerErrorService {
  constructor(private messageService: MessageService) {}
  public handlerError(err: any) {
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
  }
}
