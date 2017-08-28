
/*
 *
 * Plans reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FLOOR_RENDERED,
} from './constants';

const initialState = fromJS({
  name: '',
});

function floorReducer(state = initialState, action) {
  switch (action.type) {
    case FLOOR_RENDERED:
      return state.set('name');
    default:
      return state;
  }
}

export default floorReducer;
