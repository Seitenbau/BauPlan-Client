/*
 *
 * JumpView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_FLOORS_SUCCESS,
} from 'containers/Plans/constants';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  plans: [],
});

function jumpViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_FLOORS_SUCCESS:
      return state.set('plans', action.data);
    default:
      return state;
  }
}

export default jumpViewReducer;
