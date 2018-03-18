/*
 *
 * SearchField reducer
 *
 */

import { fromJS } from 'immutable';
import { FOCUSED, BLUR, INPUT } from './constants';

function initialSearchValue() {
  const pathname = window.location.pathname;
  if (pathname.match('table')) {
    return pathname
      .replace('table', '')
      .replace(new RegExp('/', 'g'), '')
      .replace('%20', ' ');
  }
  return '';
}

const initialState = fromJS({
  focused: false,
  value: initialSearchValue()
});

function searchFieldReducer(state = initialState, action) {
  switch (action.type) {
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
