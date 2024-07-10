import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPhotoComponent } from './components/card-photo/card-photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPhotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
}
