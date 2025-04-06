import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverDialogComponent } from './components/recover-dialog/recover-dialog.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverDialogComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PublicModule {}
