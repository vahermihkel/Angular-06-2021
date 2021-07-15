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
    // ngFor="let itemInCart of itemsInCart"
    // itemsInCart = [{item},{item},{title: "", price: 10}]
    // itemInCart = {item}
    // itemInCart = {title: "", price: 10}
    // itemInCart = {item}
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.price
    });
  }
}
