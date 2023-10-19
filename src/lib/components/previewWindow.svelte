<script>
	import previewWindowStore from '$lib/stores/previewWindow';
	import WindowButton from './windowButton.svelte';
	import WindowCloseSymbolic from '$lib/AdwIcons/window-close-symbolic.svelte';
	import DownloadSimple from '$lib/AdwIcons/download-simple.svelte';
	import  downloadImage, { setWallpaper }  from '$lib/logic/download';
	/**
	 * @type {{ selectedImgHighRes: any; isOpenWindow?: boolean; }}
	 */
	let previewWindow;
	previewWindowStore.subscribe((data) => {
		previewWindow = data;
	});

	function closeWindow() {
		// @ts-ignore
		previewWindowStore.set({
			isOpenWindow: false
		});
	}
	function runDownloadImage(high_res_url){
		downloadImage(high_res_url)
	}

	function runSetWallpaper(high_res_url){
		setWallpaper(high_res_url)
	}

	//  on:click={downloadImage("hello")}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="absolute w-full h-full bg-[#00000044] flex items-center justify-center z-50"
	data-tauri-drag-region
>
	<div
		class="w-[50%] bg-AdwBackgroundPrimary dark:bg-AdwBackgroundSidebarDark max-w-[878px] min-w-[350px] drop-shadow-xl rounded-AdwWindow dark:border-[#585858c4] border-[#28292e5b] border-[1.5px]"
	>
		<div class="flex flex-row w-full dark:border-[#757575c4] border-[#28292e5b] border-b-[1.5px] items-center">
			<div class="flex flex-row w-full justify-start gap-1 py-2">
				<div class="flex items-center pl-2">
					<button class="bg-violet-500 hover:bg-violet-600 duration-75 h-full rounded py-[6px] px-4 text-white font-bold"
					on:click={runSetWallpaper(previewWindow.selectedImgHighRes)}
						
					>Set background</button>
				</div>
				<div class=" flex items-center">
					<button class="duration-100 hover:bg-[#c4c4c4] hover:bg-neutral-700 rounded font-bold aspect-square h-full flex items-center justify-center" on:click={runDownloadImage(previewWindow.selectedImgHighRes)}>
						
							<div class="w-6 fill-neutral-700 dark:fill-neutral-200"><DownloadSimple /></div>
						
					</button>
				</div>
			</div>
			<div class="pr-3 h-full">
				<WindowButton
					windowButtonEvent={() => {
						closeWindow();
					}}
				>
					<WindowCloseSymbolic />
				</WindowButton>
			</div>
		</div>
		<div class="p-3">
			<img class="rounded-md dark:border-2 border-neutral-700" src={previewWindow.selectedImgHighRes} alt="" />
		</div>
	</div>
</div>
