import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TimeConstants } from '../constants';

dayjs.extend(duration);

function humanizeTaskDueDate(dueDate, dateFormat) {
  return dueDate && dateFormat ? dayjs(dueDate).format(dateFormat) : '';
}

const getEventDuration = (dateFrom, dateTo) => {
  const diffInMinutes = dayjs(dateTo).diff(dayjs(dateFrom), 'm');

  const days = Math.floor(diffInMinutes / TimeConstants.MINUTES_PER_DAY);
  const hours = Math.floor((diffInMinutes % TimeConstants.MINUTES_PER_DAY) / TimeConstants.MINUTES_PER_HOUR);
  const minutes = diffInMinutes % TimeConstants.MINUTES_PER_HOUR;

  const formattedDays = days.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  if (diffInMinutes >= TimeConstants.MINUTES_PER_DAY) {
    return `${formattedDays}D ${formattedHours}H ${formattedMinutes}M`;
  }

  if (diffInMinutes >= TimeConstants.MINUTES_PER_HOUR) {
    return `${formattedHours}H ${formattedMinutes}M`;
  }

  if (diffInMinutes < TimeConstants.MINUTES_PER_HOUR) {
    return `${formattedMinutes}M`;
  }
};

const isMinorChange = (eventA, eventB) =>
  eventA.dateFrom !== eventB.dateFrom ||
  eventA.basePrice !== eventB.basePrice ||
  getEventDuration(eventA.dateFrom, eventA.dateTo) !== getEventDuration(eventB.dateFrom, eventB.dateTo);

export { humanizeTaskDueDate, getEventDuration, isMinorChange };
