import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnDestroy{

  private routeSub: Subscription = new Subscription;

  product!: Product;

  isLoading = true;

  constructor(
    private productService: ProductService,
     private route: ActivatedRoute,
     private cartService: CartService
     ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const productId = params['id'];
   //  const productId = "23abec87-2f78-4272-8d9d-73cbe34bdadb";
     // this.findProductDetails(postId);
      //this.productService.findAll().subscribe(res => this.product = res[0]);
      this.productService.findProductById(productId).subscribe(res => {
        this.product = res;
        this.isLoading = false;
      });
    }, err => {
      console.log(err);
      this.isLoading = true;
    });
  }

  findProductDetails(postId: string) {
    // this.productService.findProductDetails(postId).subscribe(product => {
    //   this.product = product;
    //   this.isLoading = false;
    // });
  }

  addItemOnCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.title,
      price: this.product.price,
      quantity: 1,
      image: this.product.images[0]
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


}
