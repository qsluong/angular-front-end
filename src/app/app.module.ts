// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionAddComponent } from './collection/collection-add/collection-add.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionDetailComponent } from './collection/collection-detail/collection-detail.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CardAddComponent } from './card/card-add/card-add.component';

// Services
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { CardService } from './shared/services/card.service';
import { CollectionService } from './shared/services/collection.service';
import { UserService } from './shared/services/user.service';
import { CardEditComponent } from './card/card-edit/card-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    AccountComponent,
    AccountEditComponent,
    AccountDetailComponent,
    CollectionComponent,
    CollectionAddComponent,
    CollectionListComponent,
    CollectionDetailComponent,
    CardComponent,
    CardListComponent,
    CardAddComponent,
    CardEditComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, CardService, CollectionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
