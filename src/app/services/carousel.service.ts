import { Injectable } from '@angular/core';
import { CarouselImage } from '../models/carousel-image.model';

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

  interval = 5000;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;

  constructor() { }

  getImages(): { url: string, header: string, description: string, alt: string }[] {
    return this.images.slice();
  }

  addImage(image: CarouselImage) {
    this.images.push(image);
  }

  deleteImage(image: CarouselImage) {
    let index = this.images.indexOf(image);
    this.images.splice(index, 1);
  }
}
