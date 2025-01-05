import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/products.model';
import { By } from '@angular/platform-browser';
import { signal, WritableSignal } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { createSignal } from '@angular/core/primitives/signals';

// describe('CartItemComponent', () => {
//   let component: CartItemComponent;
//   let fixture: ComponentFixture<CartItemComponent>;
//   let mockCartService: Partial<CartService>;
//   let mockItem: Product;
//   let itemSignal: WritableSignal<Product>;

//   beforeEach(() => {
//     // Mock CartService
//     mockCartService = {
//       updateQuantity: jasmine.createSpy('updateQuantity'),
//       removeFromCart: jasmine.createSpy('removeFromCart'),
//     };

//     // Mock Product Item
//     mockItem = {
//       id: 1,
//       title: 'Product A',
//       price: 10,
//       image: 'image.png',
//       quantity: 2,
//     };

//     TestBed.configureTestingModule({
//       declarations: [CartItemComponent, ButtonComponent],
//       providers: [{ provide: CartService, useValue: mockCartService }],
//     }).compileComponents();

//     fixture = TestBed.createComponent(CartItemComponent);
//     component = fixture.componentInstance;

//     itemSignal = signal(mockItem);
//     component.item = () => itemSignal();
    
//     fixture.detectChanges();
//   });

//   it('should display the correct product details', () => {
//     const compiled = fixture.nativeElement;
//     const title = compiled.querySelector('span.text-md.font-bold');
//     const price = compiled.querySelector('span.text-sm.font-bold');
//     const quantity = compiled.querySelector('span.text-sm.font-semibold');
    
//     expect(title.textContent).toBe('Product A');
//     expect(price.textContent).toBe(' €10');
//     expect(quantity.textContent).toBe(' Quantity: 2');
//   });

//   it('should call updateQuantity when "+" button is clicked', () => {
//     const incrementButton = fixture.nativeElement.querySelector('app-button[label="+"]');
//     incrementButton.click();
    
//     expect(mockCartService.updateQuantity).toHaveBeenCalledWith(1, true);
//   });

//   it('should call updateQuantity when "-" button is clicked', () => {
//     const decrementButton = fixture.nativeElement.querySelector('app-button[label="-"]');
//     decrementButton.click();
    
//     expect(mockCartService.updateQuantity).toHaveBeenCalledWith(1, false);
//   });

//   it('should call removeFromCart when "Remove" button is clicked', () => {
//     const removeButton = fixture.nativeElement.querySelector('app-button[label="Remove"]');
//     removeButton.click();
    
//     expect(mockCartService.removeFromCart).toHaveBeenCalledWith(1);
//   });
// });