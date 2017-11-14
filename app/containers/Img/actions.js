import {
  DISPATCH_CALCULATION,
} from './constants';

export function dispatchCalculation(data) {
  return {
    type: DISPATCH_CALCULATION,
    data,
  };
}
