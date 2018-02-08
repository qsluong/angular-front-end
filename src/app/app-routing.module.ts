import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AuthenticationComponent, children: [
      { path: '', component: SignInComponent },
    ]},
  { path: 'register', component: AuthenticationComponent, children: [
      { path: '', component: SignUpComponent },
    ]},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard], children: [
      { path: '', component: AccountDetailComponent },
      { path: 'edit', component: AccountEditComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
