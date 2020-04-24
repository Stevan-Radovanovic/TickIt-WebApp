import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/authData.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public token: string;
  public isAuth = false;
  public tokenSubject = new BehaviorSubject(false);
  public timer: any;

  signUp(mail: string, pass: string) {
    const authData: AuthData = { email: mail, password: pass };
    return this.http.post('http://localhost:3000/users/signup', authData);
  }

  logIn(mail: string, pass: string) {
    const authData: AuthData = { email: mail, password: pass };
    console.log(authData);
    return this.http
      .post<{ token: string }>('http://localhost:3000/users/login', authData)
      .subscribe((response) => {
        this.token = response.token;
        this.tokenSubject.next(true);

        const expDate = new Date(new Date().getTime() + 3600000);
        this.saveAuthData(this.token, expDate);
        this.isAuth = true;
        this.autoLogOut();
        this.router.navigateByUrl('/home');
      });
  }

  logOut() {
    clearTimeout(this.timer);
    this.token = null;
    this.isAuth = false;
    this.tokenSubject.next(false);
    this.clearAuthData();
    this.router.navigateByUrl('/login');
  }

  autoLogOut() {
    this.timer = setTimeout(() => {
      this.logOut();
    }, 3600000);
  }

  autoLogIn() {
    // TBC
    if (localStorage.getItem('token') !== null) {
      this.token = localStorage.getItem('token');
      this.tokenSubject.next(true);
      this.isAuth = true;
      this.autoLogOut();
    }
  }

  saveAuthData(token: string, expDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expDate', expDate.toISOString());
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expDate');
  }
}
