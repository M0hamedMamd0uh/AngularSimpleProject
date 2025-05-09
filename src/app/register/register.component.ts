import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: ``,
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.email,
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(100),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z0-9]+'),
    ]),
  });

  get validUserName() {
    return (
      this.registerForm.controls['name'].valid === false &&
      this.registerForm.controls['name'].dirty === true
    );
  }
  get validEmail() {
    return (
      this.registerForm.controls['email'].valid === false &&
      this.registerForm.controls['email'].dirty === true
    );
  }
  get validAge() {
    return (
      this.registerForm.controls['age'].valid === false &&
      this.registerForm.controls['age'].dirty === true
    );
  }
  get validPassword() {
    return (
      this.registerForm.controls['password'].valid === false &&
      this.registerForm.controls['password'].dirty === true
    );
  }

  router = inject(Router);

  register() {
    if (this.registerForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.registerForm.value));
      alert('Register Successfully');
      this.registerForm.reset();
      this.router.navigate(["/login"])
    }else {
      
      alert('Failed To Register');
    }
  }
}
