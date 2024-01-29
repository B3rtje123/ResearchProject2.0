/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			black: '#0e0e0e',
			white: '#ececec',
			blue: '#00ADB5',
			gray: '#D1D5DB',
			red: '#FF0000',
			ultraWhite: '#fff'
		},
		fontFamily: {
			'Argenta': ['Argenta', 'sans-serif'],
		},
		extend: {
			backgroundImage: (theme) => ({
				'hero-pattern': "url('https://img.freepik.com/premium-vector/white-abstract-background-with-hexagon-pattern-style-seamless-concept_7505-1691.jpg')",
			}),
			height: {
				"8vh": "8vh",
				"92vh": "92vh",
			},
			width: {
				"8%": "6%",
			},
		},
	},
	plugins: [
		// require('tailwindcss-animated')
	],
}
