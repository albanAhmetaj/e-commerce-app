import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, FormsModule],
  template: `
    <div class="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img
          class="w-[200px] h-[100px] object-contain"
          src="{{ product().image }}"
          alt="product image"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm">{{ '€' + product().price }}</span>
          <app-primary-button
            label="Add to cart"
            class="mt-3"
            [disabled]="!product().stock"
            (btnClicked)="cartService.addToCart(product())"
          />
        </div>

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if (isEditingStock) {
          <input
            type="number"
            [(ngModel)]="product().stock"
            (blur)="updateStock()"
            class="w-12 p-1 border border-gray-300 rounded"
          />
          } @else if (product().stock) {
          {{ product().stock }} left } @else { Out of stock }
        </span>
        <button
          class="absolute bottom-2 right-3 text-blue-500 text-xs underline"
          (click)="toggleEditStock()"
        >
          @if (!isEditingStock) { Edit Stock } @else { Done }
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();

  isEditingStock = false;

  toggleEditStock() {
    this.isEditingStock = !this.isEditingStock;
  }

  updateStock() {
    console.log('Updated stock:', this.product().stock);
  }
}
