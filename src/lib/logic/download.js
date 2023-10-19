import { BaseDirectory, writeBinaryFile, exists, createDir } from '@tauri-apps/api/fs';
import {downloadDir , join, resolve} from '@tauri-apps/api/path';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

import { invoke } from '@tauri-apps/api/tauri'


const downloadFolderName = 'PaperClient-Downloads';
const downloadDirPath = await downloadDir();

function extractFilenameFromLink(link) {
    const path = link.split('/').pop(); // Extract the last part of the URL
    // @ts-ignore
    const filename = path.split('?')[0]; // Remove any query parameters
    return filename;
}

// const filename = extractFilenameFromLink(full_res);

// export default async function downloadImage(high_res_url){
//     const filename = extractFilenameFromLink(high_res_url)

//     console.log(high_res_url);
//     console.log(downloadDirPath);
//     console.log("filename:" + filename)

//     let permissionGranted = await isPermissionGranted();
// 	if (!permissionGranted) {
// 		const permission = await requestPermission();
// 		permissionGranted = permission === 'granted';
// 	}
// 	if (permissionGranted) {
// 		// sendNotification('Tauri is awesome!');
// 		// sendNotification({ title: 'MSM Wallpaper Client', body: `Downloading wallpaper: ${name}` });
// 		// toast('Downloading Wallpaper...');
// 	}

//     console.log('Download Image function RAN');

//     // ## Fetch image to blob
//     const response = await fetch(high_res_url);
//     const blob = await response.blob();
//     // ## Write it to a array buffer
//     const arrayBuffer = await blob.arrayBuffer();


//     let doesDownloadFolderExists = await exists(downloadFolderName, { dir: BaseDirectory.Download });
//     const WriteFolder = `${BaseDirectory.Download}/${downloadFolderName}`;

//     let doesFileExists = await exists(`${downloadFolderName}/${filename}`, { dir: BaseDirectory.Download });

//     async function downloadFile() {
   
//             if (doesFileExists) {
//                 console.log('image exists, thus not downloading');
//             } else {
//                 await writeBinaryFile({ path: `${downloadFolderName}/${filename}`, contents: new Uint8Array(arrayBuffer) }, { dir: BaseDirectory.Download }).then(() => {
//                     sendNotification({ title: 'MSM Wallpaper Client', body: `Download Complete Wallpaper: ${filename}` });
//                     // console.log('FUNCTION');
//                     resolve(true)
//                 });
//             }
       
//     }
    
//         if (doesDownloadFolderExists) {
//             // console.log('folder exists, writing to folder');
//             downloadFile();
//         } else {
//             // console.log('folder Does not exist, creating folder');
//             await createDir(downloadFolderName, { dir: BaseDirectory.Download, recursive: true });
//             await downloadFile();
//         }
//     }

export default async function downloadImage(high_res_url) {
    const filename = extractFilenameFromLink(high_res_url);
  
    console.log(high_res_url);
    console.log(downloadDirPath);
    console.log("filename:" + filename);
  
    try {
      const permissionGranted = await isPermissionGranted();
      if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
      }
      if (permissionGranted) {
        // sendNotification('Tauri is awesome!');
        // sendNotification({ title: 'MSM Wallpaper Client', body: `Downloading wallpaper: ${name}` });
        // toast('Downloading Wallpaper...');
      }
  
      console.log('Download Image function RAN');
  
      // Fetch image to blob
      const response = await fetch(high_res_url);
      const blob = await response.blob();
  
      // Write it to an array buffer
      const arrayBuffer = await blob.arrayBuffer();
  
      let doesDownloadFolderExists = await exists(downloadFolderName, {
        dir: BaseDirectory.Download
      });
      const WriteFolder = `${BaseDirectory.Download}/${downloadFolderName}`;
  
      let doesFileExists = await exists(`${downloadFolderName}/${filename}`, {
        dir: BaseDirectory.Download
      });
  
      async function downloadFile() {
        return new Promise((resolve, reject) => {
          if (doesFileExists) {
            console.log('image exists, thus not downloading');
            resolve(false);
          } else {
            writeBinaryFile({ path: `${downloadFolderName}/${filename}`, contents: new Uint8Array(arrayBuffer) }, { dir: BaseDirectory.Download })
              .then(() => {
                sendNotification({ title: 'MSM Wallpaper Client', body: `Download Complete Wallpaper: ${filename}` });
                resolve(true);
              })
              .catch((error) => {
                reject(error);
              });
          }
        });
      }
  
      if (doesDownloadFolderExists) {
        return downloadFile();
      } else {
        await createDir(downloadFolderName, { dir: BaseDirectory.Download, recursive: true });
        return downloadFile();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

    



  export async function setWallpaper(high_res_url) {
    try {
      const filename = extractFilenameFromLink(high_res_url);
  
      console.log("running file location");
      const fileLocation = await join(downloadDirPath, downloadFolderName, filename);
      console.log("file Location: " + fileLocation);
  
      await downloadImage(high_res_url)
        .then((downloadResult) => {
          if (downloadResult) {
            // Image was downloaded, now set the wallpaper
            return invoke('set_wallpaper', { wallpaperPath: fileLocation });
          } else {
            // Image was already downloaded, proceed with setting the wallpaper
            return invoke('set_wallpaper', { wallpaperPath: fileLocation });
            // console.log("error: unable to set wallpaper, no promise returned from downloadImage function")
          }
        })
        .then(() => {
          console.log("Wallpaper set successfully");
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors that occurred during download or wallpaper setting
        });
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred before the download or wallpaper setting
    }
  }
  