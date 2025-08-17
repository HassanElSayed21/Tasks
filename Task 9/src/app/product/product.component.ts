import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any[] = [];
  categories: string[] = ['Electronics', 'Furniture', 'Accessories'];

  product: any = { id: 0, name: '', price: 0, description: '', category: '' };
  isEditing: boolean = false;

  addOrUpdateProduct() {
    if (!this.product.name || !this.product.category) return;

    if (this.isEditing) {
      let index = this.products.findIndex(p => p.id === this.product.id);
      if (index !== -1) {
        this.products[index] = { ...this.product };
      }
      this.isEditing = false;
    } else {
      this.product.id = new Date().getTime();
      this.products.push({ ...this.product });
    }

    this.resetForm();
  }

  editProduct(p: any) {
    this.product = { ...p };
    this.isEditing = true;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  resetForm() {
    this.product = { id: 0, name: '', price: 0, description: '', category: '' };
  }
}
