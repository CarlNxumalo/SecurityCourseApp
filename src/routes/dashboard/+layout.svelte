<script>
	import "../app.pcss"
	import Navbar from '../dashboard/Navbar.svelte';
	import Sidebar from '../dashboard/Sidebar.svelte';
	let drawerHidden = false;
	export let data
</script>

<header
	class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar bind:drawerHidden />
</header>
<div class="overflow-hidden lg:flex">
	<Sidebar bind:drawerHidden {data}/>
	<div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
		<slot/>
	</div>
</div>