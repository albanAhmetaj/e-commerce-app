import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-4 shadow-md flex justify-between items-center">
      <button class="text-xl shadow-sm border border-slate-300 rounded-xl px-2 py-2" routerLink="/">E-Commerce App</button>
      <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'"
      routerLink="/cart" />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {

  cartService = inject(CartService);

}
