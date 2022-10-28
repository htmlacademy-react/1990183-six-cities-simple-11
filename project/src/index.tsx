import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import { offers } from './mocks/offers';

const PLACE_CARD_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      roomCardCount={PLACE_CARD_COUNT}
      offers={offers}
    />
  </React.StrictMode>,
);
