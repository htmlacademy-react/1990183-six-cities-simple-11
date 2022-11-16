import { offers } from './mocks/offers';

export const getCities = () => {
  const cities = offers.map((offer) => offer.city);

  return [...new Set(cities)];
};

export const getOffersByCityName = (cityName: string) =>
  offers.filter((offer) => (offer.city.name === cityName));
