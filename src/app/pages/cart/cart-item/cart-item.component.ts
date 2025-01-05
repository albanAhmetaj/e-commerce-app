import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="container mx-auto max-w-xl bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 items-center"> 
      <img [src]="item().image" alt="product image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold"> {{ item().title }} </span>
        <span class="text-sm font-bold">  €{{ item().price }} </span>
        <span class="text-sm font-semibold"> Quantity: {{ item().quantity }} </span>
      </div>
      <div class="flex gap-1 items-center">
        <app-button label="-" (btnClicked)="updateQuantity(false)" />
        <app-button label="+" (btnClicked)="updateQuantity(true)" />
      </div>  
      <div class="flex-1"></div>
      <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" />
    </div>
  `,
  styles: ``
})
export class CartItemComponent {

  cartService = inject(CartService);

  item = input.required<Product>();

  updateQuantity(increment: boolean) {
    this.cartService.updateQuantity(this.item().id, increment);
  }
}
