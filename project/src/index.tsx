import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { offers } from './mocks/offers';
import { allReviews } from './mocks/reviews';

import { store } from './store';

import App from './components/app/app';

const PLACE_CARD_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        roomCardCount={PLACE_CARD_COUNT}
        offers={offers}
        allReviews={allReviews}
      />
    </Provider>
  </React.StrictMode>,
);
