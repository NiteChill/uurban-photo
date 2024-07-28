import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';
import { NgFor, NgIf } from '@angular/common';
import data from '../assets/datas/photos.json';
import { cardAnimation } from './cardAnimation';
import { buttonAnimation } from './buttonAnimation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPhotoComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [cardAnimation, buttonAnimation],
})
export class AppComponent {
  title = 'myapp';
  disabled = 'left';
  photos = JSON.parse(JSON.stringify(data));
  limit = 10;
  displayImg = -1;

  timer = setInterval(this.updateTimer.bind(this), 200);

  private updateTimer() {
    this.displayImg <= this.limit - 1
      ? this.displayImg++
      : (clearInterval(this.timer), this.displayImg = this.photos.length);
  }

  @ViewChild('slider') slider: ElementRef;
  @ViewChild('cardPhoto') cardPhoto: ElementRef;

  checkScroll() {
    if (this.slider.nativeElement.scrollLeft === 0) {
      this.disabled = 'left';
    } else if (
      this.slider.nativeElement.scrollWidth -
        this.slider.nativeElement.offsetWidth -
        this.slider.nativeElement.scrollLeft <
      50
    ) {
      if (this.limit < this.photos.length) {
        this.loadMore();
      } else {
        this.disabled = 'right';
      }
    } else {
      this.disabled = '';
    }
  }

  handleClick(direction: String) {
    const scrollValue =
      (this.slider.nativeElement.scrollWidth - 0.13 * window.innerWidth) /
      this.limit;
    this.slider.nativeElement.scrollTo({
      left:
        this.slider.nativeElement.scrollLeft +
        (direction === 'forward' ? scrollValue : -scrollValue),
      behavior: 'smooth',
    });
  }

  loadMore() {
    this.disabled = '';
    if (this.limit < this.photos.length) {
      this.limit =
        this.limit + 10 > this.photos.length
          ? this.photos.length
          : this.limit + 10;
    }
  }
}

// animation = counter ++ every sec or so
// counter = number of displayed card with ngif
// animation when displayed so stair like animation cuz delay between each card
// animation : https://angular.love/en/controlling-angular-animations-programmatically
