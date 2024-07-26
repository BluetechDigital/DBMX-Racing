import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			fontSize: {
				xs: ".75rem",
				sm: ".8rem",
				tiny: ".9rem",
				base: "1rem",
				medium: "1.15rem",
				paragraph: "1.05rem",
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
				grey: "#cecece",
				white: "#ffffff",
				pureBlack: "#000",
				darkGrey: "#8f8f8f",
				lightGrey: "#f7f7f7",
				lightGreyTwo: "#fafafa",

				// Main colors
				primary: {
					default: "#fa0008",
					light: "#fa797e",
					dark: "#a70107",
					darker: "#720004",
					darkerTwo: "#4e0104",
				},
				accent: {
					default: "#f6ad37",
					two: "#e8b042",
					dark: "#e4a002",
					darker: "#bc7700",
				},
				tertiary: {
					default: "#dfc695",
					two: "#d4af37",
					dark: "#dfc695",
					darker: "#b68b36",
				},
			},
		},
	},
	plugins: [],
};
export default config;
