import { FLOOR_IN_VIEWPORT } from './constants';

export function announceVisible(props, position) {
  return {
    type: FLOOR_IN_VIEWPORT,
    props: props,
    position: position
  };
}
