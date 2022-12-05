import { FormEvent, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppRoute, AuthStatus } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { loginAction } from '../../store/user/api-actions';
import { getAuthStatus } from '../../store/user/selectors';

import RandomLocation from '../../components/random-location/random-location';

function LoginScreen() {
  const authStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (emailRef.current === null || passwordRef.current === null) {
      toast.error('All fields must be filled');
      return;
    }

    if (!/.+@.+\..+/.test(emailRef.current.value)) {
      toast.error('Email must be correct');
      return;
    }

    if (!/[\d]/.test(passwordRef.current.value)) {
      toast.error('Password must contain at least one number');
      return;
    }

    if (!/[A-Za-z]/.test(passwordRef.current.value)) {
      toast.error('Password must contain at least one letter');
      return;
    }

    dispatch(loginAction({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
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

      <RandomLocation />

    </div>
  );
}

export default LoginScreen;
