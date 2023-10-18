import { BaseDirectory, writeBinaryFile, exists, createDir } from '@tauri-apps/api/fs';
import { appDataDir, downloadDir } from '@tauri-apps/api/path';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';


const downloadImage = (msg) => {
    console.log(msg)
}

export default downloadImage