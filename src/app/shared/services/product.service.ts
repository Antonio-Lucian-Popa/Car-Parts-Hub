import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { PageProduct } from '../interfaces/page-product';
import { Category } from '../interfaces/category';
import { Brand } from '../interfaces/brand';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //URL_API = 'http://localhost:3000/products';
  URL_API = 'http://localhost:8080/api/v1/products';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
   // return this.http.get<Product[]>(this.URL_API);
   return this.http.get<Product[]>("http://localhost:3000/products");
  }

  findAllProducts(page: number, size: number): Observable<PageProduct> {
    // Set query parameters in the URL
    const params = {
      page: page.toString(),
      size: size.toString()
    };
    return this.http.get<PageProduct>(this.URL_API, { params });
   }

   findAllProductsByCategory(page: number, size: number, category: string[], brand: string[]): Observable<PageProduct> {
    console.log("intra")
    // Set query parameters in the URL
    const params = {
      page: page.toString(),
      size: size.toString(),
      category: category.join(','),
      brand: brand.join(',')
    };
    console.log(params)
    return this.http.get<PageProduct>(this.URL_API + "/category", { params });
   }

   findProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(this.URL_API + "/" + productId);
   }
}
