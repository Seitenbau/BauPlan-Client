// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/*',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/View'),
          import('containers/View/reducer'),
          import('containers/Plans/reducer'),
          import('containers/Plans/sagas'),
          import('containers/Table/reducer'),
          import('containers/JumpView/reducer'),
          import('containers/SearchField/reducer'),
          import('containers/SearchField/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, ViewReducer, PlansReducer, PlansSaga, TableReducer, JumpViewReducer, SearchFieldReducer, SearchFieldSagas]) => {
          injectReducer('view', ViewReducer.default);
          injectReducer('plans', PlansReducer.default);
          injectReducer('table', TableReducer.default);
          injectReducer('jumpView', JumpViewReducer.default);
          injectReducer('searchField', SearchFieldReducer.default);
          injectSagas(PlansSaga.default);
          injectSagas(SearchFieldSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
