import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductsService]
})

export class ProductsComponent {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
