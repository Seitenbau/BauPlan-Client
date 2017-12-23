/*
 *
 * SearchField reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FOCUSED,
  BLUR,
  INPUT,
} from './constants';

const initialState = fromJS({
  focused: false,
  value: '',
});

function searchFieldReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FOCUSED:
      return state.set('focused', true);
    case BLUR:
      return state.set('focused', false);
    case INPUT:
      return state.set('value', action.data.value);
    default:
      return state;
  }
}

export default searchFieldReducer;
