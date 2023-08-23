import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isMenuOpen = true;

  closeMenu(): void {
    this.isMenuOpen = false;

    // Add your additional logic here to perform actions when the menu is closed.
    // For example, you can trigger animations, save state, or perform any other necessary tasks.
    // Example:
    // this.playCloseAnimation();
    // this.saveMenuStateToLocalStorage();
  }


}
