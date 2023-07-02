import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkmode: false,
	theme: {
		screens: {
		  sm: '480px',
		  md: '768px',
		  lg: '976px',
		  xl: '1440px',
		},
		fontFamily: {
		  sans: ['Graphik', 'sans-serif'],
		  serif: ['Merriweather', 'serif'],
		},
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
				  css: {
					'--tw-prose-body': theme('colors.emerald[800]'),
					'--tw-prose-headings': theme('colors.emerald[950]'),
					'--tw-prose-lead': theme('colors.emerald[800]'),
					'--tw-prose-links': theme('colors.emerald[900]'),
					'--tw-prose-bold': theme('colors.emerald[900]'),
					'--tw-prose-counters': theme('colors.emerald[600]'),
					'--tw-prose-bullets': theme('colors.emerald[400]'),
					'--tw-prose-hr': theme('colors.emerald[300]'),
					'--tw-prose-quotes': theme('colors.emerald[900]'),
					'--tw-prose-quote-borders': theme('colors.emerald[300]'),
					'--tw-prose-captions': theme('colors.emerald[700]'),
					'--tw-prose-code': theme('colors.emerald[900]'),
					'--tw-prose-pre-code': theme('colors.emerald[100]'),
					'--tw-prose-pre-bg': theme('colors.emerald[900]'),
					'--tw-prose-th-borders': theme('colors.emerald[300]'),
					'--tw-prose-td-borders': theme('colors.emerald[200]'),
					'--tw-prose-invert-body': theme('colors.emerald[200]'),
					'--tw-prose-invert-headings': theme('colors.white'),
					'--tw-prose-invert-lead': theme('colors.emerald[300]'),
					'--tw-prose-invert-links': theme('colors.white'),
					'--tw-prose-invert-bold': theme('colors.white'),
					'--tw-prose-invert-counters': theme('colors.emerald[400]'),
					'--tw-prose-invert-bullets': theme('colors.emerald[600]'),
					'--tw-prose-invert-hr': theme('colors.emerald[700]'),
					'--tw-prose-invert-quotes': theme('colors.emerald[100]'),
					'--tw-prose-invert-quote-borders': theme('colors.emerald[700]'),
					'--tw-prose-invert-captions': theme('colors.emerald[400]'),
					'--tw-prose-invert-code': theme('colors.white'),
					'--tw-prose-invert-pre-code': theme('colors.emerald[300]'),
					'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
					'--tw-prose-invert-th-borders': theme('colors.emerald[600]'),
					'--tw-prose-invert-td-borders': theme('colors.emerald[700]'),
				  },
				},
			  }),
			colors: {
				'my-blue': '#006',
			  },
		  	spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
