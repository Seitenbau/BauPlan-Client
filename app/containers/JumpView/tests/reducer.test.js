
import { fromJS } from 'immutable';
import jumpViewReducer from '../reducer';

describe('jumpViewReducer', () => {
  it('returns the initial state', () => {
    expect(jumpViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
