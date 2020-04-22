import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('is1 => *', slideTo('right')),
  transition('* => is1', slideTo('left')),
  transition('is2 => *', slideTo('right')),
  transition('* => is2', slideTo('left')),
  transition('is3 => *', slideTo('right')),
  transition('* => is3', slideTo('left')),
  transition('is4 => *', slideTo('right')),
  transition('* => is4', slideTo('left')),
  transition('is5 => *', slideTo('right')),
  transition('* => is5', slideTo('left')),
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'relative',
          top: 40,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}
