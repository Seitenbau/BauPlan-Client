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


const initialState = fromJS({});
initialState.set('floors', []);
initialState.set('tables', []);
initialState.set('projects', []);

function plansReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_FLOORS_SUCCESS:
      const newFloors = action.data.map((data) =>
        Object.assign({}, data, { scale: typeof data.scale !== 'undefined' ? data.scale : 1 }));
      return state.set('floors', newFloors);
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
