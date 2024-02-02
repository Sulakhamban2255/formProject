import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'] // Add styles as needed
})
export class PasswordResetComponent implements OnInit {
  resetForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  backToLogin() {
    // Add logic to navigate back to the login page or handle it as per your application structure
    // Example: this.router.navigate(['/login']); // Don't forget to inject the Router service
  }}