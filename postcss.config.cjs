const mode = process.env.NODE_ENV
const dev = mode === "development"

const config = {
	plugins: {
		'postcss-import': {},
		'postcss-nesting': {},
		'tailwindcss/nesting': 'postcss-nesting',
		tailwindcss: {},
		autoprefixer: {},
		...(!dev ? {cssnano: {}} : {})
	  }
};

module.exports = config