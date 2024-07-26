import { Anta, Lexend, Poppins } from 'next/font/google';

export const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});

export const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
	weight: '400',
});

export const anta = Anta({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});
