import { matchRoutes, useLocation } from 'react-router-dom';

import { AppRoute } from '../../const';

const routes = Object.values(AppRoute).map((value) => ({path: value}));

function useCurrentRoute() {
  const location = useLocation();
  const currentMatchRoutes = matchRoutes(routes, location);

  if (currentMatchRoutes === null) {
    return null;
  }

  const matchRoute = currentMatchRoutes[0];
  const {route} = matchRoute;

  return route.path;
}

export default useCurrentRoute;
