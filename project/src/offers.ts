import { offers } from './mocks/offers';

export const getCities = () => {
  const cityNames = offers.map((offer) => offer.city.name);

  return [...new Set(cityNames)];
};

export const getOffersByCity = (city: string) =>
  offers.filter((offer) => (offer.city.name === city));
