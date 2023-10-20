// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use detect_desktop_environment::DesktopEnvironment;

// use std::process::{Command, ExitStatus};
// use std::fs;
// use std::path::Path;
// use std::io;


// fn run_gsettings_command(schema: &str, key: &str, value: &str) -> Result<(), std::io::Error> {
//   let result: Result<ExitStatus, std::io::Error> = Command::new("gsettings")
//       .arg("set")
//       .arg(schema)
//       .arg(key)
//       .arg(value)
//       .status();

//   match result {
//       Ok(status) => {
//           if status.success() {
//               println!("gsettings command executed successfully.");
//               Ok(())
//           } else {
//               eprintln!("gsettings command failed with an error.");
//               Err(std::io::Error::from_raw_os_error(status.code().unwrap_or(1)))
//           }
//       }
//       Err(err) => {
//           eprintln!("Error running gsettings command: {}", err);
//           Err(err)
//       }
//   }
// }

// fn set_via_gsettings_picture_uri_dark(filepath :&str) -> Result<(), std::io::Error> {
//   run_gsettings_command(
//       "org.gnome.desktop.background",
//       "picture-uri-dark",
//       filepath,
//   )
// }

// fn set_via_gsettings_picture_uri(filepath :&str) -> Result<(), std::io::Error> {
//   run_gsettings_command(
//       "org.gnome.desktop.background",
//       "picture-uri",
//       filepath,
//   )
// }

// fn set_wallpaper_by_crate(wallpaper_file_path :&str){
//     wallpaper::set_from_path(wallpaper_file_path).unwrap();
//     wallpaper::set_mode(wallpaper::Mode::Crop).unwrap();
// }

// #[tauri::command(rename_all = "snake_case")]
// fn set_wallpaper(wallpaper_path: String) {
//   println!("Ran current wallpaper grab function");
//   println!("CURRENT WALLPAPER: {:?}", wallpaper::get());
//   if cfg!(unix) {
//     println!("This is LINUX");
//     // wallpaper::set_from_path(&wallpaper_path).unwrap();
//     // wallpaper::set_mode(wallpaper::Mode::Crop).unwrap();
//     match DesktopEnvironment::detect() {
//         Some(de) => {
//             match de {
//                 DesktopEnvironment::Unity => {
//                     // Handle the Unity case.
//                     // Your Unity-specific code here.
//                     println!("detected desktop environment: Unity");

//                     if let Err(err) = set_via_gsettings_picture_uri_dark(&wallpaper_path) {
//                       eprintln!("Failed to set picture-uri-dark via gsettings: {:?}", err);
//                     }
//                     if let Err(err) = set_via_gsettings_picture_uri(&wallpaper_path) {
//                         eprintln!("Failed to set picture-uri via gsettings: {:?}", err);
//                     }

                     
//                 },
//                 DesktopEnvironment::Gnome => {
//                     if let Err(err) = set_via_gsettings_picture_uri_dark(&wallpaper_path) {
//                       eprintln!("Failed to set picture-uri-dark via gsettings: {:?}", err);
//                     }
//                     if let Err(err) = set_via_gsettings_picture_uri(&wallpaper_path) {
//                         eprintln!("Failed to set picture-uri via gsettings: {:?}", err);
//                     }
//                 },
//                 _ => {
//                     // If it's not Unity, move to the else block.
//                     set_wallpaper_by_crate(&wallpaper_path)
//                 }
//             }
//         },
//         None => println!("failed to detect desktop environment"),
//     }
// } else {
//     // This is the else block when not running on a UNIX system.
//     // println!("this is NON LINUX CODE");
//     println!("{:?}", wallpaper::get());
//     set_wallpaper_by_crate(&wallpaper_path)
// }
// }

// fn copy_file_to_folder(source_path: &str, destination_folder: &str) -> io::Result<()> {
//   let source_file = fs::File::open(source_path)?;
//   let file_name = Path::new(source_path)
//       .file_name()
//       .and_then(|f| f.to_str())
//       .expect("Failed to extract the file name");

//   let destination_path = format!("{}/{}", destination_folder, file_name);

//   fs::copy(source_path, destination_path)?;
//   Ok(())
// }


// #[tauri::command(rename_all = "snake_case")]
// fn copy_current_wallpaper(app_data_dir_path: String) {

//   // let source_path = wallpaper::get();
//   let source_path = match wallpaper::get() {
//     Ok(path) => path,
//     Err(err) => {
//         eprintln!("Error getting wallpaper path: {:?}", err);
//         return;
//     }
//   };

//   let destination_path = &app_data_dir_path;

//   println!("I was invoked from JS!, COPY CURRENT WALLPAPER");
//   println!("{}", destination_path);
//   println!("{}", source_path);
//   println!("{:?}", wallpaper::get());

//   // println!("{:?}", wallpaper::get());
//   if let Err(err) = copy_file_to_folder(&source_path, destination_path) {
//     eprintln!("Error: {}", err);
// } else {
//     println!("File copied successfully!");
    
// }
// }

// #[tauri::command(rename_all = "snake_case")]
// fn set_wallpaper_by_crate(wallpaper_file_path: String){
//     wallpaper::set_from_path(&wallpaper_file_path).unwrap();
//     wallpaper::set_mode(wallpaper::Mode::Crop).unwrap();
// }

// #[tauri::command(rename_all = "snake_case")]
// fn detectDE() -> String {

//     let hello = "Hello, World!";
//     println!("{}", hello);
    
//     match DesktopEnvironment::detect() {
//                 println!{"{}", de}
//                 Some(de) => {
//                     match de {
//                         DesktopEnvironment::Unity => {
//                             // Handle the Unity case.
//                             // Your Unity-specific code here.
//                             println!("detected desktop environment: Unity");
                             
//                         },
//                         DesktopEnvironment::Gnome => {
//                             println!("detected desktop environment: GNOME");
//                         },
//                         _ => {
//                             // If it's not Unity, move to the else block.
//                             println!("detected desktop environment: Unknown");
//                         }
//                     }
//                 },
//                 None => println!("failed to detect desktop environment"),
//             }
//     hello.into()
// }

#[tauri::command(rename_all = "snake_case")]
fn set_wallpaper_by_crate(wallpaper_file_path: String) {
    wallpaper::set_from_path(&wallpaper_file_path).unwrap();
    wallpaper::set_mode(wallpaper::Mode::Crop).unwrap();
}

#[tauri::command(rename_all = "snake_case")]
fn detect_de() -> String {
    match DesktopEnvironment::detect() {
        Some(de) => {
            let result = match de {
                DesktopEnvironment::Unity => "Unity",
                DesktopEnvironment::Gnome => "GNOME",
                _ => "Unknown",
            };
            result.to_string()
        },
        None => "failed to detect desktop environment".to_string(),
    }
}


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![set_wallpaper_by_crate, detect_de])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
