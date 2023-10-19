// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn set_wallpaper(wallpaperPath: String) {
  // println!("I was invoked from JS! SET WALLPAPER");
  // println!("{:?}", wallpaper::get());
  // println!("I was invoked from JS, with this message: {}", wallpaperPath);
  println!("{:?}", wallpaper::get());
  wallpaper::set_from_path(&wallpaperPath).unwrap();
  wallpaper::set_mode(wallpaper::Mode::Crop).unwrap();
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![set_wallpaper])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
