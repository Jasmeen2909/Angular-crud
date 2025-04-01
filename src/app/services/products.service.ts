import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {id:1, name: 'laptop', price: 1000},
    {id:2, name: 'phone', price: 500}
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id:number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct (updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index > -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}