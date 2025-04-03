import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmonRoutingModule } from './admon-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdmonRoutingModule
  ]
})
export class AdmonModule { }
