import { generatePath, Link } from 'react-router-dom';
import { AppRoute, RoomType, RoomTypeLabel } from '../../const';

import { Offer } from '../../types/offer';

import PremiumLabel from '../premium-label/premium-label';
import Rating from '../rating/rating';

type RoomCardProps = {
  offer: Offer;
  onActiveSet: () => void;
  onActiveUnset: () => void;
};

function RoomCard(props: RoomCardProps) {
  const {offer, onActiveSet, onActiveUnset} = props;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onActiveSet}
      onMouseLeave={onActiveUnset}
    >
      {offer.isPremium && <PremiumLabel cssClass="place-card__mark" />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: String(offer.id)})}>
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

        <Rating
          value={offer.rating}
          wrapperCssClass='place-card__rating'
          starsCssClass='place-card__stars'
          valueCssClass={null}
        />

        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: String(offer.id)})}>
            {offer.title}
          </Link>
        </h2>

        <p className="place-card__type">
          {RoomTypeLabel[offer.type as RoomType]}
        </p>
      </div>
    </article>
  );
}

export default RoomCard;
