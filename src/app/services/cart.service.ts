import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // iga klikiga HomeComponent sees oleva funktsiooniga onAddToCart()
  // lisan siia uue elemendi
  private productsInCart: Item[] = [];
  // võtan seda väärtust CartComponent sees ngOnInit() funktsioonis
  // pannes selle väärtuse üleval olevasse muutujasse
  cartChanged = new Subject();

  constructor() { }

  // this.cartService.productsInCart.push(item);
  // this.cartService.addToCart(item);
  addToCart(item: Item): void {
    this.productsInCart.push(item);
  }

  // = this.cartService.productsInCart
  // = this.cartService.getItemsFromCart();
  getItemsFromCart(): Item[] {
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
