import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  account: User;
  fullname: string;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.account = this.userService.currentUser;
    this.fullname = this.account.firstname + ' ' + this.account.lastname;
  }

  onEdit() {
    this.router.navigate(['/account/edit']);
  }

}
