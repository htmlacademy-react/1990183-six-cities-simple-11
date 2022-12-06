import { useEffect, useMemo } from 'react';

import { Offer } from '../../types/offer';

import { CITIES } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { changeCity, setCurrentOffersEmptyStatus } from '../../store/offers/actions';
import { getCurrentCity, getSortedOffers } from '../../store/offers/selectors';

import LocationNavigation from '../location-navigation/location-navigation';
import CityContent from '../city-content/city-content';
import CityContentEmpty from '../city-content-empty/city-content-empty';

function MainScreenContent() {
  const currentCity = useAppSelector(getCurrentCity) as string;
  const sortedOffers = useAppSelector(getSortedOffers) as Offer[];

  const dispatch = useAppDispatch();

  const currentOffers = useMemo(
    () => sortedOffers.filter((offer) => offer.city.name === currentCity),
    [currentCity, sortedOffers]
  );

  const isOfferListEmpty = (currentOffers.length === 0);

  const handleLocationChange = (city: string) => {
    dispatch(changeCity(city));
  };

  useEffect(() => {
    isOfferListEmpty
      ? dispatch(setCurrentOffersEmptyStatus(true))
      : dispatch(setCurrentOffersEmptyStatus(false));
  }, [dispatch, isOfferListEmpty]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>

      <LocationNavigation
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
