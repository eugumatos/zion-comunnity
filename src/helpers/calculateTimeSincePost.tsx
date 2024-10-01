import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  format
} from 'date-fns';

export const calculateTimeSincePost = (date: string): string => {
  const postDate = new Date(date);
  const now = new Date();

  const minutesAgo = differenceInMinutes(now, postDate);
  const hoursAgo = differenceInHours(now, postDate);
  const daysAgo = differenceInDays(now, postDate);

  if (minutesAgo < 1) {
    return 'Agora mesmo';
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutos atrás`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} horas atrás`;
  } else if (daysAgo < 7) {
    return `${daysAgo} dias atrás`;
  } else {
    return format(postDate, 'dd/MM/yyyy');
  }

};
