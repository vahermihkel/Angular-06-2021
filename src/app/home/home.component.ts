import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  // constructori kaudu võtan Service-t kasutusele
  // läheb käima kompileerimisel
  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  // läheb käima siis kui kasutaja läheb selle componendi HTMLi peale
  ngOnInit(): void {
    this.items = this.itemService.items;
  }

  onAddToCart(item: Item) {
    console.log(item);
    this.cartService.productsInCart.push(item);
  }

}
