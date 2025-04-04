import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [CommonModule, ToastModule],
  exports:[ToastModule],
  providers: [AuthService],
})
export class SharedModule {}
