import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  // date = new Date;
  // protsent = 0.5;


  item!: Item;
  id!: string;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    // console.log(this.date);

    console.log(this.route);
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.paramMap);


    let urlId = this.route.snapshot.paramMap.get("itemId");

    if (urlId) {
      this.id = urlId;
      let itemFound = this.itemService.items.find(itemInService => itemInService.title == this.id);
      if (itemFound) {
        this.item = itemFound;
      }
    }


    console.log(this.id);

  }

}