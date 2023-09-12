import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  isCartMenuOpen = new Subject<boolean>();
  productAddedToCart = new Subject<number>();

  constructor() { }

  addToCart(product: CartItem): void {
    let cartItems: CartItem[] = [];
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const existingCartItem = cartItems.find((item: CartItem) => item.id === product.id);
      if (existingCartItem) {
        existingCartItem.quantity += product.quantity;
      } else {
        cartItems.push(product);
      }
    } else {
      cartItems.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.productAddedToCart.next(cartItems.length);
  }

  getCartItems(): Observable<CartItem[]> {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    return of(cartItems);
  }

  removeFromCart(productId: string): Observable<CartItem[]> {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    this.productAddedToCart.next(updatedCartItems.length);
    return of(updatedCartItems);
  }
}
