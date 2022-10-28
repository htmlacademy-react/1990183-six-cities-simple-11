import { User } from './user';

export type OfferId = number;

export type OfferType = string;

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: Location;
  name: string;
};

export type Offer = {
  id: OfferId;
  type: OfferType;
  title: string;
  description: string;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  price: number;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  location: Location;
  city: City;
  host: User;
};
