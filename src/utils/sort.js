import dayjs from 'dayjs';
import { SortTypes } from '../constants.js';

const sortByDate = (eventA, eventB) => dayjs(eventA.dateFrom).diff(dayjs(eventB.dateFrom));

const sortByPrice = (eventA, eventB) => eventB.basePrice - eventA.basePrice;

const sortByTime = (eventA, eventB) => {
  const eventADuration = dayjs(eventA.dateTo).diff(eventA.dateFrom);
  const eventBDuration = dayjs(eventB.dateTo).diff(eventB.dateFrom);

  return eventBDuration - eventADuration;
};

const sorting = {
  [SortTypes.DAY]: (points) => [...points].sort(sortByDate),
  [SortTypes.TIME]: (points) => [...points].sort(sortByTime),
  [SortTypes.PRICE]: (points) => [...points].sort(sortByPrice),
};

export { sorting };
