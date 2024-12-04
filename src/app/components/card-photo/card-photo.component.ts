import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  standalone: true,
  imports: [],
  templateUrl: './card-photo.component.html',
  styleUrl: './card-photo.component.scss',
})
export class CardPhotoComponent {
  @Input() src: string = '';
  @Input() author: string = '';
  @Input() label: string = 'U&F #01';
  @Output() imageClick = new EventEmitter();

  handleClick() {
    this.imageClick.emit();
  }
}
