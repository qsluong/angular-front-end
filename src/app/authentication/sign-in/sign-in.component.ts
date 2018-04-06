import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  apiResponse;
  user: User;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    this.authService.signIn(this.loginForm.value)
      .subscribe(
        response => {
          this.apiResponse = response;
          this.authService.token = this.apiResponse.token;
          this.userService.currentUser = this.apiResponse.user;
          this.router.navigate(['/home']);
        }, error => {
          if (error.status === 0) { console.log('Server is not responding'); }
        });
  }

}
