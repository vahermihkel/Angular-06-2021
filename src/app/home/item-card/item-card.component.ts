import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item!: Item;
  @Output() activeChangedEvent = new EventEmitter();
  @Input() isLoggedIn = false; // home-s saadate isLoggedIn siia
  // htmls panete ngIf külge "aktiivseks/mittaktiivseks nupule"

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onAddToCart(item: Item) {
    console.log(item);
    this.cartService.addToCart(item);
    this.cartService.cartChanged.next();
  }

  onItemActiveChange() {
    this.item.isActive = !this.item.isActive;
    this.itemService.saveItemsToDatebase().subscribe();
    this.activeChangedEvent.emit(this.item);
  }
}
