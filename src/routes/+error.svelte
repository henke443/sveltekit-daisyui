<script>
	import { page } from '$app/stores'
</script>

<div
	class="absolute z-0 top-0 left-0 flex items-center justify-center h-screen w-screen text-center"
>
	<h1 class="text-4xl">Error {$page.status} — {$page.error?.message}</h1>
</div>
