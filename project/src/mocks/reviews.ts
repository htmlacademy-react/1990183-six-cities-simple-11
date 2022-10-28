import { AVATAR_IMAGE_URL } from './const ';
import { Reviews } from '../types/review';

export const reviews: Reviews = {
  1: [
    {
      id: 1,
      date: '2022-09-10T04:29:38.870Z',
      rating: 4,
      user: {
        id: 1,
        name: 'Oliver.conner',
        isPro: false,
        avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74`,
      },
      comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    },
    {
      id: 2,
      date: '2022-10-11T08:33:38.870Z',
      rating: 2.2,
      user: {
        id: 2,
        name: 'Joey Tribbiani',
        isPro: true,
        avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74`,
      },
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 3,
      date: '2022-10-12T10:33:38.870Z',
      rating: 4.5,
      user: {
        id: 3,
        name: 'Ross Geller',
        isPro: false,
        avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74`,
      },
      comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ],

  2: [
    {
      id: 1,
      date: '2022-10-28T04:29:38.870Z',
      rating: 4,
      user: {
        id: 4,
        name: 'Chandler Bing',
        isPro: false,
        avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74`,
      },
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ],

  3: [
    {
      id: 1,
      date: '2022-10-15T04:29:38.870Z',
      rating: 3.3,
      user: {
        id: 5,
        name: 'Rachel Green',
        isPro: true,
        avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74`,
      },
      comment: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    },
    {
      id: 2,
      date: '2022-10-17T04:29:38.870Z',
      rating: 4.1,
      user: {
        id: 6,
        name: 'Phoebe Buffay',
        isPro: false,
        avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74`,
      },
      comment: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
  ],

  4: [],
};
