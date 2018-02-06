import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  private server = environment.localhost;
  private token: string;

  constructor(private Http: HttpClient) {}

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
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
