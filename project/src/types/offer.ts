import { User } from './user';

export type OfferId = number;
export type OfferType = string;
export type OfferGallery = string[];
export type OfferGoods = string[];

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
  images: OfferGallery;
  isPremium: boolean;
  price: number;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: OfferGoods;
  location: Location;
  city: City;
  host: User;
};
