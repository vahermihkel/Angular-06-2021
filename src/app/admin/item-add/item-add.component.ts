import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  // items: any[] = [{title: "sunglass", category: "sunglasses"},{},{}];
  categories: string[] = [];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();

    // let cat = this.categoryService.getCategoriesWithoutSlice();
    // cat.sort((a, b) => a.localeCompare(b));
    // console.log(cat);
    // console.log(this.categoryService.getCategoriesWithoutSlice());

    // console.log();

    // let cat2 = this.categoryService.getCategories();
    // cat2.sort((a, b) => a.localeCompare(b));
    // console.log(cat2);
    // console.log(this.categoryService.getCategories());
  }

  onSubmit(form: NgForm) {
    console.log(form); //{valid: true, invalid: false, touched: true, untouched: false, value: {ngModeli name: sisestav väärtus, ngModeli name: sisestav väärtus}}
    console.log(form.value)
    if (form.valid) {
      // ngModel name=""
      // form.value = {imgSrc: vormi_sisestatud_väärtus, title: vormi_sisestaud_väärtus, ...}
      // this.itemService.items.push(form.value);
      this.itemService.addItem(form.value);
      form.reset();
    }
  }
}
