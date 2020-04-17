import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpComponent, LogInComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignUpComponent, LogInComponent],
})
export class AuthModule {}
