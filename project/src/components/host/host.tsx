import { User } from '../../types/user';
import { OfferDescription } from '../../types/offer';

type HostProps = {
  user: User;
  description: OfferDescription;
};

function Host({user, description}: HostProps) {
  return (
    <div className="property__host" data-testid="host">
      <h2 className="property__host-title">Meet the host</h2>

      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="property__avatar user__avatar"
            src={user.avatarUrl}
            width="74" height="74"
            alt="Host avatar"
          />
        </div>

        <span className="property__user-name">
          {user.name}
        </span>

        {user.isPro && <span className="property__user-status">Pro</span>}
      </div>

      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Host;
