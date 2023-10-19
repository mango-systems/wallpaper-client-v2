<script>
	import { writable } from 'svelte/store';

	export let thumbnail_url;

	let thumbnail = thumbnail_url;

	import DefaultImage from '$lib/images/default.png'

	const imageMemory = writable({
		thumbnail_url_saved:
			''
	});

	import Stand from "$lib/svgs/stand.svelte"

	// Listen for changes in thumbnail_url and update the store

	$: {
		if (typeof thumbnail_url !== 'undefined' && thumbnail_url !== '') {
			thumbnail = thumbnail_url;
			imageMemory.set({
				thumbnail_url_saved: thumbnail
			});
			console.log(imageMemory);
		}
	}

	let savedValue;
	imageMemory.subscribe((data) => {
		savedValue = data;
	});
</script>

<div class="items-center relative pb-48">
	<div class="absolute">
		<div class="flex items-center justify-center bg-black rounded-md screen ">
			{#if savedValue.thumbnail_url_saved}
			<img class="p-1 rounded-md" src={savedValue.thumbnail_url_saved} alt="icon" />
			{:else}
			<img class="p-1 rounded-md" src={DefaultImage} alt="icon" />
			{/if}
		</div>
		<div class="bg-rect w-full h-2 rounded-b-[5px] -translate-y-[5px]"></div>
		<div class="w-full flex items-start justify-center -translate-y-10 base">
			<div class="aspect-square w-[80px] ">
				<Stand/>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-rect {
		background: linear-gradient(
			270deg,
			#171717 0%,
			#585858 1.47%,
			#282828 4.57%,
			#313131 7.03%,
			#232323 92.83%,
			#2e2e2e 96.15%,
			#4a4a4a 97.86%,
			#171717 100%
		);
		position: relative;
		z-index: 5;
	}

	.base {
		position: relative;
		z-index: 0;
	}

	.screen {
		position: relative;
		z-index: 20;
	}
</style>
