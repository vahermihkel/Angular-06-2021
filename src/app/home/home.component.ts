import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product = "Testtoode";
  productPrice = 1;
  product2 = "Testtoode2";
  productPrice2 = 10;
  product3 = "Testtoode3";
  productPrice3 = 10;
  // kõige kehvem variant, sest muutujad
  // ei ole omavahel seotud
  // ja nad ei ole dünaamilised


  list = ["asda", "adas", "3", "asda", "321"];
  listPrices = [12, 42, 12, 43, 123]
  // dünaamilisus on olemas, sest saan väärtust muuda
  // - saan kasutajapoolt lisada tooteid juurde ja
  // vähemaks võtta

  // array - kandilisest sulust kandilise suluni, elemendid komadega eristatud
  object = { voti: "väärtus" }

  object1 = { title: "Testtoode1", price: 1 }
  object2 = { title: "Testtoode2", price: 10 }
  object3 = { title: "Testtoode3", price: 10 }
  // sidus kokku erinevad väärtused ühte objekti

  objectArray = [
    { title: "asda", price: 12 },
    { title: "adas", price: 42 },
    { title: "3", price: 12 },
    { title: "asda", price: 43 },
    { title: "asda", price: 43 }
  ]
  // väärtused on kokku seotud objektide sisse
  // objektide on massiiviks tehtud ehk võimaldab
  // dünaamilist lisamist ja kustutamist

  constructor() { }

  ngOnInit(): void {
  }

}
