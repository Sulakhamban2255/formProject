// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  // Helper function to check and display individual field errors
  getError(field: string): string {
    const control = this.signInForm.get(field);
    if (control?.touched && control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    } else if (control?.touched && control?.hasError('email')) {
      return `Please enter a valid email address.`;
    }
    return '';
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      // Perform login logic here
      console.log('Form submitted!', this.signInForm.value);

      // Redirect to a different page if needed
      // this.router.navigate(['/dashboard']);
    } else {
      // Display a general error message
      console.log('Form is invalid. Please fix the errors.');
    }
  }
}
