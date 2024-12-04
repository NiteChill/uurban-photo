import { animate, style, transition, trigger } from '@angular/animations';

export const modalPhotoAnimation = trigger('modalPhotoAnimation', [
  transition(':enter', [
    style({ width: '0' }),
    animate(
      '0.2s cubic-bezier(0, 0, 0.3, 1)',
      style({ width: '100vw' })
    ),
  ]),
  transition(':leave', [
    style({ width: '100vw' }),
    animate(
      '0.2s cubic-bezier(0, 0, 0.3, 1)',
      style({ width: '0' })
    ),
  ]),
]);
