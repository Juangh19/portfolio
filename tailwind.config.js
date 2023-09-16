/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'ui-monospace'],
			},
			colors: {
				drew: '#ffb400',
				dark: '#141414',
				light: '#fcfcfc',
				gray: '#f0f0f0',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
