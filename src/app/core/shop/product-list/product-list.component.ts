import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';
import { Category } from 'src/app/shared/interfaces/category';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

 //@Input() categories: Category[] = [];

 @Input() set categories(value: string[]) {
  this.category = value;
  this.findAllProducts();
}

@Input() set brands(value: string[]) {
  this.brand = value;
  this.findAllProducts();
}

// @Input() brands: Brand[] = [];

 category: string[] = [];
 brand: string[] = [];

 productList: Product[] = [];

 constructor(private productService: ProductService) {}

 ngOnInit(): void {
}

 findAllProducts() {
  console.log(this.category, this.brand);
  this.productService.findAll().subscribe(products => {
    this.productList = products;
  });
 }

}
