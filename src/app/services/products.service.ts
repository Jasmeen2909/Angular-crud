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

  constructor() { 
    this.loadFromStorage();
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id:number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  createProduct(product: Product) {
    this.products.push(product);
    this.saveToStorage();
  }

  updateProduct (updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.saveToStorage();
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.saveToStorage();
  }

  private loadFromStorage(){
    const storedData = localStorage.getItem('products');
    if(storedData) {
      this.products = JSON.parse(storedData);
    }
  }

  private saveToStorage(){
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}