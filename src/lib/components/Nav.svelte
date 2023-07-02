<script>
	// Just some things to make both static site and SSR site work at the same time
	let indexUrl = './index.html'
	let articleUrl = './article.html'

	let drawerToggled = false

	import { browser } from '$app/environment'

	if (browser && !location.href.includes('.html')) {
		indexUrl = '/'
		articleUrl = '/article'
	}

	// Toggle state of responsive menu
</script>

<div class="drawer drawer-end">
	<!-- this hidden checkbox controls the state -->
	<input
		id="my-drawer-2"
		type="checkbox"
		class="hidden drawer-toggle"
		bind:checked={drawerToggled}
	/>
	<!-- drawer-content is a bit of a misonomer, it really means ALL your page content
		Read more on https://daisyui.com/components/drawer/ -->
	<div class="drawer-content">
		<!-- The nav bar-->
		<nav class="navbar bg-base-200">
			<!-- The logo -->
			<a href={indexUrl} class="flex items-center flex-shrink-0 text-white mr-6">
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

			<!-- Main menu links -->
			<div class="flex-1">
				<ul class="menu menu-horizontal px-1">
					<li><a href={indexUrl}>Home</a></li>
					<li>
						<details>
							<summary> Pages </summary>
							<ul class="p-2 bg-base-200 rounded-t-none">
								<li>
									<a href={indexUrl}> Home </a>
								</li>
								<li>
									<a href={articleUrl}> Garlic Bread & Cheese </a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>

			<!-- The hamburger button -->
			<div class="flex-none">
				<button>
					<label
						for="my-drawer-2"
						class="
						z-10
						btn btn-square btn-ghost swap swap-rotate
						{drawerToggled ? 'swap-active' : ''}
						"
					>
						<!-- hamburger icon -->
						<svg
							class="swap-off fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 512 512"
							><path
								d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
							/></svg
						>

						<!-- close icon -->
						<svg
							class="swap-on fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 512 512"
							><polygon
								points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
							/></svg
						>
					</label>
				</button>
			</div>
		</nav>
		<!-- The rest of the site content -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 h-full bg-base-200 pt-20">
			<!-- Sidebar content here -->
			<li><a href={indexUrl}>Sidebar Item 1</a></li>
			<li><a href={indexUrl}>Sidebar Item 2</a></li>
			<li><a href={indexUrl}>Sidebar Item 3</a></li>
			<li><a href={indexUrl}>Sidebar Item 4</a></li>
		</ul>
	</div>
</div>
