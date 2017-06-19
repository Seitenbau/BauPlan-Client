/*
 *
 * Plans reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_FLOORS_SUCCESS,
  REQUEST_FLOORS_ERROR,
  REQUEST_TABLE_DATA_SUCCESS,
  REQUEST_TABLE_DATA_ERROR,
  REQUEST_PROJECTS_DATA_SUCCESS,
  REQUEST_PROJECTS_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  plans: [],
});

function plansReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_FLOORS_SUCCESS:
      return state.set('plans', fromJS(action.data));
    case REQUEST_FLOORS_ERROR:
      return state;
    case REQUEST_TABLE_DATA_SUCCESS:
      return state.set('tables', action.data);
    case REQUEST_TABLE_DATA_ERROR:
      return state;
    case REQUEST_PROJECTS_DATA_SUCCESS:
      return state.set('projects', action.data);
    case REQUEST_PROJECTS_DATA_ERROR:
      return state;
    default:
      return state;
  }
}

export default plansReducer;
