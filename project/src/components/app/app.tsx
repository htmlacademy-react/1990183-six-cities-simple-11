import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppRoute } from '../../const';

import { Offer } from '../../types/offer';
import { AllReviews } from '../../types/review';

import { store } from '../../store';

import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppProps = {
  roomCardCount: number;
  offers: Offer[];
  allReviews: AllReviews;
};

function App(props: AppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen
                roomCardCount={props.roomCardCount}
                offers={props.offers}
              />
            }
          />

          <Route
            path={AppRoute.OfferItem}
            element={
              <RoomScreen
                offers={props.offers}
                allReviews={props.allReviews}
              />
            }
          />

          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />

          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
