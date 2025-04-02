import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;

  previewData: string | null = null;

  productId: number | null = null;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.productId = +idParam;
    }

    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(1, [Validators.required, Validators.min(1)])
    });

    if (this.productId) {
      const existingProduct = this.productsService.getProductById(this.productId);
      if (existingProduct) {
        this.productForm.patchValue({
          name: existingProduct.name,
          price: existingProduct.price
        });
      }
    }
  }

  isEditing(): boolean {
    return !!this.productId;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {

        this.previewData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log('onSubmit triggered');
    if (this.productForm.valid) {
      const formValue = this.productForm.value;

      if (!this.isEditing()) {
        // create
        const newId = new Date().getTime();
        const newProduct: Product = {
          id: newId,
          name: formValue.name,
          price: formValue.price,
          imageUrl: this.previewData
        };
        this.productsService.createProduct(newProduct);
      } else {
        // update
        const updatedProduct: Product = {
          id: this.productId!,
          name: formValue.name,
          price: formValue.price,
          imageUrl: this.previewData
        };
        this.productsService.updateProduct(updatedProduct);
      }

      // go back to the product list
      this.router.navigate(['/products']);
    }
  }
}
