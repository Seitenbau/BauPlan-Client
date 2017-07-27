/*
 *
 * Plans reducer
 *
 */

import { Map, fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CALCULATION_DONE,
} from './constants';

const initialState = fromJS({
  scale: Map(),
});

function imgReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CALCULATION_DONE:
      return state.set('scale', state.get('scale').merge(Map([[action.data.key, action.data.scale]])));
    default:
      return state;
  }
}

export default imgReducer;
