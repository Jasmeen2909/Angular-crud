import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productsService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id);
    this.loadProducts();
  }
}
