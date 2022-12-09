import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { store } from './store';
import { checkAuthAction } from './store/user/api-actions';

import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRoute from './components/history-route/history-route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
        <App />
        <ToastContainer />
      </HistoryRoute>
    </Provider>
  </React.StrictMode>,
);
