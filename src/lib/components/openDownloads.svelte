<script>
    export let folder
    import { open } from '@tauri-apps/api/shell';
    import { join, downloadDir } from '@tauri-apps/api/path';


    async function openFolder(){
        console.log(folder)
        const downloadDirPath = await downloadDir();
        let folder_path = await join(downloadDirPath, folder);
        console.log(folder_path)
        await open(folder_path);
    }
</script>

<button class="w-full  dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-150 bg-neutral-200 hover:bg-neutral-300 py-[6px] font-bold rounded-lg dark:text-neutral-100 text-neutral-700 "
on:click={openFolder}
>
    <p>Open Downloads</p>
</button>