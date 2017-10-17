/*
 *
 * ScrollAnchor reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  urlPath: '',
});

function scrollAnchorReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      return state.set('urlPath', payload.pathname);
    default:
      return state;
  }
}

export default scrollAnchorReducer;
