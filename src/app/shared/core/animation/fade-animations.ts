import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const fadeAnimation: AnimationTriggerMetadata =  trigger('fadeAnimation', [
  state('void', style({ opacity: 0 })),
  transition('* <=> *', animate('150ms ease-out')),
]);
