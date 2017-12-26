/*
 *
 * JumpView reducer
 *
 */

import { fromJS } from 'immutable';
import { FLOOR_IN_VIEWPORT } from 'containers/Floor/constants';
import { REQUEST_PLANS_SUCCESS } from 'containers/Plans/constants';
import { DEFAULT_ACTION } from './constants';


const initialState = fromJS({
  'activePlanId' : 'F0',
});
initialState.set('plans', []);

function jumpViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FLOOR_IN_VIEWPORT:
      return state.set('activePlanId', action.props.id);
    case REQUEST_PLANS_SUCCESS:
      return state.set('plans', action.data);
    default:
      return state;
  }
}

export default jumpViewReducer;
