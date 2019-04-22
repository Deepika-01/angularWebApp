import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../material/material.module';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormRoutingModule } from './login-form-routing.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginFormRoutingModule,
    MaterialModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginModule { }
