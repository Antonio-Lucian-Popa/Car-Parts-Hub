import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  //@Input() categories: Category[] = [];

  @Input() categories: string[] = [];

  @Input() brands: string[] = [];

  @Output() recalculateListProduct = new EventEmitter();

  // @Input() brands: Brand[] = [];

  category: string[] = [];
  brand: string[] = [];

  productList: Product[] = [];

  page = 0;
  size = 10;
  totalPages = 0;


  constructor(private productService: ProductService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['brands']);
    if(changes['brands'].currentValue.length > 0 || changes['categories'].currentValue.length > 0) {
      this.categories = changes['categories'].currentValue;
      this.brands = changes['brands'].currentValue;
      this.findProductsByCategory();
    } else {
      this.findAllProducts();
    }
  }

  ngOnInit(): void {
   // this.findAllProducts();
  }

  findAllProducts() {
    console.log(this.category, this.brand);
    this.productService.findAllProducts(this.page, this.size).subscribe(response => {
      this.productList = response.products;
      this.page = response.totalPages > response.currentPage ? response.currentPage + 1 : response.currentPage;
      this.totalPages = response.totalPages;
      this.recalculateListProduct.emit({
        totalPages: this.totalPages,
        currentPage: this.page
      });
    });
  }

  findProductsByCategory() {
    this.productService.findAllProductsByCategory(this.page, this.size, this.categories, this.brands).subscribe(response => {
      this.productList = response.products;
      this.page = response.totalPages > response.currentPage ? response.currentPage + 1 : response.currentPage;
      this.totalPages = response.totalPages;
      this.recalculateListProduct.emit({
        totalPages: this.totalPages,
        currentPage: this.page
      });
    });
  }

}
