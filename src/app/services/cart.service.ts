import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // iga klikiga HomeComponent sees oleva funktsiooniga onAddToCart()
  // lisan siia uue elemendi
  // {cartItem: {title: string, price:number}, quantity: number}
  private productsInCart: { cartItem: Item, quantity: number }[] = [];
  // võtan seda väärtust CartComponent sees ngOnInit() funktsioonis
  // pannes selle väärtuse üleval olevasse muutujasse
  cartChanged = new Subject();

  constructor() { }

  // this.cartService.productsInCart.push(item);
  // this.cartService.addToCart(item);
  addToCart(item: Item): void {
    let cartItem = this.productsInCart.find(productInCart => productInCart.cartItem.title == item.title);
    if (cartItem) {
      // cartItem.quantity = cartItem.quantity + 1;
      // cartItem.quantity += 1;
      // cartItem.quantity++;
      cartItem.quantity++;
    } else {
      this.productsInCart.push({ cartItem: item, quantity: 1 });
    }
  }

  // = this.cartService.productsInCart
  // = this.cartService.getItemsFromCart();
  getItemsFromCart(): { cartItem: Item, quantity: number }[] {
    return this.productsInCart.slice();
  }

  // this.cartService.productsInCart.splice(index,1);
  // this.cartService.deleteOneFromCart(index);
  deleteOneFromCart(index: number): void {
    this.productsInCart.splice(index, 1);
  }

  // this.cartService.productsInCart = [];
  // this.cartService.deleteAllFromCart();
  deleteAllFromCart(): void {
    this.productsInCart = [];
  }
}
