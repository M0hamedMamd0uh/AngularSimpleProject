import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styles: ``,
})
export class SliderComponent {
  images: string[] = ['Images/img1.jpg', 'Images/img2.jpg', 'Images/img3.jpg'];
  currentIndex: number = 0;

  nextImg() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImg() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  autoPlayFun: any;

  autoPlay() {
    this.autoPlayFun = setInterval(() => {
      this.nextImg();
    }, 1000);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayFun);
  }
}
