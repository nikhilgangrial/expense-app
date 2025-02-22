use std::error::Error;
use std::fs::read_dir;
use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn Error>> {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());
    let mut proto_path = env::current_dir().unwrap();

    proto_path.pop();
    proto_path = proto_path.join("proto");

    let protos = read_dir(&proto_path)?
        .map(|path| path.unwrap().path())
        .filter(|path| path.is_file() && path.to_string_lossy().ends_with(".proto"))
        .collect::<Vec<PathBuf>>();

    if protos.is_empty() {
        panic!("No proto files found at {:?}", proto_path);
    }

    tonic_build::configure()
        .file_descriptor_set_path(out_dir.join("proto_descriptor.bin"))
        .compile_protos(&protos, &[proto_path])
        .unwrap();

    Ok(())
}
