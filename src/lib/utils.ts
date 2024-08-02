import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import slugify from '@sindresorhus/slugify';

export { slugify };

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
