import { Offer } from '../../types/offer';

import { RoomType, RoomTypeLabel } from '../../const';

import PremiumLabel from '../premium-label/premium-label';
import Rating from '../rating/rating';

type RoomHeaderProps = {
  offer: Offer;
};

function RoomHeader({offer}: RoomHeaderProps) {
  return (
    <>
      {offer.isPremium && <PremiumLabel cssClass="property__mark" />}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
      </div>

      <Rating
        value={offer.rating}
        wrapperCssClass='property__rating'
        starsCssClass='property__stars'
        valueCssClass='property__rating-value'
      />

      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {RoomTypeLabel[offer.type as RoomType]}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>

      <div className="property__price">
        <b className="property__price-value">&euro;{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

export default RoomHeader;
