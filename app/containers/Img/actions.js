import {
  CALCULATION_DONE,
} from './constants';

export function calculationDone(data) {
  return {
    type: CALCULATION_DONE,
    data,
  };
}
