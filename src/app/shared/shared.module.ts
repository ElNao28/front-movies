import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ToastModule } from 'primeng/toast';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ViewErrorFormComponent } from './components/view-error-form/view-error-form.component';
import { DialogModule } from 'primeng/dialog';
import { InvalidTokenComponent } from './pages/invalid-token/invalid-token.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    NotFoundComponent,
    ViewErrorFormComponent,
    InvalidTokenComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, ToastModule, RouterModule, DialogModule],
  exports: [
    ToastModule,
    DialogModule,
    NotFoundComponent,
    ViewErrorFormComponent,
    InvalidTokenComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  providers: [AuthService],
})
export class SharedModule {}
