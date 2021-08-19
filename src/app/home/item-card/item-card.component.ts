import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item!: Item;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(item: Item) {
    console.log(item);
    this.cartService.addToCart(item);
    this.cartService.cartChanged.next();
  }

  onItemActiveChange() {
    this.item.isActive = !this.item.isActive;
  }
}
