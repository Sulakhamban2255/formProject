import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    SocialIconsComponent,
    PasswordResetComponent,
    ConfirmEmailComponent,
    CheckEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
