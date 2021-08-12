import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.css']
})
export class ItemsViewComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // this.items = this.itemService.getItems();
    this.itemService.getItemsFromDatabase().subscribe((firebaseItems) => {
      this.items = firebaseItems;
      this.itemService.saveToServiceFromDatabase(firebaseItems);
    });
  }

  onDeleteItem(item: Item) {
    // elemendi järjekorranumbri leidmine massiivist
    let index = this.itemService.getItemIndex(item);
    // elemendi kustutamine massiivist
    this.itemService.deleteItem(index).subscribe(() => {
      this.itemService.getItemsFromDatabase().subscribe((firebaseItems) => {
        this.items = firebaseItems;
        this.itemService.saveToServiceFromDatabase(firebaseItems);
      });
    });
    // this.items = this.itemService.getItems();
  }

  onSendItemsToDatabase() {
    this.itemService.saveItemsToDatebase().subscribe(() => {
      alert("lisatud");
    });
  }
}
