import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  editForm: FormGroup;
  editUser: User;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.userChanged
      .subscribe(user => this.editUser = user);
    this.editUser = this.userService.getCurrentUser();
    this.initForm();
  }

  initForm() {
    this.editForm = new FormGroup({
      firstname: new FormControl(this.editUser.firstname),
      lastname: new FormControl(this.editUser.lastname),
      email: new FormControl(this.editUser.email)
    });
  }

  onSaveChanges() {
    console.log(this.editForm);
    this.userService.updateUser(this.editUser.username, this.editForm.value)
      .subscribe(response => {
        this.userService.setCurrentUser(response);
        this.router.navigate(['/account']);
      });
  }

}
