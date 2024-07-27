import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';
import { NgFor } from '@angular/common';
import data from '../assets/datas/photos.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPhotoComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myapp';
  disabled = 'left';
  photos = JSON.parse(JSON.stringify(data));

  @ViewChild('slider') slider: ElementRef;

  checkScroll() {
    this.disabled =
      this.slider.nativeElement.scrollLeft === 0
        ? 'left'
        : this.slider.nativeElement.scrollWidth -
            this.slider.nativeElement.offsetWidth -
            this.slider.nativeElement.scrollLeft <
          50
        ? 'right'
        : '';
  }

  handleClick(direction: String) {
    this.slider.nativeElement.scrollTo({
      left:
        this.slider.nativeElement.scrollLeft +
        (direction === 'forward' ? 300 : -300),
      behavior: 'smooth',
    });
  }
}
