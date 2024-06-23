const BASE_URL = 'https://23.objects.htmlacademy.pro/big-trip';
const AUTHORIZATION = 'Basic aB3ksS67wcl2sa3k';

const HEADER_DESTINATION_COUNT = 3;

const TimeConstants = {
  MINUTES_PER_DAY: 1440,
  MINUTES_PER_HOUR: 60,
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DateTimeFormats = {
  HEADER_DATE: 'D MMM',
  DATE: 'MMM D',
  TIME: 'HH:mm',
  DATE_TIME: 'DD/MM/YY HH:mm',
};

const SortTypes = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const EnabledSortType = {
  [SortTypes.DAY]: true,
  [SortTypes.EVENT]: false,
  [SortTypes.TIME]: true,
  [SortTypes.PRICE]: true,
  [SortTypes.OFFERS]: false,
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
  ADDING: 'ADDING',
};

const Methods = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const ServiceUrl = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations',
};

const EMPTY_POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'flight',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  ERROR: 'ERROR',
};

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
  ERROR: 'Failed to load latest route information',
};

export {
  BASE_URL,
  AUTHORIZATION,
  HEADER_DESTINATION_COUNT,
  EVENT_TYPES,
  TimeConstants,
  TimeLimit,
  DateTimeFormats,
  SortTypes,
  EnabledSortType,
  FilterType,
  Mode,
  Methods,
  ServiceUrl,
  EMPTY_POINT,
  UserAction,
  UpdateType,
  NoPointsTextType,
};
