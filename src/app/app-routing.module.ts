import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'social-icons', component: SocialIconsComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'check-email', component: CheckEmailComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
