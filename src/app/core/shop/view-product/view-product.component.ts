import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
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

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const postId = params['id'];
     // this.findProductDetails(postId);
      this.isLoading = false;
      this.productService.findAll().subscribe(res => this.product = res[0]);
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

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


}
