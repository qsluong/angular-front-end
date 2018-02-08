import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private server = environment.localhost;
  private headers: HttpHeaders;
  private token: string;

  constructor(private Http: HttpClient) {}

  setToken(token) {
    this.token = token;
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', this.token);
    console.log(this.headers);
  }

  getToken() {
    return this.token;
  }

  getHeaders() {
    return this.headers;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signIn(login) {
    return this.Http.post(this.server + 'login', login);
  }

  signUp(user: User) {
    return this.Http.post(this.server + 'register', user);
  }

}
