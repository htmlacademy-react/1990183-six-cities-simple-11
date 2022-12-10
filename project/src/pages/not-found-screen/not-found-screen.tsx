import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';

import RandomLocation from '../../components/random-location/random-location';

function NotFoundScreen() {
  return (
    <div className="page__login-container container" data-testid="not-found-screen">
      <section className="login">
        <h1 className="login__title">Error 404</h1>
        <p>Page not found</p>
        <Link to={AppRoute.Root}>Back to home page</Link>
      </section>

      <RandomLocation />
    </div>
  );
}

export default NotFoundScreen;
