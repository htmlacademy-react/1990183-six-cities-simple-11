import { Offer } from '../../types/offer';

import { useAppSelector } from '../../hooks';

import Gallery from '../gallery/gallery';
import Host from '../host/host';
import RoomHeader from '../room-header/room-header';
import RoomInside from '../room-inside/room-inside';
import RoomReviews from '../room-reviews/room-reviews';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';

function RoomScreenContent() {
  const offer = useAppSelector((state) => state.offer.offer) as Offer;
  const offersNearBy = useAppSelector((state) => state.offer.offersNearBy);
  const reviews = useAppSelector((state) => state.offer.reviews);

  return (
    <>
      <section className="property">
        <Gallery images={offer.images} alt={offer.title} />

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
          city={offer.city}
          points={offersNearBy.map((offerNearBy) => offerNearBy.location)}
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
