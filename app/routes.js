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
          import('containers/UiEventProvider/reducer'),
          import('containers/Plans/sagas'),
          import('containers/Table/reducer'),
          import('containers/Img/reducer'),
          import('containers/JumpView/reducer'),
          import('containers/ScrollAnchor/reducer'),
          import('containers/ScrollListener/reducer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, ViewReducer, PlansReducer, UiEventProviderReducer, PlansSaga, TableReducer, ImgReducer, JumpViewReducer, ScrollAnchorReducer, ScrollListenerReducer]) => {
          injectReducer('home', ViewReducer.default);
          injectReducer('plans', PlansReducer.default);
          injectReducer('uiEvents', UiEventProviderReducer.default);
          injectReducer('table', TableReducer.default);
          injectReducer('img', ImgReducer.default);
          injectReducer('jumpView', JumpViewReducer.default);
          injectReducer('scrollAnchor', ScrollAnchorReducer.default);
          injectReducer('scrollListener', ScrollListenerReducer.default);
          injectSagas(PlansSaga.default);
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
