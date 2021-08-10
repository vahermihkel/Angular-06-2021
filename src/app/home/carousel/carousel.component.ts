import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselImage } from 'src/app/models/carousel-image.model';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: CarouselImage[] = []

  constructor(private config: NgbCarouselConfig,
    private carouselService: CarouselService) {
  }

  ngOnInit(): void {
    this.images = this.carouselService.getImages();
    this.config.interval = this.carouselService.interval;
    this.config.wrap = this.carouselService.wrap;
    this.config.keyboard = this.carouselService.keyboard;
    this.config.pauseOnHover = this.carouselService.pauseOnHover;
    if (this.images.length == 1) {
      this.config.showNavigationArrows = false;
      this.config.showNavigationIndicators = false;
    }
  }

}
