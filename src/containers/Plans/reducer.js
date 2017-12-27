/*
 *
 * Plans reducer
 *
 */

import { fromJS } from 'immutable';
import { FLOOR_IN_VIEWPORT } from 'containers/Floor/constants';
import {
  DEFAULT_ACTION,
  REQUEST_PLANS_SUCCESS,
  REQUEST_PLANS_ERROR,
  REQUEST_TABLE_DATA_SUCCESS,
  REQUEST_TABLE_DATA_ERROR,
  REQUEST_PROJECTS_DATA_SUCCESS,
  REQUEST_PROJECTS_DATA_ERROR,
} from './constants';


const initialState = fromJS({
  nextActiveFloor: false,
});
initialState.set('plans', []);
initialState.set('tables', []);
initialState.set('projects', []);

function plansReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_PLANS_SUCCESS:
      const newPlans = action.data.map((data) =>
        Object.assign({}, data, { scale: typeof data.scale !== 'undefined' ? data.scale : 1 }));
      return state.set('floors', newPlans);
    case REQUEST_PLANS_ERROR:
      return state;
    case REQUEST_TABLE_DATA_SUCCESS:
      return state.set('tables', action.data);
    case REQUEST_TABLE_DATA_ERROR:
      return state;
    case REQUEST_PROJECTS_DATA_SUCCESS:
      return state.set('projects', action.data);
    case REQUEST_PROJECTS_DATA_ERROR:
      return state;
    case FLOOR_IN_VIEWPORT:
      if(state.get('nextActiveFloor') !== action.props.id) {
        return state.set('nextActiveFloor', action.props.id);
      }
      return state;
    default:
      return state;
  }
}

export default plansReducer;
