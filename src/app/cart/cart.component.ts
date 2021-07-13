import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: any[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.productsInCart;
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.productsInCart = [];
    this.itemsInCart = this.cartService.productsInCart;
    this.calculateSumOfCart();
  }

  onRemoveFromCart(item: any) {
    // elemendi leidmine massiivis
    let index = this.itemsInCart.indexOf(item);
    // elemendi kustutamine massiivist
    this.cartService.productsInCart.splice(index, 1);
    this.itemsInCart = this.cartService.productsInCart;
    this.calculateSumOfCart();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.price
    });
  }
}
