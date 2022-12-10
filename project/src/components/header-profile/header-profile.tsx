import { getUser } from '../../store/user/selectors';

import { useAppSelector } from '../../hooks';

function HeaderProfile() {
  const user = useAppSelector(getUser);

  if (user === null) {
    return null;
  }

  return (
    <li className="header__nav-item user">
      <div className="header__nav-profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img
            className="user__avatar"
            src={user.avatarUrl}
            width="20"
            height="20"
            alt={user.name}
          />
        </div>
        <span className="header__user-name user__name">
          {user.email}
        </span>
      </div>
    </li>
  );
}

export default HeaderProfile;
