import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  isMenuOpen = false;

  numberOfItemsInCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productAddedToCart.subscribe(res => {
      this.numberOfItemsInCart = res;
    });

    this.cartService.getCartItems().subscribe(res => {
      this.numberOfItemsInCart = res.length;
    });
  }

  closeMenu(): void {
    this.isMenuOpen = false;

    // Add your additional logic here to perform actions when the menu is closed.
    // For example, you can trigger animations, save state, or perform any other necessary tasks.
    // Example:
    // this.playCloseAnimation();
    // this.saveMenuStateToLocalStorage();
  }

  changeCartMenuState(): void {
    this.cartService.isCartMenuOpen.next(true);
  }


}
