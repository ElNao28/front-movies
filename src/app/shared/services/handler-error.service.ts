import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class HandlerErrorService {
  constructor(private messageService: MessageService) {}
  public handlerError(err: any) {
    console.log(err);
    const { status, error } = err;
    switch (status) {
      case 500:
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ha ocurrido un error.',
        });
        break;
      default:
        if (!status) {
          return this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ha ocurrido un error.',
          });
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.message,
        });
        break;
    }
  }
}
