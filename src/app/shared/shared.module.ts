import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ToastModule } from 'primeng/toast';
import { NotFoundComponent } from './pages/not-found/not-found.component';
@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, ToastModule],
  exports: [ToastModule, NotFoundComponent],
  providers: [AuthService],
})
export class SharedModule {}
