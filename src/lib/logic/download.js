import { BaseDirectory, writeBinaryFile, exists, createDir } from '@tauri-apps/api/fs';
import { appDataDir, downloadDir } from '@tauri-apps/api/path';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';


const downloadFolderName = 'PaperClient-Downloads';

const appDirectory = async (/** @type {any} */ full_res) => {
    const appDir = await appDataDir();
    console.log(appDir);
};

async function downloadImage(){
    let permissionGranted = await isPermissionGranted();
		if (!permissionGranted) {
			const permission = await requestPermission();
			permissionGranted = permission === 'granted';
            console.debug("Permission granted")
		}
        const response = await fetch(full_res);
		const blob = await response.blob();
}