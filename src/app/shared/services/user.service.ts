import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private server = environment.localhost;
  private currentUser: User;
  userChanged: Subject<User> = new Subject<User>();

  constructor(private authService: AuthService,
              private Http: HttpClient) {}

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.userChanged.next(this.currentUser);
  }

  updateUser(username, edit) {
    return this.Http.put<User>(this.server + 'account/' + username, edit, { headers: this.authService.getHeaders() });
  }
}
