import { appDataDir } from '@tauri-apps/api/path';
// import { invoke } from '@tauri-apps/api/tauri'

export default async function fetchDefaultWallpaper() {
    const appDataDirPath = await appDataDir();
    console.log("APP DATA DIR:" + appDataDirPath)
    // invoke('copy_current_wallpaper' , {app_data_dir_path: appDataDirPath})
    // Invoke the Rust function
    // invoke("copy_current_wallpaper", { app_data_dir_path: appDataDirPath })
    //     .then(result => {
    //         console.log("File copied successfully to:", result);
    //     })
    //     .catch(error => {
    //         console.error("Error:", error);
    //     });

}