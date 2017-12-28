/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import createHistory from 'history/createBrowserHistory';

// Import root app
import App from 'containers/App';
import UiEventProvider from 'containers/UiEventProvider';

import configureStore from './configureStore';

// Import CSS reset and Global Styles
import 'sanitize.css';
import './global-styles';
import theme from './settings/theme.json';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <UiEventProvider>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </ThemeProvider>
      </UiEventProvider>
    </Provider>,
    MOUNT_NODE
  );
};

export default render;
