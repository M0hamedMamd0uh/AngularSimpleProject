import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.email,
    ]),

    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z0-9]+'),
    ]),
  });

  get validEmail() {
    return (
      this.loginForm.controls['email'].valid === false &&
      this.loginForm.controls['email'].dirty === true
    );
  }

  get validPassword() {
    return (
      this.loginForm.controls['password'].valid === false &&
      this.loginForm.controls['password'].dirty === true
    );
  }
  router = inject(Router);

  login() {
    if (this.loginForm.valid) {
      let data: any = JSON.parse(localStorage.getItem('user') || '{}');

      if (
        data.email === this.loginForm.controls['email'].value &&
        data.password === this.loginForm.controls['password'].value
      ) {
        alert('Login Successfully');
        this.loginForm.reset();
        this.router.navigate(['/home']);
      } else {
        alert('Failed To Login');
      }
    } else {
      alert('Failed To Login');
    }
  }
}
