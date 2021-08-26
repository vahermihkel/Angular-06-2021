import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
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
  isLoading = false;
  isLoggedIn = false;

  // constructori kaudu võtan Service-t kasutusele
  // läheb käima kompileerimisel
  constructor(private cartService: CartService,
    private itemService: ItemService,
    private authService: AuthService) { }

  // läheb käima siis kui kasutaja läheb selle componendi HTMLi peale
  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("userData") ? true : false;

    this.authService.loggedInChanged.subscribe(() => {
      this.isLoggedIn = sessionStorage.getItem("userData") ? true : false;
    });

    // this.items = this.itemService.getItems();
    this.isLoading = true;
    this.itemService.getItemsFromDatabase().subscribe((firebaseItems) => {
      this.isLoading = false;
      this.items = firebaseItems;
      this.itemService.saveToServiceFromDatabase(firebaseItems);
      console.log("siia jõuan hiljem");
    });
    console.log("siia jõuan varem");
  }

  onSortByTitleAsc() {
    this.items.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
  }

  onSortByTitleDesc() {
    this.items.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));
  }

  onSortByPriceAsc() {
    this.items.sort((currentItem, nextItem) => currentItem.price - nextItem.price);
  }

  onSortByPriceDesc() {
    this.items.sort((currentItem, nextItem) => nextItem.price - currentItem.price);
  }

  saveToDatabaseOnActiveChanged(item: Item) {
    console.log(item);
    this.itemService.saveItemsToDatebase().subscribe();
  }
}
