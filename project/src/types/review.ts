import { OfferId } from './offer';
import { User } from './user';

export type Review = {
  id: OfferId;
  date: string;
  rating: number;
  user: User;
  comment: string;
};

export type AllReviews = {
  [key: OfferId]: Review[];
};
