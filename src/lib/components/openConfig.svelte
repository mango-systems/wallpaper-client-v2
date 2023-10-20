<script>
	// @ts-ignore
	import ServerIcon from '$lib/AdwIcons/server-pick-symbolic.svelte';

	import { open } from '@tauri-apps/api/shell';
	// import { join, downloadDir } from '@tauri-apps/api/path';

    import { resolveResource } from '@tauri-apps/api/path';
	import { readTextFile } from '@tauri-apps/api/fs';

	async function openConfig() {
		const inAppDataPath = await resolveResource('resources/sources.json');
		// let inAppData = JSON.parse(await readTextFile(inAppDataPath));
		// let downloadFolderName = inAppData.download_folder;

		// console.log(folder);
		// const downloadDirPath = await downloadDir();
		// let folder_path = await join(downloadDirPath, folder);
		// console.log(folder_path)
        console.log(inAppDataPath)
		await open(inAppDataPath);
	}
</script>

<button
	class="py-[6px] px-[12px] flex items-center justify-center dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-150 bg-neutral-200 hover:bg-neutral-300 rounded-lg dark:fill-neutral-300 fill-neutral-700"
    on:click={openConfig}
>
	<ServerIcon />
</button>
