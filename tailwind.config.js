/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
			"8xl": "4rem",
			"9xl": "4rem",
			"10xl": "4.5rem",
			"11xl": "5rem",
			"12xl": "5.5rem",
		},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#686868",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",

			// Main colors
			red: "#fa1d26",
			darkRed: "#a70107",
			lightRed: "#fa797e",
			goldPrime: "#dfc695",
			goldYellow: "#D4AF37",
			goldPrimeDark: "#d1a855",
			goldPrimeDarker: "#b68b36",
		},
	},
	plugins: [],
};
