import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverDialogComponent } from './components/recover-dialog/recover-dialog.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverDialogComponent,
    RestorePasswordComponent,
    HomeComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PublicModule {}
