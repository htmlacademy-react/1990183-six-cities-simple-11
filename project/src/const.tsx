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

export enum ApiRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthStatus {
  Unknown = 'UNKNOWN',
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export enum SortType {
  Popular = 'popular',
  PriceToHigh = 'price-to-hight',
  PriceToLow = 'price-to-low',
  TopRated = 'top-rated',
}
