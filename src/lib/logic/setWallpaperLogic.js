import { invoke } from '@tauri-apps/api/tauri';
import { platform } from '@tauri-apps/api/os';
import { Command } from '@tauri-apps/api/shell'

/**
 * @param {string} path_to_wallpaper
 */
function setWallpaperViaCrate(path_to_wallpaper) {
    invoke('set_wallpaper_by_crate', { wallpaper_file_path: path_to_wallpaper })
}

async function setWallpaperGnome(path_to_wallpaper) {
    const wallpaper_file_path = `file://${path_to_wallpaper}`
    if (isDarkModePreferred()) {
        console.log('Dark mode is preferred.');

        const wallpaperCommand = new Command('set-gnome-wallpaper', ['set', 'org.gnome.desktop.background', 'picture-uri-dark', wallpaper_file_path])
        wallpaperCommand.on('close', data => {
            console.log(`command finished with code ${data.code} and signal ${data.signal}`)
        });
        wallpaperCommand.on('error', error => console.error(`command error: "${error}"`));
        const child = await wallpaperCommand.spawn();
    } else {
        console.log('Dark mode is not preferred.');
        const wallpaperCommand = new Command('set-gnome-wallpaper', ['set', 'org.gnome.desktop.background', 'picture-uri', wallpaper_file_path])
        wallpaperCommand.on('close', data => {
            console.log(`command finished with code ${data.code} and signal ${data.signal}`)
        });
        wallpaperCommand.on('error', error => console.error(`command error: "${error}"`));
        const child = await wallpaperCommand.spawn();
    }
}

function isDarkModePreferred() {
    if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // If matchMedia is not supported, you can provide a default value or fallback logic.
    return false; // Default to light mode if matchMedia is not supported.
}

// Example usage:


export default async function setWallpaperLogic(path_to_wallpaper) {
    const platformName = await platform();

    // console.log("WALLPAPER CRATE LOGIC RAN: " + path_to_wallpaper)    
    // invoke('set_wallpaper', { wallpaper_path: path_to_wallpaper });
    console.log(platformName)
    if (platformName == "linux") {
        invoke('detect_de').then((message) => {
            let de = message.toLowerCase();
            if (de == "gnome") {
                setWallpaperGnome(path_to_wallpaper)
            }
            else if (de == "unity") {
                setWallpaperGnome(path_to_wallpaper)
            }
            else {
                setWallpaperViaCrate(path_to_wallpaper)
            }
        })
    }
    else {
        setWallpaperViaCrate(path_to_wallpaper)

    }


}

