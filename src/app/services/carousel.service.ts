import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private images = [
    {
      url: "https://picsum.photos/id/700/900/500",
      header: "10 seconds between slides...",
      description: "This carousel uses customized default values.",
      alt: "Random first slide"
    }, {
      url: "https://picsum.photos/id/100/900/500",
      header: "11 seconds between slides...",
      description: "This carousel uses customized default values.",
      alt: "Random sec slide"
    }, {
      url: "https://picsum.photos/id/200/900/500",
      header: "12 seconds between slides...",
      description: "This carousel uses customized default values.",
      alt: "Random 3 slide"
    }, {
      url: "https://picsum.photos/id/500/900/500",
      header: "13 seconds between slides...",
      description: "This carousel uses customized default values.",
      alt: "Random 5 slide"
    }]

  constructor() { }

  getImages(): { url: string, header: string, description: string, alt: string }[] {
    return this.images.slice();
  }
}
