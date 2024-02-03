// password-reset.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  resetForm!: FormGroup;
  generalError: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getError(field: string): string {
    const control = this.resetForm.get(field);
    if (control?.touched && control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    } else if (control?.touched && control?.hasError('email')) {
      return `Please enter a valid email address.`;
    }
    return '';
  }

  resetPassword(): void {
    if (this.resetForm.valid) {
      // Implement password reset logic here
      console.log('Reset Password Form Submitted!', this.resetForm.value);

      // Reset general error message on successful submission
      this.generalError = null;
      this.router.navigate(['/confirm-email']);

      // Add logic to send a reset password email or perform necessary actions
    } else {
      // Display a general error message
      console.log('Reset Password Form is invalid. Please fix the errors.');
    }
  }

  backToLogin(): void {
    // Implement navigation back to the login page
    // Example: this.router.navigate(['/login']);
  }
}
