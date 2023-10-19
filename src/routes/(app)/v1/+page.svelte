<script>
	// import { WAYLAND_DISPLAY } from '$env/static/private';

	// @ts-nocheck

	import { page } from '$app/stores';

	import ContentContainer from '$lib/components/contentContainer.svelte';
	import WallpaperThumbnailCard from '$lib/components/wallpaperThumbnailCard.svelte';

	import SourceStore from '$lib/stores/source';
	import { onMount } from 'svelte';

	// let url = "https://raw.githubusercontent.com/msm-linux/msm-wallpaper-index-source/main/index.json"

	/**
	 * @type {{ url: any; }}
	 */
	let urlStore;
	SourceStore.subscribe((data) => {
		urlStore = data;
	});

	let fetchedData = null;

	let fetchUrl = urlStore.location_url;
	// const requestFetchUrl = fetch(fetchUrl).then((res) => res.json());
	async function fetchData(fetchurl) {
		const response = await fetch(fetchUrl);
		fetchedData = await response.json();
		console.log(fetchedData);
	}

	onMount(() => {
		fetchData(fetchUrl);
		console.log('fetch url ran');
	});

	$: {
		if (urlStore.location_url !== fetchUrl) {
			fetchUrl = urlStore.location_url; // Update fetchUrl with the new URL

			fetchedData = ""

			fetchData(fetchUrl); // Call fetchData with the new URL
		}
	}
</script>

<ContentContainer>
	{#if !fetchedData}
		<div class="w-full h-full flex items-center justify-center">
			<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><style>
					.spinner_5nOS {
						transform-origin: center;
						animation: spinner_sEAn 0.75s infinite linear;
					}
					@keyframes spinner_sEAn {
						100% {
							transform: rotate(360deg);
						}
					}
				</style><path
					d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
					opacity=".25"
				/><path
					d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
					class="spinner_5nOS"
				/></svg
			>
		</div>
	{:else if fetchData !== ''}
		<div class="divide-y-2 dark:divide-neutral-700 divide-neutral-200">
			<div>
				<div>
					<h1 class="text-lg font-bold">{urlStore.server_name}</h1>
				</div>
				<div class="pb-5">
					{urlStore.server_info}
				</div>
			</div>
			<!-- -->
			<div class="py-6 sm:columns-2 lg:columns-3 xl:columns-4">
				{#each Object.values(fetchedData) as item}
					<WallpaperThumbnailCard
						thumbnail_url={item.thumbnail_file_link}
						thumbnail_name={item.filename}
						high_res_url={item.highres_link}
					/>
				{/each}
			</div>
		</div>
	{:else}
		<div class="w-full h-full flex items-center justify-center">
			<h1>error</h1>
		</div>
	{/if}
</ContentContainer>
