// check-email.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.css']
})
export class CheckEmailComponent {
  constructor(private router: Router) { }

  resendEmail(): void {
    // Implement logic to resend email
    console.log('Resending email...');

    // Redirect to the confirm-email component
    this.router.navigate(['/confirm-email']);
  }
}
