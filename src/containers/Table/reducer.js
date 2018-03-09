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
  active: [],
});

function TableReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOCATION_CHANGE: {
      const t = action.payload.pathname.split('/').splice(1, 2);
      return state.set('active', fromJS(t));
    }
    default:
      return state;
  }
}

export default TableReducer;
