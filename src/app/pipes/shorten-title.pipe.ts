import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(title: string, wordCount?: number): string {
    if (!wordCount) {
      wordCount = 3;
    }
    return title.split(" ").slice(0, wordCount).join(" ");
  }

  // Elas metsas mutionu, keset kuuski
  // .split(" ")
  // ["Elas", "metsas", "mutionu,", "keset", "kuuski"]
  // .slice(1,3)
  // ["metsas", "mutionu,"]
  // .join("::")
  // metsas::mutionu
}
