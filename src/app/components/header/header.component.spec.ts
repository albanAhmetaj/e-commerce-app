import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/products.model';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { createSignal } from '@angular/core/primitives/signals';
import { signal } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
 
  beforeEach(() => {
    const mockCartService = {
      cart: signal<Product[]>([
        { id: 1, title: 'Product A', price: 10, image: 'image.png', quantity: 2 },
        { id: 2, title: 'Product B', price: 20, image: 'image2.png', quantity: 1 },
      ]),
    };

    TestBed.configureTestingModule({
      declarations: [HeaderComponent, PrimaryButtonComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
      imports: [RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should display the correct total quantity in the Cart button', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('app-primary-button');
    expect(button.getAttribute('ng-reflect-label')).toBe('Cart (3)');
  });

  it('should compute totalQuantity correctly', () => {
    expect(component.totalQuantity()).toBe(3);
  });

  // it('should render the app name with the correct routerLink', () => {
  //   const compiled = fixture.nativeElement;
  //   const appNameButton = compiled.querySelector('button');
  //   expect(appNameButton.textContent).toBe('E-Commerce App');
  //   expect(appNameButton.getAttribute('routerLink')).toBe('/');
  // });

  // it('should render the Cart button with the correct routerLink', () => {
  //   const compiled = fixture.nativeElement;
  //   const cartButton = compiled.querySelector('app-primary-button');
  //   expect(cartButton.getAttribute('routerLink')).toBe('/cart');
  // });
});