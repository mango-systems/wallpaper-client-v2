// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command(rename_all = "snake_case")]
fn set_wallpaper(wallpaper_path: String) {
  println!("{:?}", wallpaper::get());
  wallpaper::set_from_path(&wallpaper_path).unwrap();
  wallpaper::set_mode(wallpaper::Mode::Crop).unwrap();
  let info = os_info::get();
  println!("OS information: {info}");
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![set_wallpaper])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
