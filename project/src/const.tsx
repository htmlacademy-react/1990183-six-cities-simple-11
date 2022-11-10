export enum AppRoute {
  Root = '/',
  Login = '/login',
  OfferItem = '/offer/:id',
  NotFound = '*',
}

export enum RoomType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export enum RoomTypeLabel {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
