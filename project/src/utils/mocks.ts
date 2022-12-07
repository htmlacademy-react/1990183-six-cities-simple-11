import { address, datatype, date, image, internet, lorem, name } from 'faker';

import { City, Location, Offer, OfferGallery, OfferGoods } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizedUser, User } from '../types/user';

export const createFakeUser = (): User => ({
  id: datatype.number(),
  name: name.findName(),
  avatarUrl: image.avatar(),
  isPro: datatype.boolean(),
});

export const createFakeAuthorizedUser = (): AuthorizedUser => ({
  ...createFakeUser(),
  email: internet.email(),
  token: internet.password(),
});

export const createFakeLocation = (): Location => ({
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude()),
  zoom: datatype.number({min: 1, max: 15}),
});

export const createFakeCity = (): City => ({
  location: createFakeLocation(),
  name: address.cityName(),
});

export const createFakeGallery = (): OfferGallery =>
  Array.from({length: 6}, () => image.abstract());

export const createFakeGoods = (): OfferGoods =>
  Array.from({length: 8}, () => lorem.word());

export const createFakeOffer = (): Offer => ({
  id: datatype.number({min: 0, max: 1000}),
  type: lorem.word(),
  title: lorem.sentence(),
  description: lorem.paragraph(),
  previewImage: image.abstract(),
  images: createFakeGallery(),
  isPremium: datatype.boolean(),
  price: datatype.number({min: 100, max: 2000}),
  rating: datatype.number({min: 0, max: 5, precision: 0.1}),
  bedrooms: datatype.number({min: 1, max: 3}),
  maxAdults: datatype.number({min: 1, max: 6}),
  goods: createFakeGoods(),
  location: createFakeLocation(),
  city: createFakeCity(),
  host: createFakeUser(),
});

export const createFakeOffers = (): Offer[] =>
  Array.from({length: 20}, createFakeOffer);

export const createFakeOffersNearBy = (): Offer[] =>
  Array.from({length: 3}, createFakeOffer);

export const createFakeReview = (): Review => ({
  id: datatype.number(),
  date: String(date.past()),
  rating: datatype.number({min: 0, max: 5, precision: 0.1}),
  user: createFakeUser(),
  comment: lorem.paragraph(),
});

export const createFakeReviews = (): Review[] =>
  Array.from({length: 3}, createFakeReview);
