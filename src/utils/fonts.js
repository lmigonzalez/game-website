import { Poppins, Audiowide, JetBrains_Mono } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

export const jetBrains_Mono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
});
