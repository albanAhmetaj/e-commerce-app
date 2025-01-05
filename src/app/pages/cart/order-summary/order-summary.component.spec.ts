import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/products.model';
import { createSignal } from '@angular/core/primitives/signals';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { signal } from '@angular/core';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;
  let mockCartService: Partial<CartService>;

  beforeEach(() => {
    // Mock CartService
    const mockCartService = {
      cart: signal<Product[]>([
        { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 2 },
        { id: 2, title: 'Product B', price: 20, image: 'image2.png', quantity: 1 },
      ]),
    };

    TestBed.configureTestingModule({
      declarations: [OrderSummaryComponent, PrimaryButtonComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the correct total price', () => {
    const compiled = fixture.nativeElement;
    const totalPrice = compiled.querySelector('span.text-lg.font-bold');
    expect(totalPrice.textContent).toBe(' €40 ');
  });

  it('should correctly calculate the total price for multiple items', () => {
    const expectedTotal = (10 * 2) + (20 * 1); 
    expect(component.total()).toBe(expectedTotal);
  });
 
});
