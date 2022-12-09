import { Offer } from '../../types/offer';

import { getOffer, getOffersNearBy, getReviews } from '../../store/offer/selectors';

import { useAppSelector } from '../../hooks';

import Gallery from '../gallery/gallery';
import Host from '../host/host';
import RoomHeader from '../room-header/room-header';
import RoomInside from '../room-inside/room-inside';
import RoomReviews from '../room-reviews/room-reviews';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';

const MAX_GALLERY_LENGTH = 6;

function RoomScreenContent() {
  const offer = useAppSelector(getOffer) as Offer;
  const offersNearBy = useAppSelector(getOffersNearBy);
  const reviews = useAppSelector(getReviews);

  return (
    <>
      <section className="property" data-testid="room-screen">
        <Gallery
          images={offer.images}
          alt={offer.title}
          maxLength={MAX_GALLERY_LENGTH}
        />

        <div className="property__container container">
          <div className="property__wrapper">
            <RoomHeader offer={offer} />
            <RoomInside goods={offer.goods} />
            <Host
              user={offer.host}
              description={offer.description}
            />
            <RoomReviews reviews={reviews} />
          </div>
        </div>

        <Map
          cssClass='property__map'
          center={offer.location}
          points={
            offersNearBy
              .map((offerNearBy) => offerNearBy.location)
              .concat(offer.location)
          }
          activePoint={offer.location}
        />
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>

          <OfferList
            cssClass="near-places__list"
            offers={offersNearBy}
          />
        </section>
      </div>
    </>
  );
}

export default RoomScreenContent;
