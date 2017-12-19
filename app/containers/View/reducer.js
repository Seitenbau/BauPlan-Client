/*
 *
 * Floors reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,

} from './constants';

const initialState = fromJS({
  logedin: false,
});

function ViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_SUCCESS:
      return state.set('logedin', true);
    case LOGOUT_SUCCESS:
      return state.set('logedin', false);
    default:
      return state;
  }
}

export default ViewReducer;
