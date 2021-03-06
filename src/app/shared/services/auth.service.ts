import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private server = environment.serverUrl;
  private headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private token: string;

  constructor(private Http: HttpClient) {}

  setToken(token) {
    this.token = token;
    this.headers = this.headers.set('Authorization', 'Bearer ' + this.token);
  }

  deleteToken() {
    this.token = null;
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
