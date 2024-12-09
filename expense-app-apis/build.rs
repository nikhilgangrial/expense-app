use std::error::Error;
use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn Error>> {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());
    let mut proto_path = env::current_dir().unwrap();

    proto_path.pop();
    proto_path = proto_path.join("proto");

    let protos = ["calculator"].map(|file_name| proto_path.join(format!("{file_name}.proto")));

    tonic_build::configure()
        .file_descriptor_set_path(out_dir.join("proto_descriptor.bin"))
        .compile_protos(&protos, &[proto_path])
        .unwrap();

    Ok(())
}
