import { createIdGenerator, getRandomArrayElement, getRandomInteger } from '../utils.js';
import { START_ID_COUNTER, CITIES, EVENT_TYPES, PriceValue, Minutes } from '../constants.js';

const getEventPointId = createIdGenerator(START_ID_COUNTER);

const getRandomDate = () => {
  const currentDate = new Date();
  const minutesToAdd = getRandomInteger(Minutes.MIN, Minutes.MAX);
  currentDate.setMinutes(currentDate.getMinutes() + minutesToAdd);
  return currentDate.toISOString();
};

const createEventPoint = () => {
  const ID = getEventPointId();

  return {
    id: ID.toString(),
    basePrice: getRandomInteger(PriceValue.MIN, PriceValue.MAX),
    dateFrom: new Date().toISOString(),
    dateTo: getRandomDate(),
    destination: getRandomInteger(1, CITIES.length).toString(),
    isFavorite: Math.random() > 0.5,
    offers: ['1', '2'],
    type: getRandomArrayElement(EVENT_TYPES),
  };
};

const getEventPoints = () => Array.from({ length: EVENT_TYPES.length }, createEventPoint);

export { getEventPoints };
