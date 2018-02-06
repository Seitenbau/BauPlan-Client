/*
 *
 * Table reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  active: ['table', 'tim'],
});

function TableReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOCATION_CHANGE: {
      console.log(action.payload.pathname.split('/').splice(1, 2));
      const t = action.payload.pathname.split('/').splice(1, 2);
      state.set('active', fromJS(t));
      console.log(state.get('active'));
      return state;
    }
    default:
      return state;
  }
}

export default TableReducer;
