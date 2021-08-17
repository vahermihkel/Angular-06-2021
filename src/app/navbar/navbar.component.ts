import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;

  constructor(private translate: TranslateService,
    private cartService: CartService) { }

  ngOnInit(): void {
    console.log("NAVBARI NGONIT LÄHEB KÄIMA");
    let lang = localStorage.getItem("language");
    if (lang) {
      this.translate.use(lang);
    } else {
      this.translate.use('ee');
      localStorage.setItem("language", 'ee');
    }

    this.cartService.cartChanged.subscribe(() => {
      this.calculateSumOfCart();
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

  calculateSumOfCart(): void {
    this.sumOfCart = 0;
    this.cartService.getItemsFromCart().forEach(item => {
      this.sumOfCart += item.price;
    })
  }
}
