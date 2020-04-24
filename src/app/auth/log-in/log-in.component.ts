import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  logInForm: FormGroup;
  errorMessage: string = null;

  initForm() {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const email = this.logInForm.controls.email.value;
    const password = this.logInForm.controls.password.value;
    this.auth.logIn(email, password);
  }
}
