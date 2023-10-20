import { invoke } from '@tauri-apps/api/tauri';

import { platform } from '@tauri-apps/api/os';

const platformName = await platform();

/**
 * @param {string} path_to_wallpaper
 */
function setWallpaperViaCrate(path_to_wallpaper){
    invoke('set_wallpaper_by_crate', { wallpaper_file_path: path_to_wallpaper })
}

export default async function setWallpaperLogic(path_to_wallpaper){
    // console.log("WALLPAPER CRATE LOGIC RAN: " + path_to_wallpaper)    
    // invoke('set_wallpaper', { wallpaper_path: path_to_wallpaper });
    setWallpaperViaCrate(path_to_wallpaper)
    console.log(platformName)
    if (platformName == "linux") {
        invoke('detect_desktop_environment').then((message) => console.log(message))    
    }
    else {
      console.log("DIS NON LINUX BRUH")  
    }

    
}

