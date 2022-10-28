import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { AllReviews } from '../../types/review';

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
              offer={props.offers[0]}
              reviews={props.allReviews[1]}
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
  );
}

export default App;
