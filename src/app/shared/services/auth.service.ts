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

  public email: string;
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
    localStorage.setItem('email', authData.email);
    console.log(authData);
    return this.http.post<{ token: string }>(
      'http://localhost:3000/users/login',
      authData
    );
  }

  logOut() {
    clearTimeout(this.timer);
    this.token = null;
    this.isAuth = false;
    this.tokenSubject.next(false);
    this.clearAuthData();
    this.router.navigateByUrl('/login');
  }

  autoLogOut(interval: number) {
    this.timer = setTimeout(() => {
      this.logOut();
    }, interval);
  }

  autoLogIn() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const now = new Date();
    const expiresIn = authInfo.expDate.getTime() - now.getTime();
    console.log(expiresIn);
    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuth = true;
      this.autoLogOut(expiresIn);
      this.tokenSubject.next(true);
    } else {
      this.logOut();
    }
  }

  saveAuthData(token: string, expDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expDate', expDate.toISOString());
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expDate');
    localStorage.removeItem('email');
  }

  getAuthData() {
    const tok = localStorage.getItem('token');
    const expDate = localStorage.getItem('expDate');
    if (!tok || !expDate) {
      return;
    }

    return {
      token: tok,
      expDate: new Date(expDate),
    };
  }
}
