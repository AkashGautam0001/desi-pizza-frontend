/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["DM Serif Display", "serif"],
				sans: ["Questrial", "sans-serif"],
			},
			colors: {
				primary: "#FF4500", // OrangeRed
				secondary: "#FFD700", // Gold
				accent: "#32CD32", // LimeGreen
				neutralText: "#FFFFFF", // White
				neutralBg: "#333333", // Dark Gray
			},
			backgroundImage: {
				"login-image": "url('/src/assets/images/LoginPageImage.jpg')",
			},
		},
	},
	plugins: [],
};
