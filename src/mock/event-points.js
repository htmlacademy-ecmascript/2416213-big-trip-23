import { getRandomInteger } from '../utils/common.js';
import { PriceValue, Minutes } from '../constants.js';

const getRandomDate = () => {
  const currentDate = new Date();
  const minutesToAdd = getRandomInteger(Minutes.MIN, Minutes.MAX);
  currentDate.setMinutes(currentDate.getMinutes() + minutesToAdd);
  return currentDate.toISOString();
};

const createEventPoint = (type, destinationId, offerIds) => ({
  id: crypto.randomUUID(),
  basePrice: getRandomInteger(PriceValue.MIN, PriceValue.MAX),
  dateFrom: new Date().toISOString(),
  dateTo: getRandomDate(),
  destination: destinationId,
  isFavorite: Math.random() > 0.5,
  offers: offerIds,
  type,
});

export { createEventPoint };
