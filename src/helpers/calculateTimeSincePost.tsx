import { differenceInMinutes, differenceInHours, differenceInDays, parseISO } from 'date-fns';

export const calculateTimeSincePost = (postDate: string): string => {
  const postDateObj = parseISO(postDate);
  const now = new Date();

  const minutes = differenceInMinutes(now, postDateObj);

  if (minutes >= 1440) {
    const days = differenceInDays(now, postDateObj);
    return `${days}d atrás`;
  } else if (minutes >= 60) {
    const hours = differenceInHours(now, postDateObj);
    return `${hours}h atrás`;
  } else if (minutes >= 1) {
    return `${minutes}m atrás`;
  } else {
    return 'agora mesmo';
  }
};
