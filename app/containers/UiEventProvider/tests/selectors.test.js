import { fromJS } from 'immutable';
import makeSelectUiEventProviderDomain from '../selectors';

const selector = makeSelectUiEventProviderDomain(fromJS({
  uiEvents: {
    test: 123,
  },
}));

describe('makeSelectUiEventProviderDomain', () => {
  it('Expect to have unit tesqts specified', () => {
    expect(selector()).haveProperty('test', 123);
  });
});
