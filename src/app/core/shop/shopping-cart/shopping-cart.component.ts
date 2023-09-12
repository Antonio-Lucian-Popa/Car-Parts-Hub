import { CartItem } from 'src/app/shared/interfaces/cart-item';
import { CartService } from './../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit{

  isCartOpened: boolean = false;

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
   this.cartService.isCartMenuOpen.subscribe((value) => {
    console.log(value)
      this.isCartOpened = value;
    });
  }

  removeItemFromCart(productId: string): void {
    this.cartService.removeFromCart(productId).subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }

  closeShoppingCart(): void {
    this.cartService.isCartMenuOpen.next(false);
  }

}
