/*
 *
 * UiEventProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  WINDOW_LIFE_RESIZE,
} from './constants';

const initialState = fromJS({
  'width-height': '0-0',
});

function uiEventProviderReducer(state = initialState, action) {
  switch (action.type) {
    case WINDOW_LIFE_RESIZE:
      // we only need to know whether the window size has changed or not
      return state.set('width-height', `${action.data.width}-${action.data.height}`);
    default:
      return state;
  }
}

export default uiEventProviderReducer;
