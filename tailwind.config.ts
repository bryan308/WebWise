import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				skeleton: {
					'50%': {
						opacity: '0.5',
					},
				},
				fadeIn: {
					from: {
						filter: 'blur(2px)',
						opacity: '0',
					},
					to: {
						filter: 'blur(0)',
						opacity: '1',
					},
				},
			},
			animation: {
				skeleton: 'skeleton 2s cubic-bezier(0.4, 0, 0.6, 1) var(--pulse-delay, 0) infinite',
				fadeIn: 'fadeIn 1s ease var(--fadeIn-delay, 0) forwards',
			},
		},
	},
	plugins: [],
};
export default config;
