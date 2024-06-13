const ImageCount = {
  MIN: 0,
  MAX: 6,
};
const OfferCount = {
  MIN: 0,
  MAX: 3,
};
const PriceValue = {
  MIN: 10,
  MAX: 1000,
};
const Minutes = {
  MIN: 1,
  MAX: 2440,
};
const TimeConstants = {
  HOURS_PER_DAY: 24,
  MINUTES_PER_HOUR: 60,
};

const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
];

const CITIES = [
  'Paris',
  'Moscow',
  'London',
  'Tokio',
  'New York',
  'Berlin',
  'Amsterdam',
  'San-Francisco',
  'Chicago',
  'Toronto',
];

const OFFERS_TITLES = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];

const DateTimeFormats = {
  DATE: 'MMM D',
  TIME: 'HH:mm',
  DATE_TIME: 'DD/MM/YY HH:mm',
};

const SortTypes = [
  {
    type: 'day',
    isDisabled: false,
    isChecked: true,
  },
  {
    type: 'event',
    isDisabled: true,
    isChecked: false,
  },
  {
    type: 'time',
    isDisabled: false,
    isChecked: false,
  },
  {
    type: 'price',
    isDisabled: false,
    isChecked: false,
  },
  {
    type: 'offers',
    isDisabled: false,
    isChecked: false,
  },
];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export {
  EVENT_TYPES,
  DESCRIPTIONS,
  CITIES,
  ImageCount,
  OfferCount,
  PriceValue,
  TimeConstants,
  OFFERS_TITLES,
  Minutes,
  DateTimeFormats,
  SortTypes,
  FilterType,
  Mode,
};
