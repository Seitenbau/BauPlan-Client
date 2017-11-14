/*
 *
 * ScrollListener reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  HIT_TOP_LINE,
} from './constants';

const initialState = fromJS({
  scrolls: [],
});

function scrollListenerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HIT_TOP_LINE:
      {
        const flatNames = state.get('scrolls').map((s) => s.name);
        if (flatNames.indexOf(action.data.name) === -1) {
          return state.set('scrolls', state.get('scrolls').push(action.data));
        }
        return state.set('scrolls', state.get('scrolls').map((scroll) => {
          if (scroll.name === action.data.name) {
            return action.data;
          }
          return scroll;
        }));
      }
    default:
      return state;
  }
}

export default scrollListenerReducer;
