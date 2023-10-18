<script>
	import ContentContainer from "$lib/components/contentContainer.svelte";
    import SourceStore from '$lib/stores/source';
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
    <h1>Version TWO</h1>
</ContentContainer>