import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { productDetails } from '../../Models/products';
import { CustomDirective } from '../Directives/custom.directive';

@Component({
  selector: 'app-products',
  imports: [CustomDirective],
  templateUrl: './products.component.html',
  styles: ``,
})
export class ProductsComponent implements OnChanges {
  @Input() productDetails: productDetails = {
    name: '',
    desc: '',
    image: '',
    rate: 0,
  };
  Products: productDetails[] = [
    {
      name: 'Mouse',
      desc: 'This is a gaming mouse',
      image: 'https://placehold.co/150x100?text=Product',
      rate: 3,
    },
    {
      name: 'Keyboard',
      desc: 'This is a gaming keyboard',
      image: 'https://placehold.co/150x100?text=Product',
      rate: 4,
    },
    {
      name: 'Pad',
      desc: 'This is a gaming pad',
      image: 'https://placehold.co/150x100?text=Product',
      rate: 3.5,
    },
    {
      name: 'Mic',
      desc: 'This is a gaming mic',
      image: 'https://placehold.co/150x100?text=Product',
      rate: 4.5,
    },
  ];
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['productDetails'].firstChange) {
      this.Products.push(this.productDetails);
    }
  }
}
