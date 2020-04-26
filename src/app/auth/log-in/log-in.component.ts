import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  isLoading = false;
  logInForm: FormGroup;
  errorMessage: string = null;

  initForm() {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.isLoading = false;
  }

  onSubmit() {
    this.isLoading = true;
    const email = this.logInForm.controls.email.value;
    const password = this.logInForm.controls.password.value;
    this.auth.logIn(email, password).subscribe(
      (response) => {
        this.auth.token = response.token;
        this.auth.tokenSubject.next(true);
        const expDate = new Date(new Date().getTime() + 3600000);
        this.auth.saveAuthData(this.auth.token, expDate);
        this.auth.isAuth = true;
        this.auth.autoLogOut(36000000);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err.error);
        this.snackBar.open('Log in failed', 'Dismiss', {
          duration: 3000,
          panelClass: ['snackbar'],
        });
        this.isLoading = false;
      }
    );
  }
}
