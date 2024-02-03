// confirm-email.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent {
  confirmEmailForm!: FormGroup;
  generalError: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.confirmEmailForm = this.formBuilder.group({
      confirmationCode: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
  }

  getError(field: string): string {
    const control = this.confirmEmailForm.get(field);
    if (control?.touched && control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    } else if (control?.touched && control?.hasError('pattern')) {
      return 'Please enter a valid number.';
    }
    return '';
  }

  confirmEmail(): void {
    if (this.confirmEmailForm.valid) {
      // Implement email confirmation logic here
      console.log('Confirm Email Form Submitted!', this.confirmEmailForm.value);

      // Reset general error message on successful submission
      this.generalError = null;

      // Redirect to the desired page after email confirmation
      this.router.navigate(['/check-email']);
    } else {
      // Display a general error message
      console.log('Confirm Email Form is invalid. Please fix the errors.');
    }
  }

  resendCode(): void {
    // Implement logic to resend confirmation code
    console.log('Resending confirmation code...');
  }
}
