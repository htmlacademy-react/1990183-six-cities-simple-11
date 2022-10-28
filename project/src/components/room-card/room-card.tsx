import { Link } from 'react-router-dom';

import { getLabelByOfferType } from '../../utils';
import { Offer } from '../../types/offer';

import PremiumLabel from '../premium-label/premium-label';

type RoomCardProps = {
  offer: Offer;
};

function RoomCard({offer}: RoomCardProps) {
  return (
    <article className="cities__card place-card">
      {offer.isPremium && <PremiumLabel />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>

        <p className="place-card__type">
          {getLabelByOfferType(offer.type)}
        </p>
      </div>
    </article>
  );
}

export default RoomCard;
