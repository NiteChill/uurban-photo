import { animate, style, transition, trigger } from '@angular/animations';

export const modalPhotoAnimation = trigger('modalPhotoAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: '90vw' }),
    animate(
      '0.2s cubic-bezier(0, 0, 0.2, 1)',
      style({ opacity: 1, width: '100vw' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, width: '100vw' }),
    animate(
      '0.2s cubic-bezier(0, 0, 0.2, 1)',
      style({ opacity: 0, width: '90vw' })
    ),
  ]),
]);
