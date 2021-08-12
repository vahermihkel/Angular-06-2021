import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id!: string;
  item!: Item;
  editItemForm!: FormGroup;
  categories: string[] = [];

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();

    let urlId = this.route.snapshot.paramMap.get("itemId"); // itemi nimetuse saan URLst kätte: Aluminium HD Polarized
    if (urlId) { // tahab kontrolli juhul kui ta ei saanud seda kätte, siis hüppab üle
      this.id = urlId; // panen klassimuutujasse saadud ID
      let itemFound = this.itemService.getItem(this.id) // otsin üles service-st id alusel
      if (itemFound) { // kui leidis service-st
        this.item = itemFound; // täida item sellega mis leidsid
      }
    }
    this.editItemForm = new FormGroup({
      imgSrc: new FormControl(this.item.imgSrc),
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category)
    });
  }

  onSubmit() {
    if (this.editItemForm.valid) {
      let itemIndex = this.itemService.getItemIndex(this.item);
      // this.itemService.items.findIndex(item => item.title == this.id);
      this.itemService.editItem(itemIndex, this.editItemForm.value).subscribe(() => {
        this.router.navigateByUrl("/admin/vaata-esemeid");
      });
    }
  }

}
