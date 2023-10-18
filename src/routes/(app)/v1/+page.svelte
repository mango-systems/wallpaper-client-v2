<script>
	// @ts-nocheck

	import ContentContainer from '$lib/components/contentContainer.svelte';

	import SourceStore from '$lib/stores/source';
	// let url = "https://raw.githubusercontent.com/msm-linux/msm-wallpaper-index-source/main/index.json"

	/**
	 * @type {{ url: any; }}
	 */
	let urlStore;
	SourceStore.subscribe((data) => {
		urlStore = data;
	});

	let fetchUrl = urlStore.location_url;
	let requestFetchUrl = fetch(fetchUrl).then((res) => res.json());
</script>

<ContentContainer>
	<!--  -->

	{#await requestFetchUrl}
		<div class="w-full h-full flex items-center justify-center">loading...</div>
	{:then fetchedData}
		<div class="divide-y-2">
			<div>
				<h1>{urlStore.server_name}</h1>
			</div>

			<div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 py-6">
				{#each Object.values(fetchedData) as item}
					<img class="w-full" src={item.thumbnail_file_link} alt="" />
				{/each}
			</div>
		</div>
	{:catch error}
		<div class="w-full h-full flex items-center justify-center">
			{error}
		</div>
	{/await}
</ContentContainer>
