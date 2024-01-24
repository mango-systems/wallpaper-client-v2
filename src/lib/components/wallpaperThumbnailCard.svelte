<script>
	// @ts-nocheck
	/**
	 * @type {any}
	 */
	export let thumbnail_url;
	export let thumbnail_name;
	export let high_res_url;
	import previewWindowStore from '$lib/stores/previewWindow';

	import { fade } from 'svelte/transition';

	let previewWindow;
	previewWindowStore.subscribe((data) => {
		previewWindow = data;
	});

	function setPreviewParameters(event) {
		/**
		 * @type {any}
		 */
		let sourceButton = event.target;
		let highResUrl = event.currentTarget.getAttribute('data-high-res-link');
		let lowResUrl = event.currentTarget.getAttribute('data-low-res-link');
		// let serverTitle = event.currentTarget.getAttribute('data-server-name');
		// let serverInfo = event.currentTarget.getAttribute('data-server-info');
		// if (serverInfo === null || serverInfo === undefined) {
		// serverInfo = '';
		// }
		// SourceStore.update((currentValue) => {
		// 	return { ...currentValue, location_url: sourceUrl };
		// });
		// @ts-ignore
		previewWindowStore.set({
			selectedImgHighRes: highResUrl,
			selectedImgThumbnail: lowResUrl,
            isOpenWindow: true
		});
	}
</script>

<div class="pt-4">
	<div 
		class=" rounded-md hover:outline outline-offset-2 outline-4 outline-none hover:outline-blue-600"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img transition:fade
			class="w-full rounded-md saturate-50 hover:saturate-100 duration-500"
			data-high-res-link={high_res_url}
			data-low-res-link={thumbnail_url}
			src={thumbnail_url}
			alt={thumbnail_name}
			loading="lazy"
			on:click={setPreviewParameters}
		/>
	</div>
</div>
