import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="h-full flex flex-col gap-4">
      <!-- Scrollable Cart Items -->
      <div class="p-6 flex flex-col gap-4 h-[calc(100vh-330px)] overflow-auto">
        <div
          class="flex justify-between items-center container mx-auto max-w-xl"
        >
          <h2 class="text-2xl">Shopping Cart</h2>
          <button
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition
            disabled:bg-red-400 disabled:text-gray-500 disabled:cursor-not-allowed"
            (click)="clearCart()" [disabled] = isCartEmpty()
          >
            Clear Cart
          </button>
        </div>
        @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
        }
      </div>

      <!-- Static Order Summary -->
      <div class="bg-white shadow-md border-t p-6">
        <app-order-summary></app-order-summary>
      </div>
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);

  clearCart() {
    this.cartService.clearCart(); // Calls the service to clear the cart
  }

  isCartEmpty = computed(() => this.cartService.cart().length === 0);

  trackById(index: number, item: any): number {
    return item.id;
  }
}
