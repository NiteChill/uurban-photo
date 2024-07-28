import { animate, style, transition, trigger } from '@angular/animations';

export const modalPhotoAnimation = trigger('modalPhotoAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: '90vw' }),
    animate(
      '0.3s cubic-bezier(0.7, 0, 0.8, 0.15)',
      style({ opacity: 1, width: '100vw' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, width: '100vw' }),
    animate(
      '0.3s cubic-bezier(0.7, 0, 0.8, 0.15)',
      style({ opacity: 0, width: '90vw' })
    ),
  ]),
]);
