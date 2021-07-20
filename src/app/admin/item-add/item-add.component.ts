import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form); //{valid: true, invalid: false, touched: true, untouched: false, value: {ngModeli name: sisestav väärtus, ngModeli name: sisestav väärtus}}
    console.log(form.value)
    if (form.valid) {
            // ngModel name=""
      // form.value = {imgSrc: vormi_sisestatud_väärtus, title: vormi_sisestaud_väärtus, ...}
      this.itemService.items.push(form.value);
    }
  }
}
