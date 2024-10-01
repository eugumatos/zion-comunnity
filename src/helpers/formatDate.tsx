import { format, parseISO } from 'date-fns';

export const formatDate = (date: string): string => {
  const formattedDate = parseISO(date);

  return format(formattedDate, 'dd MMM yyyy');
};
