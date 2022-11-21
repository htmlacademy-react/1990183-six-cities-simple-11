import { MouseEvent } from 'react';

import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/user/api-actions';

function HeaderSignOut() {
  const dispatch = useAppDispatch();

  const handleSignOutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <a
        className="header__nav-link"
        href="#signout"
        onClick={handleSignOutClick}
      >
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default HeaderSignOut;
