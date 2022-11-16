import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { offers } from './mocks/offers';
import { allReviews } from './mocks/reviews';

import { store } from './store';

import App from './components/app/app';
import { fetchOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        allReviews={allReviews}
      />
    </Provider>
  </React.StrictMode>,
);
