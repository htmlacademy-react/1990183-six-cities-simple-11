export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type AuthorizedUser = User & {
  email: string;
  token: string;
};
