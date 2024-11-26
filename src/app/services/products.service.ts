import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockProducts } from 'src/assets/database/productsmock';


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private readonly products = mockProducts;

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
