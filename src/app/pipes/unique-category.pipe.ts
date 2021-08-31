import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(items: Item[]): string[] {
    return items.map(item => item.category)
      .filter(
        (category,index,categories) => categories.indexOf(category) == index
        );
  }

  // .find - (item => true) ----- tagastab esimese millel on true
  // .map - (item => "uus väärtus") ----- asendab kõik parempoolsega
  // .filter - (item => true) ----- jätab alles kõik kellel on paremal true
  // .findIndex - (item => true) ----- tagastab esimese indeksi millel on true

  //[{title: "ese1", category: "beer",...},{title: "ese2", category: "beer",...},
  // {title: "ese3", category: "wine",...}, {title: "ese4", category: "beer",...},
  // {title: "ese5", category: "wine",...},{title: "ese6", category: "whiskey",...}]

  // ["beer","beer","wine","beer","wine","whiskey"]

  // .filter --- 
  //("beer",0,[massiiv])
  //("beer",1,[massiiv])
  //("wine",2,[massiiv])
  //("beer",3,[massiiv])
  //("wine",4,[massiiv])
  //("whiskey",5,[massiiv])

  // [massiiv].indexOf("beer") 0 ++
  // [massiiv].indexOf("beer") 0
  // [massiiv].indexOf("wine") 2 ++
  // [massiiv].indexOf("beer") 0
  // [massiiv].indexOf("wine") 2
  // [massiiv].indexOf("whiskey") 5 ++

}
