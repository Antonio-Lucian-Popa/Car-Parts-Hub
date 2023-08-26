import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
   // return this.http.get<Product[]>(this.URL_API);
   return this.http.get<Product[]>("http://localhost:3000/products");
  }
}
