import { Anta, Lexend, Poppins } from 'next/font/google';

export const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	variable: '--lexend',
	adjustFontFallback: false,
});

export const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const anta = Anta({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});
