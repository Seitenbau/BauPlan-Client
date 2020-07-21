/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import root app
import UiEventProvider from 'containers/UiEventProvider';
// Import all the third party stuff
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
// Import CSS reset and Global Styles
import 'sanitize.css';
import { ThemeProvider } from 'styled-components';

import configureStore from './configureStore';
import UserInfoPanel from './containers/UserInfoPanel';
import View from './containers/View';
import './global-styles';
import theme from './settings/theme.json';

// Create redux store with history
const initialState = {};

const MOUNT_NODE = document.getElementById('root');

function App() {
  let history = useHistory();
  const store = configureStore(initialState, history);

  return (
    <Provider store={store}>
      <UiEventProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Route path="/">
              <View />
              <Route path="/table/:name">
                <ReactCSSTransitionGroup
                  transitionAppear={true}
                  transitionName="userpanel"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <UserInfoPanel />
                </ReactCSSTransitionGroup>
              </Route>
            </Route>
          </Router>
        </ThemeProvider>
      </UiEventProvider>
    </Provider>
  );
}

const render = messages => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

export default render;
