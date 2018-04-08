import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionAddComponent } from './collection/collection-add/collection-add.component';
import { CollectionDetailComponent } from './collection/collection-detail/collection-detail.component';
import { CardEditComponent } from './card/card-edit/card-edit.component';
import { CollectionEditComponent } from './collection/collection-edit/collection-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionItemComponent } from './collection/collection-item/collection-item.component';
import { CardAddComponent } from './card/card-add/card-add.component';
import { CardListComponent } from './card/card-list/card-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'collection', pathMatch: 'full'},
  { path: 'login', component: AuthenticationComponent, children: [
      { path: '', component: SignInComponent },
    ]},
  { path: 'register', component: AuthenticationComponent, children: [
      { path: '', component: SignUpComponent },
    ]},
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard], children: [
      { path: '', component: AccountDetailComponent },
      { path: 'edit', component: AccountEditComponent }
    ]},
  { path: 'collection', component: CollectionComponent, canActivate: [AuthGuard], children: [
      { path: 'add', component: CollectionAddComponent },
      { path: 'edit', component: CollectionEditComponent },
      { path: ':name', component: CollectionDetailComponent, children: [
          { path: '', component: CardListComponent },
          { path: 'add', component: CardAddComponent },
          { path: ':card/edit', component: CardEditComponent }
        ]},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
