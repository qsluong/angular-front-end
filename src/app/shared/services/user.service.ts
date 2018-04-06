import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private server = environment.serverUrl;
  private _currentUser: User;
  userChanged: Subject<User> = new Subject<User>();

  constructor(private authService: AuthService,
              private Http: HttpClient) { }

  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(user: User) {
    this._currentUser = user;
    this.userChanged.next(this._currentUser);
  }

  logoutUser() {
    this._currentUser = null;
  }

  updateUser(username, edit) {
    return this.Http.put<User>(this.server + 'account/' + username, edit, { headers: this.authService.headers });
  }
}
