import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TimeConstants } from '../constants';

dayjs.extend(duration);

function humanizeTaskDueDate(dueDate, dateFormat) {
  return dueDate && dateFormat ? dayjs(dueDate).format(dateFormat) : '';
}

const getEventDuration = (dateFrom, dateTo) => {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom), 'm');
  if (diff >= TimeConstants.MINUTES_PER_DAY) {
    return dayjs.duration(diff, 'm').format('DD[D] HH[H] mm[M]');
  }

  if (diff >= TimeConstants.MINUTES_PER_HOUR) {
    return dayjs.duration(diff, 'm').format('HH[H] mm[M]');
  }

  if (diff < TimeConstants.MINUTES_PER_HOUR) {
    return dayjs.duration(diff, 'm').format('mm[M]');
  }
};

const isMinorChange = (eventA, eventB) =>
  eventA.dateFrom !== eventB.dateFrom ||
  eventA.basePrice !== eventB.basePrice ||
  getEventDuration(eventA.dateFrom, eventA.dateTo) !== getEventDuration(eventB.dateFrom, eventB.dateTo);

export { humanizeTaskDueDate, getEventDuration, isMinorChange };
