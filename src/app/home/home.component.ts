import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Item } from '../models/item.model';
import { UniqueCategoryPipe } from '../pipes/unique-category.pipe';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  categories: string[] = [];
  isLoading = false;
  isLoggedIn = false;
  isPriceSortAsc = true;
  isTitleSortAsc = true;

  // constructori kaudu võtan Service-t kasutusele
  // läheb käima kompileerimisel
  constructor(private cartService: CartService,
    private itemService: ItemService,
    private authService: AuthService,
    private uniqueCategoryPipe: UniqueCategoryPipe) { }

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
      this.categories = this.uniqueCategoryPipe.transform(this.items);
    });
    console.log("siia jõuan varem");
  }

  onSortByTitle() {
    if (this.isTitleSortAsc) {
      this.items.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
      this.isTitleSortAsc = false;
    } else {
      this.items.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));
      this.isTitleSortAsc = true;
    }
  }

  onSortByPrice() {
    if (this.isPriceSortAsc) {
      this.items.sort((currentItem, nextItem) => currentItem.price - nextItem.price);
      this.isPriceSortAsc = false;
    } else {
      this.items.sort((currentItem, nextItem) => nextItem.price - currentItem.price);
      this.isPriceSortAsc = true;
    }
  }

  // onSortByTitleAsc() {
  //   this.items.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
  // }

  // onSortByTitleDesc() {
  //   this.items.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));
  // }

  // onSortByPriceAsc() {
  //   this.items.sort((currentItem, nextItem) => currentItem.price - nextItem.price);
  // }

  // onSortByPriceDesc() {
  //   this.items.sort((currentItem, nextItem) => nextItem.price - currentItem.price);
  // }

  onCategoryClick(category: string) {
    this.itemService.getItemsFromDatabase().subscribe((firebaseItems) => {
      this.isLoading = false;
      this.items = firebaseItems;
      this.itemService.saveToServiceFromDatabase(firebaseItems);
      if (category != 'all') {
        this.items = this.items.filter(item => item.category == category);
      }
    });
  }

  saveToDatabaseOnActiveChanged(item: Item) {
    console.log(item);
    this.itemService.saveItemsToDatebase().subscribe();
  }
}
