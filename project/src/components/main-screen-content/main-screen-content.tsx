import { useMemo } from 'react';

import { Offer } from '../../types/offer';

import { CITIES } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { changeCity } from '../../store/offers/actions';

import LocationNav from '../location-nav/location-nav';
import CityContent from '../city-content/city-content';

function MainScreenContent() {
  const currentCity = useAppSelector((state) => state.offers.currentCity) as string;
  const offers = useAppSelector((state) => state.offers.sortedOffers) as Offer[];

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

      <CityContent offers={currentOffers} />
    </>
  );
}

export default MainScreenContent;
