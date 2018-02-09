import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.userChanged
      .subscribe(user => this.user = user);
  }

  onSignOut() {
    this.authService.deleteToken();
    this.userService.removeUser();
    this.router.navigate(['/login']);
  }

}
