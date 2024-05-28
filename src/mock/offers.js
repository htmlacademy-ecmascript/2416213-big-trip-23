import { createIdGenerator, getRandomArrayElement, getRandomInteger } from '../utils.js';
import { START_ID_COUNTER, EVENT_TYPES, PriceValue, OfferCount, OFFERS_TITLES } from '../constants.js';

const getOfferId = createIdGenerator(START_ID_COUNTER);

const createOffer = () => {
  const ID = getOfferId();

  return {
    id: ID.toString(),
    title: getRandomArrayElement(OFFERS_TITLES),
    price: getRandomInteger(PriceValue.MIN, PriceValue.MAX),
  };
};

const setupOffer = () => {
  const offersList = [];
  for (const type in EVENT_TYPES) {
    offersList.push({
      type: EVENT_TYPES[type],
      offers: Array.from({ length: getRandomInteger(OfferCount.MIN, OfferCount.MAX) }, createOffer),
    });
  }
  return offersList;
};

const offers = setupOffer();

export { offers };
