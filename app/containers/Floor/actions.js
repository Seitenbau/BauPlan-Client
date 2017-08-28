import {
  FLOOR_RENDERED,
} from './constants';

export function floorRendered(data) {
  return {
    type: FLOOR_RENDERED,
    data,
  };
}
