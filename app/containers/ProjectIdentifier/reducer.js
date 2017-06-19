/*
 *
 * SystemProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_PROJECTS_DATA_SUCCESS,
} from './constants';

const initialState = fromJS({});

function ProjectIdentifierReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_PROJECTS_DATA_SUCCESS:
      return state.set('projects', action.data);
    default:
      return state;
  }
}

export default ProjectIdentifierReducer;
