import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  @Input() url!: string; // default väärtus ""
  @Input() showWarning!: boolean; // default väärtus false
  // number default väärtus 0
  // Objecti default väärtus undefined

  constructor() { }

  ngOnInit(): void {
  }

}
