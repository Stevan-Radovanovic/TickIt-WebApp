import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignUpComponent, LogInComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, HttpClientModule],
  exports: [SignUpComponent, LogInComponent],
})
export class AuthModule {}
