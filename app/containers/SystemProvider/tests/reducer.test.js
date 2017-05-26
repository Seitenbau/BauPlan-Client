
import { fromJS } from 'immutable';
import systemProviderReducer from '../reducer';

describe('systemProviderReducer', () => {
  it('returns the initial state', () => {
    expect(systemProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
