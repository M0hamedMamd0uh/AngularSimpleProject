import { Component } from '@angular/core';
import { productDetails } from '../../Models/products';
import { AddProductComponent } from "../add-product/add-product.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-all-products',
  imports: [AddProductComponent, ProductsComponent],
  templateUrl: './all-products.component.html',
  styles: ``,
})
export class AllProductsComponent {
  product: productDetails = {
    name: '',
    desc: '',
    image: '',
    rate: 0,
  };

  getProductDetails(data: productDetails) {
    this.product = data;
  }
}
