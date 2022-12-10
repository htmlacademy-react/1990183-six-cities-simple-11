import { Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../const';

import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App() {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Layout />}
      >
        <Route
          index
          element={<MainScreen />}
        />

        <Route
          path={AppRoute.Offer}
          element={<RoomScreen />}
        />

        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />

        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Route>
    </Routes>
  );
}

export default App;
