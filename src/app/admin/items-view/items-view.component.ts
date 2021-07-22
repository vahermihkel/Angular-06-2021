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
    this.items = this.itemService.items;
  }

  onDeleteItem(item: Item) {
    // elemendi järjekorranumbri leidmine massiivist
    let index = this.itemService.items.indexOf(item);
    // elemendi kustutamine massiivist
    this.itemService.items.splice(index, 1);
    this.items = this.itemService.items;
  }

}
