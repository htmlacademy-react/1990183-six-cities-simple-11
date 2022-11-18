import { FormEvent, useRef } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/user/api-actions';

import Header from '../../components/header/header';

function LoginScreen() {
  const authStatus = useAppSelector((state) => state.user.authStatus);

  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header hasNavigation={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">

            <h1 className="login__title">Sign in</h1>

            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>

              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>

          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
