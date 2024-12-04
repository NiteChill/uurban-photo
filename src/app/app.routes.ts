import { Routes } from '@angular/router';
import { UurbanAndFriends01Component } from './pages/uurban-and-friends-01/uurban-and-friends-01.component';
import { UurbanClub01Component } from './pages/uurban-club-01/uurban-club-01.component';

export const routes: Routes = [
  {
    path: 'UurbanAndFriends01',
    component: UurbanAndFriends01Component,
  },
  {
    path: 'UurbanClub01',
    component: UurbanClub01Component,
  },
  { path: '**', redirectTo: 'UurbanClub01', pathMatch: 'full' },
];
