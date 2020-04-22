import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/authData.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(mail: string, pass: string) {
    const authData: AuthData = { email: mail, password: pass };
    return this.http.post('http://localhost3000/users/signup', authData);
  }
}
