import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{
  product: Product = {id: 0, name: '', price: 0};

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    
  }

  saveProduct(): void {
    if (this.product.id === 0) {
      this.product.id = new Date().getTime();
      this.productsService.createProduct(this.product);
    }else{
      this.productsService.updateProduct(this.product);
    }

    this.product = {id: 0, name: '', price: 0};
  }

}
