import { Component } from '@angular/core';
import { UurbanAndFriends01Component } from './pages/uurban-and-friends-01/uurban-and-friends-01.component';
import { UurbanClub01Component } from './pages/uurban-club-01/uurban-club-01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UurbanAndFriends01Component, UurbanClub01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myapp';
}
