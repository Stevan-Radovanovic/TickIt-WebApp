import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  signUpForm: FormGroup;
  isLoading = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    this.isLoading = true;
    const email = this.signUpForm.controls.email.value;
    const password = this.signUpForm.controls.password.value;
    this.auth.signUp(email, password).subscribe(
      (response) => {
        this.router.navigateByUrl('/login');
        this.isLoading = false;
        console.log(response);
      },
      (err) => {
        console.log(err.error);
        this.snackBar.open(err.error.error, 'Dismiss', {
          duration: 3000,
          panelClass: ['snackbar'],
        });
        this.isLoading = false;
      }
    );
  }
}
