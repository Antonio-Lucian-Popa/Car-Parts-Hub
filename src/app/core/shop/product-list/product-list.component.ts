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

  @Input() set sortType(value: string) {
    this.sortItems(value);
  }

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
    console.log(changes['sortType']);
    if (changes['brands'] && changes['brands'].currentValue.length > 0 || changes['categories'] && changes['categories'].currentValue.length > 0) {
      this.categories = changes['categories'].currentValue;
      this.brands = changes['brands'].currentValue;
      this.findProductsByCategory();
    } else if(changes['sortType'].currentValue === "") {
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

  sortItems(sortType: string) {
    console.log(sortType)
    switch (sortType) {
      case 'new':
        this.productList.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        break;
      case 'lowPrice':
        this.productList.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 'highPrice':
        this.productList.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      default:
        this.productList.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        break;
    }
  }

}
