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
  REQUEST_PROJECTS_DATA_ERROR
} from './constants';

const initialState = fromJS({
  nextActiveFloor: false,
  plans: [],
  tables: [],
  projects: []
});

function plansReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_PLANS_SUCCESS:
      // set default scale of 1 for plans without scale
      const plans = action.data.map(plan => {
        const scale = plan.get('scale') ? plan.get('scale') : 1;
        return plan.set('scale', scale);
      });
      return state.set('plans', plans);
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
      return state.set('activeScrolledToFloor', action.props.id);
    default:
      return state;
  }
}

export default plansReducer;
