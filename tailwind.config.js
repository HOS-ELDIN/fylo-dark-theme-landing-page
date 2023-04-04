/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontFamily: {
			raleway: ["Raleway", "sans-serif"],
			Open: ["Open Sans", "sans-serif"],
		},
		extend: {
			colors: {
				// ### Primary

				DarkBlueIntro: "hsl(217, 28%, 15%)", //(intro and email sign up background)
				DarkBlueMainBg: "hsl(218, 28%, 13%)", //(main background)
				DarkBlueFooterBg: "hsl(216, 53%, 9%)", //(footer background)
				DarkBlueMonialsBg: "hsl(219, 30%, 18%)", //(testimonials background)

				// ### Accent

				Cyan: "hsl(176, 68%, 64%)", //(inside call-to-action gradient)
				Blue: "hsl(198, 60%, 50%)", //(inside call-to-action gradient)
				LightRed: "hsl(0, 100%, 63%)", //(error)

				// ### Neutral

				White: "hsl(0, 0%, 100%)",
			},
			backgroundImage: {
				heroDesk: "url(../images/bg-curvy-desktop.svg)",
				heroMobile: "url(../images/bg-curvy-mobile.svg)",
			},
			gridTemplateColumns: {
				twoAuto: "repeat(2, minmax(0, auto))",
				fiveAuto: "repeat(5, minmax(0, auto))",
			},
		},
	},
	plugins: [],
};
