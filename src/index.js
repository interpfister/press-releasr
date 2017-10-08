import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import ScrollToTop from './helpers/scroll-to-top';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <div className="container">
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
