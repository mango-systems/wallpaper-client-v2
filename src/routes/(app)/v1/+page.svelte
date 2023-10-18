<script>
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
</script>

<ContentContainer>
	<h1>{urlStore.url}</h1>

	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
	<h1>Version ONE</h1>
</ContentContainer>
