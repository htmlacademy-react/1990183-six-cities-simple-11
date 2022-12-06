import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import browserHistory from '../../browser-history';

import { AppRoute } from '../../const';

import { store } from '../../store';

import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import HistoryRoute from '../history-route/history-route';
import DisconnectScreen from '../../pages/disconnect-screen/disconnect-screen';

function App() {
  return (
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
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
              path={AppRoute.Disconnect}
              element={<DisconnectScreen />}
            />

            <Route
              path={AppRoute.NotFound}
              element={<NotFoundScreen />}
            />
          </Route>
        </Routes>
      </HistoryRoute>
    </Provider>
  );
}

export default App;
