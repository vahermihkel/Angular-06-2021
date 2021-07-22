import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // iga klikiga HomeComponent sees oleva funktsiooniga onAddToCart()
  // lisan siia uue elemendi
  productsInCart: Item[] = [];
  // võtan seda väärtust CartComponent sees ngOnInit() funktsioonis
  // pannes selle väärtuse üleval olevasse muutujasse

  constructor() { }
}
