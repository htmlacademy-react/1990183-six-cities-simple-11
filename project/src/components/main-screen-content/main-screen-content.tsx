import { useMemo } from 'react';

import { Offer } from '../../types/offer';

import { CITIES } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { changeCity } from '../../store/offers/actions';

import LocationNav from '../location-nav/location-nav';
import OfferList from '../offer-list/offer-list';
import Sorting from '../sorting/sorting';
import Map from '../map/map';

function MainScreenContent() {
  const currentCity = useAppSelector((state) => state.offers.currentCity) as string;
  const offers = useAppSelector((state) => state.offers.sortedOffers) as Offer[];
  const activeOffer = useAppSelector((state) => state.offers.activeOffer);
  const activeLocation = activeOffer?.location ?? null;

  const dispatch = useAppDispatch();

  const currentOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === currentCity),
    [currentCity, offers]
  );

  const handleLocationChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>

      <LocationNav
        locations={CITIES}
        currentLocation={currentCity}
        onLocationChange={handleLocationChange}
      />

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>

            <b className="places__found">
              {`${currentOffers.length} places to stay in ${currentCity}`}
            </b>

            <Sorting />

            <OfferList
              cssClass='cities__places-list tabs__content'
              offers={currentOffers}
            />
          </section>

          <div className="cities__right-section">
            <Map
              cssClass="cities__map"
              center={currentOffers[0].city.location}
              points={currentOffers.map((offer) => offer.location)}
              activePoint={activeLocation}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreenContent;
