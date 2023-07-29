/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				twitter: '#1d9bf0',
				twitterAlt: '#536471',
				twitterText: '#0f1419',
				twitterBg: '#e6ecf0',
			},
		},
	},
	plugins: [],
};
