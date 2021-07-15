import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // iga klikiga HomeComponent sees oleva funktsiooniga onAddToCart()
  // lisan siia uue elemendi
  productsInCart: any[] = [];
  // võtan seda väärtust CartComponent sees ngOnInit() funktsioonis
  // pannes selle väärtuse üleval olevasse muutujasse

  constructor() { }
}
