import { Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { CheckEmailComponent } from './check-email/check-email.component';

export const appRoutes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'social-icons', component: SocialIconsComponent },
  { path: 'password-reset', component: PasswordResetComponent },
   { path: 'confirm-email', component: ConfirmEmailComponent},
   { path: 'check-email', component: CheckEmailComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }, 
];
