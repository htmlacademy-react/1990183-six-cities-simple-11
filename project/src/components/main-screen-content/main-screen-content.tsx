import { useEffect, useMemo } from 'react';

import { Offer } from '../../types/offer';

import { CITIES } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { changeCity } from '../../store/offers/actions';
import { updateLayout } from '../../store/layout/actions';

import LocationNav from '../location-nav/location-nav';
import CityContent from '../city-content/city-content';
import CityContentEmpty from '../city-content-empty/city-content-empty';

function MainScreenContent() {
  const currentCity = useAppSelector((state) => state.offers.currentCity) as string;
  const offers = useAppSelector((state) => state.offers.sortedOffers) as Offer[];

  const dispatch = useAppDispatch();

  const currentOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === currentCity),
    [currentCity, offers]
  );

  const isOfferListEmpty = (currentOffers.length === 0);

  // TODO: перенести эту логику в Layout
  useEffect(() => {
    if (isOfferListEmpty) {
      dispatch(updateLayout({
        hasHeaderNavigation: true,
        pageCssClass: 'page--gray page--main',
        mainCssClass: 'page__main--index page__main--index-empty',
      }));
    }
  }, [dispatch, isOfferListEmpty]);

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
