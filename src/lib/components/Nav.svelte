<script>
	// Just some things to make both static site and SSR site work at the same time
	let indexUrl = "./index.html"
	let articleUrl = "./article.html"

  import { browser } from '$app/environment';

  if (browser && !location.href.includes(".html")) {
		indexUrl = "/"
		articleUrl = "/article"
	}

	// Toggle state of responsive menu
	let toggled = false
	const toggleMenuContents = () => {
		toggled = !toggled
	}
</script>

<nav class="relative z-10 flex items-center justify-between flex-wrap bg-emerald-500 p-6">
	<!-- The logo -->
	<a href="{indexUrl}" class="flex items-center flex-shrink-0 text-white mr-6">
		<svg
			class="fill-current h-8 w-8 mr-2"
			width="54"
			height="54"
			viewBox="0 0 54 54"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
			/>
		</svg>
		<span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
	</a>

	<!-- The expand menu button (I added preventDefault just to show you can do that)-->
	<div class="block lg:hidden">
		<button
			on:click|preventDefault={toggleMenuContents}
			class="flex items-center px-3 py-2 border rounded text-emerald-200 border-emerald-400 hover:text-white hover:border-white"
		>
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<title>Menu</title>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
			</svg>
		</button>
	</div>

	<!-- Main menu links -->
	<div
		class="w-full block lg:flex flex-grow lg:items-center lg:w-auto
		{!toggled ? 'hidden' : ''}"
	>
		<div class="text-sm lg:flex-grow">
			<a href="{indexUrl}" class="block mt-4 lg:inline-block lg:mt-0 text-emerald-200 hover:text-white mr-4">
				Home
			</a>
			<a
				href="{articleUrl}"
				class="block mt-4 lg:inline-block lg:mt-0 text-emerald-200 hover:text-white mr-4"
			>
				Garlic Bread & Cheese
			</a>
		</div>
		<div>
			<a
				target="_blank"
				href="https://kit.svelte.dev/docs/project-structure"
				class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white mt-4 lg:mt-0"
				>Svelte Documentation</a
			>
		</div>
	</div>
</nav>
