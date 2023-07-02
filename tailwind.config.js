import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkmode: false,

	plugins: [forms, typography, daisyui],

	daisyui: {
    themes: [{
			"emerald": {
				"primary": "hsl(159, 64%, 10%)",
				"secondary": "hsl(266, 63%, 10%)",
				"accent": "hsl(159, 72%, 20%)",
				"neutral": "hsl(159, 72%, 15%)",
				"base-100": "hsl(159, 72%, 30%)",
				"base-content": "hsl(159, 72%, 90%)",
				"info": "#3abff8",
				"success": "#36d399",
				"warning": "#fbbd23",
				"error": "#f87272",
			},
			"emerald-light": {
				"primary": "hsl(159, 64%, 52%)",
				"secondary": "hsl(266, 63%, 55%)",
				"accent": "hsl(57, 100%, 62%)",
				"neutral": "hsl(159, 73%, 77%)",
				"base-100": "hsl(159, 72%, 73%)",
				"info": "#3abff8",
				"success": "#36d399",
				"warning": "#fbbd23",
				"error": "#f87272",
			}
		}], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },



};

module.exports = config;
