<h1 aligh=center>📄 PaperClient</h1>

<p align="center">Built on Tauri and Sveltekit</p>

<p align="center">
<img width="70%" src="https://github.com/mango-systems/wallpaper-client-v2/assets/48552989/5721ab88-83ca-403c-9efb-46468fba7f3f">
</p>

<p align="center"><img src="https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&amp;logo=tauri&amp;logoColor=%23FFFFFF" alt="shields"><img src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&amp;logo=svelte&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&amp;logo=rust&amp;logoColor=white" alt="shields"></p>



# Developing
Once created install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run tauri dev
```

## Building

To create a production version of the app:

```bash
npm run tauri build
```

Outputs in `/src-tauri/target/release`.
Bundles can be found in `/src-tauri/target/release/bundle`

# To-do:
- [ ] About window
- [ ] KDE
- [ ] Edit images, crop, contrast, brightness (note: save edited files to different folder in appdata/appfoleder)
- [ ] Add Logging to file capabilities, with time stamps. 
- [ ] Fix loding screen to show error when not connected to internet.
- [ ] Mode to set wallpaper (crop, stretch, tile, center)
- [ ] Add local file handling.

# Known Issue:
- not working on gnome, since Rust code is running as root it is unable to detect the DE of the user, thus unable to return DE information and running the setting-wallpaper-by-crate function in logic

# Tested Platforms:
- Windows 10
- GNOME Ubuntu (Unity)
