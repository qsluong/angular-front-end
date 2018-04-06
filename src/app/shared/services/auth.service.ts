import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private server = environment.serverUrl;
  private _headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  private _token: string;

  constructor(private Http: HttpClient) { }

  get headers() {
    return this._headers;
  }

  set token(token) {
    this._token = token;
    this._headers = this._headers.set('Authorization', 'Bearer ' + this._token);
  }

  deleteToken() {
    this._token = null;
  }

  isAuthenticated() {
    return this._token != null;
  }

  signIn(login) {
    return this.Http.post(this.server + 'login', login);
  }

  signUp(user: User) {
    return this.Http.post(this.server + 'register', user);
  }

}
