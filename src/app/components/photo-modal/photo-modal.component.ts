import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-modal',
  standalone: true,
  imports: [],
  templateUrl: './photo-modal.component.html',
  styleUrl: './photo-modal.component.scss'
})
export class PhotoModalComponent {
  @Input() imgPreview: string = '';
  @Output() close = new EventEmitter<boolean>();

  handleClick() {
    this.close.emit();
  }
}
