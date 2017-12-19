/*
 *
 * SearchField actions
 *
 */

import {
  DEFAULT_ACTION,
  FOCUSED,
  BLUR,
  INPUT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function focus() {
  return {
    type: FOCUSED,
  };
}

export function blur() {
  return {
    type: BLUR,
  };
}

export function input(data) {
  return {
    type: INPUT,
    data,
  };
}
