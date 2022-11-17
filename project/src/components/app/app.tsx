import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppRoute } from '../../const';

import { store } from '../../store';

import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen />
            }
          />

          <Route
            path={AppRoute.OfferItem}
            element={
              <RoomScreen />
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
