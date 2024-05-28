import dayjs from 'dayjs';
import { TimeConstants } from './constants';

const createIdGenerator = (startFrom) => {
  let generatorId = startFrom;
  return function () {
    return ++generatorId;
  };
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function humanizeTaskDueDate(dueDate, dateFormat) {
  return dueDate && dateFormat ? dayjs(dueDate).format(dateFormat) : '';
}

const getEventDuration = (dateFrom, dateTo) => {
  const durationInMinutes = dayjs(dateTo).diff(dateFrom, 'm');

  const days = Math.floor(durationInMinutes / (TimeConstants.HOURS_PER_DAY * TimeConstants.MINUTES_PER_HOUR));
  const hours = Math.floor(
    (durationInMinutes % (TimeConstants.HOURS_PER_DAY * TimeConstants.MINUTES_PER_HOUR)) /
      TimeConstants.MINUTES_PER_HOUR
  );
  const minutes = durationInMinutes % TimeConstants.MINUTES_PER_HOUR;

  let durationString = '';

  if (days > 0) {
    durationString += `${days}D `;
  }

  if (hours > 0) {
    durationString += `${hours}H `;
  }

  if (minutes > 0 || (days === 0 && hours === 0)) {
    durationString += `${minutes}M `;
  }

  return durationString;
};

export { createIdGenerator, getRandomArrayElement, getRandomInteger, humanizeTaskDueDate, getEventDuration };
