import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

  cartProducts: Product[] = []
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getCart();
    this.updateTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartProducts = [];
    this.updateTotalPrice();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartProducts = this.cartService.getCart();
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
