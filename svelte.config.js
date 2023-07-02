// import adapter_auto from '@sveltejs/adapter-auto'; // For more info on adapters visit: https://kit.svelte.dev/docs/adapters
import "dotenv/config"
import adapter_node from '@sveltejs/adapter-node'
import adapter_static from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: process.env["SVELTE_ADAPTER"] === "STATIC" ? adapter_static() : adapter_node()
	}
};

export default config;
