/*
 *
 * ScrollListener actions
 *
 */

import {
  DEFAULT_ACTION,
  HIT_TOP_LINE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function hitTopLine(data) {
  return {
    type: HIT_TOP_LINE,
    data,
  };
}
