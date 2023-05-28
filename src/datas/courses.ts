import { PodcastType } from 'components/podcasts/PodcastType';

export const podcasts: PodcastType[] = [
  {
    name: 'test title',
    categories: [
      {
        name: 'Communicating as a leader',
      },
    ],
    experts: [
      {
        company: 'Microsoft',
        firstName: 'Satya',
        lastName: 'Nadella',
        title: 'CEO',
      },
    ],
    image: {
      uri: 'https://placehold.co/800@2x.png',
    },
    link: '/courses/1',
    duration: 20 * 60,
  },
  {
    name: 'test2',
    categories: [
      {
        name: 'abc',
      },
    ],
    experts: [
      {
        company: 'Microsoft',
        firstName: 'Satya',
        lastName: 'Nadella',
        title: 'CEO',
      },
    ],
    image: {
      uri: 'https://placehold.co/800@2x.png',
    },
    link: '/courses/1',
    duration: 20 * 60,
  },
  {
    name: 'test3',
    categories: [
      {
        name: 'abc',
      },
    ],
    experts: [
      {
        company: 'Microsoft',
        firstName: 'Satya',
        lastName: 'Nadella',
        title: 'CEO',
      },
    ],
    image: {
      uri: 'https://placehold.co/800@2x.png',
    },
    link: '/courses/1',
    duration: 50,
  },
];
