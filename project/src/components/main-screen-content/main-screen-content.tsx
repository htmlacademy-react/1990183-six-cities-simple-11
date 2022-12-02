import { useMemo } from 'react';

import { Offer } from '../../types/offer';

import { CITIES } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { changeCity } from '../../store/offers/actions';
import { selectSortedOffers } from '../../store/selectors/select-sorted-offers';

import LocationNav from '../location-nav/location-nav';
import CityContent from '../city-content/city-content';
import CityContentEmpty from '../city-content-empty/city-content-empty';

function MainScreenContent() {
  const currentCity = useAppSelector((state) => state.offers.currentCity) as string;
  const sortedOffers = useAppSelector((state) => selectSortedOffers(state.offers)) as Offer[];

  const dispatch = useAppDispatch();

  const currentOffers = useMemo(
    () => sortedOffers.filter((offer) => offer.city.name === currentCity),
    [currentCity, sortedOffers]
  );

  const isOfferListEmpty = (currentOffers.length === 0);

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

      {
        isOfferListEmpty
          ? <CityContentEmpty city={currentCity} />
          : <CityContent offers={currentOffers} />
      }
    </>
  );
}

export default MainScreenContent;
