import { Offer } from '../../types/offer';

import { getActiveOffer } from '../../store/offers/selectors';

import { useAppDispatch, useAppSelector } from '../../hooks';

import OfferList from '../offer-list/offer-list';
import Sorting from '../sorting/sorting';
import Map from '../map/map';
import { useEffect } from 'react';
import { setActiveOffer } from '../../store/offers/actions';

type CityContentProps = {
  offers: Offer[];
};

function CityContent({offers}: CityContentProps) {
  const activeOffer = useAppSelector(getActiveOffer);
  const activeLocation = activeOffer?.location ?? null;

  const dispatch = useAppDispatch();

  const cityName = offers[0].city.name;

  useEffect(() => () => {
    dispatch(setActiveOffer(null));
  }, [dispatch]);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>

          <b className="places__found">
            {`${offers.length} places to stay in ${cityName}`}
          </b>

          <Sorting />

          <OfferList
            cssClass='cities__places-list tabs__content'
            offers={offers}
          />
        </section>

        <div className="cities__right-section">
          <Map
            cssClass="cities__map"
            center={offers[0].city.location}
            points={offers.map((offer) => offer.location)}
            activePoint={activeLocation}
          />
        </div>
      </div>
    </div>
  );
}

export default CityContent;
