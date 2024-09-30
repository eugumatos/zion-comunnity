import { Montserrat, Public_Sans, Work_Sans, Nunito } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['600'],
});

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700'],
});
