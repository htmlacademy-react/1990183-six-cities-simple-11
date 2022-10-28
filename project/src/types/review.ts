import { OfferId } from './offer';
import { User } from './user';

export type Review = {
  id: number;
  date: string;
  rating: number;
  user: User;
  comment: string;
};

export type Reviews = {
  [key: OfferId]: Review[];
};
