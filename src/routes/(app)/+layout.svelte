<script>
	import { onMount } from 'svelte';
	import { getName } from '@tauri-apps/api/app';
	import { appWindow } from '@tauri-apps/api/window';
	import IconButton from '$lib/components/iconButton.svelte';
	import OpenMenuSymbolic from '$lib/AdwIcons/open-menu-symbolic.svelte';
	import WindowCloseSymbolic from '$lib/AdwIcons/window-close-symbolic.svelte';
	import WindowButton from '$lib/components/windowButton.svelte';
	import WindowMinimizeSymbolic from '$lib/AdwIcons/window-minimize-symbolic.svelte';
	import WindowMaximizeSymbolic from '$lib/AdwIcons/window-maximize-symbolic.svelte';

	import { goto } from '$app/navigation';

	import { resolveResource } from '@tauri-apps/api/path';
	import { readTextFile } from '@tauri-apps/api/fs';

	import SourceStore from '$lib/stores/source';
	import PreviewWindow from '$lib/components/previewWindow.svelte';
	// https://svelte.dev/examples/onmount
	// https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/named-colors.html

	import previewWindowStore from '$lib/stores/previewWindow';

	/**
	 * @type {{ isOpenWindow: any; selectedImgHighRes?: string; }}
	 */
	let previewWindow;
	previewWindowStore.subscribe((data) => {
		previewWindow = data;
	});

	// #########################

	/** @type {string} */
	let appName;
	/**
	/**
	 * @type {any}
	 */
	let displayDescription;

	/**
	 * @type {any}
	 */
	let sources = getSources();

	async function getSources() {
		const sourcesFile = await resolveResource('resources/sources.json');
		sources = JSON.parse(await readTextFile(sourcesFile));
		console.debug(sources);
		return sources;
	}

	onMount(async () => {
		appName = await getName();

		const inAppDataPath = await resolveResource('resources/inAppData.json');
		// console.debug(inAppDataPath)
		let inAppData = JSON.parse(await readTextFile(inAppDataPath));
		displayDescription = inAppData.display_description;
	});

	/**
	 * @type {{ url: any; }}
	 */
	let urlStore;
	SourceStore.subscribe((data) => {
		urlStore = data;
	});
	// ######### IMPLEMENT STORE UPDATE ###################

	function setLocationUrl(destinationURL, serverURL) {
		/**
		 * @type {any}
		 */
		// @ts-ignore

		console.log("EVENT: " + destinationURL)

		let sourceButton = event.target;
		// @ts-ignore
		let sourceUrl = event.currentTarget.getAttribute('data-source-url');
		let serverTitle = event.currentTarget.getAttribute('data-server-name');
		let serverInfo = event.currentTarget.getAttribute('data-server-info');
		if (serverInfo === null || serverInfo === undefined) {
			serverInfo = '';
		}

		// console.log(sourceUrl);
		// SourceStore.update((currentValue) => {
		// 	return { ...currentValue, location_url: sourceUrl };
		// });
		// @ts-ignore
		SourceStore.set({
			location_url: sourceUrl,
			server_name: serverTitle,
			server_info: serverInfo
		});

		// let modeURL = destinationURL
		// // let modeURLwithParams = new URL(modeURL);
		// // modeURLwithParams.searchParams.set("foo", 4)
		// // console.log(modeURLwithParams)
		// // console.log(modeURLwithParams.href);
		// serverURL = encodeURIComponent(serverURL)
		// let modeURLwithParams = `${modeURL}?fetchurl=${serverURL}`;
		// // console.log("modeURL with params: "+ modeURLwithParams)

		goto(destinationURL);
	}
</script>

{#if previewWindow.isOpenWindow}
	<PreviewWindow />
{/if}

<div class="w-full h-full flex flex-row">
	<div class="hidden md:block">
		<div
			id="sidebar"
			class=" h-full dark:bg-AdwBackgroundSidebarDark bg-AdwBackgroundSidebar w-[25%] md:max-w-[255px] lg:max-w-[270px] rounded-l-AdwWindow min-w-[240px] flex-grow px-2"
		>
			<div
				id="topbar"
				class="w-full h-AdwTopBar flex flex-row items-center justify-end"
				data-tauri-drag-region
			>
				<IconButton>
					<OpenMenuSymbolic />
				</IconButton>
			</div>
			<div class="px-3 pb-3">
				<h1
					class="text-lg leading-2 text-AdwTextPrimary dark:text-AdwTextPrimaryDark font-sans font-bold"
				>
					{appName}
				</h1>
				<p class="text-base">{displayDescription}</p>
			</div>
			<!-- named slot: sidebar -->
			<div class="text-neutral-950 dark:text-neutral-100">
				<ul>
					{#await sources}
						<p>Loading...</p>
					{:then sources}
						{#each sources as source}
							<li>
								<button
									class="w-full"
									data-source-url={source.location_url}
									data-server-name={source.title}
									data-server-info={source.description}
									on:click={() => setLocationUrl(source.mode, source.location_url)}
								>
									
										<div class="flex items-center hover:bg-[#cccccc] dark:hover:bg-neutral-700 px-3 py-2 rounded-lg">
											{source.title}
										</div>
								</button>
							</li>
						{/each}
					{:catch error}
						<p style="color: red">{error.message}</p>
					{/await}
				</ul>
			</div>
		</div>
	</div>
	<div id="seperator" class="dark:hidden h-full py-1">
		<div class="h-full w-[2px] bg-AdwBorder dark:bg-AdwBorderDark" />
	</div>
	<div
		id="main-area"
		class="w-full bg-AdwBackground dark:bg-AdwBackgroundDark rounded-r-AdwWindow flex flex-col"
	>
		<div id="topbar" class="w-full flex flex-row flex-grow-0 py-2">
			<div class="flex-grow" data-tauri-drag-region />
			<div id="windowButtons" class="flex flex-row gap-3 items-center pr-2" data-tauri-drag-region>
				<WindowButton
					windowButtonEvent={() => {
						appWindow.minimize();
					}}
				>
					<WindowMinimizeSymbolic />
				</WindowButton>
				<WindowButton
					windowButtonEvent={() => {
						appWindow.toggleMaximize();
					}}
				>
					<WindowMaximizeSymbolic />
				</WindowButton>
				<WindowButton
					windowButtonEvent={() => {
						appWindow.close();
					}}
				>
					<WindowCloseSymbolic />
				</WindowButton>
			</div>
		</div>

		<!-- named slot: mainarea -->
		<div class="w-full overflow-y-auto h-full">
			<slot />
		</div>
	</div>
</div>
