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

  // private productsInCart: Item[] = [];
  // private productsInCart: { imgSrc: string, title: string, price: number, category: string }[] = [];
  // private productsInCart: { cartItem: { imgSrc: string, title: string, price: number, category: string }, quantity: number }[] = [];

  private productsInCart: { cartItem: Item, quantity: number }[] = [{ cartItem: { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/~0YAAOSwXKNdOCNY/s-l225.webp", "title": "Aluminium HD Polarized Photochromic Sunglasses Men Driving Chameleon Sun Glasses", "price": 11.99, "category": "sunglasses", isActive: true }, quantity: 6 }];
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
  deleteOneFromCart(item: { cartItem: Item, quantity: number }): void {
    let index = this.productsInCart.indexOf(item);
    if (index != -1) {
      if (this.productsInCart[index].quantity == 1) {
        this.deleteItemFromCart(index);
      } else {
        this.productsInCart[index].quantity--;
      }
    }
  }

  deleteItemFromCart(index: number): void {
    this.productsInCart.splice(index, 1);
  }

  // this.cartService.productsInCart = [];
  // this.cartService.deleteAllFromCart();
  deleteAllFromCart(): void {
    this.productsInCart = [];
  }
}
