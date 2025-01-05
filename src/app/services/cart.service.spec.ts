import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from '../models/products.model';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should initialize with an empty cart', () => {
    expect(service.cart()).toEqual([]);
  });

  describe('addToCart', () => {
    it('should add a new product to the cart with quantity 1', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png' };
      service.addToCart(product);
      expect(service.cart()).toEqual([{ ...product, quantity: 1 }]);
    });

    it('should increase the quantity if the product already exists in the cart', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      service.addToCart(product);
      service.addToCart(product);
      expect(service.cart()).toEqual([{ ...product, quantity: 2 }]);
    });
  });

  describe('updateQuantity', () => {
    it('should increase the quantity of a product in the cart', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      service.addToCart(product);
      service.updateQuantity(1, true); // Increment quantity
      expect(service.cart()[0].quantity).toBe(2);
    });

    it('should decrease the quantity of a product in the cart', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 2 };
      service.addToCart(product);
      service.updateQuantity(1, false); // Decrement quantity
      expect(service.cart()[0].quantity).toBe(1);
    });

    it('should remove the product from the cart if quantity becomes 0', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      service.addToCart(product);
      service.updateQuantity(1, false); // Decrement quantity to 0
      expect(service.cart()).toEqual([]);
    });

    it('should not update quantity for non-existent product', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      service.addToCart(product);
      service.updateQuantity(999, true); // Increment quantity for non-existent product
      expect(service.cart()).toEqual([{ ...product, quantity: 1 }]);
    });
  });

  describe('removeFromCart', () => {
    it('should remove a product from the cart by ID', () => {
      const product1: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      const product2: Product = { id: 2, title: 'Product B', price: 20, image: 'image2.png', quantity: 1 };
      service.addToCart(product1);
      service.addToCart(product2);

      service.removeFromCart(1); // Remove product with ID 1
      expect(service.cart()).toEqual([product2]);
    });

    it('should do nothing if the product ID does not exist', () => {
      const product: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      service.addToCart(product);

      service.removeFromCart(999); // Try removing non-existent product
      expect(service.cart()).toEqual([product]);
    });
  });

  describe('clearCart', () => {
    it('should remove all products from the cart', () => {
      const product1: Product = { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 1 };
      const product2: Product = { id: 2, title: 'Product B', price: 20, image: 'image2.png', quantity: 1 };
      service.addToCart(product1);
      service.addToCart(product2);

      service.clearCart();
      expect(service.cart()).toEqual([]);
    });
  });
});
