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

	// https://svelte.dev/examples/onmount
	// https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/named-colors.html

	/** @type {string} */
	let appName;

	onMount(async () => {
		appName = await getName();
	});
</script>

<div class="w-full h-full flex flex-row">
	<div class="hidden md:block">
		<div
			id="sidebar"
			class="h-full dark:bg-AdwBackgroundSidebarDark bg-AdwBackgroundSidebar w-[25%] md:max-w-[255px] lg:max-w-[270px] rounded-l-AdwWindow min-w-[240px] flex-grow px-3"
		>
			<div id="topbar" class="w-full h-AdwTopBar" data-tauri-drag-region>
				<IconButton>
					<OpenMenuSymbolic />
				</IconButton>
			</div>
			<h1 class="text-lg text-AdwTextPrimary dark:text-AdwTextPrimaryDark font-sans">{appName}</h1>
			<!-- named slot: sidebar -->
		</div>
	</div>
	<div id="seperator" class="h-full py-1">
		<div class="h-full w-[2px] bg-AdwBorder dark:bg-AdwBorderDark" />
	</div>
	<div id="main-area" class="w-full bg-AdwBackground dark:bg-AdwBackgroundDark rounded-r-AdwWindow">
		<div id="topbar" class="w-full h-AdwTopBar flex flex-row">
			<div class="flex-grow" data-tauri-drag-region />
			<div id="windowButtons" class="flex flex-row gap-3 pt-2 pr-2" data-tauri-drag-region>
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
		<slot />
	</div>
</div>
