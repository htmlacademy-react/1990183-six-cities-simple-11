import { Offer } from '../types/offer';
import { ROOM_IMAGE_URL, AVATAR_IMAGE_URL } from './const ';

export const offers: Offer[] = [
  {
    id: 1,
    type: 'apartment',
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    previewImage: `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    images: [
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    ],
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.470216,
        longitude: 4.995168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74&t=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    price: 120,
    rating: 4.8,
  },
  {
    id: 2,
    type: 'room',
    title: 'Wood and stone place',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    previewImage: `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    images: [
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    ],
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris',
    },
    goods: [
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74&t=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Pablo'
    },
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 2,
    price: 80,
    rating: 3.8,
  },
  {
    id: 3,
    type: 'house',
    title: 'Canal View Prinsengracht',
    description: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
    previewImage: `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    images: [
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    ],
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.270216,
        longitude: 4.695168,
        zoom: 10
      },
      name: 'Hamburg',
    },
    goods: [
      'Towels',
      'Baby seat',
      'Fridge',
      'Washing machine',
      'Dishwasher',
      'Cabel TV',
      'Wi-Fi',
    ],
    host: {
      avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74&t=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Pedro'
    },
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 3,
    price: 150,
    rating: 2.4,
  },
  {
    id: 4,
    type: 'hotel',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    previewImage: `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    images: [
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
      `${ROOM_IMAGE_URL}?w=260&h=200&t=${Math.random()}`,
    ],
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Cologne',
    },
    goods: [
      'Baby seat',
      'Fridge',
      'Dishwasher',
      'Cabel TV',
    ],
    host: {
      avatarUrl: `${AVATAR_IMAGE_URL}?w=74&h=74&t=${Math.random()}`,
      id: 5,
      isPro: false,
      name: 'Eric'
    },
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 4,
    price: 220,
    rating: 4.5,
  },
];

export const offersNearBy: Offer[] = offers.slice(0, 2);
