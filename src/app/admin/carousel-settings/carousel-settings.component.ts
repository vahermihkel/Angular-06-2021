import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CarouselImage } from 'src/app/models/carousel-image.model';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel-settings',
  templateUrl: './carousel-settings.component.html',
  styleUrls: ['./carousel-settings.component.css']
})
export class CarouselSettingsComponent implements OnInit {
  carouselImages: CarouselImage[] = [];
  carouselConfigForm!: FormGroup;

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselImages = this.carouselService.getImages();
    this.carouselConfigForm = new FormGroup({
      interval: new FormControl(this.carouselService.interval),
      wrap: new FormControl(this.carouselService.wrap),
      keyboard: new FormControl(this.carouselService.keyboard),
      pauseOnHover: new FormControl(this.carouselService.pauseOnHover)
    });
  }

  onSubmitConfig() {
    this.carouselService.interval = this.carouselConfigForm.value.interval;
    this.carouselService.wrap = this.carouselConfigForm.value.wrap;
    this.carouselService.keyboard = this.carouselConfigForm.value.keyboard;
    this.carouselService.pauseOnHover = this.carouselConfigForm.value.pauseOnHover;
  }

  onSubmitImage(form: NgForm) {
    this.carouselService.addImage(form.value);
    form.reset();
    this.carouselImages = this.carouselService.getImages();
  }

  onEditImage() {
    
  }

  onDeleteImage(image: CarouselImage) {
    this.carouselService.deleteImage(image);
    this.carouselImages = this.carouselService.getImages();
  }

  onChangeImage(image: CarouselImage) {
    image.isEditState = !image.isEditState;
  }
}
