import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ToastModule } from 'primeng/toast';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ViewErrorFormComponent } from './components/view-error-form/view-error-form.component';
@NgModule({
  declarations: [NotFoundComponent, ViewErrorFormComponent],
  imports: [CommonModule, ToastModule, RouterModule],
  exports: [ToastModule, NotFoundComponent, ViewErrorFormComponent],
  providers: [AuthService],
})
export class SharedModule {}
