import { animate, style, transition, trigger } from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10%)' }),
    animate('0.5s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
