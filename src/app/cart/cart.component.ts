import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: { cartItem: Item, quantity: number }[] = [];
  itemsCount = 0;
  sumOfCart = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.deleteAllFromCart();
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
  }

  onRemoveOneFromCart(item: { cartItem: Item, quantity: number }) {
    this.cartService.deleteOneFromCart(item);
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
  }

  onAddToCart(item: Item) {
    console.log(item);
    this.cartService.addToCart(item);
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
  }

  onRemoveFromCart(item: { cartItem: Item, quantity: number }) {
    // elemendi leidmine massiivis
    let index = this.itemsInCart.indexOf(item);
    // elemendi kustutamine massiivist
    this.cartService.deleteItemFromCart(index);
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.itemsCount = 0;
    // ngFor="let itemInCart of itemsInCart"
    // itemsInCart = [{item},{item},{title: "", price: 10}]
    // itemInCart = {item}
    // itemInCart = {title: "", price: 10}
    // itemInCart = {item}
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.cartItem.price * itemInCart.quantity;
      this.itemsCount += itemInCart.quantity;
    });
  }
}
