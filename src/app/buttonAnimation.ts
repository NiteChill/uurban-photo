import { animate, style, transition, trigger } from '@angular/animations';

export const buttonAnimation = trigger('buttonAnimation', [
  transition(':enter', [
    style({ scale: 0 }),
    animate(
      '0.3s cubic-bezier(0, 0, 0.2, 1)',
      style({ scale: 1 })
    ),
  ]),
]);
