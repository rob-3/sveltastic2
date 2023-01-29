const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('@catppuccin/tailwindcss')]
};

module.exports = config;
