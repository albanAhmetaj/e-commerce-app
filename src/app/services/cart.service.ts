import { Injectable, signal } from '@angular/core';
import { single } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    const existingItem = this.cart().find((p) => p.id === product.id);
    if (existingItem) {
      // Update the quantity if the product already exists
      const updatedCart = this.cart().map((p) =>
        p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      );
      this.cart.set(updatedCart);
    } else {
      // Add the product with quantity 1 if it doesn't exist
      this.cart.set([...this.cart(), { ...product, quantity: 1 }]);
    }
  }

  // Update the quantity of a product
  updateQuantity(id: number, increment: boolean) {
    const updatedCart = this.cart().map((p) => {
      if (p.id === id) {
        const newQuantity = (p.quantity || 1) + (increment ? 1 : -1);
        return newQuantity > 0 ? { ...p, quantity: newQuantity } : null; // Remove if quantity <= 0
      }
      return p;
    }).filter(Boolean) as Product[];
    this.cart.set(updatedCart);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  clearCart() {
    this.cart.set([]); // Reset the cart to an empty array
  }
  constructor() { }
}
