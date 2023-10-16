<script>
	import { onMount } from "svelte";
    import { getName } from '@tauri-apps/api/app';

    // https://svelte.dev/examples/onmount

    /** @type {string} */
    let appName

    onMount(async () => {
        appName = await getName();
    })
</script>

<div class="w-full h-full flex flex-row">
    <div class="hidden md:block">
        <div id="sidebar" class="h-full dark:bg-AdwBackgroundSidebarDark bg-AdwBackgroundSidebar w-[25%] md:max-w-[255px] lg:max-w-[270px] rounded-l-AdwWindow min-w-[240px] flex-grow px-3">
            <div id="topbar" class="w-full h-AdwTopBar"></div>
            <h1 class="text-lg text-AdwTextPrimary dark:text-AdwTextPrimaryDark">{appName}</h1>
            <!-- named slot: sidebar -->
        </div>
    </div>
    <div id="seperator" class="h-full py-1">
        <div class="h-full w-[2px] bg-AdwBorder dark:bg-AdwBorderDark"></div>
    </div>
    <div id="main-area" class="w-full bg-AdwBackground  dark:bg-AdwBackgroundDark rounded-r-AdwWindow">
        <div id="topbar" class="w-full h-AdwTopBar"></div>
        <!-- named slot: mainarea -->
        <slot />
    </div>
</div>