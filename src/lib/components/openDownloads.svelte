<script>
	export let folder;
	import { open } from '@tauri-apps/api/shell';
	import { join, downloadDir } from '@tauri-apps/api/path';
	import ContentContainer from './contentContainer.svelte';
    import { createDir, BaseDirectory } from '@tauri-apps/api/fs';

	async function openFolder() {
		console.log(folder);
		const downloadDirPath = await downloadDir();
		let folder_path = await join(downloadDirPath, folder);
		// console.log(folder_path);
		// try {
		//     await open(folder_path).catch();
		// }
		// catch(err) {
		//     console.log(err)
		// }
		await open(folder_path).catch( async (err) => {
			let error_string = 'The system cannot find the file specified';
			if (err.includes(error_string)) {
				await createDir(folder, { dir: BaseDirectory.Download, recursive: true }).then(async () => {
                    await open(folder_path)
                });
			}
		});
	}
</script>

<button
	class="w-full dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-150 bg-neutral-200 hover:bg-neutral-300 py-[6px] font-bold rounded-lg dark:text-neutral-100 text-neutral-700"
	on:click={openFolder}
>
	<p>Open Downloads</p>
</button>
