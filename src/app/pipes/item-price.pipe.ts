import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemPrice'
})
export class ItemPricePipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('ee',
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    ).split(',').join(' ') + ' €';
  }

  // "Men Driving chameleon sun glasses"
  // .split("e") --- ["m", "n Driving cham", "l", "on sun glass", "s"]
  // .join("a") --- man Driving chamalaon on sunglassas
  // 123,123,321,123.99
    // .split(",") --- ["123", "123", "321", "123.99"]
    // 123 123 321 123.99
}
