import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="container mx-auto max-w-xl bg-slate-100 p-6 shadow-xl rounded-xl border">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg"> Total Price </span>
          <span class="text-lg font-bold"> €{{ total() }} </span>
        </div>
        <app-primary-button label="Checkout" class="mt-4" />
      </div>
    </div>
  `,
  styles: ``,
  })
  export class OrderSummaryComponent {

  cartService = inject(CartService);

  total = computed(() => {
    return this.cartService.cart().reduce((sum, item) => {
      const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
      const quantity = item.quantity || 1; // Default quantity to 1 if not set
      return sum + (price * quantity);
    }, 0);
  });
}

