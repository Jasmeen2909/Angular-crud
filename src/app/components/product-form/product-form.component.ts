import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{
  product: Product = {id: 0, name: '', price: 0};

  constructor(
    private productsService: ProductsService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      const existing = this.productsService.getProductById(id);
      if (existing) {
        this.product = {...existing};
      }
    }
  }

  isEditing(): boolean{
    return this.product.id !==0;
  }

  saveProduct(): void {
    if(!this.isEditing()) {
      //create
      this.product.id = new Date().getTime();
      this.productsService.createProduct(this.product);
    } else {
      //update
      this.productsService.updateProduct(this.product);
    }

    //redirect back to product list
    this.router.navigate(['/products']);
  }

}
