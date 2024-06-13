import dayjs from 'dayjs';
import { TimeConstants } from '../constants';

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

const isPastDate = (dueDate) => {
  const currentDate = dayjs();
  const targetDate = dayjs(dueDate);
  return targetDate.isBefore(currentDate);
};

const isPresentDate = (dueDate) => {
  const currentDate = dayjs();
  const targetDate = dayjs(dueDate);
  return targetDate.isSame(currentDate, 'day');
};

const isFutureDate = (dueDate) => {
  const currentDate = dayjs();
  const targetDate = dayjs(dueDate);
  return targetDate.isAfter(currentDate);
};

const sortByDate = (eventA, eventB) => dayjs(eventA.dateFrom).diff(dayjs(eventB.dateFrom));

const sortByPrice = (eventA, eventB) => eventB.basePrice - eventA.basePrice;

const sortByTime = (eventA, eventB) => {
  const eventADuration = dayjs(eventA.dateTo).diff(eventA.dateFrom);
  const eventBDuration = dayjs(eventB.dateTo).diff(eventB.dateFrom);

  return eventBDuration - eventADuration;
};

export {
  humanizeTaskDueDate,
  getEventDuration,
  isPastDate,
  isPresentDate,
  isFutureDate,
  sortByPrice,
  sortByTime,
  sortByDate,
};
