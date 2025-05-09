import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styles: ``,
})
export class AddProductComponent {
  @Output() myEvent = new EventEmitter();

  myForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    desc: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    image: new FormControl('https://placehold.co/150x100?text=Product'),
    rate: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(5),
      Validators.pattern('[012345]'),
    ]),
  });

  get validProductName() {
    return (
      this.myForm.controls['name'].valid === false &&
      this.myForm.controls['name'].dirty === true
    );
  }
  get validProductDesc() {
    return (
      this.myForm.controls['desc'].valid === false &&
      this.myForm.controls['desc'].dirty === true
    );
  }
  // get validProductImage() {
  //   return (
  //     this.myForm.controls['image'].valid === false &&
  //     this.myForm.controls['image'].dirty === true
  //   );
  // }
  get validProductRate() {
    return (
      this.myForm.controls['rate'].valid === false &&
      this.myForm.controls['rate'].dirty === true
    );
  }

  addProduct() {
    if (this.myForm.valid) {
      this.myEvent.emit(this.myForm.value);
      alert('add successfully');
      this.myForm.reset();
      this.myForm
        .get('image')
        ?.setValue('https://placehold.co/150x100?text=Product');
    }
  }
}
