import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  getCart(): Product[] {
    return this.cart;
  }

  getCartCount(): number {
    return this.cart.length;
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotalPrice(): number {
    let total = 0;
    for (let product of this.cart) {
        total += product.price;
    }
    return total;
  }
}