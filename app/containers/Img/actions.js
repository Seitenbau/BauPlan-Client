import {
  CALCULATION_DONE,
} from './constants';

export function calculationDone(data) {
  console.log('action');
  return {
    type: CALCULATION_DONE,
    data,
  };
}
