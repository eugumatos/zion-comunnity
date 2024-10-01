import { format } from "date-fns";

export function getCurrentDateTime() {
  const now = new Date();
  return format(now, 'yyyy-MM-dd HH:mm:ss');
}