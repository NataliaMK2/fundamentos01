import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  templateUrl: './reto1.component.html',
  styleUrls: ['./reto1.component.css']
})
export class Reto1Component {
  registerForm: FormGroup;
  registrationSuccess = false;
  registrationError = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator }); 
  }

  passwordMatchValidator: ValidatorFn = (control: FormGroup): null | { [key: string]: any } => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
  };

  onSubmit() {
    if (this.registerForm.valid) {
      this.registrationSuccess = true;
      this.registrationError = false;
    } else {
      this.registrationSuccess = false;
      this.registrationError = true;
    }
  }
}
