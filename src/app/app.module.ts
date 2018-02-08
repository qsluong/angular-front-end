import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthService } from './shared/services/auth.service';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    AccountComponent,
    AccountEditComponent,
    AccountDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
